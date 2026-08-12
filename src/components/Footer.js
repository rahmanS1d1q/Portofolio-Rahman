import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-surface-container-lowest text-error font-headline-sm text-headline-sm border-t-4 border-black w-full py-8 md:py-margin-sm flex flex-col items-center gap-4 relative z-40">
      <div className="font-headline-lg text-base sm:text-headline-lg text-error text-center px-4 tracking-wider">
        GAME OVER - INSERT COIN TO CONTINUE
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-2 font-label-caps text-xs">
        <button
          onClick={scrollToTop}
          className="text-on-surface-variant hover:text-tertiary transition-colors cursor-pointer flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
          <span>RETRY (TOP)</span>
        </button>

        <a
          href="https://github.com/rahmanS1d1q"
          target="_blank"
          rel="noopener noreferrer"
          className="text-on-surface-variant hover:text-tertiary transition-colors"
        >
          REPOS (GITHUB)
        </a>

        <a
          href="https://www.linkedin.com/in/rahmanshiddiq"
          target="_blank"
          rel="noopener noreferrer"
          className="text-on-surface-variant hover:text-tertiary transition-colors"
        >
          CREDITS (LINKEDIN)
        </a>

        <a
          href="mailto:rahmanshiddiq09@gmail.com"
          className="text-on-surface-variant hover:text-tertiary transition-colors"
        >
          EMAIL
        </a>
      </div>

      <div className="text-[9px] font-label-caps text-outline opacity-80 pt-4 text-center">
        © 2026 MUHAMMAD RAHMAN SHIDDIQ // rahmanlab5.dev // ALL RIGHTS RESERVED
      </div>
    </footer>
  );
};

export default Footer;
