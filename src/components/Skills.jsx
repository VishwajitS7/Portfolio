import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Cloud, 
  Brain, 
  Terminal, 
  Wrench,
  ArrowRight,
  Sparkles,
  Layers
} from "lucide-react";

export default function Skills() {
  const [selectedCatId, setSelectedCatId] = useState("01");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categories = [
    {
      code: "01",
      id: "01",
      name: "Programming Languages",
      shortName: "Languages",
      icon: Code2,
      skills: [
        { name: "Java", icon: "/logos/java.svg", level: "EXPERT", desc: "Core Java 17+, Multithreading, Stream API, JVM memory model & enterprise software architecture" },
        { name: "JavaScript", icon: "/logos/javascript.svg", level: "EXPERT", desc: "ES6+, event loop runtime, async/await, closures, promises & browser DOM optimization" },
        { name: "TypeScript", icon: "/logos/typescript.svg", level: "ADVANCED", desc: "Strict static typing, complex generics, interfaces & enterprise codebase scalability" },
        { name: "C++", icon: "/logos/cpp.svg", level: "ADVANCED", desc: "STL containers, pointers, manual memory allocation & high-performance algorithmic computing" },
        { name: "Go", icon: "/logos/go.svg", level: "PROFICIENT", desc: "Goroutines, channels, microservices & high-throughput concurrent backend systems" },
        { name: "Python", icon: "/logos/python.svg", level: "ADVANCED", desc: "Automation pipelines, backend scripting, data manipulation & AI algorithms" },
      ],
    },
    {
      code: "02",
      id: "02",
      name: "Frontend Development",
      shortName: "Frontend",
      icon: Layout,
      skills: [
        { name: "React.js", icon: "/logos/react.svg", level: "EXPERT", desc: "Virtual DOM reconciliation, custom hooks, state trees, SPA performance & modern UI craft" },
        { name: "Next.js", icon: "/logos/nextjs.svg", level: "ADVANCED", desc: "App Router, Server Components, SSR/SSG rendering & production fullstack web applications" },
        { name: "HTML5", icon: "/logos/html5.svg", level: "EXPERT", desc: "Semantic layout hierarchy, web accessibility standards (a11y) & SEO performance best practices" },
        { name: "CSS3", icon: "/logos/css.svg", level: "EXPERT", desc: "CSS custom properties, flexbox/grid layout engines, keyframe animations & responsive systems" },
        { name: "Tailwind CSS", icon: "/logos/tailwind.svg", level: "EXPERT", desc: "Utility-first design tokens, custom configs & zero-runtime responsive styles" },
        { name: "shadcn/ui", icon: "/logos/frontend.svg", level: "ADVANCED", desc: "Radix UI primitives, accessible unstyled components & precision design craft" },
        { name: "Vite", icon: "/logos/vite.svg", level: "EXPERT", desc: "Lightning HMR, Rollup chunking, tree-shaking & production build optimization" },
      ],
    },
    {
      code: "03",
      id: "03",
      name: "Backend Development",
      shortName: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", icon: "/logos/nodejs.svg", level: "EXPERT", desc: "Event loop, asynchronous non-blocking I/O, middleware pipelines & streaming buffers" },
        { name: "Express.js", icon: "/logos/express.svg", level: "ADVANCED", desc: "Modular router controllers, middleware chains & centralized error interceptors" },
        { name: "REST APIs", icon: "/logos/api.svg", level: "EXPERT", desc: "HTTP status contracts, endpoint versioning, payload validation & predictable error responses" },
        { name: "NextAuth.js", icon: "/logos/nextjs.svg", level: "ADVANCED", desc: "Stateless session cookies, credentials providers, JWT rotation & security" },
        { name: "JWT Authentication", icon: "/logos/api.svg", level: "ADVANCED", desc: "Stateless token verification, HMAC/RSA cryptography & route authorization guards" },
        { name: "OAuth", icon: "/logos/api.svg", level: "ADVANCED", desc: "Third-party identity federation (Google/GitHub), token exchange & security handshakes" },
      ],
    },
    {
      code: "04",
      id: "04",
      name: "Databases & ORM",
      shortName: "Databases",
      icon: Database,
      skills: [
        { name: "MongoDB", icon: "/logos/mongodb.svg", level: "ADVANCED", desc: "BSON documents, aggregation pipelines ($group, $match), replica sets & compound indexing" },
        { name: "PostgreSQL", icon: "/logos/postgresql.svg", level: "ADVANCED", desc: "ACID transactions, relational schemas, complex joins & query planner optimization" },
        { name: "MySQL", icon: "/logos/mysql.svg", level: "ADVANCED", desc: "Relational modeling, indexing strategies, transactions & foreign key integrity" },
        { name: "Firebase", icon: "/logos/firebase.svg", level: "ADVANCED", desc: "Firestore realtime sync, security rules, cloud authentication & cloud functions" },
        { name: "Prisma", icon: "/logos/prisma.svg", level: "ADVANCED", desc: "Type-safe ORM models, automated schema migrations & connection pool tuning" },
      ],
    },
    {
      code: "05",
      id: "05",
      name: "DevOps & Cloud",
      shortName: "DevOps",
      icon: Cloud,
      skills: [
        { name: "Docker", icon: "/logos/docker.svg", level: "ADVANCED", desc: "Containerization, multi-stage Dockerfiles, network bridges & volume isolation" },
        { name: "AWS", icon: "/logos/aws.svg", level: "ADVANCED", desc: "EC2 compute, S3 object storage, IAM access control & cloud deployments" },
        { name: "Linux", icon: "/logos/linux.svg", level: "ADVANCED", desc: "CLI workflows, shell scripting, process supervision & server administration" },
        { name: "CI/CD", icon: "/logos/github.svg", level: "ADVANCED", desc: "Automated test verification, build artifacts & production deployment triggers" },
        { name: "Jenkins", icon: "/logos/jenkins.svg", level: "PROFICIENT", desc: "Automated build jobs, pipeline-as-code & test verification runners" },
        { name: "Git", icon: "/logos/git.svg", level: "EXPERT", desc: "Branching workflows, rebase hygiene, conflict resolution & commit ethics" },
        { name: "GitHub", icon: "/logos/github.svg", level: "EXPERT", desc: "Pull request reviews, GitHub Actions automation, release tags & collaboration" },
      ],
    },
    {
      code: "06",
      id: "06",
      name: "AI & Data Science",
      shortName: "AI & ML",
      icon: Brain,
      skills: [
        { name: "Python", icon: "/logos/python.svg", level: "ADVANCED", desc: "NumPy vector arrays, Pandas dataframes, data preprocessing & math pipelines" },
        { name: "Machine Learning", icon: "/logos/ai.svg", level: "ADVANCED", desc: "Supervised algorithms, regression, classification & model evaluation metrics" },
        { name: "Jupyter Notebook", icon: "/logos/python.svg", level: "ADVANCED", desc: "Interactive model experimentation, exploratory analysis & visual charts" },
      ],
    },
    {
      code: "07",
      id: "07",
      name: "Tools & Development Practices",
      shortName: "Practices",
      icon: Wrench,
      skills: [
        { name: "VS Code", icon: "/logos/vscode.svg", level: "EXPERT", desc: "Extensions, debugging pipelines, task automation & custom workspaces" },
        { name: "Postman", icon: "/logos/postman.svg", level: "ADVANCED", desc: "API contract testing, automated test scripts & mock environments" },
        { name: "Vercel", icon: "/logos/vercel.svg", level: "ADVANCED", desc: "Continuous deployment triggers, edge functions & production builds" },
        { name: "Monaco Editor", icon: "/logos/vscode.svg", level: "ADVANCED", desc: "Browser-based code editor integration, syntax highlighting & IDE features" },
        { name: "OOP Architecture", icon: "/logos/oop.svg", level: "EXPERT", desc: "Encapsulation, Polymorphism, Inheritance & SOLID design principles" },
        { name: "DSA (C++)", icon: "/logos/dsa.svg", level: "ADVANCED", desc: "Pointers, dynamic programming, tree/graph algorithms & Big-O complexity" },
        { name: "Agile / Scrum", icon: "/logos/tools.svg", level: "ADVANCED", desc: "Sprint cycles, user stories, standups, retrospective reviews & delivery" },
      ],
    },
  ];

  const activeCategory = categories.find((c) => c.id === selectedCatId) || categories[0];
  const ActiveIcon = activeCategory.icon;

  const totalSkills = categories.reduce((sum, c) => sum + c.skills.length, 0);

  return (
    <section id="skills" className="scroll-mt-20 px-4 sm:px-6 md:px-16 py-10 md:py-14">
      <div className="max-w-7xl mx-auto">
        
        {/* Compact Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
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
            <span>{totalSkills} TOOLS &middot; 7 DISCIPLINES &middot; TAP TITLE TO VIEW</span>
          </div>
        </div>

        {/* Space-Efficient Master-Detail Console: Zero Scroll Bloat */}
        <AnimatedSection direction="up" delay={50}>
          <div className="brutal-card border-2 border-[var(--border-color)] overflow-hidden font-mono-code">
            
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column: Category Titles Only (5 cols desktop, horizontal scroll on mobile) */}
              <div className="lg:col-span-5 border-b-2 lg:border-b-0 lg:border-r-2 border-[var(--border-color)] bg-[var(--bg-surface)] p-3 sm:p-4 flex flex-col justify-between">
                
                <div>
                  <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[var(--border-color)] text-[11px] text-[var(--text-dim)] font-bold px-1">
                    <span>DISCIPLINES // 07 DOMAINS</span>
                    <span className="hidden sm:inline">SELECT ON TAP</span>
                  </div>

                  {/* Desktop Vertical Titles / Mobile Horizontal Pills */}
                  <div className="flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-none">
                    {categories.map((cat) => {
                      const isSelected = cat.id === selectedCatId;
                      const IconComponent = cat.icon;

                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setSelectedCatId(cat.id)}
                          className={`flex-shrink-0 lg:w-full text-left p-2.5 sm:p-3 border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                            isSelected
                              ? "bg-[var(--accent-lime)] text-black border-black shadow-[3px_3px_0px_#FFFFFF]"
                              : "border-[var(--border-color)] bg-[var(--bg-canvas)] text-[var(--text-muted)] hover:border-[var(--accent-lime)] hover:text-[var(--text-main)] hover:bg-[var(--bg-surface)]"
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            {/* Code Index */}
                            <div
                              className={`w-6 h-6 border flex items-center justify-center flex-shrink-0 text-[11px] font-bold ${
                                isSelected
                                  ? "bg-black text-[var(--accent-lime)] border-black"
                                  : "bg-[#0C0D0E] text-[var(--text-dim)] border-[var(--border-color)]"
                              }`}
                            >
                              {cat.code}
                            </div>

                            {/* Icon */}
                            <IconComponent className={`w-4 h-4 flex-shrink-0 ${isSelected ? "text-black" : "text-[var(--accent-lime)]"}`} />

                            {/* Title */}
                            <span className="text-xs font-bold font-sans truncate">
                              <span className="lg:hidden">{cat.shortName}</span>
                              <span className="hidden lg:inline">{cat.name}</span>
                            </span>
                          </div>

                          {/* Count Tag */}
                          <div className="flex items-center gap-1.5 flex-shrink-0">
                            <span
                              className={`text-[10px] font-bold px-1.5 py-0.2 border ${
                                isSelected
                                  ? "bg-black text-[var(--accent-lime)] border-black"
                                  : "bg-[var(--bg-surface)] text-[var(--text-dim)] border-[var(--border-color)]"
                              }`}
                            >
                              {cat.skills.length}
                            </span>
                            <ArrowRight className={`w-3.5 h-3.5 hidden lg:inline ${isSelected ? "text-black" : "opacity-0"}`} />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Left Bottom Mini Telemetry Badge */}
                <div className="hidden lg:flex items-center justify-between pt-3 mt-3 border-t border-[var(--border-color)] text-[10px] text-[var(--text-dim)] px-1">
                  <span>RUNTIME SPEC: STACK_V2</span>
                  <span className="text-[var(--accent-lime)] font-bold">READY</span>
                </div>

              </div>

              {/* Right Column: On Tap Stack Appears As A Structured List (7 cols) */}
              <div className="lg:col-span-7 p-4 sm:p-6 bg-[var(--bg-card)] flex flex-col justify-between">
                
                <div>
                  {/* Category Header Bar */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-[var(--border-color)] text-xs">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-7 h-7 bg-[#0C0D0E] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-lime)] flex-shrink-0">
                        <ActiveIcon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-display font-bold text-sm sm:text-base text-[var(--text-main)] uppercase tracking-tight truncate">
                          {activeCategory.name}
                        </h3>
                        <p className="text-[10px] text-[var(--text-dim)] font-mono-code">
                          CATEGORY // {activeCategory.code} &bull; {activeCategory.skills.length} SPECIALIZED TOOLS
                        </p>
                      </div>
                    </div>

                    <span className="text-[10px] bg-[var(--bg-surface)] border border-[var(--border-color)] px-2 py-0.5 text-[var(--accent-lime)] font-bold flex-shrink-0">
                      INSPECTING LIST
                    </span>
                  </div>

                  {/* Stack Appears as a High-Density, Space-Efficient List */}
                  <div className="divide-y divide-[var(--border-color)] max-h-[360px] overflow-y-auto pr-1">
                    {activeCategory.skills.map((skill, idx) => (
                      <div
                        key={skill.name}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="py-2.5 px-2 flex items-center justify-between gap-3 hover:bg-[var(--bg-surface)] transition-colors cursor-pointer group"
                      >
                        {/* Number + Logo + Name */}
                        <div className="flex items-center gap-2.5 min-w-0 sm:w-2/5 flex-shrink-0">
                          <span className="text-[10px] text-[var(--text-dim)] font-bold w-4">
                            {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                          </span>

                          <div className="w-6 h-6 p-0.5 bg-[#0C0D0E] border border-[var(--border-color)] flex items-center justify-center flex-shrink-0 group-hover:border-[var(--accent-lime)] transition-colors">
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                              }}
                            />
                          </div>

                          <span className="font-sans font-bold text-xs sm:text-sm text-[var(--text-main)] group-hover:text-[var(--accent-lime)] transition-colors truncate">
                            {skill.name}
                          </span>
                        </div>

                        {/* Brief Spec Description */}
                        <div className="hidden sm:block flex-1 min-w-0 font-sans text-xs text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors truncate">
                          {skill.desc}
                        </div>

                        {/* Competency Level Badge */}
                        <div className="flex-shrink-0">
                          <span
                            className={`text-[9px] px-1.5 py-0.2 font-black uppercase tracking-wider ${
                              skill.level === "EXPERT"
                                ? "bg-[var(--accent-lime)] text-black"
                                : skill.level === "ADVANCED"
                                ? "bg-[var(--bg-surface)] text-[var(--text-main)] border border-[var(--border-color)]"
                                : "text-[var(--text-dim)] border border-[var(--border-color)]"
                            }`}
                          >
                            {skill.level === "EXPERT" ? "EXPERT" : skill.level === "ADVANCED" ? "ADV" : "PRO"}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Telemetry Inspection Footer */}
                <div className="mt-4 pt-3 border-t-2 border-[var(--border-color)] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 truncate">
                    <Terminal className="w-3.5 h-3.5 text-[var(--accent-lime)] flex-shrink-0" />
                    <span className="text-[var(--text-dim)] font-bold text-[11px]">INSPECTOR:</span>
                    {hoveredSkill ? (
                      <span className="text-[var(--text-main)] font-semibold truncate text-[11px]">
                        <strong className="text-[var(--accent-lime)]">[{hoveredSkill.name}]</strong> &gt; {hoveredSkill.desc}
                      </span>
                    ) : (
                      <span className="text-[var(--text-dim)] text-[11px] truncate">
                        Hover any tool row to view architectural competency details.
                      </span>
                    )}
                  </div>

                  <span className="text-[10px] text-[var(--accent-lime)] font-bold flex-shrink-0 hidden md:inline">
                    STATUS: OK
                  </span>
                </div>

              </div>

            </div>

          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
