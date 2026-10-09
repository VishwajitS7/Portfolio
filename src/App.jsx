import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Leadership from "./components/Leadership";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import ProjectSection from "./components/ProjectSection";
import ScrollToTop from "./components/ScrollToTop";
import Toast from "./components/Toast";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("vs-portfolio-theme") || "dark";
  });

  const [toast, setToast] = useState({
    isVisible: false,
    message: "",
    type: "success",
  });

  useEffect(() => {
    const nextTheme = theme === "light" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("vs-portfolio-theme", nextTheme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const showToast = (message, type = "success") => {
    setToast({ isVisible: true, message, type });
  };

  const hideToast = () => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  };

  return (
    <div className="relative min-h-screen text-[var(--text-main)] transition-colors duration-200">
      {/* Blueprint Grid Canvas */}
      <div className="brutal-grid-canvas" aria-hidden="true" />

      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      {/* Sections */}
      <div id="about">
        <Hero />
      </div>

      {/* Technical Ticker Tape */}
      <div className="relative border-y-2 border-[var(--border-color)] bg-[var(--bg-surface)] py-2.5 overflow-hidden font-mono-code text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] select-none">
        <div className="marquee-track flex gap-8 items-center">
          {[
            "// STACK: JAVA",
            "TYPESCRIPT",
            "NEXT.JS",
            "REACT",
            "NODE.JS & EXPRESS",
            "GO & C++",
            "POSTGRESQL & MONGO",
            "DOCKER & AWS",
            "PRISMA ORM",
            "REST & OAUTH",
            "AI & MACHINE LEARNING",
            "PRESIDENT @ OYSTER KODE CLUB",
            "9.24 CGPA",
            "OPEN FOR FULLTIME ROLES",
            "// STACK: JAVA",
            "TYPESCRIPT",
            "NEXT.JS",
            "REACT",
            "NODE.JS & EXPRESS",
            "GO & C++",
            "POSTGRESQL & MONGO",
            "DOCKER & AWS",
            "PRISMA ORM",
            "REST & OAUTH",
            "AI & MACHINE LEARNING",
            "PRESIDENT @ OYSTER KODE CLUB",
            "9.24 CGPA",
            "OPEN FOR FULLTIME ROLES",
          ].map((item, idx) => (
            <span key={idx} className="flex items-center gap-3">
              <span className="text-[var(--accent-lime)] font-extrabold">&bull;</span>
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>

      <Leadership />
      <Skills />
      
      {/* Projects section */}
      <ProjectSection />
      
      <Certifications />
      <Achievements />
      <Contact onShowToast={showToast} />
      
      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop theme={theme} />
      
      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </div>
  );
}
