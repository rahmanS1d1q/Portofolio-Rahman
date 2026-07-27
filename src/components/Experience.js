import React from "react";

const Experience = () => {
  const experiences = [
    {
      period: "2026 — Present",
      organization: "BEM Universitas Negeri Surabaya",
      title: "Staff of Strategic Data Ministry",
      subtitle: "Student Executive Board, Universitas Negeri Surabaya",
      icon: "analytics",
      desc: "Support strategic initiatives through data management, organizational analysis, and cross-functional collaboration. Contribute to data-driven planning and decision-making processes by organizing information, improving operational workflows, and assisting the Strategic Data Ministry in achieving organizational objectives.",
      focus: [
        "Data Management",
        "Data Analysis",
        "Strategic Planning",
        "Collaboration",
        "Organizational Development",
      ],
      isCurrent: true,
    },
    {
      period: "2026",
      organization: "Ascendemy",
      title: "Quality Assurance Specialist",
      subtitle: "Ascendemy",
      icon: "fact_check",
      desc: "Worked closely with developers and product teams to ensure software quality through functional testing, regression testing, and User Acceptance Testing (UAT). Identified and documented software defects, verified bug fixes, and contributed to improving application reliability before production deployment through structured testing and quality assurance processes.",
      focus: [
        "Software Quality Assurance",
        "Functional Testing",
        "Regression Testing",
        "User Acceptance Testing",
        "Bug Reporting",
      ],
      isCurrent: false,
    },
    {
      period: "2025 – 2026",
      organization: "ASAH led by Dicoding",
      title: "Project Manager & Machine Learning Engineer",
      subtitle: "ASAH led by Dicoding",
      badge: "Graduated with Distinction",
      icon: "engineering",
      desc: "Graduated from the ASAH Program with Distinction (Top 10%) while serving as Project Manager and Machine Learning Engineer. Led the development of the Adaptive Mining Operations Platform (AMOP), an AI-powered Decision Support System for Mining Value Chain Optimization across cross-functional engineering teams.",
      stats: [
        { label: "Average Score", value: "93.08 / 100" },
        { label: "Capstone Project", value: "Adaptive Mining Operations Platform (AMOP)" },
      ],
      keyAchievements: [
        "Graduated with Distinction in the Machine Learning Engineer Learning Path (Top 10%).",
        "Led cross-functional collaboration across Machine Learning, Frontend, and Backend teams.",
        "Engineered AMOP AI-powered decision support platform for industrial value chain optimization.",
      ],
      focus: [
        "Project Management",
        "Machine Learning Engineering",
        "Artificial Intelligence",
        "Decision Support Systems",
        "Data Processing",
        "Cross-functional Leadership",
      ],
      isCurrent: false,
    },
    {
      period: "2026",
      organization: "Coding Camp powered by DBS Foundation",
      title: "AI Engineer Cohort",
      subtitle: "Coding Camp powered by DBS Foundation",
      badge: "Graduated with Distinction",
      icon: "psychology",
      desc: "Successfully completed the AI Engineer Learning Path in the Coding Camp powered by DBS Foundation, graduating with Distinction after completing more than 934 hours of intensive learning. Achieved an average score of 94.20 while building production-ready AI solutions.",
      stats: [
        { label: "Learning Hours", value: "934+ Hours" },
        { label: "Average Score", value: "94.20 / 100" },
        { label: "Capstone Project", value: "SmartHire AI" },
      ],
      keyAchievements: [
        "Graduated with Distinction in the AI Engineer Learning Path (Top 10%).",
        "Completed 934+ hours of intensive AI & Machine Learning curriculum.",
        "Developed SmartHire AI for automated candidate screening and resume parsing.",
      ],
      focus: [
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning",
        "Python",
        "AI Project Development",
      ],
      isCurrent: false,
    },
  ];

  return (
    <section
      className="w-full px-4 sm:px-8 lg:px-margin-page py-16 lg:py-section-gap relative bg-surface-container-lowest"
      id="experience"
    >
      {/* Marginalia Header */}
      <div className="relative mb-12 max-w-7xl mx-auto">
        <div className="absolute left-0 top-0 hidden lg:block">
          <div className="flex flex-col gap-1 [writing-mode:vertical-rl] rotate-180 items-center">
            <span className="font-label-caps text-on-surface-variant/40 tracking-[0.2em] text-[11px]">
              CAREER_TIMELINE.v3
            </span>
            <div className="h-24 w-[1px] bg-notebook-margin mt-4"></div>
          </div>
        </div>
        <div className="ml-0 lg:ml-16">
          <span className="font-label-caps text-ink-blue font-semibold uppercase tracking-widest block mb-2 text-xs">
            EVOLUTIONARY PATH
          </span>
          <h2 className="font-display-lg text-3xl sm:text-4xl text-primary font-bold max-w-3xl">
            Architecture of Experience &amp; Professional Growth.
          </h2>
          <p className="font-body-md text-on-surface-variant text-sm sm:text-base mt-2 max-w-2xl">
            A progression from Information Systems into AI Engineering, Machine Learning, software quality assurance, and organizational leadership.
          </p>
        </div>
      </div>

      {/* Main Experience Timeline Grid */}
      <div className="max-w-5xl mx-auto relative pl-4 lg:pl-12">
        {/* Vertical Connector Line */}
        <div className="absolute left-[19px] lg:left-[51px] top-6 bottom-6 w-0.5 border-l-2 border-dashed border-ink-blue opacity-50 pointer-events-none z-0"></div>

        <div className="space-y-10 ml-8 lg:ml-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Node Icon Circle */}
              <div
                className={`absolute -left-[45px] lg:-left-[57px] top-2 w-8 h-8 bg-background border-2 ${
                  exp.isCurrent ? "border-ink-blue bg-secondary-fixed/30" : "border-outline group-hover:border-ink-blue"
                } rounded-full flex items-center justify-center z-10 transition-colors shadow-sm`}
              >
                <span className="material-symbols-outlined text-[16px] text-ink-blue">
                  {exp.icon}
                </span>
              </div>

              {/* Experience Card */}
              <div className="flex flex-col gap-4 bg-background p-6 sm:p-8 rounded-2xl border border-surface-container hover:border-ink-blue/40 shadow-sm hover:shadow-md transition-all">
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-surface-container/60">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-code-sm text-xs font-bold text-ink-blue bg-secondary-fixed/40 px-3.5 py-1 rounded-full">
                      {exp.period}
                    </span>
                    {exp.badge && (
                      <span className="font-label-caps text-xs font-semibold text-yellow-900 bg-yellow-100 border border-yellow-300 px-3 py-0.5 rounded-full flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px] text-yellow-700">
                          workspace_premium
                        </span>
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  <span className="font-label-caps text-xs text-outline font-medium">
                    {exp.subtitle}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-headline-md text-xl sm:text-2xl text-primary font-bold">
                    {exp.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="font-body-md text-on-surface-variant text-sm sm:text-base leading-relaxed">
                  {exp.desc}
                </p>

                {/* Stats Grid (if applicable) */}
                {exp.stats && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-surface-container-low/70 rounded-xl border border-surface-container">
                    {exp.stats.map((st, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="font-code-sm text-[11px] text-outline uppercase font-semibold">
                          {st.label}
                        </span>
                        <span className="font-display-lg text-lg text-ink-blue font-bold">
                          {st.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Key Achievements List (if applicable) */}
                {exp.keyAchievements && (
                  <div className="p-4 bg-surface-container-low/70 rounded-xl border border-surface-container space-y-2">
                    <span className="font-code-sm text-xs text-primary font-bold uppercase tracking-wider block mb-1">
                      Key Achievements:
                    </span>
                    <ul className="space-y-1.5">
                      {exp.keyAchievements.map((item, k) => (
                        <li key={k} className="flex items-start gap-2 text-xs sm:text-sm text-on-surface-variant">
                          <span className="w-1.5 h-1.5 rounded-full bg-ink-blue mt-1.5 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Focus Badges */}
                <div className="pt-2">
                  <span className="font-code-sm text-[11px] text-outline uppercase tracking-wider block mb-2 font-semibold">
                    Core Focus &amp; Competencies:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {exp.focus.map((f, fIdx) => (
                      <span
                        key={fIdx}
                        className="font-code-sm text-xs bg-surface-container px-2.5 py-1 rounded border border-outline-variant/30 text-on-surface-variant font-medium hover:border-ink-blue/30 transition-colors"
                      >
                        #{f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
