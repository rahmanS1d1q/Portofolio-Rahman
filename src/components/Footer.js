import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-surface-container-low py-12 px-4 sm:px-8 lg:px-margin-page">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8 border-b border-surface-container">
          <div className="flex flex-col gap-2">
            <span className="font-display-lg text-2xl font-bold italic text-ink-blue">
              rahmanlab5.dev
            </span>
            <span className="text-annotation text-on-surface-variant text-sm font-medium">
              Crafting Intelligence, One Pixel at a Time.
            </span>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-6">
            <a
              className="flex items-center gap-2 text-on-surface-variant hover:text-ink-blue transition-colors font-code-sm text-xs uppercase font-semibold"
              href="https://github.com/rahmanS1d1q"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[18px]">code</span>
              <span>GitHub</span>
            </a>
            <a
              className="flex items-center gap-2 text-on-surface-variant hover:text-ink-blue transition-colors font-code-sm text-xs uppercase font-semibold"
              href="https://www.linkedin.com/in/rahmanshiddiq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[18px]">share</span>
              <span>LinkedIn</span>
            </a>
            <a
              className="flex items-center gap-2 text-on-surface-variant hover:text-ink-blue transition-colors font-code-sm text-xs uppercase font-semibold"
              href="mailto:rahmanshiddiq09@gmail.com"
            >
              <span className="material-symbols-outlined text-[18px]">mail</span>
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Footer Marginalia */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-code-sm text-outline opacity-80">
          <span>LOC: SURABAYA, ID // GMT+7</span>
          <span className="italic">Curiosity.csv — Loaded Successfully</span>
          <span>© 2026 Muhammad Rahman Shiddiq. Designed for the Future.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
