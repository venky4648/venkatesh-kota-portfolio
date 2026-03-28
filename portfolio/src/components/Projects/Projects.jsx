import { useState, useEffect } from "react";
import { PROJECTS } from "../../data/projects";
import "./Projects.css";

const FILTERS = ["all", "fullstack", "frontend", "backend"];

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function ProjectCard({ project, index }) {
  return (
    <div
      className="project-card reveal"
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      {project.featured && (
        <span className="project-featured">★ Featured</span>
      )}

      <div className="project-card-top">
        <div className="project-icon">{project.icon}</div>
        <div className="project-links">
          <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
            <GithubIcon />
          </a>
          {project.live && (
            <a className="project-link" href={project.live} target="_blank" rel="noreferrer">
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>

      <div className="project-name">{project.name}</div>
      <p className="project-desc">{project.desc}</p>

      <div className="project-tech">
        {project.tech.map((t) => (
          <span className="tech-tag" key={t}>{t}</span>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.toLowerCase() === filter);

  
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => {
      el.classList.add("active");
    });
  }, [filter]);

  return (
    <section id="projects">
      <div className="max-w">

        <div className="projects-header reveal">
          <div className="section-tag">What I've Built</div>
          <h2 className="section-title">
            Featured <span className="gradient-text"> Projects</span>
          </h2>
          <p className="section-sub">
            Real-world applications spanning e-commerce, real-time systems,
            productivity tools, and developer utilities.
          </p>

          <div className="projects-filter">
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`filter-btn ${filter === f ? "active" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;