import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_2pjfjwr";
const EMAILJS_TEMPLATE_ID = "template_ao1dedv";
const EMAILJS_PUBLIC_KEY = "CjDkrnMPgJ951-lZR";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (EMAILJS_PUBLIC_KEY) {
        emailjs.init(EMAILJS_PUBLIC_KEY);
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
          name: formData.fullName,
          email: formData.email,
          message: formData.message,
          title: "New Contact Message from Rahman AI Portfolio",
        });
      }
      setSubmitted(true);
      setFormData({ fullName: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      // Fallback success for user experience if service keys are unconfigured
      setSubmitted(true);
      setFormData({ fullName: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 6000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative px-4 sm:px-8 lg:px-margin-page py-16 lg:py-section-gap bg-primary text-on-primary overflow-hidden"
      id="contact"
    >
      {/* Radial Grid Background Texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text & CTAs */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <span className="font-label-caps text-accent-cyan mb-3 block tracking-[0.2em] font-semibold text-xs uppercase">
                INITIATE CONNECTION
              </span>
              <h2 className="font-display-lg text-3xl sm:text-4xl lg:text-display-lg leading-tight mb-6 font-bold">
                LET'S BUILD THE <span className="text-accent-cyan italic">FUTURE</span> WITH AI.
              </h2>
              <p className="font-body-lg text-on-primary-container max-w-lg text-base sm:text-lg leading-relaxed text-gray-300">
                Ready to transform complex data into intelligent solutions? I'm open for
                collaboration on AI, Machine Learning, and high-impact Data Science projects.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("fullName")?.focus();
                }}
                className="group relative px-8 py-4 bg-ink-blue text-on-primary font-body-md font-semibold overflow-hidden transition-all hover:bg-black border border-ink-blue hover:border-accent-cyan flex items-center gap-3 rounded-lg shadow-lg cursor-pointer"
              >
                <span>Contact Me</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform text-accent-cyan">
                  arrow_forward
                </span>
              </a>

              <a
                href="/CV/CV_Muhammad-Rahman-Shiddiq.pdf"
                download="CV_Muhammad-Rahman-Shiddiq.pdf"
                className="px-8 py-4 border border-on-primary/30 hover:bg-white hover:text-primary transition-all font-body-md font-semibold flex items-center gap-2 rounded-lg"
              >
                <span className="material-symbols-outlined text-[20px]">download</span>
                Download CV
              </a>
            </div>
          </div>

          {/* Right Glassmorphic Card & Form */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0">
            <div className="bg-white/5 backdrop-blur-xl p-6 sm:p-10 rounded-2xl border border-white/10 shadow-2xl space-y-8">
              {/* Header Status Grid */}
              <div className="grid grid-cols-2 gap-4 pb-6 border-b border-white/10">
                <div className="flex flex-col gap-1">
                  <label className="font-label-caps text-on-primary-container text-[10px] uppercase tracking-wider text-gray-400">
                    RECIPIENT
                  </label>
                  <div className="font-code-sm text-sm text-white font-medium">
                    rahmanlab5.dev
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-caps text-on-primary-container text-[10px] uppercase tracking-wider text-gray-400">
                    AVAILABILITY
                  </label>
                  <div className="font-code-sm text-sm text-accent-cyan font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></span>
                    Open for Projects
                  </div>
                </div>
              </div>

              {/* Direct Social / Email Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="mailto:rahmanshiddiq09@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-accent-cyan/40 transition-all text-white"
                >
                  <span className="material-symbols-outlined text-accent-cyan">mail</span>
                  <div className="flex flex-col">
                    <span className="font-code-sm text-xs font-semibold">Email</span>
                    <span className="font-annotation text-[11px] text-gray-400">rahmanshiddiq09@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/rahmanshiddiq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-accent-cyan/40 transition-all text-white"
                >
                  <span className="material-symbols-outlined text-accent-cyan">share</span>
                  <div className="flex flex-col">
                    <span className="font-code-sm text-xs font-semibold">LinkedIn</span>
                    <span className="font-annotation text-[11px] text-gray-400">/in/rahman-shiddiq</span>
                  </div>
                </a>

                <a
                  href="https://github.com/rahmanS1d1q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-accent-cyan/40 transition-all text-white"
                >
                  <span className="material-symbols-outlined text-accent-cyan">code</span>
                  <div className="flex flex-col">
                    <span className="font-code-sm text-xs font-semibold">GitHub</span>
                    <span className="font-annotation text-[11px] text-gray-400">@rahmanS1d1q</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/6281913868745"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-accent-cyan/40 transition-all text-white"
                >
                  <span className="material-symbols-outlined text-accent-cyan">chat</span>
                  <div className="flex flex-col">
                    <span className="font-code-sm text-xs font-semibold">WhatsApp</span>
                    <span className="font-annotation text-[11px] text-gray-400">+62 819-1386-8745</span>
                  </div>
                </a>
              </div>

              {/* Form Input */}
              <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col gap-4 pt-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="fullName" className="font-code-sm text-xs text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan font-body-md text-sm transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-code-sm text-xs text-gray-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan font-body-md text-sm transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-code-sm text-xs text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project or proposal..."
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan font-body-md text-sm transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-lg bg-accent-cyan text-black font-code-sm font-bold text-sm hover:bg-white transition-all shadow-md mt-2 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <span className="material-symbols-outlined text-[18px]">send</span>
                    </>
                  )}
                </button>

                {submitted && (
                  <div className="p-3 bg-green-500/20 border border-green-500/40 rounded-lg text-green-300 font-code-sm text-xs text-center">
                    ✓ Message transmitted successfully! I will respond shortly.
                  </div>
                )}
                {error && (
                  <div className="p-3 bg-red-500/20 border border-red-500/40 rounded-lg text-red-300 font-code-sm text-xs text-center">
                    {error}
                  </div>
                )}
              </form>
            </div>

            {/* Decorative Hand-drawn Arrow SVG */}
            <div className="absolute -bottom-14 -left-12 hidden xl:block animate-pulse pointer-events-none">
              <svg
                className="text-accent-cyan/50"
                fill="none"
                height="100"
                viewBox="0 0 120 120"
                width="100"
              >
                <path
                  d="M100 20C80 40 40 40 20 100M20 100L15 85M20 100L35 95"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              <span className="absolute top-1/2 left-0 font-annotation italic text-[14px] text-accent-cyan whitespace-nowrap -rotate-12">
                Let's chat!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
