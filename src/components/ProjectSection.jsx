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
  Brain,
  Globe,
  FileText,
  ExternalLink 
} from "lucide-react";
import { Github } from "./Icons";

export default function ProjectSection() {
  const [selectedId, setSelectedId] = useState("01");

  const projects = [
    {
      id: "01",
      icon: Wallet,
      title: "SpendWise",
      subtitle: "Fullstack FinTech Engine",
      category: "Expense Aggregation & Financial Insights",
      desc: "A full-stack expense tracking application that helps users manage transactions, organize expenses, and understand monthly spending through an interactive financial dashboard.",
      highlights: [
        "Expense creation, editing, deletion, and persistent storage workflows",
        "MongoDB-backed transaction management, indexing, and category aggregation",
        "JWT-based stateless authentication guards in the MERN architecture",
        "Responsive React dashboard delivering visual monthly financial insights",
      ],
      github: "https://github.com/VishwajitS7/SpendWise",
      tags: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "JWT"],
      metric: "STATUS: FULLSTACK APPLICATION &middot; MERN STACK",
      badge: "FLAGSHIP",
      featured: true,
    },
    {
      id: "02",
      icon: MessageSquare,
      title: "ClassPulse",
      subtitle: "Realtime Quiz Platform",
      category: "Concurrent Multiplayer System",
      desc: "An interactive live quiz platform designed to make quiz participation engaging through a responsive interface, instant answer evaluation, and real-time quiz experiences.",
      highlights: [
        "Interactive live quiz interface optimized for fast participation",
        "Real-time answer handling and synchronized event state via Firebase",
        "Automated score calculation and instant quiz result presentation",
        "Responsive user experience tailored for both desktop and mobile devices",
      ],
      github: "https://github.com/VishwajitS7/ClassPulse",
      tags: ["React", "JavaScript", "Firebase", "Realtime Sync"],
      metric: "STATUS: QUIZ APPLICATION &middot; FIREBASE BACKEND",
      badge: "FLAGSHIP",
      featured: true,
    },
    {
      id: "03",
      icon: Globe,
      title: "BlogN",
      subtitle: "Modern Blogging Platform",
      category: "Content & Community System",
      desc: "A full-stack blogging platform that enables users to authenticate, publish articles, discover tagged content, and engage through an active community of likes and comments.",
      highlights: [
        "Google OAuth authentication using NextAuth.js session security",
        "MongoDB Atlas cloud cluster for scalable document persistence",
        "Cloudinary integration for optimized media upload and asset delivery",
        "Content categorization, article tagging, likes, and reader comment threads",
      ],
      github: "https://github.com/OystersKode/BlogN",
      tags: ["Next.js", "MongoDB Atlas", "NextAuth.js", "Cloudinary", "Vercel"],
      metric: "DEPLOYED WEB PLATFORM &middot; 170+ Active Community Users",
      badge: "DEPLOYED",
      featured: true,
    },
    {
      id: "04",
      icon: Brain,
      title: "PaperTrace AI",
      subtitle: "Interactive Research Intelligence",
      category: "AI-Assisted Academic Reading",
      desc: "An AI-oriented research workspace concept that helps students understand dense academic papers through interactive explanations, contextual exploration, and simplified technical content.",
      highlights: [
        "Interactive PDF and arXiv research paper viewing workspace",
        "Simplified mathematical formulas dynamically rendered with KaTeX",
        "Clickable equations, theorem references, and technical terminology",
        "Planned runnable Python code sandboxes for testing theoretical concepts",
      ],
      github: null,
      tags: ["Next.js", "TypeScript", "Python", "KaTeX", "AI Workspace"],
      metric: "STATUS: IN DEVELOPMENT &middot; RESEARCH WORKSPACE CONCEPT",
      badge: "IN DEV",
      featured: false,
    },
    {
      id: "05",
      icon: Server,
      title: "DevLab",
      subtitle: "Interactive DevOps Lab",
      category: "Cloud-Native Experiment Platform",
      desc: "A web-based educational platform designed to help students perform DevOps experiments in structured, interactive, and reproducible cloud lab environments.",
      highlights: [
        "Structured experiment catalog and student session management",
        "Practical Git workflows and automated CI/CD pipeline exercises",
        "Docker-based lab environment concepts for isolated runtimes",
        "Planned expansion for Jenkins, Maven, and Kubernetes cluster experiments",
      ],
      github: "https://github.com/VishwajitS7/DevLab",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "PostgreSQL", "Prisma", "Docker"],
      metric: "STATUS: IN DEVELOPMENT &middot; EXPERIMENTAL CLOUD LAB",
      badge: "IN DEV",
      featured: false,
    },
    {
      id: "06",
      icon: Code2,
      title: "DSA Guardian",
      subtitle: "Structured DSA Progress",
      category: "Algorithm Practice & Tracking",
      desc: "A planned web application to help learners organize their Data Structures and Algorithms practice, review problem patterns, and track learning milestones over time.",
      highlights: [
        "Topic-wise algorithmic categorization (Arrays, Trees, Graphs, DP)",
        "Practice history, revision queues, and problem difficulty tracking",
        "Google authentication architecture concept via NextAuth.js",
        "Personalized learning dashboard and problem solve rate analytics",
      ],
      github: "https://github.com/VishwajitS7/DSA-Guard",
      tags: ["Next.js", "MongoDB Atlas", "NextAuth.js", "Tailwind CSS"],
      metric: "STATUS: IN DEVELOPMENT &middot; ALGORITHM PROGRESS TRACKER",
      badge: "IN DEV",
      featured: false,
    },
    {
      id: "07",
      icon: Terminal,
      title: "Developer Portfolio",
      subtitle: "Personal Brand & Runtime",
      category: "Interactive Developer Showcase",
      desc: "A personal developer portfolio presenting technical skills, full-stack projects, development experience, and engineering interests in a modern, highly responsive interface.",
      highlights: [
        "Master-Detail project and stack inspection consoles with zero scroll bloat",
        "Neo-Brutalist design tokens, Space Grotesk typography & custom SVG icons",
        "7-discipline tech stack command deck with live telemetry inspector",
        "Direct dispatch EmailJS transmission form and verified credential ledger",
      ],
      github: "https://github.com/VishwajitS7/Portfolio",
      liveUrl: "https://vishwajit.vercel.app",
      tags: ["React 19", "Vite", "TypeScript", "Tailwind CSS", "Vercel"],
      metric: "PRODUCTION DEPLOYED &middot; v2 ARCHITECTURE",
      badge: "LIVE SITE",
      featured: false,
    },
    {
      id: "08",
      icon: Cpu,
      title: "Computer Vision Classifier",
      subtitle: "Deep Learning Pipeline",
      category: "Facial Emotion & Stress Research",
      desc: "A research-oriented computer vision project associated with facial emotion analysis and stress detection, with EEG-based DEAP benchmark datasets considered in the capstone study.",
      highlights: [
        "Facial emotion analysis pipelines using deep convolutional architectures",
        "Stress and anxiety detection research direction based on feature markers",
        "EEG signal analysis considered as part of the broader research workflow",
        "Model evaluation benchmarks, classification matrices, and visualizations",
      ],
      github: null,
      referenceRepo: "https://github.com/Sarang-79/capstone-facial-emotion-heatmap-stress-anxiety",
      tags: ["Python", "Jupyter Notebook", "Machine Learning", "Computer Vision"],
      metric: "STATUS: CAPSTONE / RESEARCH &middot; DEAP DATA STUDY",
      badge: "RESEARCH",
      featured: false,
    },
    {
      id: "09",
      icon: Rocket,
      title: "Automated CI/CD Pipeline",
      subtitle: "DevOps & Cloud Automation",
      category: "Build, Test & Deployment Workflow",
      desc: "A DevOps learning project focused on understanding automated build, testing, containerization, and deployment workflows across modern cloud environments.",
      highlights: [
        "Git-based version control workflows and release branch management",
        "Jenkins pipeline learning with automated build jobs and test triggers",
        "Docker containerization for reproducible multi-stage application builds",
        "AWS cloud infrastructure experimentation for compute and deployment",
      ],
      github: null,
      tags: ["Git", "GitHub", "Jenkins", "Docker", "Linux", "AWS"],
      metric: "STATUS: DEVOPS PRACTICAL &middot; CLOUD AUTOMATION LAB",
      badge: "PRACTICAL",
      featured: false,
    },
  ];

  const activeProject = projects.find((p) => p.id === selectedId) || projects[0];
  const ActiveIcon = activeProject.icon;

  return (
    <section id="projects" className="scroll-mt-20 px-4 sm:px-6 md:px-16 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
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
            <span>09 PRODUCTION &amp; RESEARCH BUILDS &middot; SELECT TO INSPECT</span>
          </div>
        </div>

        {/* Master-Detail Split Console (Zero Scroll Bloat!) */}
        <AnimatedSection direction="up" delay={50}>
          <div className="brutal-card border-2 border-[var(--border-color)] overflow-hidden font-mono-code">
            
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column: Project Selector List (5 cols) */}
              <div className="lg:col-span-5 border-b-2 lg:border-b-0 lg:border-r-2 border-[var(--border-color)] bg-[var(--bg-surface)] p-3 sm:p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[var(--border-color)] text-[11px] text-[var(--text-dim)] font-bold px-1">
                    <span>INDEX // 09 SYSTEMS</span>
                    <span>TAG</span>
                  </div>

                  {/* Scrollable list of 9 projects */}
                  <div className="flex flex-col gap-1.5 max-h-[460px] overflow-y-auto pr-1">
                    {projects.map((p) => {
                      const isSelected = p.id === selectedId;
                      const Icon = p.icon;
                      return (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => setSelectedId(p.id)}
                          className={`w-full text-left p-2.5 sm:p-3 border transition-all cursor-pointer flex items-center justify-between gap-3 ${
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

                          <span
                            className={`text-[9px] font-black uppercase px-1.5 py-0.2 flex-shrink-0 border ${
                              isSelected
                                ? "bg-black text-[var(--accent-lime)] border-black"
                                : p.badge === "FLAGSHIP"
                                ? "bg-[var(--accent-lime)] text-black border-black"
                                : "bg-[var(--bg-surface)] text-[var(--text-dim)] border-[var(--border-color)]"
                            }`}
                          >
                            {p.badge}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="hidden lg:flex items-center justify-between pt-3 mt-3 border-t border-[var(--border-color)] text-[10px] text-[var(--text-dim)] px-1">
                  <span>LEDGER STATUS: VERIFIED</span>
                  <span className="text-[var(--accent-lime)] font-bold">LIVE</span>
                </div>
              </div>

              {/* Right Column: Active Project Dossier Inspector (7 cols) */}
              <div className="lg:col-span-7 p-5 sm:p-7 flex flex-col justify-between bg-[var(--bg-card)]">
                
                <div>
                  {/* Active Dossier Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b-2 border-[var(--border-color)] text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-[var(--accent-lime)] border border-black inline-block" />
                      <span className="text-[var(--text-dim)] font-bold text-[11px] truncate">
                        DOSSIER // {activeProject.id} &bull; {activeProject.category}
                      </span>
                    </div>

                    {/* Repository / Link Actions */}
                    <div className="flex items-center gap-2">
                      {activeProject.github && (
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
                      )}

                      {activeProject.liveUrl && (
                        <a
                          href={activeProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-brutal-mono !px-3 !py-1 !text-[11px] inline-flex items-center gap-1.5"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>[ LIVE_SITE ]</span>
                          <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
                        </a>
                      )}

                      {activeProject.referenceRepo && (
                        <a
                          href={activeProject.referenceRepo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 bg-[var(--bg-surface)] border-2 border-[var(--border-color)] hover:border-[var(--accent-lime)] text-[var(--text-main)] hover:text-[var(--accent-lime)] transition text-[11px] font-bold inline-flex items-center gap-1.5"
                          title="Reference / Capstone Research Repository (Sarang-79)"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>[ RESEARCH_REPO ]</span>
                          <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
                        </a>
                      )}

                      {!activeProject.github && !activeProject.referenceRepo && !activeProject.liveUrl && (
                        <span className="px-2.5 py-1 bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-dim)] text-[10px] font-bold uppercase tracking-wider">
                          IN DEVELOPMENT
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 bg-[#0C0D0E] border-2 border-[var(--border-color)] flex items-center justify-center text-[var(--accent-lime)] flex-shrink-0">
                      <ActiveIcon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[var(--text-main)] truncate">
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
                    <span className="text-[var(--accent-lime)] font-bold">SPEC:</span> {activeProject.metric}
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
