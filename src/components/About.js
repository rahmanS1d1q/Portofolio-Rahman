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
      text: "S1 Sistem Informasi - Universitas Negeri Surabaya (UNESA), penjurusan Knowledge Data Discovery (KDD). Expected graduation: 2025. IPK: 3.75/4.0",
    },
    {
      icon: <FaCode />,
      title: "Fokus Bidang",
      text: "Machine Learning Engineering, Data Science, Deep Learning, NLP, dan MLOps — dari model development hingga production deployment",
    },
    {
      icon: <FaUsers />,
      title: "Organisasi",
      text: "Aktif di Unit Kegiatan Mahasiswa UNESA, mengasah kolaborasi tim, project management, dan soft skills",
    },
  ];

  const certifications = [
    { name: "Membangun Sistem Machine Learning", issuer: "Dicoding", date: "2024", credentialId: "MLTQ8K7RXZWX" },
    { name: "Belajar Fundamental Deep Learning", issuer: "Dicoding", date: "2024", credentialId: "DL4K6N2MPVYG" },
    { name: "Belajar Machine Learning untuk Pemula", issuer: "Dicoding", date: "2023", credentialId: "ML1R9W3QXKZJ" },
    { name: "Back-End Web Development", issuer: "Dicoding", date: "2023", credentialId: "BE8M4T5HLPNR" },
    { name: "Belajar Data Science untuk Pemula", issuer: "Dicoding", date: "2023", credentialId: "DS7P2Y6VCJWM" },
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
            Mahasiswa Sistem Informasi Universitas Negeri Surabaya (UNESA) dengan spesialisasi Knowledge Data Discovery (KDD), fokus pada applied AI dan machine learning engineering. Pengalaman membangun sistem production-ready — dari NLP text classifier dengan 89% accuracy hingga full-stack AI recruitment platform yang digunakan untuk screening kandidat. Passionate tentang bridging gap antara model ML dan real-world deployment, dengan hands-on experience di TensorFlow, FastAPI, dan cloud MLOps pipeline. Aktif di komunitas data science dan open to collaborate pada proyek AI yang solve real problems.
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
          <div className="about-experiences-section">
            <h4>Pengalaman Kerja & Program</h4>

            <div className="about-exp-item">
              <div className="about-exp-header">
                <span className="about-exp-icon"><FaBriefcase /></span>
                <div>
                  <h5>AI Engineering Cohort</h5>
                  <p className="about-exp-sub">Coding Camp 26 powered by DBS Foundation (Remote)</p>
                </div>
                <span className="about-exp-date">Feb 2026 - Jul 2026</span>
              </div>
              <ul className="about-exp-bullets">
                <li>Menyelesaikan seluruh learning path AI Engineering dengan tingkat kelulusan 100% serta memperoleh hasil maksimal pada seluruh submission kelas.</li>
                <li>Mengimplementasikan berbagai model Machine Learning dan Deep Learning menggunakan TensorFlow untuk menyelesaikan permasalahan dunia nyata berbasis data.</li>
                <li>Berkolaborasi dalam pengembangan proyek capstone berbasis AI yang mengintegrasikan Machine Learning, Back-End Development, dan Cloud Computing yang berjudul Smart Hire AI, dengan akurasi model 90%.</li>
              </ul>
            </div>

            <div className="about-exp-item">
              <div className="about-exp-header">
                <span className="about-exp-icon"><FaBriefcase /></span>
                <div>
                  <h5>Quality Assurance Specialist</h5>
                  <p className="about-exp-sub">Ascendemy.id — Surabaya</p>
                </div>
                <span className="about-exp-date">Feb 2026 - Jun 2026</span>
              </div>
              <ul className="about-exp-bullets">
                <li>Berhasil mengidentifikasi dan mendokumentasikan lebih dari 50 bug selama proses pengujian, membantu meningkatkan stabilitas aplikasi sebelum rilis.</li>
                <li>Memastikan seluruh fitur prioritas tinggi lolos proses validasi sebelum deployment dengan tingkat keberhasilan pengujian di atas 95%.</li>
                <li>Berkolaborasi dengan tim developer untuk mempercepat proses reproduksi dan penyelesaian bug sehingga waktu penyelesaian isu menjadi lebih efisien.</li>
              </ul>
            </div>

            <div className="about-exp-item">
              <div className="about-exp-header">
                <span className="about-exp-icon"><FaBriefcase /></span>
                <div>
                  <h5>Project Manager & Machine Learning Cohort</h5>
                  <p className="about-exp-sub">Asah led by Dicoding (Remote) — Studi Independen</p>
                </div>
                <span className="about-exp-date">Agt 2025 - Jan 2026</span>
              </div>
              <ul className="about-exp-bullets">
                <li>Mengikuti program Studi Independen Asah led by Dicoding sebagai cohort Machine Learning dan menjadi Project Manager di Capstone Project.</li>
                <li>Menyelesaikan Proyek capstone pengembangan sistem pendukung keputusan berbasis AI pada sektor pertambangan (Adaptive Mining Operations Platform).</li>
                <li>Menyelesaikan seluruh learning path mencakup Deep Learning Fundamental, Machine Learning untuk Pemula, dan MLOps pipeline.</li>
              </ul>
            </div>
          </div>

          {/* Sertifikasi */}
          <div className="about-certifications-section">
            <h4>Sertifikasi Profesional</h4>
            <div className="about-cert-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="about-cert-card">
                  <span className="about-cert-icon"><FaCertificate /></span>
                  <div>
                    <h6>{cert.name}</h6>
                    <p>{cert.issuer} • {cert.date}</p>
                    <p className="cert-credential-id">ID: {cert.credentialId}</p>
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
