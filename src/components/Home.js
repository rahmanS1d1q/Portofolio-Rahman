import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaFacebookF,
  FaArrowRight,
} from "react-icons/fa";
import ParticleCanvas from "./ParticleCanvas";

const Home = ({ scrollToSection }) => {
  const goToPortfolio = () => {
    scrollToSection("portfolio");
  };

  const stats = [
    { value: "3.75", label: "IPK / 4.00" },
    { value: "2+", label: "Project ML" },
    { value: "5+", label: "Sertifikasi" },
  ];

  const techStack = [
    "Python",
    "TensorFlow",
    "Machine Learning",
    "Data Science",
    "Deep Learning",
  ];

  return (
    <section className="home-container" id="home">
      <div className="hero-bg" />
      <ParticleCanvas />
      <div className="hero-glow" />

      <div className="home-inner">
        {/* Left: Text */}
        <div className="hero-text">
          <div className="availability-badge">
            <span className="status-dot" />
            Tersedia untuk kolaborasi & magang
          </div>

          <p className="hero-greeting">Halo, saya</p>
          <h1>Muhammad Rahman Shiddiq</h1>
          <h2 className="hero-role">
            <span className="role-accent">/</span> AI Engineer &amp; Data
            Scientist
          </h2>

          <p className="subtitle">
            Membangun solusi berbasis data, machine learning, dan AI —{" "}
            <span className="hero-tagline-accent">
              dari analisis hingga deployment.
            </span>
          </p>

          <div className="tech-pills">
            {techStack.map((t) => (
              <span key={t} className="tech-pill">
                {t}
              </span>
            ))}
          </div>

          <div className="hero-buttons">
            <button onClick={goToPortfolio} className="btn btn-filled">
              Lihat Karya <FaArrowRight style={{ marginLeft: 8 }} />
            </button>
            <a
              href="/CV/CV_Muhammad-Rahman-Shiddiq.pdf"
              download
              className="btn"
            >
              Download CV
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/rahmanshiddiq"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/_rahmannn09?"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/rahmanS1d1q"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100005492715647"
              title="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Right: Visual card */}
        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-card-header">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
              <span className="hero-card-title">rahman@portfolio:~</span>
            </div>
            <div className="hero-card-body">
              <p>
                <span className="code-key">const</span>{" "}
                <span className="code-var">developer</span> = {"{"}
              </p>
              <p className="code-indent">
                name: <span className="code-str">"Rahman Shiddiq"</span>,
              </p>
              <p className="code-indent">
                role: <span className="code-str">"AI Engineer"</span>,
              </p>
              <p className="code-indent">
                focus: <span className="code-str">"ML & Data Science"</span>,
              </p>
              <p className="code-indent">
                status: <span className="code-str">"Open to work"</span>
              </p>
              <p>{"};"}
              </p>
              <p className="code-cursor">
                <span className="code-prompt">$</span> _
              </p>
            </div>
          </div>

          <div className="hero-stats">
            {stats.map((s) => (
              <div key={s.label} className="stat-box">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
