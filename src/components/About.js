import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaGraduationCap,
  FaCode,
  FaUsers,
  FaBriefcase,
  FaCertificate,
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
      text: "Data Science, Machine Learning, Deep Learning, dan AI terapan",
    },
    {
      icon: <FaUsers />,
      title: "Organisasi",
      text: "Aktif di Unit Kegiatan Mahasiswa, mengasah kolaborasi tim & komunikasi",
    },
  ];

  const certifications = [
    { name: "Membangun Sistem Machine Learning", issuer: "Dicoding" },
    { name: "Belajar Fundamental Deep Learning", issuer: "Dicoding" },
    { name: "Belajar Machine Learning untuk Pemula", issuer: "Dicoding" },
    { name: "Back-End Web Development", issuer: "Dicoding" },
  ];

  return (
    <section className="about-container" id="about">
      <ScrollReveal>
        <div className="section-head">
          <h2>Mengenal Lebih Dekat</h2>
          <p className="section-subtitle">
            Tentang latar belakang, pendidikan, keahlian, dan pengalaman saya
          </p>
        </div>
      </ScrollReveal>

      <div className="about-grid">
        {/* Left: profile card */}
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

        {/* Right: description + details */}
        <div className="about-detail">
          <p className="about-bio">
            Mahasiswa Sistem Informasi Universitas Negeri Surabaya dengan spesialisasi Knowledge Data Discovery (KDD). Saya fokus membangun sistem cerdas menggunakan machine learning, deep learning, dan analitika data untuk memecahkan masalah nyata — mulai dari klasifikasi teks NLP hingga platform rekrutmen berbasis AI. Senang mengeksplorasi implementasi model ML ke production dan pipeline data end-to-end.
          </p>

          {/* Keahlian & Tools */}
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

          {/* Pengalaman */}
          <div className="about-experience-section">
            <h4>Pengalaman Kerja &amp; Program</h4>
            <div className="about-exp-item">
              <div className="about-exp-header">
                <span className="about-exp-icon"><FaBriefcase /></span>
                <div>
                  <h5>Project Manager &amp; Machine Learning Cohort</h5>
                  <p className="about-exp-sub">Dicoding (WFH) — Studi Independen</p>
                </div>
                <span className="about-exp-date">2024</span>
              </div>
              <ul className="about-exp-bullets">
                <li>Memimpin tim Capstone Project membangun <strong>Adaptive Mining Operations Platform</strong> (sistem pendukung keputusan berbasis AI).</li>
                <li>Merancang dan mengintegrasikan model Machine Learning end-to-end ke sistem web.</li>
                <li>Menyelesaikan kelas Deep Learning, ML Pemula, hingga pembangunan pipeline ML tingkat fundamental.</li>
              </ul>
            </div>
          </div>

          {/* Sertifikasi */}
          <div className="about-certifications-section">
            <h4>Sertifikasi Utama</h4>
            <div className="about-cert-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="about-cert-card">
                  <span className="about-cert-icon"><FaCertificate /></span>
                  <div>
                    <h6>{cert.name}</h6>
                    <p>{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="highlight-cards" style={{ marginTop: "32px" }}>
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
