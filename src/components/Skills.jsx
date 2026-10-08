import AnimatedSection from "./AnimatedSection";
import { Server, Layout, Database, Wrench, Cloud, Binary, Sparkles, Layers } from "lucide-react";

export default function Skills() {
  const categories = [
    {
      id: "backend",
      icon: Server,
      title: "Backend & Systems",
      badge: "Core Specialization",
      accent: "from-indigo-500/20 to-indigo-500/5",
      summary: "High-throughput RESTful services, transactional logic, and scalable architectures.",
      skills: [
        { name: "Java", icon: "/logos/java.svg", level: "Expert" },
        { name: "Spring Boot", icon: "/logos/spring.svg", level: "Advanced" },
        { name: "Node.js", icon: "/logos/nodejs.svg", level: "Advanced" },
        { name: "Express", icon: "/logos/express.svg", level: "Proficient" },
        { name: "REST APIs", icon: "/logos/api.svg", level: "Advanced" },
      ],
    },
    {
      id: "frontend",
      icon: Layout,
      title: "Frontend Engineering",
      badge: "Modern Web",
      accent: "from-cyan-500/20 to-cyan-500/5",
      summary: "Responsive, accessible, and fast Single Page Applications with clean component state.",
      skills: [
        { name: "React", icon: "/logos/react.svg", level: "Advanced" },
        { name: "JavaScript", icon: "/logos/javascript.svg", level: "Advanced" },
        { name: "Vite", icon: "/logos/vite.svg", level: "Advanced" },
        { name: "HTML5", icon: "/logos/html5.svg", level: "Expert" },
        { name: "CSS3", icon: "/logos/css.svg", level: "Expert" },
      ],
    },
    {
      id: "databases",
      icon: Database,
      title: "Databases & Storage",
      badge: "Persistence",
      accent: "from-emerald-500/20 to-emerald-500/5",
      summary: "Relational modeling, document collections, schema design, and query optimization.",
      skills: [
        { name: "MySQL", icon: "/logos/mysql.svg", level: "Advanced" },
        { name: "MongoDB", icon: "/logos/mongodb.svg", level: "Advanced" },
        { name: "Firebase", icon: "/logos/firebase.svg", level: "Proficient" },
      ],
    },
    {
      id: "devops",
      icon: Cloud,
      title: "Cloud & Deployment",
      badge: "Infrastructure",
      accent: "from-sky-500/20 to-sky-500/5",
      summary: "Continuous deployment workflows, environment configuration, and serverless hosting.",
      skills: [
        { name: "Render", icon: "/logos/render.svg", level: "Advanced" },
        { name: "Vercel", icon: "/logos/vercel.svg", level: "Advanced" },
        { name: "Netlify", icon: "/logos/netlify.svg", level: "Proficient" },
      ],
    },
    {
      id: "tools",
      icon: Wrench,
      title: "Engineering Tools",
      badge: "Productivity",
      accent: "from-violet-500/20 to-violet-500/5",
      summary: "Version control hygiene, endpoint contract testing, and developer tooling.",
      skills: [
        { name: "Git", icon: "/logos/git.svg", level: "Expert" },
        { name: "GitHub", icon: "/logos/github.svg", level: "Expert" },
        { name: "Postman", icon: "/logos/postman.svg", level: "Advanced" },
        { name: "VS Code", icon: "/logos/vscode.svg", level: "Expert" },
      ],
    },
    {
      id: "cs",
      icon: Binary,
      title: "CS Foundations",
      badge: "Problem Solving",
      accent: "from-fuchsia-500/20 to-fuchsia-500/5",
      summary: "Strong fundamentals in algorithmic complexity, memory management, and clean OOP design.",
      skills: [
        { name: "DSA in C++", icon: "/logos/dsa.svg", level: "Advanced" },
        { name: "OOP Concepts", icon: "/logos/oop.svg", level: "Expert" },
      ],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-24 px-4 sm:px-6 md:px-16 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection direction="up" delay={50}>
            <div className="section-tag">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CAPABILITIES &amp; TECH STACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Technical Skill Matrix
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              Engineered with a strong focus on backend reliability, modern frontend architecture, and disciplined developer tooling.
            </p>
          </AnimatedSection>
        </div>

        {/* Bento Grid Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {categories.map((cat, idx) => (
            <AnimatedSection key={cat.id} direction="up" delay={idx * 60} className="h-full">
              <SkillCard {...cat} />
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}

function SkillCard(props) {
  const { title, badge, summary, skills = [] } = props;
  const IconComponent = props.icon;
  const levelBadge = {
    Expert: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    Advanced: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    Proficient: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  };

  return (
    <div className="linear-card p-6 h-full flex flex-col justify-between group hover:border-indigo-500/30">
      <div>
        {/* Card Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <IconComponent className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[var(--text-primary)]">
                {title}
              </h3>
              <span className="text-[11px] font-mono-code text-[var(--text-muted)]">
                {skills.length} tools
              </span>
            </div>
          </div>
          <span className="text-[10px] font-mono-code uppercase px-2.5 py-1 rounded-md bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
            {badge}
          </span>
        </div>

        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-6">
          {summary}
        </p>
      </div>

      {/* Skills Pill List (No nested scrollbars!) */}
      <div className="grid grid-cols-2 gap-2.5 mt-auto pt-2">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 p-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:bg-[var(--bg-surface-elevated)] hover:border-indigo-500/30 transition-all"
          >
            <div className="w-7 h-7 rounded-lg bg-[var(--bg-elevated)] p-1 flex items-center justify-center flex-shrink-0">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-5 h-5 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-[var(--text-primary)] truncate">
                {skill.name}
              </p>
              <span
                className={`inline-block text-[9px] font-mono-code px-1.5 py-0.2 rounded border ${
                  levelBadge[skill.level] || "text-[var(--text-muted)]"
                }`}
              >
                {skill.level}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
