import { useState, useEffect } from "react";

export default function Navbar({ theme = "dark", onToggleTheme = () => {} }) {
  const [active, setActive] = useState("intro");
  const [open, setOpen] = useState(false);
  const isLight = theme === "light";

  const navItems = [
    { id: "intro", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "certs", label: "Certifications" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ];

  // Track scroll and update active nav item
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120; // Account for navbar height

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
  }, [navItems]);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 backdrop-blur-xl border-b transition-colors ${
        isLight ? "bg-white/85 border-slate-200/70 text-slate-900" : "bg-[#0D1117]/80 border-[#1A2335] text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <p className={`font-mono text-lg tracking-wide ${isLight ? "text-emerald-700" : "text-[#00E8C6]"}`}>
          <span className="text-transparent bg-gradient-to-r from-[#4C6FFF] via-[#00E8C6] to-[#4C6FFF] bg-clip-text">
            vishwa@portfolio
          </span>
          :~$
        </p>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-10 font-medium ${
            isLight ? "text-slate-600" : "text-gray-300"
          }`}
        >
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer relative group transition ${
                active === item.id ? (isLight ? "text-teal-600" : "text-[#00E8C6]") : ""
              }`}
              onClick={() => {
                setActive(item.id);
                scrollToSection(item.id);
              }}
            >
              {item.label}

              {/* Underline animation */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-[#4C6FFF] via-[#00E8C6] to-[#4C6FFF] transition-all duration-300
                ${active === item.id ? "w-full" : "w-0 group-hover:w-full"}`}
              ></span>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle isLight={isLight} onToggle={onToggleTheme} />

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`md:hidden inline-flex items-center justify-center rounded-full border p-2 text-lg transition ${
              isLight ? "border-slate-200 text-slate-700 hover:bg-slate-100" : "border-white/20 text-white hover:bg-white/10"
            }`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`md:hidden px-6 py-4 border-t ${
            isLight
              ? "bg-white/95 border-slate-200/80 text-slate-700"
              : "bg-[#0D1117] border-[#1A2335] text-[#E6E9F0]"
          }`}
        >
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer transition ${
                  active === item.id ? (isLight ? "text-teal-600" : "text-[#00E8C6]") : ""
                }`}
                onClick={() => {
                  setActive(item.id);
                  scrollToSection(item.id);
                  setOpen(false);
                }}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

/* Smooth scroll */
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    const offset = 100; // Account for navbar height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: "smooth"
    });

    // Update hash without triggering additional navigation
    if (window.history && window.history.pushState) {
      window.history.pushState(null, null, `#${id}`);
    }
  }
}

function ThemeToggle({ isLight, onToggle }) {
  return (
    <>
      <button
        type="button"
        onClick={onToggle}
        className={`hidden md:inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${isLight ? "border-slate-200 text-slate-700 hover:bg-slate-100" : "border-white/20 text-white hover:bg-white/10"}`}
        aria-label="Toggle theme"
      >
        {isLight ? "🌞 Light" : "🌙 Dark"}
      </button>

      <button
        type="button"
        onClick={onToggle}
        className={`md:hidden inline-flex items-center justify-center rounded-full border p-2 text-base transition ${isLight ? "border-slate-200 text-slate-700 hover:bg-slate-100" : "border-white/20 text-white hover:bg-white/10"}`}
        aria-label="Toggle theme"
      >
        {isLight ? "🌞" : "🌙"}
      </button>
    </>
  );
}
