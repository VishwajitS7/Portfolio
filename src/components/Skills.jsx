export default function Skills() {
  const categories = [
    {
      id: "frontend",
      icon: "/logos/frontend.svg",
      title: "Frontend",
      skills: [
        { name: "HTML", icon: "/logos/html5.svg" },
        { name: "CSS", icon: "/logos/css.svg" },        // updated
        { name: "JavaScript", icon: "/logos/javascript.svg" },
        { name: "React", icon: "/logos/react.svg" },
        { name: "Vite", icon: "/logos/vite.svg" },
      ],
    },
    {
      id: "backend",
      icon: "/logos/backend.svg",
      title: "Backend",
      skills: [
        { name: "Java", icon: "/logos/java.svg" },      // updated
        { name: "Spring Boot", icon: "/logos/spring.svg" },
        { name: "Node.js", icon: "/logos/nodejs.svg" },
        { name: "Express", icon: "/logos/express.svg" },
      ],
    },
    {
      id: "databases",
      icon: "/logos/databases.svg",
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: "/logos/mongodb.svg" },
        { name: "MySQL", icon: "/logos/mysql.svg" },
        { name: "Firebase", icon: "/logos/firebase.svg" },
        { name: "Redis", icon: "/logos/redis.svg" },
      ],
    },
    {
      id: "tools",
      icon: "/logos/tools.svg",
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: "/logos/git.svg" },
        { name: "GitHub", icon: "/logos/github.svg" },
        { name: "Postman", icon: "/logos/postman.svg" },
        { name: "VS Code", icon: "/logos/vscode.svg" }, // updated
      ],
    },
    {
      id: "cloud",
      icon: "/logos/cloud.svg",
      title: "Cloud",
      skills: [
        { name: "Render", icon: "/logos/render.svg" },  // updated
        { name: "Vercel", icon: "/logos/vercel.svg" },
        { name: "Netlify", icon: "/logos/netlify.svg" },
      ],
    },
    {
      id: "other",
      icon: "/logos/other.svg",
      title: "Other Skills",
      skills: [
        { name: "DSA in C++", icon: "/logos/dsa.svg" }, // updated
        { name: "OOP Concepts", icon: "/logos/oop.svg" },// updated
        { name: "REST API", icon: "/logos/api.svg" },    // updated
      ],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-20 min-h-screen px-6 md:px-16 py-20">
      <h2 className="text-4xl font-bold mb-10 flex items-center gap-3">
        <span className="text-blue-400">&lt;/&gt;</span> Technical Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <SkillCategory key={cat.id} {...cat} />
        ))}
      </div>
    </section>
  );
}

/* SkillCategory — show official logo before title and official skill logos */
function SkillCategory({ icon, title, skills = [] }) {
  return (
    <div className="h-full border border-white/10 bg-white/5 rounded-xl overflow-hidden transform transition-transform duration-200 ease-out hover:scale-105 hover:shadow-lg">
      {/* header bar with logo before title */}
      <div className="flex items-center gap-3 px-4 py-2 bg-white/3 border-b border-white/6">
        <img
          src={icon}
          alt={`${title} icon`}
          className="w-5 h-5 object-contain"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
        <h3 className="text-sm font-semibold text-blue-300">{title}</h3>
      </div>

      {/* content: fixed height, grid of official logos, scrollable */}
      <div className="p-4 max-h-44 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
        <div className="grid grid-cols-3 gap-4 place-items-center">
          {skills.map((s, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-1 shadow-sm">
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
              <p className="text-xs text-gray-300 text-center w-20 truncate">{s.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
