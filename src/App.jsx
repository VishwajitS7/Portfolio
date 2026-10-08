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
    <div className="relative min-h-screen text-[var(--text-primary)] transition-colors duration-300">
      {/* Ambient background mesh and top glow */}
      <div className="ambient-canvas" aria-hidden="true" />

      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      {/* Sections */}
      <div id="about">
        <Hero />
      </div>
      <Leadership />
      <Skills />
      <Certifications />

      {/* new projects section */}
      <ProjectSection />

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
