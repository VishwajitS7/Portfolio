export default function Certifications() {
  const certs = [
    { icon: "📜", title: "Java Programming", org: "Infosys Springboard", link: "#", tags: ["Course", "Intermediate"] },
    { icon: "🌐", title: "Web Development", org: "Great Learning", link: "#", tags: ["Course", "Full-Stack"] },
    { icon: "📊", title: "Digital Marketing", org: "Google Analytics Academy", link: "#", tags: ["Course", "Marketing"] },
    { icon: "🔥", title: "Firebase Fundamentals", org: "Google Firebase", link: "#", tags: ["Platform", "Beginner"] },
    { icon: "🧠", title: "DSA Fundamentals", org: "Coding Ninjas", link: "#", tags: ["Algorithms", "Practice"] },
    { icon: "⚛️", title: "React Basics", org: "Meta", link: "#", tags: ["Library", "Frontend"] },
  ];

  return (
    <section id="certs" className="scroll-mt-20 min-h-screen px-6 md:px-16 py-20">
      <h2 className="text-4xl font-bold mb-10 flex items-center gap-3">
        <span className="text-blue-400">&lt;/&gt;</span> Certifications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certs.map((c, i) => (
          <CertCard key={i} {...c} />
        ))}
      </div>
    </section>
  );
}

function CertCard({ icon, title, org, link, tags = [] }) {
  return (
    <div className="border border-white/10 bg-white/5 p-6 rounded-xl backdrop-blur-xl transform transition-transform duration-200 ease-out hover:scale-105 hover:border-blue-400/40 hover:shadow-lg">
      <div className="flex items-start gap-4">
        <div className="text-3xl bg-white/5 rounded-md p-3">{icon}</div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-blue-300">{title}</h3>
          <p className="text-gray-300 mt-1">{org}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((t, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 rounded-md bg-white/10 border border-white/10 text-gray-200"
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 text-sm border border-blue-300 rounded-md hover:bg-white/10 transition"
          >
            Verify
          </a>
        </div>
      </div>
    </div>
  );
}
