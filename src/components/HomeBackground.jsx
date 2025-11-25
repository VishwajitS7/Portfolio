import React, { useEffect, useRef, useState } from "react";
import "../styles/home-bg.css";

export default function HomeBackground() {
  const containerRef = useRef(null);
  const floatsRef = useRef([]);
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && (document.documentElement.dataset.theme || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"))
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const handleMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX ?? (e.touches && e.touches[0].clientX) ?? rect.left + rect.width / 2) - (rect.left + rect.width / 2);
      const y = (e.clientY ?? (e.touches && e.touches[0].clientY) ?? rect.top + rect.height / 2) - (rect.top + rect.height / 2);
      const px = x / rect.width;
      const py = y / rect.height;

      // move layered lines with different multipliers
      containerRef.current.style.setProperty("--mx", String(px));
      containerRef.current.style.setProperty("--my", String(py));

      // parallax floating elements
      floatsRef.current.forEach((el, i) => {
        if (!el) return;
        const depth = (i + 1) / (floatsRef.current.length + 1);
        const tx = px * 20 * depth;
        const ty = py * 16 * depth;
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      });
    };

    const el = containerRef.current;
    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("touchmove", handleMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  }, []);

  // configure floating elements (positions & sizes)
  const floats = [
    { left: "10%", top: "20%", size: 12, opacity: 0.06 },
    { left: "28%", top: "60%", size: 10, opacity: 0.05 },
    { left: "48%", top: "35%", size: 16, opacity: 0.07 },
    { left: "70%", top: "18%", size: 9, opacity: 0.05 },
    { left: "85%", top: "55%", size: 12, opacity: 0.06 },
  ];

  return (
    <div ref={containerRef} className="home-bg-advanced" aria-hidden>
      {/* layered animated lines */}
      <svg className="lines layer-a" viewBox="0 0 1600 400" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lg1" x1="0" x2="1">
            <stop offset="0" stopColor="rgba(96,165,250,0.12)" />
            <stop offset="1" stopColor="rgba(99,102,241,0.06)" />
          </linearGradient>
        </defs>
        <g stroke="url(#lg1)" strokeWidth="2" strokeLinecap="round" fill="none">
          <path className="p1" d="M0 260 C200 200, 400 320, 600 260 C800 200, 1000 320, 1200 260 C1400 200, 1600 300, 1800 260" />
        </g>
      </svg>

      <svg className="lines layer-b" viewBox="0 0 1600 400" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lg2" x1="0" x2="1">
            <stop offset="0" stopColor="rgba(148,163,184,0.08)" />
            <stop offset="1" stopColor="rgba(79,70,229,0.06)" />
          </linearGradient>
        </defs>
        <g stroke="url(#lg2)" strokeWidth="1.6" strokeLinecap="round" fill="none">
          <path className="p2" d="M0 200 C180 230, 360 150, 540 180 C720 210, 900 120, 1080 160 C1260 200, 1440 120, 1620 160" />
        </g>
      </svg>

      <svg className="lines layer-c" viewBox="0 0 1600 400" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lg3" x1="0" x2="1">
            <stop offset="0" stopColor="rgba(99,102,241,0.05)" />
            <stop offset="1" stopColor="rgba(34,197,94,0.03)" />
          </linearGradient>
        </defs>
        <g stroke="url(#lg3)" strokeWidth="1.2" strokeLinecap="round" fill="none">
          <path className="p3" d="M0 320 C200 280, 400 360, 600 300 C800 240, 1000 340, 1200 300 C1400 260, 1600 340, 1800 300" />
        </g>
      </svg>

      {/* subtle moving noise */}
      <svg className="noise" width="0" height="0" aria-hidden>
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0.08" />
          </feComponentTransfer>
        </filter>
      </svg>
      <div className="noise-layer" style={{ filter: "url(#noiseFilter)" }} />

      {/* floating parallax elements */}
      <div className="float-wrap">
        {floats.map((f, i) => (
          <div
            key={i}
            ref={(el) => (floatsRef.current[i] = el)}
            className="float-dot"
            style={{
              left: f.left,
              top: f.top,
              width: f.size,
              height: f.size,
              opacity: f.opacity,
              transform: "translate3d(0,0,0)",
            }}
          />
        ))}
      </div>

      {/* theme toggle - visible but small, non-interfering */}
      <button
        type="button"
        className="theme-toggle"
        onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
        aria-label="Toggle background theme"
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
    </div>
  );
}