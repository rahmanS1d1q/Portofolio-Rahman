import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaLock } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      title: "Job Classifier",
      category: "Machine Learning",
      filter: "ml",
      desc: "Model multi-class classifier dengan akurasi 87% menggunakan TF-IDF & Random Forest untuk klasifikasi otomatis 10K+ data lowongan pekerjaan.",
      tags: ["Python", "NLP", "Scikit-learn"],
      image: "/images/portfolio-1.png",
      demo: "https://projek-portofolio-1.vercel.app",
      github: "https://github.com/rahmanS1d1q/job-classifier",
    },
    {
      id: 2,
      title: "Smart Hire AI",
      category: "Machine Learning",
      filter: "ml",
      desc: "Platform AI rekrutmen cerdas dengan resume parsing & automated candidate ranking, diklaim dapat meningkatkan efisiensi screening CV hingga 40%.",
      tags: ["AI", "ML", "Web"],
      image: "/images/portfolio-2.png",
      demo: "https://smarthire.rahmanlab5.dev",
      github: "https://github.com/rahmanS1d1q/smart-hire-ai",
    },
    {
      id: 3,
      title: "Coming Soon",
      category: "In Progress",
      filter: "coming",
      desc: "Proyek berikutnya sedang dalam riset dan pengembangan backend pipelines.",
      tags: ["TBA"],
      image: "/images/coming-soon.png",
    },
  ];

  const filters = [
    { id: "all", label: "Semua" },
    { id: "ml", label: "Machine Learning" },
    { id: "coming", label: "In Progress" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.filter === activeFilter);

  return (
    <section className="portfolio-container" id="portfolio">
      <ScrollReveal>
        <div className="section-head">
          <h2>Proyek Terbaru</h2>
          <p className="section-subtitle">
            Showcase project Data, Machine Learning, dan AI dengan metrik &amp; impact nyata
          </p>
        </div>
      </ScrollReveal>

      <div className="filter-row">
        {filters.map((f) => (
          <button
            key={f.id}
            className={`filter-btn ${activeFilter === f.id ? "active" : ""}`}
            onClick={() => setActiveFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filteredItems.map((item) => {
          const hasLinks = Boolean(item.demo || item.github);
          return (
            <article
              key={item.id}
              className={`portfolio-item ${hasLinks ? "" : "is-soon"}`}
            >
              <div className="pf-image-wrap">
                <img src={item.image} alt={item.title} />
                <span className={`pf-status ${hasLinks ? "live" : "soon"}`}>
                  {hasLinks ? <FaExternalLinkAlt /> : <FaLock />}
                </span>
              </div>
              
              <div className="pf-body">
                <span className="pf-category">{item.category}</span>
                <h3 className="pf-title">{item.title}</h3>
                <p className="pf-desc">{item.desc}</p>
                <div className="pf-tags">
                  {item.tags.map((t) => (
                    <span key={t} className="pf-tag">
                      {t}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons for GitHub / Demo */}
                {hasLinks && (
                  <div className="pf-actions">
                    {item.demo && (
                      <a
                        href={item.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pf-btn pf-btn-primary"
                      >
                        Demo <FaExternalLinkAlt style={{ marginLeft: 6, fontSize: 11 }} />
                      </a>
                    )}
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pf-btn pf-btn-secondary"
                      >
                        GitHub <FaGithub style={{ marginLeft: 6, fontSize: 12 }} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
