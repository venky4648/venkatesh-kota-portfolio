// src/hooks/useScrollReveal.js
// ─────────────────────────────────────────────────────────
// Custom hook that watches all .reveal elements and adds
// the .visible class when they enter the viewport,
// triggering the CSS fade-up transition.
// ─────────────────────────────────────────────────────────

import { useEffect } from "react";

/**
 * @param {number} threshold - IntersectionObserver visibility threshold (0–1)
 * @param {number} stagger   - Delay (ms) between each element's reveal
 */
export function useScrollReveal(threshold = 0.12, stagger = 80) {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, i * stagger);
          }
        });
      },
      { threshold }
    );

    elements.forEach((el) => observer.observe(el));

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, [threshold, stagger]);
}
