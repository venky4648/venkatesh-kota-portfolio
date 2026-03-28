// src/components/Footer/Footer.jsx
// ─────────────────────────────────────────────────────────
// Minimal footer with copyright text and quick links.
// ─────────────────────────────────────────────────────────

import "./Footer.css";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      {/* Copyright */}
      <p className="footer-copy">
        © {currentYear} Venkatesh Kota. Built with React &amp;{" "}
        <span className="footer-heart">♥</span>
      </p>

      {/* Quick links */}
      <div className="footer-links">
        <a
          href="https://github.com/venky4648"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/kota-venkatesh-/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a href="#hero">↑ Back to Top</a>
      </div>
    </footer>
  );
}

export default Footer;
