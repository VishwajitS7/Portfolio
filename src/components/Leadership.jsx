import AnimatedSection from "./AnimatedSection";
import { Users, Award, Calendar, Code2, ArrowUpRight } from "lucide-react";

export default function Leadership() {
  const pillars = [
    {
      code: "01",
      icon: Users,
      title: "150+ Peer Mentorship",
      desc: "Structured algorithmic workshops, code walkthroughs, and system design sessions for collegiate software engineers.",
    },
    {
      code: "02",
      icon: Calendar,
      title: "Hackathons & Sprints",
      desc: "Directed end-to-end execution of competitive programming tournaments, problem curation, and automated test evaluation.",
    },
    {
      code: "03",
      icon: Code2,
      title: "Engineering Culture",
      desc: "Instilled strict Git commit standards, pull request review ethics, and modern tech stack exploration across student teams.",
    },
  ];

  return (
    <section className="relative px-4 sm:px-6 md:px-16 py-14 md:py-20">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection direction="up" delay={80}>
          <div className="brutal-card p-8 md:p-12 relative border-2 border-[var(--border-color)]">
            
            {/* Top Bar Sticker */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b-2 border-[var(--border-color)] font-mono-code text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[var(--accent-lime)] border border-black inline-block" />
                <span className="text-[var(--text-main)] font-black uppercase tracking-wider">
                  DISPATCH // EXECUTIVE LEADERSHIP
                </span>
              </div>
              <span className="px-2 py-0.5 bg-[var(--accent-lime)] text-black font-extrabold text-[11px] uppercase">
                ELECTED ROLE
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Big Title & Bio (6 cols) */}
              <div className="lg:col-span-6">
                <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-[var(--text-main)] leading-none">
                  President<br />
                  <span className="text-[var(--accent-lime)]">Oyster Kode Club</span>
                </h2>

                <p className="mt-5 text-base text-[var(--text-muted)] leading-relaxed font-sans">
                  Leading the college's flagship engineering community. Fostering a relentless culture of problem-solving, real-world deployment, and engineering grit among student software developers.
                </p>

                <div className="mt-6 flex flex-wrap gap-2 font-mono-code text-xs">
                  {["COMMUNITY LEAD", "HACKATHON ORGANIZER", "TECH SPEAKER"].map((badge) => (
                    <span
                      key={badge}
                      className="px-2.5 py-1 bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-main)] font-bold"
                    >
                      [{badge}]
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: 3 Pillar Modules (6 cols) */}
              <div className="lg:col-span-6 flex flex-col gap-3">
                {pillars.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.code}
                      className="p-4 bg-[var(--bg-surface)] border-2 border-[var(--border-color)] hover:border-[var(--accent-lime)] transition-colors flex items-start gap-4 font-mono-code"
                    >
                      <div className="w-10 h-10 bg-[#0C0D0E] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-lime)] font-black text-sm flex-shrink-0 mt-0.5">
                        {item.code}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-bold text-[var(--text-main)] font-sans">
                            {item.title}
                          </h3>
                          <Icon className="w-4 h-4 text-[var(--text-muted)] flex-shrink-0" />
                        </div>
                        <p className="text-xs text-[var(--text-muted)] leading-relaxed mt-1 font-sans">
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
