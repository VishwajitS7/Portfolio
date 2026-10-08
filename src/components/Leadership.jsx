import AnimatedSection from "./AnimatedSection";
import { Users, Award, Calendar, Sparkles, Terminal, Code2 } from "lucide-react";

export default function Leadership() {
  const highlights = [
    {
      icon: Users,
      title: "Community Builder",
      desc: "Mentoring 150+ developer peers across algorithmic challenges, fullstack architectures, and web fundamentals.",
    },
    {
      icon: Calendar,
      title: "Hackathons & Events",
      desc: "Orchestrated competitive coding hackathons and technical workshops fostering hands-on problem solving.",
    },
    {
      icon: Code2,
      title: "Code Culture",
      desc: "Promoted clean code standards, Git collaboration best practices, and agile team execution.",
    },
  ];

  return (
    <section className="relative px-4 sm:px-6 md:px-16 py-12 md:py-16 overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        <AnimatedSection direction="up" delay={100}>
          <div className="linear-card linear-card-accent p-8 md:p-12 relative overflow-hidden">
            {/* Background ambient flare */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              
              {/* Left Column: Title & Role */}
              <div className="flex-1 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono-code text-indigo-400 mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span>LEADERSHIP HIGHLIGHT</span>
                </div>

                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 flex-shrink-0">
                    <Award className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
                      President
                    </h2>
                    <p className="text-base sm:text-lg font-medium text-indigo-400">
                      Oyster Kode Club
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mt-4">
                  Elected president to lead the flagship computer science club. Spearheading student innovation, organizing state-wide coding hackathons, and empowering peers to transition from classroom theory to production-ready software craft.
                </p>
              </div>

              {/* Right Column: Key Impact Pillars */}
              <div className="w-full lg:w-auto lg:max-w-md flex flex-col gap-3">
                {highlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-indigo-500/30 transition-all flex items-start gap-3.5"
                    >
                      <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
