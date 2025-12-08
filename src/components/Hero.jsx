import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      id="intro"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-16 md:py-24 overflow-hidden scroll-mt-20"
    >
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-tertiary/5 blur-3xl" />
      </div>

      <div className="relative flex gap-16 flex-col lg:flex-row items-center w-full max-w-6xl mx-auto">
        {/* Avatar + Status */}
        <AnimatedSection direction="right" delay={100}>
        <div className="flex flex-col items-center text-center">
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48">
              {!imageLoaded && (
                <div className="absolute inset-0 w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse" />
              )}
            <img
              src="https://avatars.githubusercontent.com/u/00000000"
              alt="profile"
                onLoad={() => setImageLoaded(true)}
                className={`w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-2 border-white/10 object-cover shadow-lg transition-opacity duration-500 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
            />
          </div>

          {/* Center the pill under the avatar by matching the wrapper width to avatar */}
          <div className="flex justify-center w-40 sm:w-48 mt-6 mx-auto">
            <p className="hero-pill text-sm px-5 py-2 rounded-full font-medium tracking-wide flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
              &lt;/&gt; Currently Building
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 text-left w-full">
            {[
              { label: "Experience", value: "1 year" },
              { label: "Projects", value: "3 shipped" },
              { label: "Domains", value: "Java backend DevOps" },
              { label: "Focus", value: "Fullstack Java and React." },
            ].map((stat) => (
              <div key={stat.label} className="metric-card rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide copy-muted">
                  {stat.label}
                </p>
                <p className="text-lg font-semibold gradient-text">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
        </AnimatedSection>

        {/* About Card */}
        <AnimatedSection direction="left" delay={200}>
        <div className="hero-card w-full max-w-2xl p-10 backdrop-blur-2xl">
          <p className="text-sm copy-muted font-mono tracking-widest mb-3">
            $ whoami
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">Vishwajit Sutar</h1>
          <h2 className="text-lg sm:text-xl md:text-2xl mt-3 copy-muted font-medium">
            Java Fullstack Developer
          </h2>

          <p className="mt-6 copy-muted leading-relaxed">
            I help teams ship reliable experiences by pairing robust Java backends with thoughtful React interfaces.
            Translating ambiguous product ideas into measurable, resilient systems keeps me energized.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            {["Java · Spring", "React · Vite", "Cloud-native", "DX obsessed"].map((tag) => (
              <span key={tag} className="chip-gradient px-4 py-1 rounded-full text-xs tracking-wide">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="#contact"
              className="hero-button-primary flex-1 text-center px-8 py-4 rounded-lg text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Let's collaborate
              </span>
            </a>
            <a
              href="/resume.pdf"
              download="Vishwajit_Sutar_Resume.pdf"
              className="hero-button-secondary flex-1 text-center px-8 py-4 rounded-lg text-base font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </span>
            </a>
          </div>
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
