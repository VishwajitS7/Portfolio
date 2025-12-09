import AnimatedSection from "./AnimatedSection";

export default function ProjectSection() {
  const projects = [
    {
      icon: "🌐",
      title: "Portfolio Website",
      org: "Personal Project",
      link: "https://github.com/VishwajitS7/portfolio",
      tags: ["React", "Tailwind", "Vite"],
    },
    {
      icon: "🔧",
      title: "Task API",
      org: "Personal Project",
      link: "https://github.com/VishwajitS7/task-api",
      tags: ["Node.js", "Express", "MongoDB"],
    },
    {
      icon: "🛒",
      title: "Spendwise",
      org: "Personal Project",
      link: "https://github.com/VishwajitS7/Spendwise",
      tags: ["React", "AuthJS", "MongoDB"],
    },
    {
      icon: "💬",
      title: "Realtime Quiz App",
      org: "Personal Project",
      link: "https://github.com/VishwajitS7/realtime-quiz",
      tags: ["Vite", "Springboot","Firebase"],
    },
    {
      icon: "🧠",
      title: "Image Classifier",
      org: "Personal Project",
      link: "https://github.com/your-username/image-classifier",
      tags: ["Python", "TensorFlow"],
    },
    {
      icon: "🚀",
      title: "Deployment Demo",
      org: "Personal Project",
      link: "https://github.com/your-username/deploy-demo",
      tags: ["GitHub Actions", "Kubernetes"],
    },
  ];

  return (
    <section id="projects" className="scroll-mt-20 min-h-screen px-4 sm:px-6 md:px-16 py-16 md:py-20">
      <h2 className="section-heading text-4xl font-bold gradient-text accent-divider">
        <span className="heading-icon text-sm">&lt;/&gt;</span>
        Projects
      </h2>

      <p className="copy-muted max-w-3xl mt-8 mb-12">
        Selected engineering builds that demonstrate backend craftsmanship, frontend engineering,
        API development, deployment automation, and hands-on problem-solving across modern stacks.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((p, i) => (
          <AnimatedSection key={i} direction="up" delay={i * 100}>
            <ProjectCard {...p} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ icon, title, org, link, tags = [] }) {
  return (
    <div className="sheen-card rounded-2xl p-6 backdrop-blur-2xl transition-transform duration-200 hover:-translate-y-1">
      <div className="flex items-start gap-4">
        
        {/* Icon Box (matches Certifications) */}
        <div className="text-3xl surface-icon rounded-2xl p-4">
          {icon}
        </div>

        <div className="flex-1">
          {/* Title + Org */}
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="copy-muted mt-1">{org}</p>

          {/* Tags (exact same chip-gradient style) */}
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((t, idx) => (
              <span
                key={idx}
                className="chip-gradient text-xs px-3 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Button (same as Certifications "Verify ↗") */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 px-4 py-2 text-sm rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition"
          >
            View
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}
