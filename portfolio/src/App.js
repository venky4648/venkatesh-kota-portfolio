// src/App.js
// ─────────────────────────────────────────────────────────
// Root component. Wires together:
//  - Theme state (dark / light) + data-theme attribute
//  - Global hooks (scroll progress, scroll reveal, cursor)
//  - All section components in order
// ─────────────────────────────────────────────────────────

import { useState, useEffect } from "react";

// Global styles (CSS variables, resets, shared utilities)
import "./styles/global.css";

// Custom hooks
import { useScrollReveal }   from "./hooks/useScrollReveal";
import { useScrollProgress } from "./hooks/useScrollProgress";
import { useCustomCursor }   from "./hooks/useCustomCursor";

// Section components
import Navbar     from "./components/Navbar/Navbar";
import Hero       from "./components/Hero/Hero";
import About      from "./components/About/About";
import Skills     from "./components/Skills/Skills";
import Projects   from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Contact    from "./components/Contact/Contact";
import Footer     from "./components/Footer/Footer";

function App() {
  const [theme, setTheme] = useState("dark");

  // Activate global hooks
  useScrollReveal();
  useScrollProgress();
  useCustomCursor();

  // Apply theme to <html> so CSS variables switch
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }

  return (
    <>
      {/* Scroll progress bar at top of viewport */}
      <div id="scroll-progress" />

      {/* Custom cursor elements */}
      <div id="cursor" />
      <div id="cursor-ring" />

      {/* Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Page sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
