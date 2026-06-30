import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ activeSection, scrollToSection, theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Kontak" },
  ];

  const handleNav = (id) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <button className="nav-brand" onClick={() => handleNav("home")}>
          <span className="nav-brand-mark">{"<"}</span>
          Rahman
          <span className="nav-brand-mark">{"/>"}</span>
        </button>

        <div className="nav-right">
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={activeSection === link.id ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.id);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle theme={theme} setTheme={setTheme} />

          <button
            className="nav-toggle"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
