// src/components/Navbar/Navbar.jsx
// ─────────────────────────────────────────────────────────
// Sticky top navigation bar with:
//  - Logo
//  - Desktop anchor links
//  - Theme toggle button
//  - Animated hamburger menu for mobile
// ─────────────────────────────────────────────────────────

import { useState } from "react";
import "./Navbar.css";

// Nav link labels — href maps to section id
const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Contact"];

function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <nav>
        {/* Logo */}
        <a href="#hero" className="nav-logo">
          VK.
        </a>

        {/* Desktop links */}
        <ul className="nav-links">
          {NAV_LINKS.map((label) => (
            <li key={label}>
              <a href={`#${label.toLowerCase()}`}>{label}</a>
            </li>
          ))}
        </ul>

        {/* Theme toggle + hamburger */}
        <div className="nav-right">
          <button
            className="theme-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <button
            className="hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              style={
                menuOpen
                  ? { transform: "rotate(45deg) translateY(6px)" }
                  : {}
              }
            />
            <span style={menuOpen ? { opacity: 0 } : {}} />
            <span
              style={
                menuOpen
                  ? { transform: "rotate(-45deg) translateY(-6px)" }
                  : {}
              }
            />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

export default Navbar;
