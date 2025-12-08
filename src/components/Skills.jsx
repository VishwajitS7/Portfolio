import AnimatedSection from "./AnimatedSection";

export default function Skills() {
  const categories = [
    {
      id: "frontend",
      icon: "/logos/frontend.svg",
      title: "Frontend",
      accent: "from-sky-500/70 via-cyan-400/60 to-teal-300/70",
      summary: "Design systems, performant SPA architecture, accessibility-first builds.",
      skills: [
        { name: "HTML", icon: "/logos/html5.svg", level: "Expert" },
        { name: "CSS", icon: "/logos/css.svg", level: "Expert" }, // updated
        { name: "JavaScript", icon: "/logos/javascript.svg", level: "Advanced" },
        { name: "React", icon: "/logos/react.svg", level: "Advanced" },
        { name: "Vite", icon: "/logos/vite.svg", level: "Advanced" },
      ],
    },
    {
      id: "backend",
      icon: "/logos/backend.svg",
      title: "Backend",
      accent: "from-purple-500/60 via-pink-500/50 to-rose-400/60",
      summary: "Robust REST APIs, async processing, observability, and scaling strategies.",
      skills: [
        { name: "Java", icon: "/logos/java.svg", level: "Expert" }, // updated
        { name: "Spring Boot", icon: "/logos/spring.svg", level: "Advanced" },
        { name: "Node.js", icon: "/logos/nodejs.svg", level: "Advanced" },
        { name: "Express", icon: "/logos/express.svg", level: "Proficient" },
      ],
    },
    {
      id: "databases",
      icon: "/logos/databases.svg",
      title: "Databases",
      accent: "from-emerald-400/70 via-lime-300/60 to-teal-400/70",
      summary: "Polyglot persistence spanning relational, document, and in-memory stores.",
      skills: [
        { name: "MongoDB", icon: "/logos/mongodb.svg", level: "Advanced" },
        { name: "MySQL", icon: "/logos/mysql.svg", level: "Advanced" },
        { name: "Firebase", icon: "/logos/firebase.svg", level: "Proficient" },
        { name: "Redis", icon: "/logos/redis.svg", level: "Proficient" },
      ],
    },
    {
      id: "tools",
      icon: "/logos/tools.svg",
      title: "Tools & Platforms",
      accent: "from-blue-500/60 via-indigo-400/50 to-purple-400/60",
      summary: "Productivity stack for CI/CD, API testing, and collaborative delivery.",
      skills: [
        { name: "Git", icon: "/logos/git.svg", level: "Expert" },
        { name: "GitHub", icon: "/logos/github.svg", level: "Expert" },
        { name: "Postman", icon: "/logos/postman.svg", level: "Advanced" },
        { name: "VS Code", icon: "/logos/vscode.svg", level: "Expert" }, // updated
      ],
    },
    {
      id: "cloud",
      icon: "/logos/cloud.svg",
      title: "Cloud",
      accent: "from-cyan-400/70 via-blue-400/60 to-slate-200/70",
      summary: "Deployments on serverless and container platforms with monitoring hooks.",
      skills: [
        { name: "Render", icon: "/logos/render.svg", level: "Advanced" }, // updated
        { name: "Vercel", icon: "/logos/vercel.svg", level: "Advanced" },
        { name: "Netlify", icon: "/logos/netlify.svg", level: "Proficient" },
      ],
    },
    {
      id: "other",
      icon: "/logos/other.svg",
      title: "Other Skills",
      accent: "from-fuchsia-400/60 via-purple-400/60 to-sky-400/60",
      summary: "Problem solving foundations, API standards, and disciplined code craft.",
      skills: [
        { name: "DSA in C++", icon: "/logos/dsa.svg", level: "Advanced" }, // updated
        { name: "OOP Concepts", icon: "/logos/oop.svg", level: "Expert" }, // updated
        { name: "REST API", icon: "/logos/api.svg", level: "Advanced" }, // updated
      ],
    },
  ];

  const highlightStats = [
    {
      label: "Stack DNA",
      value: "Java · Spring · React",
      detail: "Built 10+ end-to-end products with this trio.",
    },
    {
      label: "Delivery Speed",
      value: "2 week sprints",
      detail: "Comfortable shipping increments with CI feedback loops.",
    },
    {
      label: "Quality Focus",
      value: "92% coverage",
      detail: "Lean testing + observability to keep regressions low.",
    },
  ];

  return (
    <section id="skills" className="scroll-mt-20 min-h-screen px-4 sm:px-6 md:px-16 py-16 md:py-20">
      <p className="text-sm uppercase tracking-[0.4em] copy-muted mb-3">Capabilities</p>
      <h2 className="section-heading text-4xl md:text-5xl font-bold gradient-text accent-divider">
        <span className="heading-icon text-sm">&lt;/&gt;</span>
        Technical Skill Matrix
      </h2>
      <p className="text-gray-400 max-w-2xl mt-8 mb-12">
        A blend of frontend craft, backend rigor, and product-minded delivery. Each category highlights the toolkit I rely on
        the most in production.
      </p>

      <AnimatedSection direction="up" delay={100}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {highlightStats.map((item, idx) => (
            <AnimatedSection key={item.label} direction="up" delay={idx * 100}>
              <div className="sheen-card rounded-2xl p-5">
            <p className="text-xs uppercase tracking-[0.3em] copy-muted">{item.label}</p>
            <p className="text-2xl font-semibold gradient-text mt-3">{item.value}</p>
            <p className="text-sm copy-muted mt-2">{item.detail}</p>
          </div>
            </AnimatedSection>
        ))}
      </div>
      </AnimatedSection>

      <AnimatedSection direction="up" delay={200}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {categories.map((cat, idx) => (
            <AnimatedSection key={cat.id} direction="up" delay={idx * 50} className="h-full">
              <SkillCategory {...cat} />
            </AnimatedSection>
        ))}
      </div>
      </AnimatedSection>
    </section>
  );
}

/* SkillCategory — show official logo before title and official skill logos */
function SkillCategory({ icon, title, skills = [], summary }) {
  const levelStyles = {
    Expert: "bg-secondary/10 text-secondary border border-secondary/30",
    Advanced: "bg-primary/10 text-primary border border-primary/30",
    Proficient: "bg-secondary/8 text-secondary/80 border border-secondary/20",
  };

  return (
    <div className="surface-panel rounded-xl overflow-hidden transition-all duration-300 ease-out hover:shadow-xl skill-card-vignette h-full flex flex-col">
        {/* header bar with logo before title */}
        <div className="surface-header px-5 py-4 border-b space-y-2 relative z-10 flex-shrink-0 min-h-[100px]">
          <div className="flex items-center gap-3">
            <img
              src={icon}
              alt={`${title} icon`}
              className="w-6 h-6 object-contain flex-shrink-0"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
            <h3 className="text-sm font-semibold tracking-wide flex-1">{title}</h3>
            <span className="text-[11px] uppercase tracking-widest copy-muted flex-shrink-0">{skills.length} tools</span>
          </div>
          <p className="text-xs copy-muted leading-relaxed line-clamp-2">{summary}</p>
        </div>

        {/* content: fixed height, grid of official logos, scrollable */}
        <div className="p-5 max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent relative z-10">
          <div className="grid grid-cols-3 gap-4 place-items-start">
            {skills.map((s, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 text-center w-full">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-1 shadow-[0_10px_25px_rgba(6,11,24,0.4)] transition-transform duration-200 hover:scale-110 flex-shrink-0 mx-auto">
                  <img
                    src={s.icon}
                    alt={s.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // hide broken image; you can fallback to emoji if desired
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <div className="flex flex-col items-center gap-1 w-full">
                  <p className="text-xs copy-muted truncate w-full px-1" title={s.name}>{s.name}</p>
                  {s.level && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full capitalize whitespace-nowrap ${levelStyles[s.level] || "bg-white/10 text-white/70 border border-white/10"}`}>
                      {s.level}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}
