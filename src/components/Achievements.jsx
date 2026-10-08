import AnimatedSection from "./AnimatedSection";
import { 
  Trophy, 
  Target, 
  GraduationCap, 
  Palette, 
  Code2, 
  Sparkles, 
  Award,
  Zap
} from "lucide-react";

export default function Achievements() {
  const milestones = [
    {
      icon: GraduationCap,
      title: "9.24 CGPA Academic Excellence",
      desc: "Maintained a consistent top percentile rank throughout B.Tech Computer Science and Engineering curriculum.",
      year: "2024",
      badge: "Academics",
      badgeColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    },
    {
      icon: Trophy,
      title: "Code 404 Hackathon Finalist",
      desc: "Competed through multi-stage problem solving, algorithmic challenges, and rapid prototyping rounds.",
      year: "2024",
      badge: "Innovation",
      badgeColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    },
    {
      icon: Zap,
      title: "Top Performer — Java Programming",
      desc: "Recognized as top talent for exceptional OOP design, backend system implementation, and clean architecture.",
      year: "2024",
      badge: "Technical Craft",
      badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },
    {
      icon: Code2,
      title: "Fullstack Web Contributor",
      desc: "Engineered and deployed multiple responsive web applications, integrating modern APIs and persistence layers.",
      year: "2024",
      badge: "Product Impact",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: Target,
      title: "District Level Football Athlete",
      desc: "Represented district-level sports tournaments, honing high-pressure teamwork, discipline, and endurance.",
      year: "2023",
      badge: "Teamwork & Grit",
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      icon: Palette,
      title: "Sketching & Fine Art Recognition",
      desc: "Awarded regional honors for visual composition, creative drawing, and attention to detail.",
      year: "2023",
      badge: "Creativity",
      badgeColor: "text-pink-400 bg-pink-500/10 border-pink-500/20",
    },
  ];

  return (
    <section id="achievements" className="scroll-mt-24 px-4 sm:px-6 md:px-16 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection direction="up" delay={50}>
            <div className="section-tag">
              <Trophy className="w-3.5 h-3.5" />
              <span>MILESTONES &amp; RECOGNITION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Impact &amp; Achievements
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              A record of academic discipline, technical competition, and cross-functional leadership.
            </p>
          </AnimatedSection>
        </div>

        {/* Milestone Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {milestones.map((m, idx) => {
            const Icon = m.icon;
            return (
              <AnimatedSection key={idx} direction="up" delay={idx * 70}>
                <div className="linear-card p-6 h-full flex flex-col justify-between group hover:border-indigo-500/40">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-mono-code px-2.5 py-0.5 rounded-full border ${m.badgeColor}`}>
                          {m.badge}
                        </span>
                        <span className="text-xs font-mono-code font-semibold px-2 py-0.5 rounded-md bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-muted)]">
                          {m.year}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-indigo-400 transition-colors">
                      {m.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mt-2.5">
                      {m.desc}
                    </p>
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
