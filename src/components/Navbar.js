import React, { useState } from "react";

const Navbar = ({ activeSection, scrollToSection, theme, setTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "projects", label: "QUESTS" },
    { id: "about", label: "ITEMS" },
    { id: "skills", label: "SKILLS" },
    { id: "experience", label: "TIMELINE" },
    { id: "achievements", label: "ARTIFACTS" },
    { id: "contact", label: "SAVE" },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    scrollToSection(id);
  };

  const toggleTheme = () => {
    if (setTheme) {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };

  return (
    <nav className="bg-background text-primary font-headline-sm text-headline-sm border-b-4 border-black shadow-[4px_4px_0px_0px_rgba(0,36,41,1)] fixed top-0 left-0 w-full z-40 flex justify-between items-center px-4 md:px-margin-sm h-16 transition-all">
      {/* Brand Title */}
      <a
        href="#home"
        onClick={(e) => handleNavClick(e, "home")}
        className="flex items-center gap-3 text-decoration-none group"
      >
        <div className="w-8 h-8 border-2 border-black bg-surface-variant pixel-border relative overflow-hidden flex-shrink-0">
          <img
            src="/images/avatar-nav.png"
            alt="M. Rahman Shiddiq"
            className="w-full h-full object-cover image-rendering-pixelated"
          />
        </div>
        <div className="font-headline-md text-xs sm:text-headline-md text-primary tracking-widest uppercase">
          RAHMAN_V1.0
        </div>
      </a>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 lg:gap-8 items-center h-full">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`h-full flex items-center transition-transform active:translate-x-1 active:translate-y-1 ${
                isActive
                  ? "text-tertiary-fixed border-b-4 border-tertiary-fixed pb-1"
                  : "text-on-surface-variant hover:text-secondary hover:translate-y-0.5"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </div>

      {/* Right HUD Stats & Theme Toggle */}
      <div className="flex gap-3 sm:gap-4 items-center font-headline-sm">
        <div className="hidden sm:flex gap-3 items-center">
          <span className="text-tertiary">LVL 99</span>
          <span className="text-primary-fixed">9999G</span>
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-1.5 border-2 border-black bg-surface-container hover:bg-surface-variant text-primary rounded transition-all cursor-pointer flex items-center justify-center"
          title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          aria-label="Toggle Theme"
        >
          <span className="material-symbols-outlined text-[18px]">
            {theme === "dark" ? "light_mode" : "dark_mode"}
          </span>
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 border-2 border-black bg-surface-container text-primary rounded"
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined text-[20px]">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-surface-container border-b-4 border-black p-4 shadow-xl z-50 flex flex-col gap-3 font-headline-sm">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="p-3 border-2 border-black bg-surface-variant text-primary flex justify-between items-center"
            >
              <span>{item.label}</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </a>
          ))}
          <div className="flex justify-between items-center pt-2 px-2 text-xs">
            <span className="text-tertiary">LEVEL 99</span>
            <span className="text-primary-fixed">9999G</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
