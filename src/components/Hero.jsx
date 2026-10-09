import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { 
  ArrowRight, 
  Download, 
  Terminal, 
  Cpu, 
  Layers, 
  CheckCircle,
  Database,
  Code2
} from "lucide-react";
import { Github, Linkedin } from "./Icons";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      id="intro"
      className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden"
    >
      <div className="relative max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Hero Typography & Pitch (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            <AnimatedSection direction="up" delay={40}>
              {/* Technical System Status Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--bg-surface)] border-2 border-[var(--border-color)] font-mono-code text-xs mb-6 shadow-[3px_3px_0px_var(--border-color)]">
                <span className="w-2.5 h-2.5 bg-[var(--accent-lime)] border border-black inline-block animate-pulse" />
                <span className="text-[var(--text-main)] font-bold">[ SYSTEM SPEC : OPEN_FOR_HIRE ]</span>
                <span className="text-[var(--text-muted)]">&middot; IN-MH</span>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={100}>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.98] text-[var(--text-main)] uppercase">
                Vishwajit<br />
                <span className="inline-block bg-[var(--accent-lime)] text-[#0C0D0E] px-3 py-0.5 mt-1 border-2 border-black transform -rotate-1 shadow-[4px_4px_0px_#FFFFFF]">
                  Sutar.
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={160}>
              <h2 className="text-xl sm:text-2xl font-mono-code font-bold text-[var(--text-main)] mt-6 tracking-tight flex items-center gap-2">
                <span className="text-[var(--accent-lime)]">&gt;</span> Fullstack &amp; Software Systems Engineer
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={220}>
              <p className="mt-4 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-xl">
                Engineering resilient backends in Java, Go &amp; Node, paired with production Next.js and React interfaces. 
                Focused on scalable cloud architecture, type-safe API contracts, and modern AI pipelines.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={280}>
              {/* Hardware Spec Tags */}
              <div className="flex flex-wrap items-center gap-2 mt-6 font-mono-code text-xs">
                <span className="text-[var(--text-dim)] uppercase font-bold mr-1">STACK:</span>
                {[
                  "Java",
                  "TypeScript",
                  "Next.js",
                  "React",
                  "Node.js",
                  "Go",
                  "PostgreSQL",
                  "Docker",
                  "AWS",
                  "Python AI",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-main)] hover:border-[var(--accent-lime)] hover:text-[var(--accent-lime)] transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={340}>
              {/* Action Buttons with Hard Shadows */}
              <div className="flex flex-wrap items-center gap-4 mt-8 w-full sm:w-auto">
                <a
                  href="#projects"
                  className="btn-brutal-lime flex-1 sm:flex-none text-center"
                >
                  <span>Explore Builds</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </a>

                <a
                  href="/resume.pdf"
                  download="Vishwajit_Sutar_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-brutal-mono flex-1 sm:flex-none text-center"
                >
                  <Download className="w-4 h-4 stroke-[2.5]" />
                  <span>Resume.pdf</span>
                </a>

                {/* Keycap Social Buttons */}
                <div className="flex items-center gap-2 pt-2 sm:pt-0">
                  <a
                    href="https://github.com/VishwajitS7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-[var(--bg-surface)] border-2 border-[var(--border-color)] hover:border-[var(--accent-lime)] hover:bg-[var(--accent-lime)] hover:text-black flex items-center justify-center text-[var(--text-main)] transition shadow-[3px_3px_0px_var(--border-color)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/vishwajit-sutar-03324b2b0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-[var(--bg-surface)] border-2 border-[var(--border-color)] hover:border-[var(--accent-lime)] hover:bg-[var(--accent-lime)] hover:text-black flex items-center justify-center text-[var(--text-main)] transition shadow-[3px_3px_0px_var(--border-color)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Neo-Brutalist Developer Spec Chassis (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <AnimatedSection direction="left" delay={200}>
              <div className="brutal-card p-6 relative border-2 border-[var(--border-color)] shadow-[6px_6px_0px_0px_var(--border-color)] hover:shadow-[8px_8px_0px_0px_#CCFF00]">
                
                {/* Chassis Header Bar */}
                <div className="flex items-center justify-between pb-3 mb-5 border-b-2 border-[var(--border-color)] font-mono-code text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-[var(--accent-lime)] border border-black inline-block" />
                    <span className="font-bold text-[var(--text-main)]">ENGINEERING SPEC // 01</span>
                  </div>
                  <span className="text-[var(--text-muted)] font-bold">[REV: 2026]</span>
                </div>

                {/* Profile Identity Bar */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 border-2 border-[var(--border-color)] bg-[var(--bg-surface)] overflow-hidden shadow-[3px_3px_0px_var(--border-color)]">
                      {!imageLoaded && (
                        <div className="w-full h-full bg-neutral-800 animate-pulse" />
                      )}
                      <img
                        src="/profile.jpg"
                        alt="Vishwajit Sutar"
                        onLoad={() => setImageLoaded(true)}
                        className={`w-full h-full object-cover transition-opacity duration-200 ${
                          imageLoaded ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 font-mono-code">
                    <div className="inline-block px-1.5 py-0.5 bg-[var(--accent-lime)] text-black text-[10px] font-black uppercase mb-1">
                      Fullstack Dev
                    </div>
                    <h3 className="text-xl font-bold font-display text-[var(--text-main)] tracking-tight truncate">
                      Vishwajit Sutar
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">
                      github.com/VishwajitS7
                    </p>
                    <p className="text-xs text-[var(--accent-lime)] font-bold mt-1">
                      CGPA: 9.24 / 10 &middot; B.Tech CSE
                    </p>
                  </div>
                </div>

                {/* Technical Ledger Matrix */}
                <div className="border-t-2 border-[var(--border-color)] pt-4 space-y-2.5 font-mono-code text-xs">
                  <div className="flex items-center justify-between p-2 bg-[var(--bg-surface)] border border-[var(--border-color)]">
                    <span className="text-[var(--text-muted)]">CORE LANGUAGES:</span>
                    <span className="text-[var(--text-main)] font-bold">Java &bull; TypeScript &bull; Go &bull; C++</span>
                  </div>

                  <div className="flex items-center justify-between p-2 bg-[var(--bg-surface)] border border-[var(--border-color)]">
                    <span className="text-[var(--text-muted)]">WEB ARCHITECTURE:</span>
                    <span className="text-[var(--text-main)] font-bold">Next.js &bull; React &bull; Node &bull; Express</span>
                  </div>

                  <div className="flex items-center justify-between p-2 bg-[var(--bg-surface)] border border-[var(--border-color)]">
                    <span className="text-[var(--text-muted)]">DATA &amp; CLOUD:</span>
                    <span className="text-[var(--text-main)] font-bold">PostgreSQL &bull; MongoDB &bull; Docker &bull; AWS</span>
                  </div>

                  <div className="flex items-center justify-between p-2 bg-[var(--bg-surface)] border border-[var(--border-color)]">
                    <span className="text-[var(--text-muted)]">LEADERSHIP ROLE:</span>
                    <span className="text-[var(--accent-lime)] font-bold">President @ Oyster Kode</span>
                  </div>
                </div>

                {/* Architectural Statement Footer */}
                <div className="mt-4 p-3 bg-[var(--bg-surface)] border-2 border-dashed border-[var(--border-color)] font-mono-code text-[11px] text-[var(--text-muted)] leading-relaxed">
                  <span className="text-[var(--accent-lime)] font-bold">// PHILOSOPHY:</span> "Clean APIs, strong typings, zero boilerplate bottlenecks."
                </div>

              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
}
