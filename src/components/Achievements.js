import React from "react";

const Achievements = () => {
  const certifications = [
    { title: "Dicoding — Learn AI", issuer: "VERIFIED" },
    { title: "Dicoding — Machine Learning", issuer: "VERIFIED" },
    { title: "Dicoding — Deep Learning", issuer: "VERIFIED" },
    { title: "IBM SkillsBuild AI", issuer: "IBM" },
    { title: "Programming Logic 101", issuer: "FUNDAMENTALS" },
    { title: "Git & GitHub Workflow", issuer: "TOOLS" },
  ];

  return (
    <section
      className="w-full px-4 md:px-margin-sm py-12 md:py-margin-lg relative z-10"
      id="achievements"
    >
      <div className="max-w-container-max mx-auto space-y-6">
        {/* Header Banner */}
        <header className="bg-surface-container p-gutter border-4 border-black pixel-border flex justify-between items-end relative overflow-hidden">
          <div>
            <span className="font-label-caps text-xs text-tertiary block mb-1">
              RECOGNITIONS // REF_ID: AC-2026
            </span>
            <h2 className="font-headline-lg text-lg sm:text-headline-lg text-primary uppercase">
              VALIDATED_ARTIFACTS
            </h2>
            <p className="font-body-md text-on-surface-variant text-xs sm:text-sm mt-1">
              Formal recognitions, distinction awards, and verified technical paths.
            </p>
          </div>
          <div className="hidden sm:block opacity-20 pointer-events-none">
            <span className="material-symbols-outlined text-[80px]">
              emoji_events
            </span>
          </div>
        </header>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {/* Card 1: Coding Camp powered by DBS Foundation */}
          <article className="group bg-surface-container border-4 border-black pixel-border p-6 flex flex-col justify-between hover:border-tertiary transition-colors pixel-border-hover">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2 pb-3 border-b-2 border-outline">
                <span className="font-label-caps text-[9px] font-bold text-on-tertiary bg-tertiary border border-black px-2 py-0.5">
                  DISTINCTION (TOP 10%)
                </span>
                <span className="font-label-caps text-[9px] text-on-surface-variant">2026</span>
              </div>

              <h3 className="font-headline-md text-base sm:text-headline-md text-primary leading-snug">
                Coding Camp powered by DBS Foundation — Distinction Graduate
              </h3>

              <p className="font-body-md text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                Graduated with Distinction (Top 10%) in the AI Engineer Learning Path after completing 934+ hours of intensive training. Achieved an average score of 94.20 and developed SmartHire AI as the capstone project.
              </p>
            </div>

            <div className="pt-4 border-t-2 border-outline space-y-1.5 font-label-caps text-[8px] text-on-surface-variant mt-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-tertiary border border-black"></span>
                <span>DISTINCTION AWARD (TOP 10%)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-tertiary border border-black"></span>
                <span>AI ENGINEER LEARNING PATH</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-tertiary border border-black"></span>
                <span>AVERAGE SCORE: 94.20 / 100</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-tertiary border border-black"></span>
                <span>CAPSTONE: SMARTHIRE AI</span>
              </div>
            </div>
          </article>

          {/* Card 2: ASAH led by Dicoding */}
          <article className="group bg-surface-container border-4 border-black pixel-border p-6 flex flex-col justify-between hover:border-tertiary transition-colors pixel-border-hover">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2 pb-3 border-b-2 border-outline">
                <span className="font-label-caps text-[9px] font-bold text-on-tertiary bg-tertiary border border-black px-2 py-0.5">
                  DISTINCTION (TOP 10%)
                </span>
                <span className="font-label-caps text-[9px] text-on-surface-variant">2026</span>
              </div>

              <h3 className="font-headline-md text-base sm:text-headline-md text-primary leading-snug">
                ASAH led by Dicoding — Distinction Graduate
              </h3>

              <p className="font-body-md text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                Graduated with Distinction (Top 10%) in the Machine Learning Engineer Learning Path while serving as Project Manager &amp; ML Engineer for the AMOP capstone project. Achieved an average score of 93.08.
              </p>
            </div>

            <div className="pt-4 border-t-2 border-outline space-y-1.5 font-label-caps text-[8px] text-on-surface-variant mt-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-tertiary border border-black"></span>
                <span>DISTINCTION AWARD (TOP 10%)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-tertiary border border-black"></span>
                <span>ML ENGINEER LEARNING PATH</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-tertiary border border-black"></span>
                <span>AVERAGE SCORE: 93.08 / 100</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-tertiary border border-black"></span>
                <span>CAPSTONE: AMOP PLATFORM</span>
              </div>
            </div>
          </article>

          {/* Card 3: Technical Certifications */}
          <article className="bg-surface-container border-4 border-black pixel-border p-6 flex flex-col justify-between hover:border-secondary transition-colors pixel-border-hover">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2 pb-3 border-b-2 border-outline">
                <span className="font-label-caps text-[9px] font-bold text-on-secondary bg-secondary border border-black px-2 py-0.5">
                  VERIFIED CREDENTIALS
                </span>
                <span className="font-label-caps text-[9px] text-on-surface-variant">VERIFIED</span>
              </div>

              <h3 className="font-headline-md text-base sm:text-headline-md text-secondary leading-snug">
                Technical Certifications
              </h3>

              <div className="space-y-1.5 pt-1">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2 rounded bg-surface-container-low border border-outline text-[11px] font-label-caps"
                  >
                    <span className="text-primary truncate">{cert.title}</span>
                    <span className="text-[8px] text-tertiary ml-2">{cert.issuer}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
