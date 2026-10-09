import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Server, Layout, Database, Wrench, Terminal, Cpu } from "lucide-react";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillGroups = [
    {
      code: "01",
      name: "Backend Core",
      icon: Server,
      skills: [
        { name: "Java 17+", icon: "/logos/java.svg", level: "EXPERT", desc: "Multithreading, Stream APIs, JVM memory model & enterprise patterns" },
        { name: "Spring Boot 3", icon: "/logos/spring.svg", level: "ADVANCED", desc: "Spring Security, JPA/Hibernate, Actuator, Microservice architecture" },
        { name: "REST APIs", icon: "/logos/api.svg", level: "ADVANCED", desc: "HTTP status codes, contract design, JWT guards, input validation" },
        { name: "Node.js", icon: "/logos/nodejs.svg", level: "ADVANCED", desc: "Event loop, asynchronous IO, middleware pipelines, streaming" },
        { name: "Express", icon: "/logos/express.svg", level: "PROFICIENT", desc: "Routing layers, error interceptors, modular controller design" },
      ],
    },
    {
      code: "02",
      name: "Frontend UI",
      icon: Layout,
      skills: [
        { name: "React 19", icon: "/logos/react.svg", level: "ADVANCED", desc: "Custom hooks, Virtual DOM, state management, SPA component trees" },
        { name: "JavaScript", icon: "/logos/javascript.svg", level: "ADVANCED", desc: "ES6+, closures, promises, async/await, DOM optimization" },
        { name: "Vite", icon: "/logos/vite.svg", level: "ADVANCED", desc: "Lightning HMR, rollup chunking, tree-shaking, bundle analyzers" },
        { name: "HTML5", icon: "/logos/html5.svg", level: "EXPERT", desc: "Semantic layout hierarchy, web accessibility (a11y), SEO standards" },
        { name: "CSS3 / Tailwind", icon: "/logos/css.svg", level: "EXPERT", desc: "CSS tokens, flexbox/grid architectures, zero-runtime utilities" },
      ],
    },
    {
      code: "03",
      name: "Persistence",
      icon: Database,
      skills: [
        { name: "MySQL", icon: "/logos/mysql.svg", level: "ADVANCED", desc: "Relational modeling, indexing strategies, complex joins, ACID rules" },
        { name: "MongoDB", icon: "/logos/mongodb.svg", level: "ADVANCED", desc: "BSON documents, aggregation pipelines, replica sets, schema design" },
        { name: "Firebase", icon: "/logos/firebase.svg", level: "PROFICIENT", desc: "Realtime Database, Firestore rules, authentication, event listeners" },
      ],
    },
    {
      code: "04",
      name: "DevOps & CS",
      icon: Wrench,
      skills: [
        { name: "Git & GitHub", icon: "/logos/git.svg", level: "EXPERT", desc: "Branching strategies, commit hygiene, pull requests, CI/CD actions" },
        { name: "Postman", icon: "/logos/postman.svg", level: "ADVANCED", desc: "Contract testing, automated test scripts, mock servers" },
        { name: "Render & Vercel", icon: "/logos/render.svg", level: "ADVANCED", desc: "Continuous deployment triggers, environment configs, health checks" },
        { name: "DSA in C++", icon: "/logos/dsa.svg", level: "ADVANCED", desc: "Pointers, dynamic programming, tree/graph algorithms, Big-O" },
        { name: "OOP Concepts", icon: "/logos/oop.svg", level: "EXPERT", desc: "Encapsulation, Polymorphism, Inheritance, SOLID principles" },
      ],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-20 px-4 sm:px-6 md:px-16 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="section-marker">
              <span>[ 02 // TECHNICAL STACK ]</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[var(--text-main)] mt-1">
              Stack Architecture
            </h2>
          </div>

          <div className="font-mono-code text-xs text-[var(--text-muted)] flex items-center gap-2">
            <span className="w-2 h-2 bg-[var(--accent-lime)] inline-block" />
            <span>22 PRODUCTION TOOLS &middot; COMPACT RUNTIME</span>
          </div>
        </div>

        {/* Compact 4-Column High-Density Grid (All visible at once, no scroll bloat!) */}
        <AnimatedSection direction="up" delay={50}>
          <div className="brutal-card p-5 sm:p-6 border-2 border-[var(--border-color)]">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono-code">
              {skillGroups.map((group) => {
                const IconComponent = group.icon;
                return (
                  <div key={group.code} className="flex flex-col">
                    
                    {/* Column Header */}
                    <div className="flex items-center justify-between pb-2 mb-3 border-b-2 border-[var(--border-color)]">
                      <div className="flex items-center gap-2">
                        <IconComponent className="w-4 h-4 text-[var(--accent-lime)]" />
                        <h3 className="text-xs font-bold text-[var(--text-main)] uppercase tracking-wider font-sans">
                          {group.name}
                        </h3>
                      </div>
                      <span className="text-[10px] text-[var(--text-dim)] font-bold">
                        // {group.code}
                      </span>
                    </div>

                    {/* Skill Badges List */}
                    <div className="flex flex-col gap-1.5 flex-1">
                      {group.skills.map((skill) => (
                        <div
                          key={skill.name}
                          onMouseEnter={() => setHoveredSkill(skill)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className="flex items-center justify-between p-2 bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--accent-lime)] hover:bg-[var(--accent-lime-dim)] transition-colors cursor-pointer group"
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <div className="w-5 h-5 p-0.5 bg-[#0C0D0E] border border-[var(--border-color)] flex items-center justify-center flex-shrink-0">
                              <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                  e.currentTarget.style.display = "none";
                                }}
                              />
                            </div>
                            <span className="text-xs font-bold text-[var(--text-main)] truncate font-sans group-hover:text-[var(--accent-lime)]">
                              {skill.name}
                            </span>
                          </div>

                          <span
                            className={`text-[9px] px-1.5 py-0.2 font-black uppercase flex-shrink-0 ${
                              skill.level === "EXPERT"
                                ? "bg-[var(--accent-lime)] text-black"
                                : "text-[var(--text-dim)] border border-[var(--border-color)]"
                            }`}
                          >
                            {skill.level === "EXPERT" ? "EXP" : skill.level === "ADVANCED" ? "ADV" : "PRO"}
                          </span>
                        </div>
                      ))}
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Interactive Telemetry Inspection Footer */}
            <div className="mt-5 pt-3 border-t-2 border-[var(--border-color)] flex items-center justify-between font-mono-code text-xs">
              <div className="flex items-center gap-2 truncate">
                <Terminal className="w-3.5 h-3.5 text-[var(--accent-lime)] flex-shrink-0" />
                <span className="text-[var(--text-dim)] font-bold">INSPECTOR:</span>
                {hoveredSkill ? (
                  <span className="text-[var(--text-main)] font-semibold truncate">
                    <strong className="text-[var(--accent-lime)]">[{hoveredSkill.name}]</strong> &gt; {hoveredSkill.desc}
                  </span>
                ) : (
                  <span className="text-[var(--text-dim)]">
                    Hover any technology to inspect core competencies and specs.
                  </span>
                )}
              </div>
              <span className="text-[10px] text-[var(--accent-lime)] font-bold flex-shrink-0 hidden sm:inline">
                READY
              </span>
            </div>

          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
