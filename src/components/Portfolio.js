import React, { useState } from "react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Job Classifier NLP",
      category: "Machine Learning",
      filter: "ml",
      desc: "Model multi-class classifier dengan akurasi 87% menggunakan TF-IDF & Random Forest untuk klasifikasi otomatis 10K+ data lowongan pekerjaan.",
      tags: ["Python", "NLP", "Scikit-Learn", "TF-IDF"],
      metrics: "87% Model Accuracy",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      demo: "https://jobclassifier.rahmanlab5.dev",
      github: "https://github.com/rahmanS1d1q/job-classifier",
      detail:
        "Engineered an automated job offer classification system utilizing NLP preprocessing, feature extraction with TF-IDF vectorization, and model training with Ensemble Random Forest. Handled data imbalance using SMOTE and deployed model via a lightweight web interface.",
    },
    {
      id: 2,
      title: "Smart Hire AI",
      category: "AI Platform",
      filter: "ai",
      desc: "Platform AI rekrutmen cerdas dengan resume parsing & automated candidate ranking, diklaim dapat meningkatkan efisiensi screening CV hingga 40%.",
      tags: ["AI", "Resume Parser", "Python", "React"],
      metrics: "+40% Screening Speed",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
      demo: "https://smarthire.rahmanlab5.dev",
      github: "https://github.com/rahmanS1d1q/smart-hire-ai",
      detail:
        "Integrated Natural Language Processing algorithms to automatically parse unstructured candidate CVs, compute match scores based on job requirements, and rank top applicants with detailed candidate breakdown analytics.",
    },
    {
      id: 3,
      title: "Adaptive Mining Operations Platform",
      category: "Decision Support System",
      filter: "ml",
      desc: "Platform sistem pendukung keputusan berbasis AI untuk optimasi dan pemantauan efisiensi operasional alat berat tambang secara real-time.",
      tags: ["Decision System", "MLOps", "FastAPI", "Python"],
      metrics: "Capstone Lead Project",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
      github: "https://github.com/rahmanS1d1q/mining-operations-ai",
      detail:
        "Led a capstone engineering team in building a predictive operational platform for heavy machinery in mining environments. Integrated machine learning forecasting models with interactive dashboard interfaces.",
    },
    {
      id: 4,
      title: "Generative RAG Knowledge Engine",
      category: "In Progress",
      filter: "coming",
      desc: "Riset dan pengembangan pipeline RAG (Retrieval-Augmented Generation) untuk pencarian dokumen teknis dengan vector database.",
      tags: ["LLM", "RAG", "LangChain", "Vector DB"],
      metrics: "Active Research",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
      detail:
        "Building an enterprise document intelligence assistant leveraging hybrid search techniques (dense vector embeddings + BM25 keyword search) for high-precision answer synthesis.",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "ml", label: "Machine Learning" },
    { id: "ai", label: "AI Platform" },
    { id: "coming", label: "Research & MLOps" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.filter === activeFilter);

  return (
    <section
      className="w-full px-4 sm:px-8 lg:px-margin-page py-16 lg:py-section-gap relative bg-surface-container-lowest"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-label-caps text-ink-blue font-semibold text-xs tracking-widest block uppercase mb-2">
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="font-display-lg text-3xl sm:text-4xl text-primary font-bold">
              Selected AI &amp; Engineering Projects
            </h2>
          </div>
          <p className="font-annotation text-outline italic text-sm max-w-sm md:text-right">
            Building scalable, end-to-end intelligent products with measurable business impact.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 pb-4 border-b border-surface-container">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-full font-code-sm text-xs transition-all cursor-pointer ${
                activeFilter === f.id
                  ? "bg-ink-blue text-white font-semibold shadow-sm"
                  : "bg-surface-container hover:bg-surface-container-high text-on-surface-variant"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((item) => (
            <article
              key={item.id}
              className="group bg-background rounded-2xl border border-surface-container overflow-hidden hover:border-ink-blue/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Cover */}
                <div className="relative h-56 w-full bg-surface-container-high overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-md text-white font-code-sm text-xs px-3 py-1 rounded-full flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-accent-cyan"></span>
                    {item.category}
                  </div>
                  {item.metrics && (
                    <div className="absolute bottom-4 right-4 bg-ink-blue/90 text-white font-code-sm text-xs px-3 py-1 rounded-lg font-bold shadow-md">
                      {item.metrics}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="font-display-lg text-2xl text-primary font-bold mb-3 group-hover:text-ink-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-body-md text-on-surface-variant text-sm sm:text-base leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="font-code-sm text-xs bg-surface-container px-2.5 py-1 rounded border border-outline-variant/30 text-on-surface-variant"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="px-6 sm:px-8 pb-6 pt-0 flex items-center justify-between gap-4 border-t border-surface-container/40">
                <button
                  onClick={() => setSelectedProject(item)}
                  className="font-code-sm text-xs text-ink-blue hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">visibility</span>
                  View System Details
                </button>

                <div className="flex items-center gap-3">
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-surface-container hover:bg-ink-blue hover:text-white transition-colors text-primary"
                      title="GitHub Repository"
                    >
                      <span className="material-symbols-outlined text-[18px]">code</span>
                    </a>
                  )}
                  {item.demo && (
                    <a
                      href={item.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-lg bg-ink-blue text-white hover:bg-black font-code-sm text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <span>Live Demo</span>
                      <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-background max-w-2xl w-full rounded-2xl p-6 sm:p-8 border border-surface-container shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            <span className="font-code-sm text-xs text-ink-blue font-bold tracking-widest uppercase block mb-2">
              {selectedProject.category}
            </span>
            <h3 className="font-display-lg text-2xl sm:text-3xl text-primary font-bold mb-4">
              {selectedProject.title}
            </h3>

            <p className="font-body-md text-on-surface-variant text-base leading-relaxed mb-6">
              {selectedProject.detail || selectedProject.desc}
            </p>

            <div className="p-4 bg-surface-container-low rounded-xl mb-6 border border-surface-container">
              <span className="font-code-sm text-xs text-outline block uppercase font-bold mb-2">
                Tech Stack &amp; Tools:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((t) => (
                  <span
                    key={t}
                    className="font-code-sm text-xs bg-surface-container-low px-3 py-1 rounded border border-outline-variant font-medium text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-surface-container">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg border border-outline text-primary hover:bg-surface-container font-code-sm text-xs font-semibold flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px]">code</span>
                  GitHub Repo
                </a>
              )}
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-ink-blue text-white hover:bg-black font-code-sm text-xs font-semibold flex items-center gap-2"
                >
                  <span>Launch Live App</span>
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
