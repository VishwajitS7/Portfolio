import AnimatedSection from "./AnimatedSection";
import { 
  Trophy, 
  Target, 
  GraduationCap, 
  Palette, 
  Code2, 
  Zap 
} from "lucide-react";

export default function Achievements() {
  const milestones = [
    {
      code: "01",
      icon: GraduationCap,
      title: "9.24 CGPA Academic Excellence",
      desc: "Maintained top-tier academic performance throughout B.Tech CSE, ranking in the premier departmental bracket.",
      year: "2024",
      badge: "ACADEMICS",
      highlight: true,
    },
    {
      code: "02",
      icon: Trophy,
      title: "Code 404 Hackathon Finalist",
      desc: "Advanced to final rounds in collegiate competitive coding tournament evaluating algorithmic problem-solving speed.",
      year: "2024",
      badge: "COMPETITION",
      highlight: false,
    },
    {
      code: "03",
      icon: Zap,
      title: "Top Performer — Java Programming",
      desc: "Recognized as top talent for exceptional OOP design, backend system implementation, and clean architecture.",
      year: "2024",
      badge: "ENGINEERING",
      highlight: false,
    },
    {
      code: "04",
      icon: Code2,
      title: "Fullstack Web Contributor",
      desc: "Architected and delivered multiple responsive web applications integrating robust REST APIs and database layers.",
      year: "2024",
      badge: "DELIVERY",
      highlight: false,
    },
    {
      code: "05",
      icon: Target,
      title: "District Level Football Athlete",
      desc: "Represented district-level sports tournaments, honing high-pressure teamwork, discipline, and endurance.",
      year: "2023",
      badge: "ATHLETICS",
      highlight: false,
    },
    {
      code: "06",
      icon: Palette,
      title: "Fine Art & Sketching Recognition",
      desc: "Awarded regional honors for visual composition, creative drawing, and precision craft.",
      year: "2023",
      badge: "CREATIVITY",
      highlight: false,
    },
  ];

  return (
    <section id="achievements" className="scroll-mt-20 px-4 sm:px-6 md:px-16 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-14">
          <AnimatedSection direction="up" delay={40}>
            <div className="section-marker">
              <span>[ 05 // MILESTONE LOG ]</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-[var(--text-main)] mt-2">
              Impact &amp; Milestones
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)] max-w-2xl font-sans">
              Documented track record across engineering rigor, university competitions, and athletic discipline.
            </p>
          </AnimatedSection>
        </div>

        {/* Milestone Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {milestones.map((m, idx) => {
            const Icon = m.icon;
            return (
              <AnimatedSection key={m.code} direction="up" delay={idx * 60}>
                <div
                  className={`brutal-card p-6 h-full flex flex-col justify-between border-2 font-mono-code ${
                    m.highlight ? "border-[var(--accent-lime)]" : "border-[var(--border-color)]"
                  }`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-[var(--border-color)]">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#0C0D0E] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-lime)]">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] text-[var(--text-dim)] font-bold">LOG // {m.code}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 text-[9px] font-black uppercase bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-muted)]">
                          {m.badge}
                        </span>
                        <span className="px-1.5 py-0.5 text-[9px] font-black uppercase bg-[var(--accent-lime)] text-[#0C0D0E]">
                          {m.year}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-display text-xl font-bold uppercase tracking-tight text-[var(--text-main)]">
                      {m.title}
                    </h3>

                    <p className="text-xs text-[var(--text-muted)] leading-relaxed mt-2.5 font-sans">
                      {m.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[var(--border-color)] flex items-center justify-between text-[10px] text-[var(--text-dim)]">
                    <span>RECORD_ID // {m.code}</span>
                    <span className="text-[var(--accent-lime)] font-bold">[VERIFIED]</span>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

      </div>
    </section>
  );
}
