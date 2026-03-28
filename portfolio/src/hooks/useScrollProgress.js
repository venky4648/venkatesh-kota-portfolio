// src/hooks/useScrollProgress.js
// ─────────────────────────────────────────────────────────
// Tracks how far the user has scrolled and updates the
// #scroll-progress bar width accordingly.
// ─────────────────────────────────────────────────────────

import { useEffect } from "react";

export function useScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById("scroll-progress");
    if (!bar) return;

    function onScroll() {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (scrolled / total) * 100 : 0;
      bar.style.width = pct + "%";
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
