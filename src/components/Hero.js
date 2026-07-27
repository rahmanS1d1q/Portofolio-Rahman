import React, { useState } from "react";

const Hero = ({ scrollToSection }) => {
  const [transformStyle, setTransformStyle] = useState("");

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransformStyle(`rotate(${x * 6}deg) translateY(${y * 10}px)`);
  };

  const handleMouseLeave = () => {
    setTransformStyle("rotate(3deg) translateY(0px)");
  };

  return (
    <section
      className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex items-center px-4 sm:px-8 lg:px-margin-page py-16 lg:py-section-gap overflow-hidden"
      id="home"
    >
      {/* Background Marginalia & Neural SVG Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-20 left-10 transform -rotate-12 hidden md:block">
          <span className="font-label-caps text-outline opacity-20 text-[80px] lg:text-[100px] leading-none select-none">
            01011001
          </span>
        </div>

        {/* Neural Network Doodle */}
        <svg
          className="absolute top-1/4 right-[-5%] w-1/3 h-auto text-ink-blue/10 hidden md:block"
          fill="none"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="40" cy="40" fill="currentColor" r="4" />
          <circle cx="40" cy="100" fill="currentColor" r="4" />
          <circle cx="40" cy="160" fill="currentColor" r="4" />
          <circle cx="120" cy="70" fill="currentColor" r="4" />
          <circle cx="120" cy="130" fill="currentColor" r="4" />
          <circle cx="180" cy="100" fill="currentColor" r="4" />
          <path
            d="M44 40L116 70M44 40L116 130M44 100L116 70M44 100L116 130M44 160L116 70M44 160L116 130M124 70L176 100M124 130L176 100"
            stroke="currentColor"
            strokeDasharray="4 4"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="grid grid-cols-12 w-full gap-gutter relative z-10 items-center">
        {/* Left Content */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-[1px] w-12 bg-ink-blue"></span>
            <span className="font-label-caps text-ink-blue tracking-widest uppercase text-xs sm:text-sm">
              Portfolio 2026 // v1.0.4
            </span>
          </div>

          <h1 className="font-display-lg text-4xl sm:text-5xl lg:text-display-lg text-primary mb-6 max-w-2xl font-bold leading-tight">
            BUILDING AI THAT{" "}
            <span className="relative inline-block text-ink-blue">
              CREATES
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-secondary-container/40"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 200 20"
              >
                <path
                  d="M0 15C50 5 150 5 200 15"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="4"
                />
              </svg>
            </span>{" "}
            REAL IMPACT.
          </h1>

          {/* Tech Tag Pills */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {["AI Engineer", "Machine Learning", "Data Scientist", "Agentic AI", "MLOps"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 bg-surface-container-high rounded-full font-code-sm text-xs text-on-surface-variant border border-outline-variant/30 font-medium"
                >
                  {tag}
                </span>
              )
            )}
          </div>

          <p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
            I enjoy building practical AI solutions through machine learning, data analysis,
            and software development while continuously improving my skills through real-world projects.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="group relative px-7 py-3.5 bg-ink-blue text-on-primary font-body-md rounded-lg overflow-hidden transition-all hover:bg-black hover:shadow-[6px_6px_0px_0px_rgba(0,71,171,0.3)] flex items-center gap-2 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2 font-medium">
                View My Projects
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </span>
            </button>

            <a
              href="/CV/CV_Muhammad-Rahman-Shiddiq.pdf"
              download="CV_Muhammad-Rahman-Shiddiq.pdf"
              className="px-7 py-3.5 border border-outline text-primary font-body-md rounded-lg hover:bg-surface-container transition-colors flex items-center gap-2 font-medium"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Visual Component - Polaroid Portrait */}
        <div className="col-span-12 lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center items-center self-center">
          <div
            className="relative group cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="bg-white p-4 pb-14 shadow-2xl rounded-sm transition-transform duration-300 ease-out w-[290px] sm:w-[360px]"
              style={{ transform: transformStyle || "rotate(3deg)" }}
            >
              <div className="aspect-square bg-surface-container overflow-hidden rounded-sm relative">
                <img
                  className="w-full h-full object-cover object-[center_20%] grayscale group-hover:grayscale-0 transition-all duration-700"
                  src="/images/profile.png"
                  alt="Muhammad Rahman Shiddiq - AI Engineer"
                />
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-white font-code-sm text-[11px] flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></span>
                  SURABAYA, ID
                </div>
              </div>

              {/* Handwritten Accent */}
              <div className="absolute bottom-3 left-4 right-4 text-center">
                <p className="font-annotation text-[15px] sm:text-[17px] text-ink-blue italic font-medium -rotate-1">
                  "Learning. Building. Improving. ✨"
                </p>
              </div>
            </div>

            {/* Decorative Glow Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary-container/15 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-cyan/15 rounded-full blur-3xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
