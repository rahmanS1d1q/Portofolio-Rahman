import React, { useState, useEffect } from "react";

const Navbar = ({ activeSection, scrollToSection, theme, setTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-surface-container shadow-sm py-2"
          : "bg-background/80 backdrop-blur-sm border-b border-surface-container/60 py-3"
      }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-margin-page flex items-center justify-between h-14">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="flex items-center gap-3 group text-decoration-none"
        >
          <div className="w-9 h-9 rounded-lg border border-outline-variant overflow-hidden group-hover:border-ink-blue transition-colors duration-300 flex-shrink-0">
            <img
              src="/images/avatar-nav.png"
              alt="M. Rahman Shiddiq"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display-lg text-[18px] sm:text-[20px] tracking-tight text-primary uppercase font-bold">
              M. Rahman Shiddiq
            </span>
            <span className="font-code-sm text-[10px] text-outline tracking-wider hidden sm:block">
              AI ENGINEER & DATA SCIENTIST
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                aria-current={isActive ? "page" : undefined}
                className={`font-label-caps text-[13px] transition-all py-1.5 px-2 relative ${
                  isActive
                    ? "text-ink-blue font-semibold border-b-2 border-ink-blue"
                    : "text-on-surface-variant hover:text-ink-blue"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2.5">
          {/* Light/Dark Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-highest border border-outline-variant transition-all duration-300 flex items-center justify-center text-primary cursor-pointer"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle Light/Dark Theme"
          >
            <span className="material-symbols-outlined text-[18px] transition-transform duration-300 hover:rotate-45">
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="w-9 h-9 rounded-full bg-ink-blue hover:bg-blue-600 transition-colors flex items-center justify-center shadow-sm text-white"
            title="Get in Touch"
          >
            <span className="material-symbols-outlined text-[18px]">
              mail
            </span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-primary hover:bg-surface-container transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background/98 border-b border-surface-container px-6 py-6 shadow-xl transition-all">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`font-label-caps text-base py-2 flex items-center justify-between border-b border-surface-container/50 ${
                    isActive
                      ? "text-ink-blue font-semibold border-ink-blue"
                      : "text-on-surface-variant hover:text-ink-blue"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="material-symbols-outlined text-[18px] text-ink-blue">
                      arrow_forward_ios
                    </span>
                  )}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
