import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("intro");
  const [open, setOpen] = useState(false);

  // Track scroll position and highlight active section
  useEffect(() => {
    const sections = ["intro", "skills", "certs", "achievements", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#0d1117]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <p className="text-blue-300 font-mono text-lg">
          <span className="text-blue-400">vishu@portfolio</span>:~$
        </p>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-gray-300 font-medium">
          {[
            { id: "intro", label: "Home" },
            { id: "skills", label: "Skills" },
            { id: "certs", label: "Certifications" },
            { id: "achievements", label: "Achievements" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer relative hover:text-blue-400 transition 
                ${active === item.id ? "text-blue-400" : ""}`}
              onClick={() => {
                setActive(item.id);
                scrollToSection(item.id);
              }}
            >
              {item.label}

              {/* Underline animation */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-400 transition-all duration-300
                ${active === item.id ? "w-full" : "w-0 group-hover:w-full"}`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden cursor-pointer text-gray-300 text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0d1117] border-t border-white/10 px-6 py-4">
          <ul className="flex flex-col gap-4 text-gray-300">
            {[
              { id: "intro", label: "Home" },
              { id: "skills", label: "Skills" },
              { id: "certs", label: "Certifications" },
              { id: "achievements", label: "Achievements" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-blue-400 transition 
                  ${active === item.id ? "text-blue-400" : ""}`}
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
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
