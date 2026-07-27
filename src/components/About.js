import React from "react";

const About = () => {
  return (
    <section
      className="w-full px-4 sm:px-8 lg:px-margin-page py-16 lg:py-section-gap bg-surface-container-lowest relative border-y border-surface-container/60"
      id="about"
    >
      <div className="grid grid-cols-12 gap-gutter max-w-7xl mx-auto items-center">
        {/* Sidebar Marginalia */}
        <div className="hidden lg:block col-span-1">
          <div className="flex flex-col gap-12 sticky top-32">
            <div className="[writing-mode:vertical-rl] rotate-180 flex items-center gap-4">
              <span className="font-label-caps text-outline text-[11px] uppercase tracking-[0.3em]">
                Biography &amp; Vision
              </span>
              <span className="h-24 w-[1px] bg-outline-variant"></span>
            </div>
          </div>
        </div>

        {/* Bio Details Column */}
        <div className="col-span-12 lg:col-span-6">
          <span className="font-label-caps text-ink-blue mb-3 block font-semibold text-xs tracking-widest uppercase">
            01. ABOUT ME
          </span>
          <h2 className="font-display-lg text-3xl sm:text-4xl lg:text-headline-md text-primary mb-6 font-bold leading-tight">
            Bridging Data <br className="hidden sm:inline" />
            and Decisions.
          </h2>

          <div className="space-y-4 font-body-md text-on-surface-variant leading-relaxed text-base sm:text-lg">
            <p>
              I am an Information Systems student at Universitas Negeri Surabaya with a strong interest in Artificial Intelligence, Machine Learning, and Data Science.
            </p>
            <p>
              Through academic projects and technical programs, I have developed practical experience in machine learning, data analysis, and AI application development. I enjoy building solutions that combine data, software, and intelligent systems to solve real-world problems.
            </p>
            <p>
              I am continuously learning and improving my skills while working toward becoming an AI Engineer who builds reliable and practical AI solutions.
            </p>
          </div>

          {/* Factual Information Highlights */}
          <div className="mt-10 grid grid-cols-2 gap-6 pt-6 border-t border-surface-container">
            <div>
              <div className="text-2xl sm:text-3xl font-display-lg text-primary font-bold leading-none mb-1">
                2023–2027
              </div>
              <p className="font-label-caps text-outline text-[11px] uppercase tracking-wider">
                Information Systems Student
              </p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-display-lg text-ink-blue font-bold leading-none mb-1">
                AI Engineer
              </div>
              <p className="font-label-caps text-outline text-[11px] uppercase tracking-wider">
                Career Goal
              </p>
            </div>
          </div>
        </div>

        {/* Right Panel Visual */}
        <div className="col-span-12 lg:col-span-5 flex items-start justify-center lg:pl-6 mt-8 lg:mt-0">
          <div className="w-full h-full min-h-[380px] bg-surface rounded-2xl relative overflow-hidden group shadow-md hover:shadow-xl transition-all border border-surface-container">
            {/* Tech Visualization Content */}
            <div className="p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-ink-blue text-[32px]">
                    psychology
                  </span>
                  <span className="font-code-sm text-xs font-semibold text-primary">
                    AI_ENGINEER
                  </span>
                </div>
                <div className="font-code-sm text-[11px] text-right bg-surface-container-low px-3 py-1.5 rounded border border-outline-variant/40">
                  <span className="text-outline uppercase text-[10px] block font-bold mb-0.5">
                    CURRENT FOCUS
                  </span>
                  <div className="text-accent-cyan font-semibold text-xs leading-tight">
                    • Machine Learning<br />
                    • Artificial Intelligence<br />
                    • Data Science
                  </div>
                </div>
              </div>

              {/* Decorative Bar Chart Element */}
              <div className="relative h-36 w-full flex items-end gap-2 overflow-hidden bg-background/60 p-4 rounded-xl border border-surface-container">
                <div className="w-full flex items-end justify-between h-full pt-8">
                  <div className="w-4 bg-ink-blue/30 rounded-t-sm" style={{ height: "40%" }}></div>
                  <div className="w-4 bg-ink-blue/50 rounded-t-sm" style={{ height: "65%" }}></div>
                  <div className="w-4 bg-ink-blue/30 rounded-t-sm" style={{ height: "30%" }}></div>
                  <div className="w-4 bg-ink-blue/70 rounded-t-sm" style={{ height: "85%" }}></div>
                  <div className="w-4 bg-ink-blue/40 rounded-t-sm" style={{ height: "50%" }}></div>
                  <div className="w-4 bg-accent-cyan rounded-t-sm" style={{ height: "95%" }}></div>
                  <div className="w-4 bg-ink-blue/60 rounded-t-sm" style={{ height: "70%" }}></div>
                  <div className="w-4 bg-ink-blue/40 rounded-t-sm" style={{ height: "45%" }}></div>
                </div>
              </div>

              {/* GitHub Dark Syntax Code Block */}
              <div className="p-4 bg-[#161B22] text-[#F3F4F6] rounded-xl border border-[#30363D] font-code-sm text-[12px] sm:text-[13px] leading-relaxed shadow-sm">
                <p>
                  <span className="text-[#FF7B72]">from</span> sklearn.ensemble <span className="text-[#FF7B72]">import</span> RandomForestClassifier<br /><br />
                  <span className="text-[#79C0FF]">model</span> = RandomForestClassifier()<br />
                  model.<span className="text-[#D2A8FF]">fit</span>(X_train, y_train)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
