import AnimatedSection from "./AnimatedSection";

export default function Leadership() {
  return (
    <section className="relative px-4 sm:px-6 md:px-16 py-14 md:py-16 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <AnimatedSection direction="up" delay={100}>
        <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-primary via-secondary to-primary overflow-hidden">
          <div className="sheen-card rounded-3xl p-8 md:p-12 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Icon/Badge */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-12 h-12 text-white"
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/30 mb-4">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  <span className="text-xs uppercase tracking-widest font-semibold text-secondary">
                    Leadership Role
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-3">
                  President
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Oyster Kode Club
                </h3>
                <p className="text-lg copy-muted leading-relaxed max-w-2xl mx-auto md:mx-0">
                  Leading a community of passionate developers, organizing coding events, and fostering innovation in software development.
                </p>
              </div>
            </div>
          </div>
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

