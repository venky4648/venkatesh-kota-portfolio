// src/components/Hero/Hero.jsx
// ─────────────────────────────────────────────────────────
// Landing / hero section. Contains:
//  - Availability badge
//  - Name + animated gradient
//  - Typing role animation (via useTypingEffect hook)
//  - Short description
//  - CTA buttons
//  - Stats row
//  - Scroll hint
// ─────────────────────────────────────────────────────────

import { useTypingEffect } from "../../hooks/useTypingEffect";
import "./Hero.css";

// Strings cycled by the typing animation
const TYPED_ROLES = [
  
  "MERN Stack Engineer",
  "React.js Developer",
  "Backend Developer",
  "frontend Developer"
];

// Quick stats displayed below the CTAs
const STATS = [
  { num: "5+",  label: "Projects Built" },
  { num: "1+",  label: "Years Coding" },
  { num: "10+", label: "Technologies" },
  { num: "∞",   label: "Lines of Code" },
];

function Hero() {
  const typedText = useTypingEffect(TYPED_ROLES);

  return (
    <section id="hero">
      {/* Decorative backgrounds */}
      <div className="hero-grid-bg" />
      <div className="hero-glow" />
      <div className="hero-glow2" />

      <div className="max-w hero-content">
        {/* Availability badge */}
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="hero-name">
          Venkatesh
          <br />
          <span>Kota</span>
        </h1>

        {/* Typing role */}
        <p className="hero-role">
          {">"} {typedText}
          <span className="typing-cursor">|</span>
        </p>

        {/* Description */}
        <p className="hero-desc">
          I build scalable, performant web applications with clean code and
          exceptional user experiences. Specializing in the MERN stack — from
          pixel-perfect UIs to robust backend systems.
        </p>

        {/* CTA buttons */}
        <div className="hero-ctas">
          <a href="#projects" className="btn-primary">
            View My Work →
          </a>
          <a href="#contact" className="btn-secondary">
            Get In Touch
          </a>
          <a
            href="https://github.com/venky4648"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            GitHub ↗
          </a>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          {STATS.map(({ num, label }) => (
            <div key={label}>
              <div className="stat-num">{num}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll-hint">
        <div className="scroll-line" />
        SCROLL
      </div>
    </section>
  );
}

export default Hero;
