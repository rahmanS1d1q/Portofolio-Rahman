import React, { useState } from "react";
import { FaExternalLinkAlt, FaLock } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      title: "Job Classifier",
      category: "Machine Learning",
      filter: "ml",
      desc: "Klasifikasi lowongan kerja berbasis NLP & machine learning.",
      tags: ["Python", "NLP", "Scikit-learn"],
      image: "/images/portfolio-1.png",
      href: "https://projek-portofolio-1.vercel.app",
    },
    {
      id: 2,
      title: "Smart Hire AI",
      category: "Machine Learning",
      filter: "ml",
      desc: "Platform AI untuk membantu proses rekrutmen yang lebih cerdas.",
      tags: ["AI", "ML", "Web"],
      image: "/images/portfolio-2.png",
      href: "https://smarthire.rahmanlab5.dev",
    },
    {
      id: 3,
      title: "Coming Soon",
      category: "In Progress",
      filter: "coming",
      desc: "Proyek berikutnya sedang dalam pengembangan.",
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
            Showcase project Data, Machine Learning, dan AI
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
          const isActive = Boolean(item.href);
          const CardInner = (
            <>
              <div className="pf-image-wrap">
                <img src={item.image} alt={item.title} />
                <span className={`pf-status ${isActive ? "live" : "soon"}`}>
                  {isActive ? <FaExternalLinkAlt /> : <FaLock />}
                </span>
                {isActive && (
                  <div className="pf-overlay">
                    <span className="pf-overlay-text">
                      Lihat Project <FaExternalLinkAlt />
                    </span>
                  </div>
                )}
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
              </div>
            </>
          );

          return (
            <article
              key={item.id}
              className={`portfolio-item ${isActive ? "" : "is-soon"}`}
            >
              {isActive ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {CardInner}
                </a>
              ) : (
                CardInner
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
