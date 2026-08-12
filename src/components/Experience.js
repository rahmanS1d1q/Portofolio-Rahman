import React from "react";

const Experience = () => {
  const experiences = [
    {
      period: "2026 — PRESENT",
      organization: "BEM Universitas Negeri Surabaya",
      title: "Staff of Strategic Data Ministry",
      subtitle: "Student Executive Board, UNESA",
      badge: "ACTIVE QUEST",
      badgeColor: "bg-primary text-on-primary",
      icon: "analytics",
      desc: "Support strategic initiatives through data management, organizational analysis, and cross-functional collaboration. Contribute to data-driven planning and decision-making processes by organizing information and improving operational workflows.",
      focus: [
        "DATA MANAGEMENT",
        "DATA ANALYSIS",
        "STRATEGIC PLANNING",
        "ORGANIZATIONAL DEV",
      ],
      isCurrent: true,
    },
    {
      period: "2026",
      organization: "Ascendemy",
      title: "Quality Assurance Specialist",
      subtitle: "Ascendemy",
      badge: "COMPLETED",
      badgeColor: "bg-surface-variant text-on-surface-variant",
      icon: "fact_check",
      desc: "Worked closely with developers and product teams to ensure software quality through functional testing, regression testing, and User Acceptance Testing (UAT). Documented software defects and verified bug fixes before production deployment.",
      focus: [
        "SOFTWARE QA",
        "FUNCTIONAL TESTING",
        "REGRESSION TESTING",
        "UAT",
        "BUG REPORTING",
      ],
      isCurrent: false,
    },
    {
      period: "2025 – 2026",
      organization: "ASAH led by Dicoding",
      title: "Project Manager & Machine Learning Engineer",
      subtitle: "ASAH led by Dicoding",
      badge: "DISTINCTION (TOP 10%)",
      badgeColor: "bg-tertiary text-on-tertiary",
      icon: "engineering",
      desc: "Graduated from the ASAH Program with Distinction (Top 10%) while serving as Project Manager and Machine Learning Engineer. Led the development of the Adaptive Mining Operations Platform (AMOP), an AI-powered Decision Support System for Mining Value Chain Optimization.",
      stats: [
        { label: "AVERAGE SCORE", value: "93.08 / 100" },
        { label: "CAPSTONE PROJECT", value: "AMOP (Mining Operations)" },
      ],
      keyAchievements: [
        "Graduated with Distinction in the Machine Learning Engineer Learning Path (Top 10%).",
        "Led cross-functional collaboration across Machine Learning, Frontend, and Backend teams.",
        "Engineered AMOP AI-powered decision support platform for industrial value chain optimization.",
      ],
      focus: [
        "PROJECT MANAGEMENT",
        "ML ENGINEERING",
        "ARTIFICIAL INTELLIGENCE",
        "DECISION SYSTEMS",
      ],
      isCurrent: false,
    },
    {
      period: "2026",
      organization: "Coding Camp powered by DBS Foundation",
      title: "AI Engineer Cohort",
      subtitle: "Coding Camp powered by DBS Foundation",
      badge: "DISTINCTION (TOP 10%)",
      badgeColor: "bg-tertiary text-on-tertiary",
      icon: "psychology",
      desc: "Successfully completed the AI Engineer Learning Path in the Coding Camp powered by DBS Foundation, graduating with Distinction after completing more than 934 hours of intensive learning. Achieved an average score of 94.20 while building production-ready AI systems.",
      stats: [
        { label: "LEARNING HOURS", value: "934+ Hours" },
        { label: "AVERAGE SCORE", value: "94.20 / 100" },
        { label: "CAPSTONE PROJECT", value: "SmartHire AI" },
      ],
      keyAchievements: [
        "Graduated with Distinction in the AI Engineer Learning Path (Top 10%).",
        "Completed 934+ hours of intensive AI & Machine Learning curriculum.",
        "Developed SmartHire AI for automated candidate screening and resume parsing.",
      ],
      focus: [
        "ARTIFICIAL INTELLIGENCE",
        "MACHINE LEARNING",
        "DEEP LEARNING",
        "PYTHON",
      ],
      isCurrent: false,
    },
  ];

  return (
    <section
      className="w-full px-4 md:px-margin-sm py-12 md:py-margin-lg relative z-10"
      id="experience"
    >
      <div className="max-w-container-max mx-auto space-y-6">
        {/* Header Banner */}
        <header className="bg-surface-container p-gutter border-4 border-black pixel-border flex justify-between items-end relative overflow-hidden">
          <div>
            <span className="font-label-caps text-xs text-secondary block mb-1">
              CAREER_TIMELINE // V3.0
            </span>
            <h2 className="font-headline-lg text-lg sm:text-headline-lg text-primary uppercase">
              EVOLUTIONARY_PATH
            </h2>
            <p className="font-body-md text-on-surface-variant text-xs sm:text-sm mt-1">
              Progression from Information Systems into AI Engineering &amp; ML Leadership.
            </p>
          </div>
          <div className="hidden sm:block opacity-20 pointer-events-none">
            <span className="material-symbols-outlined text-[80px]">
              timeline
            </span>
          </div>
        </header>

        {/* Timeline Items Stack */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <article
              key={idx}
              className="bg-surface-container border-4 border-black pixel-border p-5 sm:p-6 space-y-4 relative"
            >
              {/* Header Row */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-outline pb-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="bg-surface-variant text-primary border-2 border-black font-label-caps text-[9px] px-2.5 py-1">
                    {exp.period}
                  </span>
                  <span
                    className={`font-label-caps text-[8px] px-2 py-0.5 border border-black font-bold ${exp.badgeColor}`}
                  >
                    {exp.badge}
                  </span>
                </div>
                <span className="font-label-caps text-[9px] text-on-surface-variant">
                  {exp.organization}
                </span>
              </div>

              {/* Title & Role */}
              <div>
                <h3 className="font-headline-md text-base sm:text-headline-md text-primary">
                  {exp.title}
                </h3>
              </div>

              {/* Description */}
              <p className="font-body-md text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                {exp.desc}
              </p>

              {/* Stats Box (If applicable) */}
              {exp.stats && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3 bg-surface-container-low border-2 border-black">
                  {exp.stats.map((st, i) => (
                    <div key={i}>
                      <span className="font-label-caps text-[8px] text-on-surface-variant block">
                        {st.label}
                      </span>
                      <span className="font-headline-sm text-xs sm:text-headline-sm text-tertiary">
                        {st.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Key Achievements List (If applicable) */}
              {exp.keyAchievements && (
                <div className="bg-surface-container-low border-2 border-black p-3 space-y-2">
                  <span className="font-label-caps text-[9px] text-primary block">
                    KEY ACHIEVEMENTS:
                  </span>
                  <ul className="space-y-1">
                    {exp.keyAchievements.map((item, k) => (
                      <li
                        key={k}
                        className="font-body-md text-xs text-on-surface-variant flex items-start gap-2"
                      >
                        <span className="text-primary font-bold">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Focus Tags */}
              <div className="pt-1 flex flex-wrap gap-1.5">
                {exp.focus.map((f, fIdx) => (
                  <span
                    key={fIdx}
                    className="bg-surface-container-highest text-on-surface-variant border border-outline px-2 py-0.5 font-label-caps text-[8px]"
                  >
                    #{f}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
