import { useState, useEffect, useRef } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

const navItems = [
  { id: "intro", code: "01", label: "Overview" },
  { id: "skills", code: "02", label: "Stack" },
  { id: "projects", code: "03", label: "Builds" },
  { id: "certs", code: "04", label: "Certs" },
  { id: "achievements", code: "05", label: "Milestones" },
  { id: "contact", code: "06", label: "Dispatch" },
];

export default function Navbar({ theme = "dark", onToggleTheme = () => {} }) {
  const [active, setActive] = useState("intro");
  const [open, setOpen] = useState(false);
  const isLight = theme === "light";

  const isProgrammaticScrollRef = useRef(false);
  const targetSectionRef = useRef(null);
  const scrollEndTimerRef = useRef(null);

  // Track scroll position for active section
  useEffect(() => {
    const handleScroll = () => {
      // If a programmatic navigation is currently animating, preserve the target highlight
      if (isProgrammaticScrollRef.current) {
        if (targetSectionRef.current) {
          setActive(targetSectionRef.current);
        }
        // Reset the debounce timer on every scroll tick
        if (scrollEndTimerRef.current) {
          clearTimeout(scrollEndTimerRef.current);
        }
        scrollEndTimerRef.current = setTimeout(() => {
          isProgrammaticScrollRef.current = false;
          targetSectionRef.current = null;
        }, 130);
        return;
      }

      // Top of page check: overview is always active when near the top
      if (window.scrollY < 180) {
        setActive("intro");
        return;
      }

      // Bottom of page check: activates contact when reaching footer area
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 70;

      if (isAtBottom) {
        setActive("contact");
        return;
      }

      // Reading focal line (140px from top, comfortably below fixed 66px navbar)
      const targetLine = 140;
      let currentSection = navItems[0].id;

      for (let i = 0; i < navItems.length; i++) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Active if top has entered the focal zone and bottom is still below navbar
          if (rect.top <= targetLine && rect.bottom > 70) {
            currentSection = item.id;
          }
        }
      }

      setActive(currentSection);
    };

    // User manual interaction interrupts programmatic lock immediately
    const handleManualInterrupt = () => {
      if (isProgrammaticScrollRef.current) {
        isProgrammaticScrollRef.current = false;
        targetSectionRef.current = null;
        if (scrollEndTimerRef.current) {
          clearTimeout(scrollEndTimerRef.current);
        }
      }
    };

    const handleScrollEnd = () => {
      if (isProgrammaticScrollRef.current) {
        isProgrammaticScrollRef.current = false;
        targetSectionRef.current = null;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scrollend", handleScrollEnd, { passive: true });
    window.addEventListener("wheel", handleManualInterrupt, { passive: true });
    window.addEventListener("touchmove", handleManualInterrupt, { passive: true });
    window.addEventListener("keydown", handleManualInterrupt, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scrollend", handleScrollEnd);
      window.removeEventListener("wheel", handleManualInterrupt);
      window.removeEventListener("touchmove", handleManualInterrupt);
      window.removeEventListener("keydown", handleManualInterrupt);
      if (scrollEndTimerRef.current) {
        clearTimeout(scrollEndTimerRef.current);
      }
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Immediately lock active highlight to clicked item
      setActive(id);
      targetSectionRef.current = id;
      isProgrammaticScrollRef.current = true;

      if (scrollEndTimerRef.current) {
        clearTimeout(scrollEndTimerRef.current);
      }

      const offset = 72; // Header is 64px, leaves clean 8px breathing room
      let offsetPosition = 0;

      if (id === "intro") {
        offsetPosition = 0;
      } else {
        const elementPosition = element.getBoundingClientRect().top;
        offsetPosition = Math.max(0, elementPosition + window.pageYOffset - offset);
      }

      // If already at target position, release lock immediately
      if (Math.abs(window.scrollY - offsetPosition) < 6) {
        isProgrammaticScrollRef.current = false;
        targetSectionRef.current = null;
        return;
      }

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      if (window.history && window.history.pushState) {
        window.history.pushState(null, null, `#${id}`);
      }

      // Fallback safety timeout in case no scroll events fire
      scrollEndTimerRef.current = setTimeout(() => {
        isProgrammaticScrollRef.current = false;
        targetSectionRef.current = null;
      }, 2000);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-canvas)]/95 backdrop-blur-md border-b-2 border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand Terminal Mark */}
        <a
          href="#intro"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("intro");
          }}
          className="group flex items-center gap-2.5 font-mono-code text-sm font-extrabold tracking-wider transition cursor-pointer"
        >
          <div className="w-8 h-8 bg-[var(--accent-lime)] text-[#0C0D0E] border-2 border-[#0C0D0E] flex items-center justify-center font-black shadow-[2px_2px_0px_#FFFFFF] group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all">
            VS
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-[var(--text-main)] tracking-tight">
              VISHWAJIT
            </span>
            <span className="text-[var(--accent-lime)] font-mono-code text-xs font-bold">
              // DEV
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 font-mono-code text-xs">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? "bg-[var(--accent-lime)] text-[#0C0D0E] border border-[#0C0D0E] shadow-[2px_2px_0px_#FFFFFF]"
                    : "text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-surface)]"
                }`}
              >
                <span className={isActive ? "text-[#0C0D0E]/60 font-medium" : "text-[var(--accent-lime)]"}>
                  [{item.code}]
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Status Badge */}
          <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 bg-[var(--bg-surface)] border border-[var(--border-color)] font-mono-code text-[11px] text-[var(--text-muted)]">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-lime)] animate-ping" />
            <span>STATUS: <strong className="text-[var(--accent-lime)]">AVAILABLE</strong></span>
          </div>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="w-9 h-9 flex items-center justify-center bg-[var(--bg-surface)] border-2 border-[var(--border-color)] hover:border-[var(--accent-lime)] text-[var(--text-main)] hover:text-[var(--accent-lime)] transition cursor-pointer shadow-[2px_2px_0px_var(--border-color)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            aria-label="Toggle theme"
            title={isLight ? "Switch to Dark Theme" : "Switch to Light Theme"}
          >
            {isLight ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4 text-[var(--accent-lime)]" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden w-9 h-9 flex items-center justify-center bg-[var(--bg-surface)] border-2 border-[var(--border-color)] text-[var(--text-main)] hover:border-[var(--accent-lime)] transition cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5 text-[var(--accent-lime)]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden border-t-2 border-[var(--border-color)] bg-[var(--bg-canvas)] p-4 shadow-[0_8px_0px_#0C0D0E]">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--border-color)] font-mono-code text-xs">
            <span className="text-[var(--accent-lime)] font-bold">// NAVIGATION INDEX</span>
            <span className="text-[var(--text-muted)]">[STATUS : READY]</span>
          </div>
          <div className="flex flex-col gap-2 font-mono-code text-xs">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  scrollToSection(item.id);
                  setOpen(false);
                }}
                className={`w-full text-left p-3 font-bold flex items-center justify-between border ${
                  active === item.id
                    ? "bg-[var(--accent-lime)] text-[#0C0D0E] border-[#0C0D0E] shadow-[3px_3px_0px_#FFFFFF]"
                    : "border-[var(--border-color)] text-[var(--text-muted)] hover:bg-[var(--bg-surface)] hover:text-[var(--text-main)]"
                }`}
              >
                <span>{item.label}</span>
                <span className={active === item.id ? "text-black/60" : "text-[var(--accent-lime)]"}>
                  [INDEX // {item.code}]
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
