import React from "react";

const Skills = () => {
  const notebookCards = [
    {
      icon: "psychology",
      title: "Machine Learning",
      desc: "Developing predictive models and deep learning architectures that extract hidden patterns from unstructured data.",
      tag: "PREDICTIVE ANALYSIS",
    },
    {
      icon: "database",
      title: "Data Engineering",
      desc: "Designing robust pipelines and scalable backend systems to ensure data integrity and real-time processing.",
      tag: "PIPELINE ARCHITECTURE",
    },
    {
      icon: "smart_toy",
      title: "AI Solutions",
      desc: "Crafting end-to-end intelligent applications that bridge the gap between core research and user-facing value.",
      tag: "FULL-STACK AI",
    },
  ];

  const skillCategories = [
    {
      category: "AI & Deep Learning",
      icon: "neurology",
      skills: [
        { name: "Python", level: "Expert", percent: 95 },
        { name: "TensorFlow & Keras", level: "Advanced", percent: 88 },
        { name: "Scikit-Learn", level: "Advanced", percent: 90 },
        { name: "NLP & Text Processing", level: "Advanced", percent: 85 },
        { name: "LLM Fine-tuning & RAG", level: "Intermediate", percent: 82 },
        { name: "Computer Vision", level: "Intermediate", percent: 78 },
      ],
    },
    {
      category: "Data Engineering & MLOps",
      icon: "account_tree",
      skills: [
        { name: "Pandas & NumPy", level: "Expert", percent: 95 },
        { name: "N8N Automation", level: "Advanced", percent: 90 },
        { name: "ETL Data Pipelines", level: "Advanced", percent: 88 },
        { name: "PostgreSQL & NoSQL", level: "Advanced", percent: 85 },
        { name: "Model Deployment & Monitoring", level: "Advanced", percent: 84 },
        { name: "Docker & Containerization", level: "Intermediate", percent: 80 },
      ],
    },
    {
      category: "Full-Stack & Systems",
      icon: "terminal",
      skills: [
        { name: "Tailwind CSS & UI Systems", level: "Expert", percent: 92 },
        { name: "Git & Version Control", level: "Advanced", percent: 90 },
        { name: "JavaScript & React", level: "Advanced", percent: 88 },
        { name: "FastAPI & RESTful APIs", level: "Advanced", percent: 86 },
        { name: "System Architecture", level: "Intermediate", percent: 82 },
        { name: "CI/CD Pipelines", level: "Intermediate", percent: 78 },
      ],
    },
  ];

  return (
    <section
      className="w-full px-4 sm:px-8 lg:px-margin-page py-16 lg:py-section-gap relative bg-background"
      id="skills"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-label-caps text-ink-blue font-semibold text-xs tracking-widest block uppercase mb-2">
              SPECIALIZATIONS &amp; ARSENAL
            </span>
            <h2 className="font-display-lg text-3xl sm:text-4xl text-primary font-bold">
              From The Notebook
            </h2>
          </div>
          <p className="font-annotation text-ink-blue italic text-base max-w-xs md:text-right">
            "Iterative designs for complex neural systems"
          </p>
        </div>

        {/* 3 Specialization Notebook Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {notebookCards.map((card, idx) => (
            <div
              key={idx}
              className="group relative bg-surface-container-lowest border border-outline-variant p-8 rounded-xl shadow-sm hover:border-ink-blue/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center rounded-lg mb-6 group-hover:bg-ink-blue group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-[28px] text-ink-blue group-hover:text-white transition-colors">
                    {card.icon}
                  </span>
                </div>
                <h3 className="font-display-lg text-2xl text-primary font-bold mb-3">
                  {card.title}
                </h3>
                <p className="font-body-md text-on-surface-variant text-sm leading-relaxed mb-6">
                  {card.desc}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-surface-container/60">
                <span className="w-2 h-2 rounded-full bg-ink-blue"></span>
                <span className="font-code-sm text-[11px] text-outline uppercase tracking-wider font-semibold">
                  {card.tag}
                </span>
              </div>

              {/* Hand-drawn style decorative SVG */}
              <svg
                className="absolute top-4 right-4 w-12 h-12 text-ink-blue/5 pointer-events-none"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  fill="none"
                  r="45"
                  stroke="currentColor"
                  strokeDasharray="10 5"
                  strokeWidth="2"
                />
              </svg>
            </div>
          ))}
        </div>

        {/* Technical Arsenal Matrix */}
        <div className="mt-16 bg-surface-container-lowest p-6 sm:p-10 rounded-2xl border border-surface-container shadow-sm">
          <div className="mb-8">
            <span className="font-label-caps text-ink-blue font-semibold text-xs tracking-widest uppercase block mb-1">
              TECHNICAL ARSENAL
            </span>
            <h3 className="font-display-lg text-2xl sm:text-3xl text-primary font-bold">
              Skill Proficiency &amp; Stack Matrix
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skillCategories.map((cat, i) => (
              <div
                key={i}
                className="p-6 bg-background rounded-xl border border-surface-container hover:border-ink-blue/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-surface-container">
                  <div className="w-9 h-9 rounded-lg bg-secondary-fixed/50 flex items-center justify-center">
                    <span className="material-symbols-outlined text-ink-blue text-[20px]">
                      {cat.icon}
                    </span>
                  </div>
                  <h4 className="font-headline-md text-lg text-primary font-bold">
                    {cat.category}
                  </h4>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill, j) => (
                    <div key={j} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs font-code-sm">
                        <span className="text-primary font-medium">{skill.name}</span>
                        <span className="text-ink-blue font-semibold text-[11px] bg-secondary-fixed/40 px-2 py-0.5 rounded font-mono">
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-ink-blue h-full rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.percent}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
