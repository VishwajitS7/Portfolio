import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { 
  ArrowUpRight, 
  Terminal, 
  Layers, 
  Wallet, 
  MessageSquare, 
  Server, 
  Code2, 
  Cpu, 
  Rocket, 
  Check, 
  ExternalLink 
} from "lucide-react";
import { Github } from "./Icons";

export default function ProjectSection() {
  const [selectedId, setSelectedId] = useState("01");

  const projects = [
    {
      id: "01",
      icon: Wallet,
      title: "Spendwise",
      category: "Fullstack FinTech Engine",
      subtitle: "Expense Aggregation & Session Security",
      desc: "Fullstack financial tracking engine. Solved stateful budget allocation using Auth.js cookie sessions, MongoDB aggregation pipelines ($group, $match) for real-time monthly category trends, and responsive React ledger dashboards.",
      highlights: [
        "Stateless HTTP-only session cookies via Auth.js",
        "MongoDB multi-stage aggregation computing monthly budget trends in ~34ms",
        "Optimistic UI updates for zero-lag transaction editing",
      ],
      github: "https://github.com/VishwajitS7/Spendwise",
      tags: ["React 19", "Auth.js", "MongoDB", "Node.js", "Tailwind CSS"],
      metric: "LATENCY: 34ms &middot; 1.4K+ Records Aggregated",
      featured: true,
    },
    {
      id: "02",
      icon: MessageSquare,
      title: "Realtime Quiz Platform",
      category: "Concurrent Multiplayer System",
      subtitle: "Multi-User Spring Boot & WebSocket Engine",
      desc: "Multiplayer live assessment system engineered for high concurrency. Features a Spring Boot Java backend managing WebSocket game sessions, distributed Firebase state sync, and sub-50ms score computation across simultaneous players.",
      highlights: [
        "Spring Boot 3 multi-threaded session coordinator in Java 17",
        "WebSocket bidirectional streams for instant 14ms question broadcast",
        "Zero-polling distributed leaderboard state sync via Firebase",
      ],
      github: "https://github.com/VishwajitS7/realtime-quiz",
      tags: ["Spring Boot 3", "React 19", "Firebase", "WebSockets", "Java 17"],
      metric: "BROADCAST DELAY: 14ms &middot; 32+ Active Concurrency",
      featured: true,
    },
    {
      id: "03",
      icon: Server,
      title: "Task Management API",
      category: "RESTful Service Architecture",
      subtitle: "JWT Authorization & Schema Validation",
      desc: "Production-oriented REST API microservice implementing JWT stateless authorization guards, strict JSON payload validation, role-based access control, and indexed MongoDB operations.",
      highlights: [
        "Stateless token-based authentication guards on protected routes",
        "Strict input validation middleware preventing malformed payloads",
        "Compound indexing on user tasks delivering 28ms mean response time",
      ],
      github: "https://github.com/VishwajitS7/task-api",
      tags: ["Node.js", "Express", "MongoDB", "JWT Auth", "Postman"],
      metric: "MEAN LATENCY: 28ms &middot; 100% Endpoint Test Coverage",
      featured: false,
    },
    {
      id: "04",
      icon: Code2,
      title: "Developer Portfolio v2",
      category: "Personal Brand & Runtime",
      subtitle: "Sub-40KB Neo-Brutalist Architecture",
      desc: "Ultra-fast portfolio engineered with Neo-Brutalist design tokens, Space Grotesk display typography, EmailJS validation pipelines, and zero framework bloat.",
      highlights: [
        "Lean CSS token system eliminating all CSS override bloat",
        "Integrated EmailJS form pipeline with automated input validation",
        "Sub-40KB gzipped CSS and sub-80KB JS runtime footprint",
      ],
      github: "https://github.com/VishwajitS7/portfolio",
      tags: ["React 19", "Vite", "Tailwind CSS", "EmailJS"],
      metric: "BUNDLE: 34KB CSS &middot; 0 Linter Warnings",
      featured: false,
    },
    {
      id: "05",
      icon: Cpu,
      title: "Computer Vision Classifier",
      category: "Deep Learning Pipeline",
      subtitle: "Convolutional Neural Network",
      desc: "Convolutional neural network for multi-class image classification. Features custom preprocessing pipelines, checkpoint evaluations, and matrix benchmarks.",
      highlights: [
        "Automated image normalization and data augmentation pipeline",
        "Checkpoint callback handlers preventing model overfitting",
        "94.6% classification accuracy on evaluation benchmark set",
      ],
      github: "https://github.com/VishwajitS7",
      tags: ["Python", "TensorFlow", "OpenCV", "NumPy"],
      metric: "ACCURACY: 94.6% &middot; Automated Training Pipeline",
      featured: false,
    },
    {
      id: "06",
      icon: Rocket,
      title: "Automated CI/CD Pipeline",
      category: "DevOps & Cloud Automation",
      subtitle: "GitHub Actions Build & Verify Workflow",
      desc: "Multi-stage cloud workflow orchestrating automated dependency audits, code linters, unit tests, and production deployment verifications.",
      highlights: [
        "Automated matrix testing across Node & Java runtimes",
        "Containerized Docker build verification before merge",
        "Zero-downtime rollback triggers on test failures",
      ],
      github: "https://github.com/VishwajitS7",
      tags: ["GitHub Actions", "Docker", "Linux", "CI/CD"],
      metric: "VERIFICATION: 100% Automated &middot; Zero Downtime",
      featured: false,
    },
  ];

  const activeProject = projects.find((p) => p.id === selectedId) || projects[0];
  const ActiveIcon = activeProject.icon;

  return (
    <section id="projects" className="scroll-mt-20 px-4 sm:px-6 md:px-16 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="section-marker">
              <span>[ 03 // PROJECT LEDGER ]</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[var(--text-main)] mt-1">
              Engineered Builds
            </h2>
          </div>

          <div className="font-mono-code text-xs text-[var(--text-muted)] flex items-center gap-2">
            <span className="w-2 h-2 bg-[var(--accent-lime)] inline-block" />
            <span>SELECT A BUILD TO INSPECT ARCHITECTURE</span>
          </div>
        </div>

        {/* Master-Detail Split Console (Zero Scroll Bloat!) */}
        <AnimatedSection direction="up" delay={50}>
          <div className="brutal-card border-2 border-[var(--border-color)] overflow-hidden font-mono-code">
            
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column: Project Selector List (5 cols) */}
              <div className="lg:col-span-5 border-b-2 lg:border-b-0 lg:border-r-2 border-[var(--border-color)] bg-[var(--bg-surface)] p-3 sm:p-4 flex flex-col gap-1.5">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[var(--border-color)] text-[11px] text-[var(--text-dim)] font-bold px-1">
                  <span>INDEX // 06 SYSTEMS</span>
                  <span>STATUS</span>
                </div>

                {projects.map((p) => {
                  const isSelected = p.id === selectedId;
                  const Icon = p.icon;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedId(p.id)}
                      className={`w-full text-left p-3 border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isSelected
                          ? "bg-[var(--accent-lime)] text-black border-black shadow-[3px_3px_0px_#FFFFFF]"
                          : "border-[var(--border-color)] bg-[var(--bg-canvas)] text-[var(--text-muted)] hover:border-[var(--accent-lime)] hover:text-[var(--text-main)]"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div
                          className={`w-6 h-6 border flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                            isSelected
                              ? "bg-black text-[var(--accent-lime)] border-black"
                              : "bg-[#0C0D0E] text-[var(--text-dim)] border-[var(--border-color)]"
                          }`}
                        >
                          {p.id}
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-xs font-bold font-sans text-inherit truncate">
                            {p.title}
                          </h4>
                          <p className="text-[10px] opacity-75 truncate">
                            {p.category}
                          </p>
                        </div>
                      </div>

                      {p.featured && (
                        <span
                          className={`text-[9px] font-black uppercase px-1.5 py-0.2 flex-shrink-0 ${
                            isSelected
                              ? "bg-black text-[var(--accent-lime)]"
                              : "bg-[var(--accent-lime)] text-black"
                          }`}
                        >
                          FLAGSHIP
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Active Project Dossier Inspector (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-[var(--bg-card)]">
                
                <div>
                  {/* Active Dossier Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b-2 border-[var(--border-color)] text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-[var(--accent-lime)] border border-black inline-block" />
                      <span className="text-[var(--text-dim)] font-bold">
                        DOSSIER // {activeProject.id} &bull; {activeProject.category}
                      </span>
                    </div>

                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-brutal-lime !px-3 !py-1 !text-[11px] inline-flex items-center gap-1.5"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>[ VIEW_REPO ]</span>
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
                    </a>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 bg-[#0C0D0E] border-2 border-[var(--border-color)] flex items-center justify-center text-[var(--accent-lime)] flex-shrink-0">
                      <ActiveIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[var(--text-main)]">
                        {activeProject.title}
                      </h3>
                      <p className="text-xs text-[var(--accent-lime)] font-bold">
                        {activeProject.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-sans mb-4">
                    {activeProject.desc}
                  </p>

                  {/* Key Architectural Solutions */}
                  <div className="space-y-1.5 text-xs text-[var(--text-main)] bg-[var(--bg-surface)] p-3 border border-[var(--border-color)] mb-4 font-sans">
                    <p className="font-mono-code text-[10px] text-[var(--text-dim)] font-bold uppercase mb-1">
                      KEY ARCHITECTURAL HIGHLIGHTS:
                    </p>
                    {activeProject.highlights.map((h, idx) => (
                      <p key={idx} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                        <span className="text-[var(--accent-lime)] font-mono-code font-bold flex-shrink-0">&gt;</span>
                        <span>{h}</span>
                      </p>
                    ))}
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4 font-mono-code text-[11px]">
                    {activeProject.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-main)] font-bold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Telemetry Benchmark */}
                <div className="pt-3 border-t-2 border-[var(--border-color)] flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="text-[11px] text-[var(--text-muted)]">
                    <span className="text-[var(--accent-lime)] font-bold">STATUS:</span> {activeProject.metric}
                  </div>
                  <span className="text-[10px] text-[var(--text-dim)] font-bold uppercase">
                    SYS_OK // 2026
                  </span>
                </div>

              </div>

            </div>

          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
