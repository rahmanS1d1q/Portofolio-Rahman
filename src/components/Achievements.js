import React from "react";

const Achievements = () => {
  const certifications = [
    { title: "Dicoding — Learn AI", issuer: "Dicoding" },
    { title: "Dicoding — Machine Learning", issuer: "Dicoding" },
    { title: "Dicoding — Deep Learning", issuer: "Dicoding" },
    { title: "IBM SkillsBuild", issuer: "IBM" },
    { title: "Programming Logic 101", issuer: "Fundamentals" },
    { title: "Git & GitHub", issuer: "Tools" },
  ];

  return (
    <section
      className="relative px-4 sm:px-8 lg:px-margin-page py-16 lg:py-section-gap overflow-hidden bg-background border-t border-surface-container/60"
      id="achievements"
    >
      {/* Marginalia Sidebar */}
      <div className="absolute left-4 top-section-gap hidden lg:block">
        <div className="[writing-mode:vertical-rl] rotate-180 flex items-center gap-4 text-outline">
          <span className="font-label-caps tracking-widest uppercase text-[11px]">
            Validated Accolades
          </span>
          <div className="w-px h-12 bg-outline/30"></div>
          <span className="font-code-sm text-[11px]">REF_ID: AC-2026</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-3 mb-12">
          <div className="flex items-center gap-3">
            <span className="font-label-caps text-ink-blue bg-secondary-fixed/40 px-3.5 py-1 rounded-full font-semibold text-xs uppercase tracking-wider">
              MILESTONES &amp; ACCOLADES
            </span>
            <div className="h-px flex-grow bg-paper-grid"></div>
          </div>
          <h2 className="font-display-lg text-3xl sm:text-4xl text-primary font-bold">
            Academic &amp; Technical Accolades
          </h2>
          <p className="font-body-md text-on-surface-variant text-sm sm:text-base max-w-2xl">
            Formal recognitions, academic distinction awards, and verified technical learning paths.
          </p>
        </div>

        {/* Clean 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {/* Card 1: Coding Camp powered by DBS Foundation */}
          <div className="bg-surface-container-lowest p-6 sm:p-7 rounded-2xl border border-surface-container hover:border-ink-blue/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-surface-container/60">
                <span className="font-code-sm text-xs font-semibold text-ink-blue bg-secondary-fixed/40 px-2.5 py-1 rounded">
                  Top 10% Graduate
                </span>
                <span className="font-code-sm text-xs text-outline font-medium">2026</span>
              </div>

              <h3 className="font-headline-md text-lg sm:text-xl text-primary font-bold mb-3 leading-snug">
                Coding Camp powered by DBS Foundation — Distinction Graduate
              </h3>

              <p className="font-body-md text-on-surface-variant text-sm mb-6 leading-relaxed">
                Graduated with Distinction in the AI Engineer learning path after completing more than 934 hours of intensive learning. Achieved an average score of 94.20 while developing practical skills in Artificial Intelligence, Machine Learning, and Deep Learning.
              </p>
            </div>

            {/* Compact Metadata */}
            <div className="pt-4 border-t border-surface-container/60 space-y-2 text-xs font-code-sm font-medium text-on-surface-variant">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-ink-blue"></span>
                <span>Top 10% Graduate</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-ink-blue"></span>
                <span>Average Score: 94.20</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-ink-blue"></span>
                <span>934+ Learning Hours</span>
              </div>
            </div>
          </div>

          {/* Card 2: ASAH led by Dicoding */}
          <div className="bg-surface-container-lowest p-6 sm:p-7 rounded-2xl border border-surface-container hover:border-ink-blue/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-surface-container/60">
                <span className="font-code-sm text-xs font-semibold text-ink-blue bg-secondary-fixed/40 px-2.5 py-1 rounded">
                  Graduated with Distinction
                </span>
                <span className="font-code-sm text-xs text-outline font-medium">2026</span>
              </div>

              <h3 className="font-headline-md text-lg sm:text-xl text-primary font-bold mb-3 leading-snug">
                ASAH led by Dicoding
              </h3>

              <p className="font-body-md text-on-surface-variant text-sm mb-6 leading-relaxed">
                Served as Project Manager and Machine Learning Engineer for the Adaptive Mining Operations Platform (AMOP), an AI-powered Decision Support System for Mining Value Chain Optimization. Led cross-functional collaboration while contributing to machine learning development, data processing, and project planning.
              </p>
            </div>

            {/* 3 Key Highlights */}
            <div className="pt-4 border-t border-surface-container/60 space-y-2 text-xs font-code-sm font-medium text-on-surface-variant">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-ink-blue"></span>
                <span>Project Manager</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-ink-blue"></span>
                <span>Machine Learning Engineer</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-ink-blue"></span>
                <span>Distinction Graduate</span>
              </div>
            </div>
          </div>

          {/* Card 3: Technical Certifications */}
          <div className="bg-surface-container-lowest p-6 sm:p-7 rounded-2xl border border-surface-container hover:border-ink-blue/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-surface-container/60">
                <span className="font-code-sm text-xs font-semibold text-primary">
                  Verified Credentials
                </span>
                <span className="font-code-sm text-xs text-outline font-medium">Verified</span>
              </div>

              <h3 className="font-headline-md text-lg sm:text-xl text-primary font-bold mb-3 leading-snug">
                Technical Certifications
              </h3>

              <p className="font-body-md text-on-surface-variant text-sm mb-4 leading-relaxed">
                Verified coursework and technical certifications in Artificial Intelligence, Machine Learning, and Software Development:
              </p>

              {/* Clean Vertical List */}
              <div className="space-y-2">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-background border border-surface-container/80 text-xs font-code-sm"
                  >
                    <span className="font-medium text-primary">{cert.title}</span>
                    <span className="text-[11px] text-outline">{cert.issuer}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
