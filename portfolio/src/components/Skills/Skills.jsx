// src/components/Skills/Skills.jsx
// ─────────────────────────────────────────────────────────
// Skills section. Renders categorized skill cards with
// animated top-border accents and hoverable pill tags.
// Data is imported from src/data/skills.js
// ─────────────────────────────────────────────────────────

import { SKILLS } from "../../data/skills";
import "./Skills.css";

function SkillCard({ icon, title, skills, index }) {
  return (
    <div
      className="skill-category reveal"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="skill-cat-icon">{icon}</div>
      <div className="skill-cat-title">{title}</div>
      <div className="skill-pills">
        {skills.map((skill) => (
          <span className="skill-pill" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills">
      <div className="max-w">
        {/* Section header */}
        <div className="skills-header reveal">
          <div className="section-tag">What I Know</div>
          <h2 className="section-title">
            Skills &<span className="gradient-text"> Technologies</span>
          </h2>
          <p className="section-sub">
            A curated set of tools and technologies I use to build modern,
            production-grade applications.
          </p>
        </div>

        {/* Skill category cards */}
        <div className="skills-grid">
          {SKILLS.map((category, i) => (
            <SkillCard key={category.title} index={i} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
