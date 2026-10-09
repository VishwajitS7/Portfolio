import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { 
  ExternalLink, 
  Code2, 
  Server, 
  Wallet, 
  MessageSquare, 
  Cpu, 
  Rocket, 
  ArrowUpRight,
  Terminal,
  Activity,
  Layers,
  Database,
  Shield,
  Zap
} from "lucide-react";
import { Github } from "./Icons";

export default function ProjectSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [telemetryTab, setTelemetryTab] = useState("spendwise-logs");
  const [quizTelemetryTab, setQuizTelemetryTab] = useState("quiz-events");

  const filterTabs = [
    { id: "all", label: "ALL SYSTEMS", count: 6 },
    { id: "fullstack", label: "FULLSTACK FLAGSHIPS", count: 2 },
    { id: "backend", label: "REST APIS & CORE", count: 2 },
    { id: "cloud", label: "ML & DEVOPS", count: 2 },
  ];

  const secondaryProjects = [
    {
      code: "03",
      category: "backend",
      icon: Server,
      title: "Task Management API",
      subtitle: "RESTful Enterprise Architecture",
      desc: "Stateless backend microservice implementing JWT authorization guards, strict JSON payload validation, role-based access control, and indexed MongoDB operations.",
      github: "https://github.com/VishwajitS7/task-api",
      tags: ["Node.js", "Express", "MongoDB", "JWT Auth", "Postman"],
      metrics: "Mean Latency: 28ms &bull; 100% Endpoint Test Coverage",
    },
    {
      code: "04",
      category: "fullstack",
      icon: Code2,
      title: "Developer Portfolio v2",
      subtitle: "Zero-Bloat Personal Brand",
      desc: "Neo-Brutalist portfolio system built with React 19, Space Grotesk display typography, EmailJS transmission pipelines, and sub-70KB gzipped runtime bundle.",
      github: "https://github.com/VishwajitS7/portfolio",
      tags: ["React 19", "Vite", "Tailwind CSS", "EmailJS"],
      metrics: "Bundle: 34KB CSS &bull; 0 Linter Warnings",
    },
    {
      code: "05",
      category: "cloud",
      icon: Cpu,
      title: "Computer Vision Classifier",
      subtitle: "Deep Learning Neural Pipeline",
      desc: "Convolutional neural network architecture for multi-class image classification. Features custom preprocessing pipelines, checkpoint evaluations, and matrix benchmarks.",
      github: "https://github.com/VishwajitS7",
      tags: ["Python", "TensorFlow", "OpenCV", "NumPy"],
      metrics: "Accuracy: 94.6% &bull; Automated Pipeline",
    },
    {
      code: "06",
      category: "cloud",
      icon: Rocket,
      title: "Automated CI/CD Pipeline",
      subtitle: "DevOps & Cloud Automation",
      desc: "Multi-stage GitHub Actions workflow orchestrating automated dependency audits, code linters, unit tests, and production deployment verifications.",
      github: "https://github.com/VishwajitS7",
      tags: ["GitHub Actions", "Docker", "Linux", "CI/CD"],
      metrics: "Automated Verification &bull; Zero Downtime",
    },
  ];

  const showFlagships = activeFilter === "all" || activeFilter === "fullstack";
  const filteredSecondary = activeFilter === "all"
    ? secondaryProjects
    : secondaryProjects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="scroll-mt-20 px-4 sm:px-6 md:px-16 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="section-marker">
              <span>[ 03 // PROJECT LEDGER ]</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-[var(--text-main)] mt-2">
              Engineering Builds &amp; Repositories
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)] max-w-xl font-sans">
              Real-world systems highlighting backend architecture, high-concurrency protocols, and client-side reactive craft.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 font-mono-code text-xs">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 border font-bold transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? "bg-[var(--accent-lime)] text-black border-black shadow-[3px_3px_0px_#FFFFFF]"
                    : "bg-[var(--bg-surface)] border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[var(--text-main)]"
                }`}
              >
                <span>{tab.label}</span>
                <span className="ml-1 opacity-60">[{tab.count}]</span>
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FLAGSHIP SHOWCASE 1: SPENDWISE (Fullstack FinTech Engine) */}
        {/* ========================================================================= */}
        {showFlagships && (
          <AnimatedSection direction="up" delay={60}>
            <div className="brutal-card p-6 sm:p-8 mb-10 border-2 border-[var(--accent-lime)] shadow-[6px_6px_0px_#CCFF00]">
              
              {/* Dossier Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b-2 border-[var(--border-color)] font-mono-code text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 bg-[var(--accent-lime)] border border-black inline-block" />
                  <span className="text-[var(--text-main)] font-black uppercase">
                    FLAGSHIP // SPEC_01 &bull; FULLSTACK FINTECH ENGINE
                  </span>
                </div>
                <span className="px-2 py-0.5 bg-[var(--accent-lime)] text-black font-black uppercase text-[10px]">
                  PRODUCTION READY
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Panel: Description & Specifications (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-[#0C0D0E] border-2 border-[var(--border-color)] flex items-center justify-center text-[var(--accent-lime)] flex-shrink-0">
                        <Wallet className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[var(--text-main)]">
                          Spendwise
                        </h3>
                        <p className="font-mono-code text-xs text-[var(--accent-lime)] font-bold">
                          Financial Aggregation &amp; Budget Optimization Platform
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-sans">
                      Engineered a comprehensive financial intelligence platform. Solved stateful expense analytics using Auth.js cookie-session security, high-performance MongoDB aggregation pipelines for monthly categorization, and instant reactive budgeting dashboards.
                    </p>

                    {/* Architecture Specs Breakdown */}
                    <div className="mt-6 space-y-2 font-mono-code text-xs">
                      <div className="p-2.5 bg-[var(--bg-surface)] border border-[var(--border-color)] flex items-start gap-2.5">
                        <Shield className="w-4 h-4 text-[var(--accent-lime)] flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[var(--text-main)] font-bold">AUTHENTICATION:</span>
                          <span className="text-[var(--text-muted)] ml-1">Stateless HTTP-only session cookies via Auth.js</span>
                        </div>
                      </div>

                      <div className="p-2.5 bg-[var(--bg-surface)] border border-[var(--border-color)] flex items-start gap-2.5">
                        <Database className="w-4 h-4 text-[var(--accent-lime)] flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[var(--text-main)] font-bold">PIPELINE AGGREGATION:</span>
                          <span className="text-[var(--text-muted)] ml-1">MongoDB $group &amp; $match pipelines for real-time ledger trends</span>
                        </div>
                      </div>

                      <div className="p-2.5 bg-[var(--bg-surface)] border border-[var(--border-color)] flex items-start gap-2.5">
                        <Activity className="w-4 h-4 text-[var(--accent-lime)] flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[var(--text-main)] font-bold">REACTIVITY:</span>
                          <span className="text-[var(--text-muted)] ml-1">Instant local cache updates without redundant server roundtrips</span>
                        </div>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="mt-6 flex flex-wrap gap-2 font-mono-code text-xs">
                      {["React 19", "Auth.js", "Node.js", "MongoDB", "Tailwind CSS", "REST API"].map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-main)] font-bold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="mt-8 pt-4 border-t-2 border-[var(--border-color)] flex items-center gap-4">
                    <a
                      href="https://github.com/VishwajitS7/Spendwise"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-brutal-lime text-xs"
                    >
                      <Github className="w-4 h-4" />
                      <span>[ LAUNCH_GITHUB_REPO ]</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                    </a>
                  </div>
                </div>

                {/* Right Panel: Simulated Live Telemetry Console (5 cols) */}
                <div className="lg:col-span-5 w-full font-mono-code text-xs">
                  <div className="p-4 bg-[#0A0B0C] border-2 border-[var(--border-color)] shadow-[4px_4px_0px_var(--border-color)]">
                    
                    {/* Console Header with Interactive Tabs */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800 text-[11px]">
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => setTelemetryTab("spendwise-logs")}
                          className={`px-2 py-0.5 font-bold cursor-pointer transition ${
                            telemetryTab === "spendwise-logs"
                              ? "bg-[var(--accent-lime)] text-black"
                              : "text-[var(--text-muted)] hover:text-white"
                          }`}
                        >
                          [ TELEMETRY.LOG ]
                        </button>
                        <button
                          type="button"
                          onClick={() => setTelemetryTab("spendwise-schema")}
                          className={`px-2 py-0.5 font-bold cursor-pointer transition ${
                            telemetryTab === "spendwise-schema"
                              ? "bg-[var(--accent-lime)] text-black"
                              : "text-[var(--text-muted)] hover:text-white"
                          }`}
                        >
                          [ SCHEMA_SPEC ]
                        </button>
                      </div>
                      <span className="text-[var(--accent-lime)] font-bold">200 OK</span>
                    </div>

                    {/* Console Stream */}
                    {telemetryTab === "spendwise-logs" ? (
                      <div className="space-y-2 text-[11px] text-[var(--text-muted)] leading-relaxed">
                        <p className="text-[var(--text-dim)]">
                          // INITIALIZING SESSION TRACE...
                        </p>
                        <p className="text-emerald-400">
                          &gt; [200 OK] POST /api/v1/auth/session (18ms)
                        </p>
                        <p>
                          &gt; [AUTH] Session Token validated: User #482
                        </p>
                        <p className="text-cyan-400">
                          &gt; [200 OK] GET /api/v1/expenses/aggregate (34ms)
                        </p>
                        <div className="p-2 bg-[var(--bg-surface)] border border-neutral-800 text-[10px] space-y-1 my-2">
                          <p className="text-[var(--text-main)] font-bold">DATA SUMMARY:</p>
                          <p>&bull; Records Computed: 1,420 transactions</p>
                          <p>&bull; Pipeline Execution: 34ms (MongoDB Index hit)</p>
                          <p>&bull; Active Categories: 8 (Food, Rent, Tech, Travel)</p>
                          <p>&bull; Cache State: Hydrated</p>
                        </div>
                        <p className="text-[var(--accent-lime)] font-bold">
                          &gt; STATUS: READY FOR CLIENT INTERACTIONS
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-2 text-[11px] text-[var(--text-muted)] leading-relaxed">
                        <p className="text-[var(--text-dim)]">// DATABASE SCHEMA &amp; PIPELINES:</p>
                        <div className="p-2 bg-[var(--bg-surface)] border border-neutral-800 text-[10px] space-y-1">
                          <p className="text-[var(--accent-lime)] font-bold">COLLECTION: transactions</p>
                          <p>&bull; user_id: ObjectId(Index: hashed)</p>
                          <p>&bull; amount: Decimal128, currency: String</p>
                          <p>&bull; category: Enum[Food, Rent, Travel, Tech...]</p>
                          <p>&bull; timestamp: ISODate(Index: compound_desc)</p>
                        </div>
                        <p className="text-emerald-400">&gt; Aggregation: $match &rarr; $group &rarr; $project</p>
                        <p className="text-[var(--accent-lime)] font-bold">&gt; Query Throughput: ~2,500 ops/sec</p>
                      </div>
                    )}

                  </div>
                </div>

              </div>
            </div>
          </AnimatedSection>
        )}

        {/* ========================================================================= */}
        {/* FLAGSHIP SHOWCASE 2: REALTIME QUIZ PLATFORM (Concurrency Engine) */}
        {/* ========================================================================= */}
        {showFlagships && (
          <AnimatedSection direction="up" delay={80}>
            <div className="brutal-card p-6 sm:p-8 mb-14 border-2 border-[var(--border-color)] shadow-[6px_6px_0px_var(--border-color)]">
              
              {/* Dossier Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b-2 border-[var(--border-color)] font-mono-code text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 bg-cyan-400 border border-black inline-block" />
                  <span className="text-[var(--text-main)] font-black uppercase">
                    FLAGSHIP // SPEC_02 &bull; HIGH-CONCURRENCY WEBSOCKET ENGINE
                  </span>
                </div>
                <span className="px-2 py-0.5 bg-cyan-400 text-black font-black uppercase text-[10px]">
                  CONCURRENT MULTIPLAYER
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Panel: Description & Specifications (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-[#0C0D0E] border-2 border-[var(--border-color)] flex items-center justify-center text-cyan-400 flex-shrink-0">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[var(--text-main)]">
                          Realtime Quiz System
                        </h3>
                        <p className="font-mono-code text-xs text-cyan-400 font-bold">
                          Multi-User Assessment Engine &bull; Spring Boot + WebSockets
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-sans">
                      Engineered a real-time concurrent quiz application. Solved multi-client game room synchronization using Spring Boot Java backend services, Firebase real-time database listeners, and sub-50ms score computation across dozens of simultaneous participants.
                    </p>

                    {/* Architecture Specs Breakdown */}
                    <div className="mt-6 space-y-2 font-mono-code text-xs">
                      <div className="p-2.5 bg-[var(--bg-surface)] border border-[var(--border-color)] flex items-start gap-2.5">
                        <Server className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[var(--text-main)] font-bold">BACKEND RUNTIME:</span>
                          <span className="text-[var(--text-muted)] ml-1">Spring Boot 3 multi-threaded session coordinator in Java 17</span>
                        </div>
                      </div>

                      <div className="p-2.5 bg-[var(--bg-surface)] border border-[var(--border-color)] flex items-start gap-2.5">
                        <Zap className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[var(--text-main)] font-bold">REALTIME PROTOCOL:</span>
                          <span className="text-[var(--text-muted)] ml-1">WebSocket bidirectional event channels for instant question broadcast</span>
                        </div>
                      </div>

                      <div className="p-2.5 bg-[var(--bg-surface)] border border-[var(--border-color)] flex items-start gap-2.5">
                        <Database className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[var(--text-main)] font-bold">LEADERBOARD STATE:</span>
                          <span className="text-[var(--text-muted)] ml-1">Instant Firebase state sync with zero polling overhead</span>
                        </div>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="mt-6 flex flex-wrap gap-2 font-mono-code text-xs">
                      {["Spring Boot 3", "React 19", "Firebase", "WebSockets", "Java 17", "Vite"].map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-main)] font-bold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="mt-8 pt-4 border-t-2 border-[var(--border-color)] flex items-center gap-4">
                    <a
                      href="https://github.com/VishwajitS7/realtime-quiz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-brutal-mono text-xs"
                    >
                      <Github className="w-4 h-4" />
                      <span>[ LAUNCH_GITHUB_REPO ]</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                    </a>
                  </div>
                </div>

                {/* Right Panel: Simulated Live WebSocket Event Stream (5 cols) */}
                <div className="lg:col-span-5 w-full font-mono-code text-xs">
                  <div className="p-4 bg-[#0A0B0C] border-2 border-[var(--border-color)] shadow-[4px_4px_0px_var(--border-color)]">
                    
                    {/* Console Header with Interactive Tabs */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800 text-[11px]">
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => setQuizTelemetryTab("quiz-events")}
                          className={`px-2 py-0.5 font-bold cursor-pointer transition ${
                            quizTelemetryTab === "quiz-events"
                              ? "bg-cyan-400 text-black"
                              : "text-[var(--text-muted)] hover:text-white"
                          }`}
                        >
                          [ LIVE_STREAM ]
                        </button>
                        <button
                          type="button"
                          onClick={() => setQuizTelemetryTab("quiz-spec")}
                          className={`px-2 py-0.5 font-bold cursor-pointer transition ${
                            quizTelemetryTab === "quiz-spec"
                              ? "bg-cyan-400 text-black"
                              : "text-[var(--text-muted)] hover:text-white"
                          }`}
                        >
                          [ PROTOCOL_SPEC ]
                        </button>
                      </div>
                      <span className="text-cyan-400 font-bold">CONNECTED</span>
                    </div>

                    {/* Console Stream */}
                    {quizTelemetryTab === "quiz-events" ? (
                      <div className="space-y-2 text-[11px] text-[var(--text-muted)] leading-relaxed">
                        <p className="text-[var(--text-dim)]">
                          // SOCKET HANDSHAKE ESTABLISHED (PORT: 8080)
                        </p>
                        <p className="text-cyan-400">
                          &gt; [WS:CONNECT] Participant session #902 joined lobby
                        </p>
                        <p className="text-emerald-400">
                          &gt; [ROOM_STATE] 32 concurrent players active
                        </p>
                        <p className="text-amber-400">
                          &gt; [BROADCAST] Question #04 dispatched (Payload: 2.1KB)
                        </p>
                        <div className="p-2 bg-[var(--bg-surface)] border border-neutral-800 text-[10px] space-y-1 my-2">
                          <p className="text-[var(--text-main)] font-bold">SYNC BENCHMARKS:</p>
                          <p>&bull; Broadcast Delay: 14ms across all clients</p>
                          <p>&bull; Score Calculation: Real-time atomic increment</p>
                          <p>&bull; Packet Loss Rate: 0.00%</p>
                        </div>
                        <p className="text-cyan-400 font-bold">
                          &gt; LEADERBOARD SYNCHRONIZED ACROSS ALL SESSIONS
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-2 text-[11px] text-[var(--text-muted)] leading-relaxed">
                        <p className="text-[var(--text-dim)]">// WEBSOCKET PROTOCOL SPECIFICATION:</p>
                        <div className="p-2 bg-[var(--bg-surface)] border border-neutral-800 text-[10px] space-y-1">
                          <p className="text-cyan-400 font-bold">EVENT_FRAMES:</p>
                          <p>&bull; LOBBY_JOIN: &lbrace; session_id, username, room_id &rbrace;</p>
                          <p>&bull; QUESTION_DISPATCH: &lbrace; q_id, choices, ttl: 15s &rbrace;</p>
                          <p>&bull; ANSWER_SUBMIT: &lbrace; q_id, selected_idx, delta_ms &rbrace;</p>
                          <p>&bull; SCORE_SYNC: &lbrace; leaderboard: Top10 &rbrace;</p>
                        </div>
                        <p className="text-emerald-400">&gt; Serialization: Binary / JSON framed</p>
                        <p className="text-cyan-400 font-bold">&gt; Concurrency model: Non-blocking reactive threads</p>
                      </div>
                    )}

                  </div>
                </div>

              </div>
            </div>
          </AnimatedSection>
        )}

        {/* ========================================================================= */}
        {/* SECONDARY SYSTEMS MATRIX (4 High-Density Technical Modules) */}
        {/* ========================================================================= */}
        <div>
          <div className="flex items-center gap-3 mb-6 font-mono-code text-xs">
            <span className="w-2 h-2 bg-[var(--accent-lime)] inline-block" />
            <span className="text-[var(--text-main)] font-bold uppercase tracking-wider">
              SECONDARY REPOSITORIES &amp; AUTOMATION SYSTEMS
            </span>
            <span className="text-[var(--text-dim)]">[{filteredSecondary.length} BUILDS]</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {filteredSecondary.map((p, i) => {
              const Icon = p.icon;
              return (
                <AnimatedSection key={p.code} direction="up" delay={i * 60} className="h-full">
                  <div className="brutal-card p-6 h-full flex flex-col justify-between border-2 border-[var(--border-color)] font-mono-code">
                    <div>
                      {/* Card Header */}
                      <div className="flex items-start justify-between gap-3 pb-3 mb-4 border-b-2 border-[var(--border-color)]">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 bg-[#0C0D0E] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-lime)] flex-shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-[10px] text-[var(--text-dim)] font-bold">SYS // {p.code}</span>
                            <p className="text-xs text-[var(--accent-lime)] font-bold">
                              {p.subtitle}
                            </p>
                          </div>
                        </div>

                        <span className="px-1.5 py-0.5 bg-[var(--bg-surface)] border border-[var(--border-color)] text-[10px] font-bold text-[var(--text-dim)]">
                          ACTIVE
                        </span>
                      </div>

                      <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[var(--text-main)]">
                        {p.title}
                      </h3>

                      <p className="text-xs text-[var(--text-muted)] leading-relaxed mt-2.5 font-sans">
                        {p.desc}
                      </p>

                      <div className="mt-4 p-2 bg-[var(--bg-surface)] border border-[var(--border-color)] text-[11px] text-[var(--text-main)]">
                        <span className="text-[var(--accent-lime)] font-bold">&gt; METRIC:</span> {p.metrics}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t-2 border-[var(--border-color)] flex flex-col gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {p.tags.map((t, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] px-2 py-0.5 bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-main)] font-bold"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2 flex items-center justify-between">
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--text-main)] hover:text-[var(--accent-lime)] transition-colors group/btn"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>[ VIEW_SOURCE ]</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </a>
                        <span className="text-[10px] text-[var(--text-dim)]">VERIFIED</span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
