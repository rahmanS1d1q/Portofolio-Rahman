import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

// ===== SETUP EMAILJS =====
// 1. Install: npm install @emailjs/browser
// 2. Daftar gratis di: https://www.emailjs.com
// 3. Ganti nilai di bawah dengan akun EmailJS Anda
// 4. Uncomment bagian EmailJS di handleSubmit()

const EMAILJS_SERVICE_ID = "service_2pjfjwr"; // Ganti dengan service ID Anda
const EMAILJS_TEMPLATE_ID = "template_ao1dedv"; // Ganti dengan template ID Anda
const EMAILJS_PUBLIC_KEY = "CjDkrnMPgJ951-lZR"; // Ganti dengan public key Anda

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);

      const templateParams = {
        name: formData.fullName,
        email: formData.email,
        message: formData.message,
        title: "New Contact Message",
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
      );

      setSubmitted(true);
      setFormData({ fullName: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error:", error);
      setError("Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.");
    }

    setLoading(false);
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-content">
        <h2>Kirim Pesan</h2>

        <div className="contact-wrapper">
          {/* Contact Information */}
          <div className="contact-info-section">
            <h3>Informasi Kontak</h3>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <h4>Telepon</h4>
                <p>+62 819-1386-8745</p>
              </div>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h4>Email</h4>
                <p>
                  <a href="mailto:rahmanshiddiq09@gmail.com">
                    rahmanshiddiq09@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h4>Lokasi</h4>
                <p>Surabaya, Indonesia</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Nama Lengkap</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Masukkan nama lengkap Anda"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Masukkan email Anda"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Pesan</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tulis pesan Anda di sini..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Mengirim..." : "Kirim Pesan"}
            </button>

            {error && <div className="error-message">{error}</div>}

            {submitted && (
              <div className="success-message">
                ✓ Pesan Anda telah berhasil dikirim. Terima kasih!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
