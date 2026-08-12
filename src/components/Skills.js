import React from "react";

const Skills = () => {
  const notebookCards = [
    {
      icon: "psychology",
      title: "Machine Learning",
      desc: "Developing predictive models and deep learning architectures that extract hidden patterns from unstructured data.",
      tag: "PREDICTIVE_MODELS",
    },
    {
      icon: "database",
      title: "Data Engineering",
      desc: "Designing robust pipelines and scalable backend systems to ensure data integrity and real-time processing.",
      tag: "PIPELINE_ARCH",
    },
    {
      icon: "smart_toy",
      title: "AI Solutions",
      desc: "Crafting end-to-end intelligent applications that bridge the gap between core research and user-facing value.",
      tag: "FULLSTACK_AI",
    },
  ];

  const skillCategories = [
    {
      category: "AI & Deep Learning",
      icon: "neurology",
      skills: [
        { name: "Python", level: "EXPERT", percent: 95 },
        { name: "TensorFlow & PyTorch", level: "ADVANCED", percent: 88 },
        { name: "Scikit-Learn", level: "ADVANCED", percent: 90 },
        { name: "NLP & Text Processing", level: "ADVANCED", percent: 85 },
        { name: "LLM & RAG Pipelines", level: "INTERMEDIATE", percent: 82 },
        { name: "Computer Vision", level: "INTERMEDIATE", percent: 78 },
      ],
    },
    {
      category: "Data Engineering & MLOps",
      icon: "account_tree",
      skills: [
        { name: "Pandas & NumPy", level: "EXPERT", percent: 95 },
        { name: "N8N & Automation", level: "ADVANCED", percent: 90 },
        { name: "ETL Data Pipelines", level: "ADVANCED", percent: 88 },
        { name: "PostgreSQL & NoSQL", level: "ADVANCED", percent: 85 },
        { name: "FastAPI & REST APIs", level: "ADVANCED", percent: 86 },
        { name: "Docker & Containerization", level: "INTERMEDIATE", percent: 80 },
      ],
    },
    {
      category: "Full-Stack & QA",
      icon: "terminal",
      skills: [
        { name: "JavaScript & React", level: "ADVANCED", percent: 88 },
        { name: "Tailwind CSS & Design Systems", level: "EXPERT", percent: 92 },
        { name: "Git & GitHub Workflow", level: "ADVANCED", percent: 90 },
        { name: "Software QA & Testing", level: "ADVANCED", percent: 86 },
        { name: "System Architecture", level: "INTERMEDIATE", percent: 82 },
        { name: "CI/CD Pipelines", level: "INTERMEDIATE", percent: 78 },
      ],
    },
  ];

  return (
    <section
      className="w-full px-4 md:px-margin-sm py-12 md:py-margin-lg relative z-10"
      id="skills"
    >
      <div className="max-w-container-max mx-auto space-y-6">
        {/* Header Banner */}
        <header className="bg-surface-container p-gutter border-4 border-black pixel-border flex justify-between items-end relative overflow-hidden">
          <div>
            <span className="font-label-caps text-xs text-secondary block mb-1">
              SKILLS_SYSTEM // TECH_ABILITIES
            </span>
            <h2 className="font-headline-lg text-lg sm:text-headline-lg text-primary uppercase">
              ABILITY_NODES
            </h2>
            <p className="font-body-md text-on-surface-variant text-xs sm:text-sm mt-1">
              Technical proficiencies in Artificial Intelligence, Machine Learning, &amp; Software Engineering.
            </p>
          </div>
          <div className="hidden sm:block opacity-20 pointer-events-none">
            <span className="material-symbols-outlined text-[80px]">
              auto_awesome
            </span>
          </div>
        </header>

        {/* 3 Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {notebookCards.map((card, idx) => (
            <article
              key={idx}
              className="bg-surface-container border-4 border-black pixel-border p-5 space-y-3 relative hover:border-tertiary transition-colors pixel-border-hover"
            >
              <div className="flex justify-between items-center border-b-2 border-outline pb-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary text-[24px]">
                    {card.icon}
                  </span>
                  <h3 className="font-headline-sm text-xs text-primary">
                    {card.title}
                  </h3>
                </div>
                <span className="bg-surface-container-highest text-on-surface-variant px-1.5 py-0.5 border border-black font-label-caps text-[8px]">
                  {card.tag}
                </span>
              </div>
              <p className="font-body-md text-on-surface-variant text-xs leading-relaxed">
                {card.desc}
              </p>
            </article>
          ))}
        </div>

        {/* Detailed Skill Ability Tree */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {skillCategories.map((cat, idx) => (
            <article
              key={idx}
              className="bg-surface-container border-4 border-black pixel-border p-5 space-y-4"
            >
              <div className="flex items-center gap-2 border-b-2 border-outline pb-3">
                <span className="material-symbols-outlined text-secondary text-[22px]">
                  {cat.icon}
                </span>
                <h3 className="font-headline-sm text-xs sm:text-headline-sm text-secondary uppercase">
                  {cat.category}
                </h3>
              </div>

              <div className="space-y-3">
                {cat.skills.map((sk, sIdx) => (
                  <div key={sIdx} className="space-y-1">
                    <div className="flex justify-between items-center text-[10px] font-label-caps">
                      <span className="text-primary font-bold">{sk.name}</span>
                      <span className="text-tertiary">{sk.level}</span>
                    </div>
                    <div className="h-3 w-full bg-surface-container-low border-2 border-black p-0.5">
                      <div
                        className="h-full bg-primary-container"
                        style={{ width: `${sk.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
