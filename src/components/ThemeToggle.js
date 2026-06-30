import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = ({ theme, setTheme }) => {
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("portfolio-theme", next);
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <span className={`theme-icon ${theme === "dark" ? "active" : ""}`}>
        <FaMoon />
      </span>
      <span className={`theme-icon ${theme === "light" ? "active" : ""}`}>
        <FaSun />
      </span>
    </button>
  );
};

export default ThemeToggle;
