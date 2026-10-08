import AnimatedSection from "./AnimatedSection";
import { 
  FileCheck2, 
  Globe, 
  Flame, 
  Binary, 
  Atom, 
  TrendingUp, 
  ExternalLink, 
  Award,
  CheckCircle2
} from "lucide-react";

export default function Certifications() {
  const certs = [
    {
      icon: FileCheck2,
      title: "Java Full-Stack Specialization",
      org: "Coursera",
      link: "https://coursera.org",
      tags: ["Core Java", "Spring Boot", "Fullstack"],
      date: "Verified Credential",
    },
    {
      icon: Globe,
      title: "Modern Web Development",
      org: "Coursera",
      link: "https://coursera.org",
      tags: ["JavaScript", "HTML/CSS", "Responsive UI"],
      date: "Verified Credential",
    },
    {
      icon: Atom,
      title: "React.js Complete Guide",
      org: "Udemy",
      link: "https://udemy.com",
      tags: ["Hooks", "SPA Architecture", "State"],
      date: "Verified Credential",
    },
    {
      icon: Binary,
      title: "DSA Fundamentals in C++",
      org: "GeeksforGeeks",
      link: "https://geeksforgeeks.org",
      tags: ["Data Structures", "Algorithms", "Optimization"],
      date: "Verified Credential",
    },
    {
      icon: Flame,
      title: "Firebase Cloud Fundamentals",
      org: "Google Firebase",
      link: "https://firebase.google.com",
      tags: ["NoSQL DB", "Realtime Sync", "Cloud"],
      date: "Verified Credential",
    },
    {
      icon: TrendingUp,
      title: "Digital Strategy & Growth",
      org: "Great Learning",
      link: "https://mygreatlearning.com",
      tags: ["Analytics", "Product Growth", "SEO"],
      date: "Verified Credential",
    },
  ];

  return (
    <section id="certs" className="scroll-mt-24 px-4 sm:px-6 md:px-16 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection direction="up" delay={50}>
            <div className="section-tag">
              <Award className="w-3.5 h-3.5" />
              <span>ACCREDITATIONS &amp; LEARNING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Certifications &amp; Credentials
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              Curated coursework and industry-recognized credentials backing practical development craft.
            </p>
          </AnimatedSection>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {certs.map((c, i) => (
            <AnimatedSection key={i} direction="up" delay={i * 70} className="h-full">
              <CertCard {...c} />
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}

function CertCard(props) {
  const { title, org, link, tags = [], date } = props;
  const IconComponent = props.icon;
  return (
    <div className="linear-card p-6 h-full flex flex-col justify-between group hover:border-indigo-500/40">
      <div>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:bg-cyan-500/20 transition-all flex-shrink-0">
            <IconComponent className="w-6 h-6" />
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono-code px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
              <CheckCircle2 className="w-3 h-3" />
              Verified
            </span>
            {date && (
              <span className="text-[9px] font-mono-code text-[var(--text-muted)]">
                {date}
              </span>
            )}
          </div>
        </div>

        <h3 className="text-lg font-bold tracking-tight text-[var(--text-primary)] group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-xs font-mono-code text-[var(--text-secondary)] mt-1 font-medium">
          Issued by: <span className="text-indigo-400">{org}</span>
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex flex-col gap-3">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((t, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono-code px-2 py-0.5 rounded-md bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors mt-1 group/btn"
        >
          View Credential
          <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
}
