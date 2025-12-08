import { useState, useEffect } from "react";

export default function ScrollToTop({ theme = "dark" }) {
  const [isVisible, setIsVisible] = useState(false);
  const isLight = theme === "light";

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 p-4 rounded-full shadow-lg transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      } ${
        isLight
          ? "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:shadow-xl"
          : "bg-[#0D1117]/90 border border-[#1A2335] text-white hover:bg-[#0D1117] hover:border-[#00E8C6]/50"
      } backdrop-blur-xl`}
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}

