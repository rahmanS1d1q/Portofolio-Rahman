import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("portfolio-theme");
    return saved || "dark";
  });

  const isManualScrollRef = useRef(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Function to handle precise scrolling without interruption
  const scrollToSection = (id) => {
    isManualScrollRef.current = true;
    setActiveSection(id); // Instantly highlight the active nav link

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Release the scroll spy lock after the smooth scroll animation completes
    setTimeout(() => {
      isManualScrollRef.current = false;
    }, 850);
  };

  // Scroll Spy: Detect which section is in view and update active nav link
  useEffect(() => {
    const handleScrollSpy = () => {
      // If manually scrolling via navbar click, don't update state
      if (isManualScrollRef.current) return;

      const scrollPosition = window.scrollY + 160; // Offset to trigger active state slightly before reaching section top
      
      // Edge case: if scrolled to the very bottom of the page, activate "contact"
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection("contact");
        return;
      }

      const sections = document.querySelectorAll("section, .contact-container");
      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const id = section.getAttribute("id");
        if (scrollPosition >= sectionTop && id) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScrollSpy);
    // Trigger once on mount
    handleScrollSpy();

    return () => {
      window.removeEventListener("scroll", handleScrollSpy);
    };
  }, []);

  return (
    <div className="App">
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        theme={theme}
        setTheme={setTheme}
      />
      <Home scrollToSection={scrollToSection} />
      <About />
      <Portfolio />
      <Contact />
      
      {/* Footer */}
      <footer className="portfolio-footer">
        <p>© 2026 Muhammad Rahman Shiddiq. Built with React &amp; CSS.</p>
      </footer>
    </div>
  );
}

export default App;
