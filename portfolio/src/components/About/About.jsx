// src/components/About/About.jsx
// ─────────────────────────────────────────────────────────
// About section with:
//  - Avatar placeholder (swap for a real <img> when ready)
//  - Two floating glassmorphism info cards
//  - Bio paragraphs
//  - Technology highlight grid
// ─────────────────────────────────────────────────────────

import "./About.css";

// Skills listed in the highlight grid
const HIGHLIGHTS = [
  "ReactJS",
  "Node.js & Express",
  "MongoDB & Mongoose",
  "REST API Design",
  "JWT & OAuth Auth",
  "Git & Version Control",
  "SQL & NoSQL Databases",
];

function About() {
  return (
    <section id="about">
      <div className="max-w about-grid">
        {/* ── LEFT: Avatar + floating cards ── */}
        <div className="about-visual reveal">
          <div className="about-img-wrap">
            {/*
              Replace the .about-avatar div with:
              <img src="/your-photo.jpg" alt="Venkatesh Kota" />
              when you have an actual photo.
            */}
            <div className="about-avatar">VK</div>
          </div>

          {/* Floating stat card — bottom right */}
          <div className="about-card">
            <div className="about-card-label">Tech Stack</div>
            <div className="about-card-val">MERN</div>
          </div>

          {/* Floating badge card — top left */}
          <div className="about-card2">
            <div className="about-card2-icon">🚀</div>
            <div className="about-card2-text">
              Open to work
              <br />
              worldwide
            </div>
          </div>
        </div>

        {/* ── RIGHT: Text ── */}
        <div className="reveal">
          <div className="section-tag">About Me</div>
          

          <p className="about-intro">
            I'm Venkatesh Kota, a Full Stack Developer passionate about building
            end-to-end web applications. With deep expertise in the MERN stack,
            I thrive at the intersection of clean backend architecture and
            intuitive frontend design.
          </p>

          <p className="about-intro">
            I love solving complex problems through elegant code — whether it's
            optimizing MongoDB aggregations, architecting RESTful APIs, or
            crafting smooth React UIs. Every project is an opportunity to push
            the craft forward.
          </p>

          {/* Highlight chips */}
          <div className="about-highlights">
            {HIGHLIGHTS.map((item) => (
              <div className="highlight-item" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
