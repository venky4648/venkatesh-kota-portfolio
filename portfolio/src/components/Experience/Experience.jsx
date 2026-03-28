// src/components/Experience/Experience.jsx
// ─────────────────────────────────────────────────────────
// Experience & Education section with two side-by-side
// vertical timelines. Data imported from:
//   src/data/experience.js  →  WORK_EXPERIENCE, EDUCATION
// ─────────────────────────────────────────────────────────

import { WORK_EXPERIENCE, EDUCATION } from "../../data/experience";
import "./Experience.css";

// ── Single timeline entry ────────────────────────────────
function TimelineItem({ item }) {
  return (
    <div className="timeline-item">
      {/* Coloured dot — colour comes from data (accent or accent2) */}
      <div
        className="timeline-dot"
        style={{ background: item.accentColor }}
      />
      <div className="timeline-date">{item.date}</div>
      <div className="timeline-role">{item.role}</div>
      <div className="timeline-org">{item.org}</div>
      <div className="timeline-desc">{item.desc}</div>
    </div>
  );
}

// ── Experience Section ───────────────────────────────────
function Experience() {
  return (
    <section id="experience">
      <div className="max-w">

        {/* Section header */}
        <div className="reveal" style={{ marginBottom: "3.5rem" }}>
          <div className="section-tag">My Journey</div>
          <h2 className="section-title">
            Experience &
            <span className="gradient-text"> Education</span>
          </h2>
        </div>

        {/* Two-column timeline grid */}
        <div className="exp-grid">

          {/* Work experience column */}
          <div className="reveal">
            <div className="timeline-title">💼 Experience</div>
            {WORK_EXPERIENCE.map((item, i) => (
              <TimelineItem key={i} item={item} />
            ))}
          </div>

          {/* Education column */}
          <div className="reveal">
            <div className="timeline-title">🎓 Education</div>
            {EDUCATION.map((item, i) => (
              <TimelineItem key={i} item={item} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;
