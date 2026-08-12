import React, { useState } from "react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Smart Hire AI",
      category: "AI Platform",
      filter: "ai",
      badge: "LEGENDARY",
      badgeColor: "bg-tertiary text-on-tertiary",
      desc: "Platform AI rekrutmen cerdas dengan resume parsing & automated candidate ranking untuk efisiensi screening CV hingga +40%.",
      tags: ["AI", "RESUME PARSER", "PYTHON", "REACT"],
      metrics: "+40% SCREENING SPEED",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
      demo: "https://smarthire.rahmanlab5.dev",
      github: "https://github.com/rahmanS1d1q/smart-hire-ai",
      detail:
        "Integrated Natural Language Processing algorithms to automatically parse unstructured candidate CVs, compute match scores based on job requirements, and rank top applicants with detailed candidate breakdown analytics.",
      isFeatured: true,
    },
    {
      id: 2,
      title: "Job Classifier NLP",
      category: "Machine Learning",
      filter: "ml",
      badge: "EPIC",
      badgeColor: "bg-secondary text-on-secondary",
      desc: "Model multi-class classifier dengan akurasi 87% menggunakan TF-IDF & Random Forest untuk klasifikasi otomatis 10K+ data lowongan pekerjaan.",
      tags: ["PYTHON", "NLP", "SCIKIT-LEARN", "TF-IDF"],
      metrics: "87% MODEL ACCURACY",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      demo: "https://jobclassifier.rahmanlab5.dev",
      github: "https://github.com/rahmanS1d1q/job-classifier",
      detail:
        "Engineered an automated job offer classification system utilizing NLP preprocessing, feature extraction with TF-IDF vectorization, and model training with Ensemble Random Forest. Handled data imbalance using SMOTE and deployed model via a lightweight web interface.",
      isFeatured: false,
    },
    {
      id: 3,
      title: "Adaptive Mining Operations (AMOP)",
      category: "Decision Support System",
      filter: "ml",
      badge: "CAPSTONE LEAD",
      badgeColor: "bg-primary text-on-primary",
      desc: "Platform sistem pendukung keputusan berbasis AI untuk optimasi dan pemantauan efisiensi operasional alat berat tambang secara real-time.",
      tags: ["DECISION SYSTEM", "MLOPS", "FASTAPI", "PYTHON"],
      metrics: "AMOP CAPSTONE LEAD",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
      github: "https://github.com/rahmanS1d1q/mining-operations-ai",
      detail:
        "Led a capstone engineering team in building a predictive operational platform for heavy machinery in mining environments. Integrated machine learning forecasting models with interactive dashboard interfaces.",
      isFeatured: false,
    },
    {
      id: 4,
      title: "Generative RAG Knowledge Engine",
      category: "Research & MLOps",
      filter: "coming",
      badge: "RESEARCH",
      badgeColor: "bg-surface-variant text-primary",
      desc: "Riset dan pengembangan pipeline RAG (Retrieval-Augmented Generation) untuk pencarian dokumen teknis dengan vector database.",
      tags: ["LLM", "RAG", "LANGCHAIN", "VECTOR DB"],
      metrics: "ACTIVE RESEARCH",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
      detail:
        "Building an enterprise document intelligence assistant leveraging hybrid search techniques (dense vector embeddings + BM25 keyword search) for high-precision answer synthesis.",
      isFeatured: false,
    },
  ];

  const filters = [
    { id: "all", label: "ALL QUESTS" },
    { id: "ml", label: "MACHINE LEARNING" },
    { id: "ai", label: "AI PLATFORMS" },
    { id: "coming", label: "RESEARCH & MLOPS" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.filter === activeFilter);

  return (
    <section
      className="w-full px-4 md:px-margin-sm py-12 md:py-margin-lg relative z-10"
      id="projects"
    >
      <div className="max-w-container-max mx-auto space-y-6">
        {/* Page Header */}
        <header className="bg-surface-container p-gutter border-4 border-black pixel-border flex justify-between items-end relative overflow-hidden">
          <div className="relative z-10">
            <span className="font-label-caps text-xs text-tertiary block mb-1">
              PROYEK_SYSTEM // V1.0
            </span>
            <h1 className="font-headline-lg text-lg sm:text-headline-lg text-primary uppercase">
              INVENTORY_PROYEK
            </h1>
            <p className="font-body-md text-on-surface-variant text-xs sm:text-sm mt-1">
              Select an item card to inspect stats &amp; live deployment.
            </p>
          </div>
          <div className="absolute -right-8 -bottom-8 opacity-20 pointer-events-none">
            <span className="material-symbols-outlined text-[120px]">
              inventory_2
            </span>
          </div>
        </header>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 font-headline-sm">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-3 py-2 border-2 border-black font-label-caps text-[9px] sm:text-[10px] transition-all cursor-pointer ${
                activeFilter === f.id
                  ? "bg-primary text-on-primary font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  : "bg-surface-container text-on-surface-variant hover:bg-surface-variant"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p) => {
            if (p.isFeatured) {
              return (
                <article
                  key={p.id}
                  onClick={() => setSelectedProject(p)}
                  className="col-span-1 md:col-span-2 bg-surface-container border-4 border-black pixel-border flex flex-col group cursor-pointer hover:border-tertiary transition-colors pixel-border-hover overflow-hidden min-h-[360px]"
                >
                  <div className="h-[220px] w-full border-b-4 border-black relative overflow-hidden bg-surface-variant">
                    <div
                      className="bg-cover bg-center w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url('${p.image}')` }}
                    ></div>
                    <div
                      className={`absolute top-4 left-4 font-label-caps text-[9px] px-2 py-1 border-2 border-black font-bold ${p.badgeColor}`}
                    >
                      {p.badge}
                    </div>
                    <div className="absolute top-4 right-4 bg-background/90 text-primary border-2 border-black font-label-caps text-[8px] px-2 py-1">
                      {p.metrics}
                    </div>
                  </div>

                  <div className="p-4 flex flex-col flex-1 justify-between bg-surface-container group-hover:bg-surface-container-high transition-colors">
                    <div>
                      <h3 className="font-headline-md text-base sm:text-headline-md text-primary mb-2">
                        {p.title}
                      </h3>
                      <p className="font-body-md text-on-surface text-xs sm:text-sm line-clamp-2">
                        {p.desc}
                      </p>
                    </div>
                    <div className="flex gap-2 flex-wrap mt-4">
                      {p.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="bg-surface-container-highest text-on-surface-variant border-2 border-outline px-2 py-0.5 font-label-caps text-[8px]"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            }

            return (
              <article
                key={p.id}
                onClick={() => setSelectedProject(p)}
                className="bg-surface-container border-4 border-black pixel-border flex flex-col group cursor-pointer hover:border-secondary transition-colors pixel-border-hover relative"
              >
                <div className="h-36 w-full border-b-4 border-black bg-surface-variant relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="object-cover w-full h-full image-rendering-pixelated grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <div
                    className={`absolute top-2 left-2 font-label-caps text-[8px] px-1.5 py-0.5 border border-black font-bold ${p.badgeColor}`}
                  >
                    {p.badge}
                  </div>
                </div>

                <div className="p-3 flex flex-col flex-1 justify-between bg-surface-container">
                  <div>
                    <h3 className="font-headline-sm text-xs sm:text-headline-sm text-secondary mb-1">
                      {p.title}
                    </h3>
                    <p className="font-body-md text-on-surface-variant text-xs line-clamp-2">
                      {p.desc}
                    </p>
                  </div>
                  <div className="flex gap-1 flex-wrap mt-3">
                    {p.tags.slice(0, 3).map((t, idx) => (
                      <span
                        key={idx}
                        className="bg-surface-container-highest text-on-surface-variant border border-outline px-1.5 py-0.5 font-label-caps text-[7px]"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}

          {/* CRT Dev Log Terminal Card (Spans 2 cols) */}
          <article className="col-span-1 md:col-span-2 bg-surface-container border-4 border-black pixel-border flex flex-col p-4 relative overflow-hidden group">
            <h3 className="font-headline-sm text-xs text-tertiary border-b-2 border-outline pb-2 mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">terminal</span>
              DEV_LOG.TXT // SYSTEM_STATUS
            </h3>
            <p className="font-body-md text-on-surface-variant text-xs sm:text-sm mb-4 leading-relaxed">
              Currently engineering automated machine learning pipelines and RAG knowledge assistants. Implementing custom decision support systems for industrial optimization. Status: ACTIVE_DEVELOPMENT.
            </p>
            <div className="mt-auto flex justify-between items-center text-[9px] font-label-caps">
              <span className="text-secondary">SYSTEM: OPERATIONAL</span>
              <span className="text-primary animate-pulse">_CURSOR_BLINK</span>
            </div>
          </article>
        </div>
      </div>

      {/* Modal Popup Viewer */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-surface-container border-4 border-black pixel-border max-w-xl w-full p-6 space-y-4 relative">
            <div className="flex justify-between items-start border-b-4 border-black pb-3">
              <div>
                <span className="font-label-caps text-[9px] text-tertiary block mb-1">
                  INSPECT_ITEM // ID #{selectedProject.id}
                </span>
                <h3 className="font-headline-md text-base sm:text-headline-md text-primary">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1 border-2 border-black bg-surface-variant text-primary hover:bg-error hover:text-white"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
              {selectedProject.detail}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {selectedProject.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="bg-surface-container-highest text-on-surface-variant border-2 border-outline px-2 py-0.5 font-label-caps text-[8px]"
                >
                  #{t}
                </span>
              ))}
            </div>

            <div className="flex gap-3 pt-4 border-t-2 border-black">
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chunky-button bg-primary text-on-primary font-headline-sm text-xs py-2.5 px-4 flex items-center gap-1.5"
                >
                  <span>LIVE DEMO</span>
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
              )}
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chunky-button bg-surface-variant text-primary font-headline-sm text-xs py-2.5 px-4 flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[14px]">code</span>
                  <span>GITHUB</span>
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
