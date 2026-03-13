import React from "react";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Job Classifier",
      category: "Machine Learning",
      image: "/images/portfolio-1.png",
      href: "https://projek-portofolio-1.vercel.app",
    },
    {
      id: 2,
      title: "Web Design Project",
      category: "Web Design",
      image: "/images/coming-soon.png",
    },
    {
      id: 3,
      title: "Print Advertisement",
      category: "Print Design",
      image: "/images/coming-soon.png",
    },
    {
      id: 4,
      title: "Logo Collection",
      category: "Logo Design",
      image: "/images/coming-soon.png",
    },
    {
      id: 5,
      title: "Packaging Design",
      category: "Packaging",
      image: "/images/coming-soon.png",
    },
    {
      id: 6,
      title: "Mobile App UI",
      category: "UI/UX",
      image: "/images/coming-soon.png",
    },
  ];

  return (
    <div className="portfolio-container" id="portfolio">
      <div className="portfolio-content">
        <h2>PORTFOLIO</h2>
        <p className="portfolio-subtitle">My Recent Work</p>

        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <div key={item.id} className="portfolio-item">
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <img src={item.image} alt={item.title} />
                  <div className="portfolio-overlay">
                    <h3>{item.title}</h3>
                    <p>{item.category}</p>
                  </div>
                </a>
              ) : (
                <>
                  <img src={item.image} alt={item.title} />
                  <div className="portfolio-overlay">
                    <h3>{item.title}</h3>
                    <p>{item.category}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
