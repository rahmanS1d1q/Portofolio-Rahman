import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const isManualScrollRef = useRef(false);

  // Smooth scroll handler
  const scrollToSection = (id) => {
    isManualScrollRef.current = true;
    setActiveSection(id);

    const element = document.getElementById(id);
    if (element) {
      const offset = 70; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setTimeout(() => {
      isManualScrollRef.current = false;
    }, 850);
  };

  // Scroll Spy logic
  useEffect(() => {
    const handleScrollSpy = () => {
      if (isManualScrollRef.current) return;

      const scrollPosition = window.scrollY + 180;

      // Bottom edge check
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection("contact");
        return;
      }

      const sectionIds = ["home", "about", "skills", "projects", "experience", "achievements", "contact"];
      let currentSection = "home";

      for (let i = 0; i < sectionIds.length; i++) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            currentSection = sectionIds[i];
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy();

    return () => {
      window.removeEventListener("scroll", handleScrollSpy);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background font-body-md text-on-background selection:bg-ink-blue selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Main Content Area */}
      <main className="w-full pt-14">
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
