import AnimatedSection from "./AnimatedSection";

export default function Achievements() {
  const data = [
    {
      title: "Code 404 Finalist",
      desc: "Reached the final round in a competitive coding event.",
      year: "2024",
      badge: "Innovation",
    },
    {
      title: "District Level Football Player",
      desc: "Represented at district-level tournaments with outstanding performance.",
      year: "2023",
      badge: "Teamwork",
    },
    {
      title: "Top Performer - Java Programming",
      desc: "Recognized for excellence in Java concepts and backend development.",
      year: "2024",
      badge: "Academics",
    },
    {
      title: "Sketching & Art Recognition",
      desc: "Awarded for creativity and fine sketching skills.",
      year: "2023",
      badge: "Creativity",
    },
    {
      title: "Web Development Contributor",
      desc: "Built and launched multiple full-stack applications.",
      year: "2024",
      badge: "Impact",
    },
    {
      title: "High CGPA Achievement",
      desc: "Maintained an exceptional CGPA of 9.24 in B.Tech CSE.",
      year: "2024",
      badge: "Academic Excellence",
    },
  ];

  return (
    <section id="achievements" className="scroll-mt-20 min-h-screen px-4 sm:px-6 md:px-16 py-16 md:py-20">
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-[0.4em] copy-muted mb-3">Milestones</p>
        <h2 className="section-heading text-4xl font-bold gradient-text accent-divider">
          <span className="heading-icon text-sm">★</span>
          Impact & Achievements
        </h2>
        <p className="copy-muted max-w-3xl mx-auto mt-8">
          A mix of technical accolades and cross-disciplinary wins that shape how I solve problems, collaborate, and keep teams
          moving forward.
        </p>
      </div>

      <div className="relative mt-8">
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-primary/30" />
        <div className="space-y-8">
          {data.map((item, idx) => (
            <AnimatedSection key={idx} direction="left" delay={idx * 100}>
              <AchievementNode {...item} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function AchievementNode({ title, desc, year, badge }) {
  return (
    <div className="relative pl-16 md:pl-20">
      <span className="absolute left-0 top-3 flex items-center justify-center w-10 h-10 rounded-full surface-panel-strong text-sm font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
        {year}
      </span>
      <div className="sheen-card rounded-2xl p-6 backdrop-blur-2xl">
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-xs uppercase tracking-[0.35em] copy-muted">{badge || "Recognition"}</p>
          <span className="text-[11px] px-3 py-1 rounded-full border border-primary/30 text-primary/80">
            {year}
          </span>
        </div>
        <h3 className="text-xl font-semibold mt-3">{title}</h3>
        <p className="copy-muted mt-2 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
