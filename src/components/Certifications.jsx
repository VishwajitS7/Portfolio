import AnimatedSection from "./AnimatedSection";
import { 
  FileCheck2, 
  Globe, 
  Flame, 
  Binary, 
  Atom, 
  TrendingUp, 
  ArrowUpRight,
  ShieldCheck 
} from "lucide-react";

export default function Certifications() {
  const certs = [
    {
      code: "01",
      icon: FileCheck2,
      title: "Java Full-Stack Specialization",
      org: "Coursera",
      link: "https://coursera.org",
      tags: ["Core Java", "Spring Boot", "Fullstack"],
      date: "VERIFIED // 2024",
    },
    {
      code: "02",
      icon: Globe,
      title: "Modern Web Development",
      org: "Coursera",
      link: "https://coursera.org",
      tags: ["JavaScript", "HTML/CSS", "Responsive UI"],
      date: "VERIFIED // 2024",
    },
    {
      code: "03",
      icon: Atom,
      title: "React.js Complete Guide",
      org: "Udemy",
      link: "https://udemy.com",
      tags: ["Hooks", "SPA Architecture", "State"],
      date: "VERIFIED // 2024",
    },
    {
      code: "04",
      icon: Binary,
      title: "DSA Fundamentals in C++",
      org: "GeeksforGeeks",
      link: "https://geeksforgeeks.org",
      tags: ["Algorithms", "Data Structures", "Big-O"],
      date: "VERIFIED // 2024",
    },
    {
      code: "05",
      icon: Flame,
      title: "Firebase Cloud Fundamentals",
      org: "Google Firebase",
      link: "https://firebase.google.com",
      tags: ["Realtime Sync", "NoSQL", "Cloud Auth"],
      date: "VERIFIED // 2024",
    },
    {
      code: "06",
      icon: TrendingUp,
      title: "Digital Strategy & Growth",
      org: "Great Learning",
      link: "https://mygreatlearning.com",
      tags: ["Analytics", "Product Growth", "SEO"],
      date: "VERIFIED // 2024",
    },
  ];

  return (
    <section id="certs" className="scroll-mt-20 px-4 sm:px-6 md:px-16 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-14">
          <AnimatedSection direction="up" delay={40}>
            <div className="section-marker">
              <span>[ 04 // ACCREDITATIONS ]</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-[var(--text-main)] mt-2">
              Verified Credentials
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)] max-w-2xl font-sans">
              Rigorous specialized coursework reinforcing practical software design, data structures, and enterprise frameworks.
            </p>
          </AnimatedSection>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {certs.map((c, i) => (
            <AnimatedSection key={c.code} direction="up" delay={i * 60} className="h-full">
              <CertBrutalCard {...c} />
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}

function CertBrutalCard(props) {
  const { code, title, org, link, tags = [], date } = props;
  const IconComponent = props.icon;

  return (
    <div className="brutal-card p-6 h-full flex flex-col justify-between border-2 border-[var(--border-color)] font-mono-code">
      <div>
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-[var(--border-color)]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#0C0D0E] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-lime)]">
              <IconComponent className="w-4 h-4" />
            </div>
            <span className="text-[10px] text-[var(--text-dim)] font-bold">CERT // {code}</span>
          </div>

          <span className="px-2 py-0.5 text-[9px] font-black uppercase bg-[var(--accent-lime)] text-[#0C0D0E]">
            {date}
          </span>
        </div>

        <h3 className="font-display text-xl font-bold uppercase tracking-tight text-[var(--text-main)]">
          {title}
        </h3>

        <p className="text-xs text-[var(--text-muted)] mt-1.5 font-bold">
          ISSUED BY: <span className="text-[var(--text-main)]">{org}</span>
        </p>
      </div>

      {/* Footer Tags & Verification Link */}
      <div className="mt-6 pt-4 border-t-2 border-[var(--border-color)] flex flex-col gap-3">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((t, idx) => (
            <span
              key={idx}
              className="text-[10px] px-2 py-0.5 bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-main)] font-bold"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-bold text-[var(--text-main)] hover:text-[var(--accent-lime)] transition-colors mt-1 group/btn"
        >
          <span>[ VERIFY_CREDENTIAL ]</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
}
