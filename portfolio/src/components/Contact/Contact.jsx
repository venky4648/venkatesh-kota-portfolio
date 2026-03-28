// src/components/Contact/Contact.jsx
// ─────────────────────────────────────────────────────────
// Contact section with:
//  - Left column: social / contact link cards
//  - Right column: controlled contact form with sent state
// ─────────────────────────────────────────────────────────

import { useState } from "react";
import "./Contact.css";

// Social / contact links data
const CONTACT_LINKS = [
  {
    icon: "🐙",
    label: "GitHub",
    val: "github.com/venky4648",
    href: "https://github.com/venky4648",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    val: "linkedin.com/in/venkatesh-kota",
    href: "https://www.linkedin.com/in/kota-venkatesh-/",
  },
  {
    icon: "✉️",
    label: "Email",
    val: "kotavenkatesh2822@gmail.com",
    href: "mailto:kotavenkatesh2822@gmail.com",
  },
];

// ── Reusable form field ──────────────────────────────────
function FormField({ label, children }) {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      {children}
    </div>
  );
}

// ── Contact Section ──────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  // Generic change handler
  function handleChange(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  // Simulate form submission (wire up to a real backend / EmailJS / Formspree)
  function handleSubmit() {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <section id="contact">
      <div className="max-w contact-wrap">

        {/* ── LEFT: Info + link cards ── */}
        <div className="reveal">
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-title">
            Let's work
            <br />
            <span className="gradient-text">together.</span>
          </h2>
          <p className="section-sub">
            I'm currently open to full-time roles and freelance projects.
            If you have an opportunity or just want to connect — my inbox
            is always open.
          </p>

          {/* Social / contact links */}
          <div className="contact-links">
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.label}
                className="contact-link-item"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <div className="contact-link-icon">{link.icon}</div>
                <div>
                  <div className="contact-link-label">{link.label}</div>
                  <div className="contact-link-val">{link.val}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Contact form ── */}
        <div className="reveal">
          <div className="section-tag" style={{ marginBottom: "1.5rem" }}>
            Send a Message
          </div>

          <div className="contact-form">
            <FormField label="Name">
              <input
                className="form-input"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange("name")}
              />
            </FormField>

            <FormField label="Email">
              <input
                className="form-input"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange("email")}
              />
            </FormField>

            <FormField label="Message">
              <textarea
                className="form-textarea"
                placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={handleChange("message")}
              />
            </FormField>

            <button
              className="btn-primary form-submit"
              onClick={handleSubmit}
            >
              {sent ? "✅ Message Sent!" : "Send Message →"}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
