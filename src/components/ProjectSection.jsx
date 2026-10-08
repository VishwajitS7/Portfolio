import AnimatedSection from "./AnimatedSection";
import { 
  ExternalLink, 
  Code2, 
  Server, 
  Wallet, 
  MessageSquare, 
  Cpu, 
  Rocket, 
  Sparkles,
  Layers
} from "lucide-react";
import { Github } from "./Icons";

export default function ProjectSection() {
  const projects = [
    {
      icon: Wallet,
      title: "Spendwise",
      category: "Fullstack FinTech App",
      desc: "Comprehensive financial management platform featuring secure auth, transaction categorization, and dynamic expense tracking visualization.",
      github: "https://github.com/VishwajitS7/Spendwise",
      tags: ["React", "Auth.js", "Node.js", "MongoDB", "Tailwind CSS"],
      featured: true,
    },
    {
      icon: MessageSquare,
      title: "Realtime Quiz Platform",
      category: "Concurrent Web Application",
      desc: "Interactive live assessment app built with Spring Boot backend, Firebase realtime sync, and instant scoreboard distribution.",
      github: "https://github.com/VishwajitS7/realtime-quiz",
      tags: ["Spring Boot", "React", "Firebase", "WebSockets", "Vite"],
      featured: true,
    },
    {
      icon: Server,
      title: "Task Management API",
      category: "Backend RESTful Service",
      desc: "Robust REST architecture implementing CRUD operations, token-based user authorization, request validation, and MongoDB aggregation.",
      github: "https://github.com/VishwajitS7/task-api",
      tags: ["Node.js", "Express", "MongoDB", "JWT Auth", "Postman"],
      featured: false,
    },
    {
      icon: Code2,
      title: "Developer Portfolio v2",
      category: "Personal Brand & Showcase",
      desc: "Ultra-fast modern developer portfolio engineered with React 19, Tailwind CSS, EmailJS form validation, and Linear-inspired design tokens.",
      github: "https://github.com/VishwajitS7/portfolio",
      tags: ["React 19", "Vite", "Tailwind CSS", "EmailJS"],
      featured: false,
    },
    {
      icon: Cpu,
      title: "Computer Vision Classifier",
      category: "Deep Learning Pipeline",
      desc: "Convolutional neural network for image classification with preprocessing pipelines, model checkpoints, and evaluation metrics.",
      github: "https://github.com/VishwajitS7",
      tags: ["Python", "TensorFlow", "OpenCV", "NumPy"],
      featured: false,
    },
    {
      icon: Rocket,
      title: "Automated CI/CD Pipeline",
      category: "DevOps & Cloud Orchestration",
      desc: "Demonstration repository showcasing automated GitHub Actions linting, unit test suites, container builds, and deployment verification.",
      github: "https://github.com/VishwajitS7",
      tags: ["GitHub Actions", "Docker", "Linux", "CI/CD"],
      featured: false,
    },
  ];

  return (
    <section id="projects" className="scroll-mt-24 px-4 sm:px-6 md:px-16 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection direction="up" delay={50}>
            <div className="section-tag">
              <Layers className="w-3.5 h-3.5" />
              <span>FEATURED WORK &amp; BUILDS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Engineered Projects
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              Real-world systems highlighting backend architecture, API contract design, responsive React frontends, and deployment automation.
            </p>
          </AnimatedSection>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {projects.map((p, i) => (
            <AnimatedSection key={i} direction="up" delay={i * 80} className="h-full">
              <ProjectCard {...p} />
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectCard(props) {
  const { title, category, desc, github, tags = [], featured } = props;
  const IconComponent = props.icon;
  return (
    <div
      className={`linear-card p-6 h-full flex flex-col justify-between group hover:border-indigo-500/40 ${
        featured ? "linear-card-accent" : ""
      }`}
    >
      <div>
        {/* Header: Icon + Category Badge + External Link */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 group-hover:bg-indigo-500/20 transition-all flex-shrink-0">
            <IconComponent className="w-6 h-6" />
          </div>

          <div className="flex items-center gap-2">
            {featured && (
              <span className="text-[10px] font-mono-code font-semibold uppercase px-2 py-0.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-400">
                Featured
              </span>
            )}
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-white hover:border-indigo-500/40 hover:bg-[var(--bg-surface-elevated)] transition"
              aria-label={`View ${title} on GitHub`}
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Title and Category */}
        <h3 className="text-xl font-bold tracking-tight text-[var(--text-primary)] group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
        <p className="text-xs font-mono-code text-cyan-400/90 mt-1">
          {category}
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mt-3">
          {desc}
        </p>
      </div>

      {/* Footer: Tags and Action Link */}
      <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex flex-col gap-4">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((t, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono-code px-2 py-0.5 rounded-md bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors mt-1 group/btn"
        >
          View Source Code
          <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
}
