import AnimatedSection from "./AnimatedSection";

export default function Certifications() {
  const certs = [
    { icon: "📜", title: "Java Full-Stack", org: "Coursera", link: "#", tags: ["Course", "Full-stack"] },
    { icon: "🌐", title: "Web Development", org: "Coursera", link: "#", tags: ["Course", "Frontend"] },
    { icon: "📊", title: "Digital Marketing", org: "Great Learning", link: "#", tags: ["Course", "Marketing"] },
    { icon: "🔥", title: "Firebase Fundamentals", org: "Google Firebase", link: "#", tags: ["Platform", "Beginner"] },
    { icon: "🧠", title: "DSA Fundamentals", org: "GFG", link: "#", tags: ["Algorithms", "Practice"] },
    { icon: "⚛️", title: "React Basics", org: "Udemy", link: "#", tags: ["Library", "Frontend"] },
  ];

  return (
    <section id="certs" className="scroll-mt-20 min-h-screen px-4 sm:px-6 md:px-16 py-16 md:py-20">
      <h2 className="section-heading text-4xl font-bold gradient-text accent-divider">
        <span className="heading-icon text-sm">&lt;/&gt;</span>
        Certifications
      </h2>
      <p className="copy-muted max-w-3xl mt-8 mb-12">
        Curated learning paths that sharpened architecture decisions, API craft, and cross-functional collaboration. Each
        credential keeps my toolkit current across backend, frontend, and product thinking.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {certs.map((c, i) => (
          <AnimatedSection key={i} direction="up" delay={i * 100}>
            <CertCard {...c} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

function CertCard({ icon, title, org, link, tags = [] }) {
  return (
    <div className="sheen-card rounded-2xl p-6 backdrop-blur-2xl transition-transform duration-200 hover:-translate-y-1">
      <div className="flex items-start gap-4">
        <div className="text-3xl surface-icon rounded-2xl p-4">{icon}</div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="copy-muted mt-1">{org}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((t, idx) => (
              <span key={idx} className="chip-gradient text-xs px-3 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 px-4 py-2 text-sm rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition"
          >
            Verify
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}
