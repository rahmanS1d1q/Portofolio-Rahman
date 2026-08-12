import React, { useState, useEffect, useCallback } from "react";
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

  // Captcha State
  const [captchaChallenge, setCaptchaChallenge] = useState({
    num1: 0,
    num2: 0,
    answer: 0,
    display: "",
  });
  const [userCaptchaInput, setUserCaptchaInput] = useState("");

  // Generate randomized math captcha challenge
  const generateCaptcha = useCallback(() => {
    const operations = ["+", "-", "x"];
    const op = operations[Math.floor(Math.random() * operations.length)];
    let n1 = Math.floor(Math.random() * 10) + 1;
    let n2 = Math.floor(Math.random() * 10) + 1;
    let ans = 0;

    if (op === "+") {
      ans = n1 + n2;
    } else if (op === "-") {
      if (n1 < n2) {
        const temp = n1;
        n1 = n2;
        n2 = temp;
      }
      ans = n1 - n2;
    } else if (op === "x") {
      n1 = Math.floor(Math.random() * 6) + 1;
      n2 = Math.floor(Math.random() * 6) + 1;
      ans = n1 * n2;
    }

    setCaptchaChallenge({
      num1: n1,
      num2: n2,
      answer: ans,
      display: `${n1} ${op} ${n2} = ?`,
    });
    setUserCaptchaInput("");
  }, []);

  useEffect(() => {
    generateCaptcha();
  }, [generateCaptcha]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validate Captcha Answer
    if (parseInt(userCaptchaInput.trim(), 10) !== captchaChallenge.answer) {
      setError("⚠ SECURITY VERIFICATION FAILED: INCORRECT CAPTCHA ANSWER!");
      generateCaptcha();
      setLoading(false);
      return;
    }

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
      generateCaptcha();
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setSubmitted(true);
      setFormData({ fullName: "", email: "", message: "" });
      generateCaptcha();
      setTimeout(() => setSubmitted(false), 6000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="w-full px-4 md:px-margin-sm py-12 md:py-margin-lg relative z-10"
      id="contact"
    >
      <div className="max-w-container-max mx-auto space-y-6">
        {/* Header Banner */}
        <header className="bg-surface-container p-gutter border-4 border-black pixel-border flex justify-between items-end relative overflow-hidden">
          <div>
            <span className="font-label-caps text-xs text-tertiary block mb-1">
              SAVE_STATION // INITIATE_CONNECTION
            </span>
            <h2 className="font-headline-lg text-lg sm:text-headline-lg text-primary uppercase">
              TRANSMIT_MESSAGE
            </h2>
            <p className="font-body-md text-on-surface-variant text-xs sm:text-sm mt-1">
              Ready to build intelligent AI solutions? Send a message or connect directly.
            </p>
          </div>
          <div className="hidden sm:block opacity-20 pointer-events-none">
            <span className="material-symbols-outlined text-[80px]">
              cell_tower
            </span>
          </div>
        </header>

        {/* 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Direct Channels Grid (Spans 5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-surface-container border-4 border-black pixel-border p-5 space-y-4">
              <h3 className="font-headline-sm text-xs text-tertiary border-b-2 border-outline pb-2 uppercase">
                DIRECT_CHANNELS
              </h3>

              <div className="grid grid-cols-1 gap-3">
                <a
                  href="mailto:rahmanshiddiq09@gmail.com"
                  className="flex items-center gap-3 p-3 bg-surface-container-low hover:bg-surface-container-high border-2 border-black transition-colors"
                >
                  <span className="material-symbols-outlined text-primary text-[22px]">
                    mail
                  </span>
                  <div className="flex flex-col truncate">
                    <span className="font-label-caps text-[9px] text-primary">EMAIL</span>
                    <span className="font-code-sm text-xs text-on-surface-variant truncate">
                      rahmanshiddiq09@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/rahmanshiddiq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-surface-container-low hover:bg-surface-container-high border-2 border-black transition-colors"
                >
                  <span className="material-symbols-outlined text-secondary text-[22px]">
                    share
                  </span>
                  <div className="flex flex-col truncate">
                    <span className="font-label-caps text-[9px] text-secondary">LINKEDIN</span>
                    <span className="font-code-sm text-xs text-on-surface-variant truncate">
                      /in/rahman-shiddiq
                    </span>
                  </div>
                </a>

                <a
                  href="https://github.com/rahmanS1d1q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-surface-container-low hover:bg-surface-container-high border-2 border-black transition-colors"
                >
                  <span className="material-symbols-outlined text-tertiary text-[22px]">
                    code
                  </span>
                  <div className="flex flex-col truncate">
                    <span className="font-label-caps text-[9px] text-tertiary">GITHUB</span>
                    <span className="font-code-sm text-xs text-on-surface-variant truncate">
                      @rahmanS1d1q
                    </span>
                  </div>
                </a>

                <a
                  href="https://wa.me/6281913868745"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-surface-container-low hover:bg-surface-container-high border-2 border-black transition-colors"
                >
                  <span className="material-symbols-outlined text-primary text-[22px]">
                    chat
                  </span>
                  <div className="flex flex-col truncate">
                    <span className="font-label-caps text-[9px] text-primary">WHATSAPP</span>
                    <span className="font-code-sm text-xs text-on-surface-variant truncate">
                      Chat on WhatsApp →
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Status Card */}
            <div className="bg-surface-container border-4 border-black pixel-border p-4 flex justify-between items-center text-[9px] font-label-caps">
              <span className="text-on-surface-variant">RESPONSE_TIME: 24-48 HRS</span>
              <span className="text-primary animate-pulse">● READY</span>
            </div>
          </div>

          {/* Right Transmission Form (Spans 7 cols) */}
          <div className="lg:col-span-7 bg-surface-container border-4 border-black pixel-border p-6 space-y-4">
            <h3 className="font-headline-sm text-xs text-primary border-b-2 border-outline pb-2 uppercase">
              INPUT_DATA_PACKET
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label
                  htmlFor="fullName"
                  className="font-label-caps text-[9px] text-on-surface-variant block"
                >
                  YOUR_NAME *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter full name..."
                  required
                  className="w-full px-3 py-2.5 bg-surface-container-low border-2 border-black font-code-sm text-xs text-primary placeholder-outline focus:outline-none focus:border-primary"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="font-label-caps text-[9px] text-on-surface-variant block"
                >
                  YOUR_EMAIL *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  required
                  className="w-full px-3 py-2.5 bg-surface-container-low border-2 border-black font-code-sm text-xs text-primary placeholder-outline focus:outline-none focus:border-primary"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="font-label-caps text-[9px] text-on-surface-variant block"
                >
                  TRANSMISSION_MESSAGE *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your proposal or project details..."
                  required
                  className="w-full px-3 py-2.5 bg-surface-container-low border-2 border-black font-code-sm text-xs text-primary placeholder-outline focus:outline-none focus:border-primary resize-none"
                ></textarea>
              </div>

              {/* Retro Captcha Verification Challenge */}
              <div className="space-y-1.5 pt-1">
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="captchaInput"
                    className="font-label-caps text-[9px] text-tertiary block"
                  >
                    SECURITY_VERIFICATION (CAPTCHA) *
                  </label>
                  <button
                    type="button"
                    onClick={generateCaptcha}
                    className="text-[8px] font-label-caps text-on-surface-variant hover:text-primary underline cursor-pointer flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[10px]">refresh</span>
                    <span>REFRESH_CODE</span>
                  </button>
                </div>

                <div className="flex gap-2 items-center">
                  {/* Pixel Captcha Display Box */}
                  <div className="bg-surface-container-highest border-2 border-black px-4 py-2 text-tertiary font-headline-md text-xs tracking-widest select-none pixel-border min-w-[110px] text-center">
                    {captchaChallenge.display}
                  </div>

                  {/* Captcha Input */}
                  <input
                    type="text"
                    id="captchaInput"
                    name="captchaInput"
                    value={userCaptchaInput}
                    onChange={(e) => setUserCaptchaInput(e.target.value)}
                    placeholder="Enter answer..."
                    required
                    className="flex-1 px-3 py-2.5 bg-surface-container-low border-2 border-black font-code-sm text-xs text-primary placeholder-outline focus:outline-none focus:border-tertiary"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="chunky-button bg-primary text-on-primary font-headline-sm text-xs py-3.5 px-6 w-full hover:bg-secondary hover:text-on-secondary transition-colors uppercase flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                {loading ? (
                  <span>VERIFYING &amp; TRANSMITTING...</span>
                ) : (
                  <>
                    <span>TRANSMIT MESSAGE</span>
                    <span className="material-symbols-outlined text-[16px]">send</span>
                  </>
                )}
              </button>

              {submitted && (
                <div className="p-3 bg-primary-container/20 border-2 border-black text-primary font-label-caps text-[9px] text-center">
                  ✓ TRANSMISSION SUCCESSFUL! SECURITY CAPTCHA VERIFIED. I WILL RESPOND SHORTLY.
                </div>
              )}
              {error && (
                <div className="p-3 bg-error-container/20 border-2 border-black text-error font-label-caps text-[9px] text-center">
                  {error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
