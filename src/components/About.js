import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaGraduationCap,
  FaCode,
  FaUsers,
} from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

const About = () => {
  const highlights = [
    {
      icon: <FaGraduationCap />,
      title: "Pendidikan",
      text: "S1 Sistem Informasi - UNESA, penjurusan Knowledge Data Discovery (KDD)",
    },
    {
      icon: <FaCode />,
      title: "Fokus Bidang",
      text: "Data Analysis, Machine Learning, Deep Learning, dan AI terapan",
    },
    {
      icon: <FaUsers />,
      title: "Organisasi",
      text: "Aktif di Unit Kegiatan Mahasiswa, mengasah kerja tim & komunikasi",
    },
  ];

  return (
    <section className="about-container" id="about">
      <ScrollReveal>
        <div className="section-head">
          <h2>Mengenal Lebih Dekat</h2>
          <p className="section-subtitle">
            Tentang latar belakang, pendidikan, dan fokus bidang saya
          </p>
        </div>
      </ScrollReveal>

      <div className="about-grid">
        {/* Left: profile card — NO ScrollReveal wrapper to preserve grid child */}
        <div className="about-profile-card">
          <img
            src="/images/profile.png"
            alt="Muhammad Rahman Shiddiq"
            className="about-avatar"
          />
          <h3 className="about-name">Muhammad Rahman Shiddiq</h3>
          <p className="about-job">AI Engineer &amp; Data Scientist</p>

          <div className="about-contact-list">
            <div className="about-contact-row">
              <FaEnvelope />
              <span>rahmanshiddiq09@gmail.com</span>
            </div>
            <div className="about-contact-row">
              <FaMapMarkerAlt />
              <span>Sidoarjo, Krembung — 61275</span>
            </div>
          </div>
        </div>

        {/* Right: description + highlights — NO ScrollReveal wrapper to preserve grid child */}
        <div className="about-detail">
          <p className="about-bio">
            Mahasiswa Universitas Negeri Surabaya Program Studi Sistem Informasi
            dengan penjurusan Knowledge Data Discovery (KDD). Memiliki minat di
            bidang data, analisis sistem, serta pengembangan solusi berbasis
            teknologi dan AI. Memiliki pemahaman dasar hingga menengah dalam
            data analysis, machine learning, serta pengelolaan proyek, dan
            terbiasa menggunakan tools pendukung pengolahan data dan AI.
          </p>

          <div className="about-skills">
            <h4>Keahlian &amp; Tools</h4>
            <div className="skills-grid">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">TensorFlow</span>
              <span className="skill-tag">Jupyter Notebook</span>
              <span className="skill-tag">N8N</span>
              <span className="skill-tag">Machine Learning</span>
              <span className="skill-tag">Data Science</span>
              <span className="skill-tag">Deep Learning</span>
              <span className="skill-tag">NLP</span>
              <span className="skill-tag">Data Analysis</span>
              <span className="skill-tag">Project Management</span>
            </div>
          </div>

          <div className="highlight-cards" style={{ marginTop: "24px" }}>
            {highlights.map((h, i) => (
              <ScrollReveal key={i} direction="right" delay={i * 120}>
                <div className="highlight-card">
                  <span className="highlight-icon">{h.icon}</span>
                  <div>
                    <h4>{h.title}</h4>
                    <p>{h.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
