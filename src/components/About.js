import React from "react";

const About = () => {
  return (
    <section
      className="w-full px-4 md:px-margin-sm py-12 md:py-margin-lg relative z-10"
      id="about"
    >
      <div className="max-w-container-max mx-auto bg-surface-container border-4 border-black pixel-border p-gutter flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center border-b-4 border-black pb-4 gap-2">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-tertiary text-2xl">
              auto_awesome
            </span>
            <h2 className="font-headline-lg text-lg sm:text-headline-lg text-tertiary uppercase">
              ITEMS_LOG // BIOGRAPHY
            </h2>
          </div>
          <span className="bg-surface-variant text-on-surface-variant px-2.5 py-1 border-2 border-black font-label-caps text-[9px]">
            SLOT: ABOUT_ME
          </span>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Bio Details (Spans 7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <h3 className="font-headline-md text-base sm:text-headline-md text-primary leading-snug">
              BRIDGING DATA AND INTELLIGENT DECISIONS.
            </h3>

            <div className="space-y-3 font-body-md text-on-surface-variant text-sm sm:text-base leading-relaxed">
              <p>
                I am an Information Systems student at Universitas Negeri Surabaya with a strong focus on Artificial Intelligence, Machine Learning, and Data Science.
              </p>
              <p>
                Through academic projects and technical intensive programs, I have developed practical experience in machine learning engineering, predictive modeling, and AI application development. I enjoy building intelligent systems that convert raw data into high-impact solutions.
              </p>
              <p>
                I am continuously expanding my expertise toward becoming an AI Engineer who designs reliable, production-ready AI pipelines.
              </p>
            </div>

            {/* Factual Information Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t-2 border-black">
              <div className="bg-surface-container-low border-2 border-black p-3">
                <span className="font-headline-md text-tertiary text-sm block">2023–2027</span>
                <span className="font-label-caps text-[8px] text-on-surface-variant">INFORMATION SYSTEMS STUDENT</span>
              </div>
              <div className="bg-surface-container-low border-2 border-black p-3">
                <span className="font-headline-md text-primary text-sm block">AI ENGINEER</span>
                <span className="font-label-caps text-[8px] text-on-surface-variant">CAREER GOAL</span>
              </div>
            </div>
          </div>

          {/* Right Code Block & Terminal Item (Spans 5 cols) */}
          <div className="lg:col-span-5 bg-surface-container-lowest border-4 border-black p-4 flex flex-col justify-between space-y-4 relative">
            <div className="flex items-center justify-between border-b-2 border-outline pb-2">
              <span className="font-label-caps text-[10px] text-primary flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px]">terminal</span>
                CORE_PIPELINE.PY
              </span>
              <span className="text-[8px] font-label-caps text-tertiary">PYTHON 3.11</span>
            </div>

            <div className="bg-[#001114] p-3.5 border-2 border-black font-code-sm text-xs text-primary leading-relaxed space-y-1">
              <p className="text-secondary">from sklearn.ensemble import RandomForestClassifier</p>
              <p className="text-secondary">from dicoding.ai import DistinctionPipeline</p>
              <br />
              <p><span className="text-tertiary">model</span> = RandomForestClassifier(n_estimators=100)</p>
              <p>model.<span className="text-primary">fit</span>(X_train, y_train)</p>
              <p className="text-on-surface-variant text-[11px] mt-2"># Output: Model Accuracy: 94.20% (Distinction)</p>
            </div>

            <div className="bg-surface-container-high border-2 border-black p-3 flex justify-between items-center text-xs">
              <span className="font-label-caps text-[9px] text-on-surface-variant">STATUS: ACTIVE</span>
              <span className="font-label-caps text-[9px] text-primary animate-pulse">● ONLINE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
