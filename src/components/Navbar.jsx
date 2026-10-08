import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Terminal, Sparkles } from "lucide-react";

const navItems = [
  { id: "intro", label: "Overview" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certs", label: "Certifications" },
  { id: "achievements", label: "Impact" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ theme = "dark", onToggleTheme = () => {} }) {
  const [active, setActive] = useState("intro");
  const [open, setOpen] = useState(false);
  const isLight = theme === "light";

  // Track scroll position for active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;

      let currentSection = "intro";
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element && element.offsetTop <= scrollPos) {
          currentSection = item.id;
        }
      });

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });

      if (window.history && window.history.pushState) {
        window.history.pushState(null, null, `#${id}`);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3 sm:pt-4 transition-all">
      <nav className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-2.5 rounded-2xl linear-card !bg-[var(--bg-card)]/90 backdrop-blur-2xl border border-[var(--border-subtle)] flex items-center justify-between shadow-2xl">
        {/* Brand Logo */}
        <a
          href="#intro"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("intro");
          }}
          className="group flex items-center gap-2.5 font-mono-code text-sm font-semibold tracking-tight transition-transform hover:scale-105"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/25">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold tracking-tight text-[var(--text-primary)]">
              Vishwajit<span className="text-indigo-400">.dev</span>
            </span>
            <span className="text-[10px] text-[var(--text-muted)] tracking-wider">
              JAVA &middot; REACT
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1 bg-[var(--bg-surface)] p-1 rounded-full border border-[var(--border-subtle)]">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActive(item.id);
                  scrollToSection(item.id);
                }}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "text-white bg-indigo-600 shadow-sm shadow-indigo-500/40"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Right side controls: Availability status badge + Theme Toggle + Mobile menu */}
        <div className="flex items-center gap-3">
          {/* Live Status beacon - desktop */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] font-medium">
            <span className="beacon-dot" />
            <span className="text-[11px] text-[var(--accent-emerald)] font-semibold">Available for hire</span>
          </div>

          {/* Theme toggle button */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="w-9 h-9 rounded-xl flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
            aria-label="Toggle theme"
            title={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
          >
            {isLight ? (
              <Moon className="w-4 h-4 text-indigo-500" />
            ) : (
              <Sun className="w-4 h-4 text-amber-400" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] transition cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden fixed top-20 left-4 right-4 z-50 p-4 rounded-2xl linear-card !bg-[var(--bg-card)]/95 backdrop-blur-2xl border border-[var(--border-subtle)] shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-2">
              <span className="beacon-dot" />
              <span className="text-xs text-[var(--accent-emerald)] font-medium">Available for roles</span>
            </div>
            <span className="text-[11px] font-mono-code text-[var(--text-muted)]">vishwa@portfolio</span>
          </div>
          <ul className="flex flex-col gap-1.5">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => {
                    setActive(item.id);
                    scrollToSection(item.id);
                    setOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition cursor-pointer ${
                    active === item.id
                      ? "text-white bg-indigo-600 font-semibold"
                      : "text-[var(--text-secondary)] hover:bg-[var(--bg-surface)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
