import { Mail, Terminal, Heart } from "lucide-react";
import { Github, Linkedin } from "./Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--border-subtle)] bg-[var(--bg-card)]/50 backdrop-blur-xl py-12 px-4 sm:px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start gap-1.5">
          <div className="flex items-center gap-2 font-mono-code text-sm font-bold text-[var(--text-primary)]">
            <div className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center text-white">
              <Terminal className="w-3.5 h-3.5" />
            </div>
            <span>Vishwajit Sutar</span>
          </div>
          <p className="text-xs text-[var(--text-muted)]">
            Java Fullstack Developer &middot; B.Tech CSE (9.24 CGPA)
          </p>
        </div>

        {/* Center: Status & Made With */}
        <div className="flex flex-col items-center gap-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[11px] text-[var(--text-secondary)] font-mono-code">
            <span className="beacon-dot" />
            <span>Systems Normal &middot; Ready to Build</span>
          </div>
          <p className="text-[11px] text-[var(--text-muted)] mt-1">
            &copy; {currentYear} Vishwajit Sutar. Crafted with clean architecture.
          </p>
        </div>

        {/* Right: Social icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/VishwajitS7"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] hover:text-white text-[var(--text-secondary)] transition cursor-pointer"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/vishwajit-sutar-03324b2b0/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] hover:text-white text-[var(--text-secondary)] transition cursor-pointer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:vishu31103@gmail.com"
            className="w-9 h-9 rounded-xl flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] hover:text-white text-[var(--text-secondary)] transition cursor-pointer"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
}
