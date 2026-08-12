import React from "react";

const Hero = ({ scrollToSection }) => {
  return (
    <section
      className="relative w-full min-h-[80vh] flex flex-col justify-center px-4 md:px-margin-sm py-8 md:py-margin-lg overflow-hidden"
      id="home"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch w-full max-w-container-max mx-auto">
        {/* Left RPG HUD Player Profile Box (Spans 5 cols) */}
        <div className="lg:col-span-5 h-full bg-surface-container text-primary font-label-caps border-4 border-black pixel-border p-gutter flex flex-col justify-between gap-6">
          {/* Header Profile Box */}
          <div className="flex flex-col items-center text-center gap-4 border-b-4 border-black pb-4">
            <div className="w-28 h-28 border-4 border-black bg-surface-variant pixel-border relative overflow-hidden group cursor-pointer">
              {/* Default Avatar Photo */}
              <img
                src="/images/avatar-nav.png"
                alt="M. Rahman Shiddiq - Avatar"
                className="absolute inset-0 object-cover w-full h-full object-center transition-opacity duration-300 group-hover:opacity-0 image-rendering-pixelated"
              />
              {/* Hover Profile Photo */}
              <img
                src="/images/profile.png"
                alt="M. Rahman Shiddiq - AI Engineer"
                className="absolute inset-0 object-cover w-full h-full object-[center_20%] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110 image-rendering-pixelated"
              />
              <div className="absolute top-1 right-1 bg-tertiary text-on-tertiary font-label-caps text-[8px] px-1.5 py-0.5 border border-black font-bold z-10">
                RANK #1
              </div>
            </div>

            <div>
              <h2 className="font-headline-sm text-headline-sm text-primary mb-1">
                M_RAHMAN_SHIDDIQ
              </h2>
              <p className="text-on-surface-variant text-[10px] tracking-wider uppercase font-bold">
                CLASS: AI_ENGINEER & DATA_SCIENTIST
              </p>
              <p className="text-tertiary text-[9px] mt-1">
                UNESA INFORMATION SYSTEMS
              </p>
            </div>

            {/* RPG Stats Bars */}
            <div className="w-full space-y-3 mt-2 text-left">
              {/* HP Bar */}
              <div className="w-full">
                <div className="flex justify-between mb-1 text-[9px] font-bold">
                  <span className="text-primary">ML_ACCURACY (HP)</span>
                  <span>100/100</span>
                </div>
                <div className="h-3.5 w-full bg-surface-container-highest border-2 border-black p-0.5">
                  <div className="h-full bg-primary-container w-[100%]"></div>
                </div>
              </div>

              {/* XP Bar */}
              <div className="w-full">
                <div className="flex justify-between mb-1 text-[9px] font-bold">
                  <span className="text-tertiary">DBS_SCORE (XP)</span>
                  <span>94.20/100</span>
                </div>
                <div className="h-3.5 w-full bg-surface-container-highest border-2 border-black p-0.5">
                  <div className="h-full bg-tertiary w-[94%]"></div>
                </div>
              </div>

              {/* MP Bar */}
              <div className="w-full">
                <div className="flex justify-between mb-1 text-[9px] font-bold">
                  <span className="text-secondary">ASAH_SCORE (MP)</span>
                  <span>93.08/100</span>
                </div>
                <div className="h-3.5 w-full bg-surface-container-highest border-2 border-black p-0.5">
                  <div className="h-full bg-secondary w-[93%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick HUD Tags */}
          <div className="flex flex-wrap gap-1.5 justify-center">
            {["#AI_ENGINEERING", "#MACHINE_LEARNING", "#DATA_SCIENCE", "#MLOPS", "#PYTHON"].map(
              (tag) => (
                <span
                  key={tag}
                  className="bg-surface-container-highest text-on-surface-variant border-2 border-outline px-2 py-0.5 font-label-caps text-[9px]"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* Right Hero Banner & Mission Log (Spans 7 cols) */}
        <div className="lg:col-span-7 h-full bg-surface-container p-gutter border-4 border-black pixel-border flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 bg-surface-variant border-2 border-black px-3 py-1 text-tertiary font-label-caps text-[9px]">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span>MISSION: BUILDING AI FOR REAL-WORLD IMPACT</span>
            </div>

            <h1 className="font-headline-lg text-lg sm:text-headline-lg text-primary leading-tight font-bold">
              BUILDING INTELLIGENT AI SYSTEMS THAT RESOLVE COMPLEX DATA.
            </h1>

            <p className="font-body-lg text-on-surface-variant text-sm sm:text-base leading-relaxed">
              I enjoy building practical AI solutions through machine learning, data analysis,
              and software development while continuously improving my skills through real-world projects.
            </p>

            {/* Core Stats Overview */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-surface-container-low border-2 border-black p-3 text-center">
                <span className="font-headline-md text-tertiary text-sm sm:text-base block">TOP 10%</span>
                <span className="font-label-caps text-[8px] text-on-surface-variant">DISTINCTION GRAD</span>
              </div>
              <div className="bg-surface-container-low border-2 border-black p-3 text-center">
                <span className="font-headline-md text-primary text-sm sm:text-base block">934+</span>
                <span className="font-label-caps text-[8px] text-on-surface-variant">LEARNING HOURS</span>
              </div>
              <div className="col-span-2 sm:col-span-1 bg-surface-container-low border-2 border-black p-3 text-center">
                <span className="font-headline-md text-secondary text-sm sm:text-base block">UNESA</span>
                <span className="font-label-caps text-[8px] text-on-surface-variant">INFO SYSTEMS</span>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-6 mt-auto relative z-10">
            <button
              onClick={() => scrollToSection("projects")}
              className="chunky-button bg-primary text-on-primary font-headline-sm text-xs py-3.5 px-6 hover:bg-secondary hover:text-on-secondary transition-colors uppercase flex items-center gap-2 cursor-pointer"
            >
              <span>VIEW MY QUESTS</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>

            <a
              href="/CV/CV_Muhammad-Rahman-Shiddiq.pdf"
              download="CV_Muhammad-Rahman-Shiddiq.pdf"
              className="chunky-button bg-surface-variant text-primary font-headline-sm text-xs py-3.5 px-6 hover:bg-surface-container-highest transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              <span>DOWNLOAD RESUME</span>
            </a>
          </div>

          {/* Decorative Icon */}
          <div className="absolute -right-6 -bottom-6 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[140px]">smart_toy</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
