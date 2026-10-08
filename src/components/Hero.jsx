import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Terminal, 
  Code2, 
  Layers, 
  Cpu, 
  Sparkles,
  ExternalLink
} from "lucide-react";
import { Github, Linkedin } from "./Icons";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      id="intro"
      className="relative min-h-[92vh] flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      <div className="relative max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & Action Buttons (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            <AnimatedSection direction="up" delay={50}>
              {/* Eyebrow Status Pill */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs font-medium text-indigo-400 mb-6 backdrop-blur-md">
                <span className="beacon-dot" />
                <span className="text-[12px] font-mono-code font-semibold">Java Fullstack Developer</span>
                <span className="text-indigo-400/50">&middot;</span>
                <span className="text-[11px] text-[var(--text-secondary)]">Open for Opportunities</span>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={120}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-[var(--text-primary)]">
                Building robust backends with{" "}
                <span className="text-gradient-electric block mt-1">
                  modern React interfaces.
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={180}>
              <p className="mt-6 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl">
                Hi, I'm <strong className="text-[var(--text-primary)] font-semibold">Vishwajit Sutar</strong>. 
                I engineer dependable Java &amp; Spring Boot micro-services paired with lightning-fast React applications. 
                Passionate about system architecture, API reliability, and crisp user experiences.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={240}>
              {/* Tech Stack Highlights */}
              <div className="flex flex-wrap items-center gap-2 mt-6">
                <span className="text-xs font-mono-code uppercase text-[var(--text-muted)] mr-2">Core:</span>
                {[
                  "Java 17+",
                  "Spring Boot",
                  "React 19",
                  "Vite",
                  "RESTful APIs",
                  "MySQL",
                  "MongoDB",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono-code bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-indigo-500/40 hover:text-[var(--text-primary)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={300}>
              {/* CTAs & Social Links */}
              <div className="flex flex-wrap items-center gap-4 mt-8 w-full sm:w-auto">
                <a
                  href="#projects"
                  className="btn-electric flex-1 sm:flex-none text-center cursor-pointer group"
                >
                  Explore Projects
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="/resume.pdf"
                  download="Vishwajit_Sutar_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glass flex-1 sm:flex-none text-center cursor-pointer group"
                >
                  <Download className="w-4 h-4 text-indigo-400 transition-transform group-hover:-translate-y-0.5" />
                  Download CV
                </a>

                {/* Social Quick-Actions */}
                <div className="flex items-center gap-2 pt-2 sm:pt-0">
                  <a
                    href="https://github.com/VishwajitS7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] hover:border-indigo-500/40 text-[var(--text-secondary)] hover:text-white transition cursor-pointer"
                    aria-label="GitHub profile"
                  >
                    <Github className="w-5 h-5" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/vishwajit-sutar-03324b2b0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] hover:border-indigo-500/40 text-[var(--text-secondary)] hover:text-white transition cursor-pointer"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>

                  <a
                    href="mailto:vishu31103@gmail.com"
                    className="w-11 h-11 rounded-xl flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] hover:border-indigo-500/40 text-[var(--text-secondary)] hover:text-white transition cursor-pointer"
                    aria-label="Email Vishwajit"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Linear Bento Developer Card (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <AnimatedSection direction="left" delay={200}>
              <div className="linear-card linear-card-accent p-6 sm:p-7 relative overflow-hidden group">
                {/* Ambient glow in card background */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

                {/* Card Terminal Header */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[var(--border-subtle)] font-mono-code text-xs text-[var(--text-muted)]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-[11px] text-[var(--text-secondary)]">developer.config.json</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-indigo-400">ONLINE</span>
                </div>

                {/* Profile Header within Bento */}
                <div className="flex items-center gap-5 mb-6">
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-indigo-500/40 shadow-xl bg-indigo-950/40 p-0.5">
                      {!imageLoaded && (
                        <div className="w-full h-full rounded-xl bg-indigo-900/30 animate-pulse" />
                      )}
                      <img
                        src="/profile.jpg"
                        alt="Vishwajit Sutar"
                        onLoad={() => setImageLoaded(true)}
                        className={`w-full h-full object-cover rounded-xl transition-opacity duration-300 ${
                          imageLoaded ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </div>
                    {/* Status badge on avatar */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-center">
                      <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-emerald)] animate-pulse" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold tracking-tight text-[var(--text-primary)] truncate">
                      Vishwajit Sutar
                    </h3>
                    <p className="text-xs font-mono-code text-indigo-400 mt-0.5">
                      @VishwajitS7 &middot; India
                    </p>
                    <p className="text-xs text-[var(--text-muted)] mt-1.5 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                      B.Tech CSE &middot; CGPA: 9.24
                    </p>
                  </div>
                </div>

                {/* Live Code/Key Metrics Matrix */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                    <p className="text-[10px] font-mono-code uppercase tracking-wider text-[var(--text-muted)]">
                      Experience
                    </p>
                    <p className="text-lg font-bold text-[var(--text-primary)] mt-0.5">
                      1+ Year
                    </p>
                    <p className="text-[11px] text-[var(--text-secondary)] mt-0.5">
                      Backend &amp; React
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                    <p className="text-[10px] font-mono-code uppercase tracking-wider text-[var(--text-muted)]">
                      Academic Metric
                    </p>
                    <p className="text-lg font-bold text-indigo-400 mt-0.5">
                      9.24 CGPA
                    </p>
                    <p className="text-[11px] text-[var(--text-secondary)] mt-0.5">
                      Top Performer
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                    <p className="text-[10px] font-mono-code uppercase tracking-wider text-[var(--text-muted)]">
                      Leadership
                    </p>
                    <p className="text-lg font-bold text-cyan-400 mt-0.5">
                      President
                    </p>
                    <p className="text-[11px] text-[var(--text-secondary)] mt-0.5">
                      Oyster Kode Club
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                    <p className="text-[10px] font-mono-code uppercase tracking-wider text-[var(--text-muted)]">
                      Shipped Builds
                    </p>
                    <p className="text-lg font-bold text-emerald-400 mt-0.5">
                      5+ Projects
                    </p>
                    <p className="text-[11px] text-[var(--text-secondary)] mt-0.5">
                      Fullstack &amp; APIs
                    </p>
                  </div>
                </div>

                {/* Monospace Quick Status Console */}
                <div className="p-3 rounded-xl bg-[var(--bg-surface)]/80 border border-[var(--border-subtle)] font-mono-code text-[11px]">
                  <div className="flex items-center justify-between text-[var(--text-muted)]">
                    <span>$ curl api.vishwajit.dev/status</span>
                    <span className="text-emerald-400">200 OK</span>
                  </div>
                  <div className="text-[var(--text-secondary)] mt-1.5 text-[11px] leading-relaxed">
                    &gt; "Ready to engineer high-velocity systems for your team."
                  </div>
                </div>

              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
}
