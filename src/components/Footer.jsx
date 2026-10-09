import { Mail, Terminal, ArrowUp } from "lucide-react";
import { Github, Linkedin } from "./Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t-2 border-[var(--border-color)] bg-[var(--bg-canvas)] py-12 px-4 sm:px-6 md:px-16 font-mono-code text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Brand Block */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[var(--accent-lime)] text-black flex items-center justify-center font-bold text-[10px]">
              VS
            </div>
            <span className="font-bold text-[var(--text-main)] uppercase tracking-wider">
              Vishwajit Sutar // Dev
            </span>
          </div>
          <p className="text-[11px] text-[var(--text-muted)]">
            Java Backend Engineer &middot; B.Tech CSE (9.24 CGPA)
          </p>
        </div>

        {/* Center Technical Stamp */}
        <div className="flex flex-col items-center gap-1.5">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[var(--bg-surface)] border border-[var(--border-color)] text-[11px] text-[var(--text-main)] font-bold">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-lime)]" />
            <span>SYS_STATUS: [ ALL_SYSTEMS_NOMINAL ]</span>
          </div>
          <p className="text-[10px] text-[var(--text-dim)] uppercase">
            &copy; {currentYear} Vishwajit Sutar &middot; Built with React 19 &amp; Tailwind CSS
          </p>
        </div>

        {/* Right: Keycaps & Back to Top */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/VishwajitS7"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--accent-lime)] hover:text-[var(--accent-lime)] flex items-center justify-center text-[var(--text-main)] transition cursor-pointer"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/vishwajit-sutar-03324b2b0/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--accent-lime)] hover:text-[var(--accent-lime)] flex items-center justify-center text-[var(--text-main)] transition cursor-pointer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:vishu31103@gmail.com"
            className="w-8 h-8 bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--accent-lime)] hover:text-[var(--accent-lime)] flex items-center justify-center text-[var(--text-main)] transition cursor-pointer"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            className="px-2.5 py-1.5 bg-[var(--accent-lime)] text-black border border-black font-extrabold text-[10px] uppercase flex items-center gap-1 hover:bg-[var(--accent-lime-hover)] transition cursor-pointer ml-2 shadow-[2px_2px_0px_#FFFFFF]"
            title="Return to top"
          >
            <span>TOP</span>
            <ArrowUp className="w-3 h-3 stroke-[3]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
