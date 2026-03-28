// src/hooks/useCustomCursor.js
// ─────────────────────────────────────────────────────────
// Drives the custom cursor dot + ring follower.
// The ring lags behind the dot using linear interpolation
// for a smooth trailing effect.
// ─────────────────────────="──────────────────────────────

import { useEffect } from "react";

export function useCustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursor-ring");
    if (!cursor || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let rafId;

    // Move dot instantly to mouse position
    function onMouseMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + "px";
      cursor.style.top = mouseY + "px";
    }

    // Ring smoothly follows via lerp
    function animateRing() {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX + "px";
      ring.style.top = ringY + "px";
      rafId = requestAnimationFrame(animateRing);
    }

    // Scale up cursor on interactive elements
    function onEnter() {
      cursor.style.width = "20px";
      cursor.style.height = "20px";
      ring.style.width = "52px";
      ring.style.height = "52px";
    }
    function onLeave() {
      cursor.style.width = "10px";
      cursor.style.height = "10px";
      ring.style.width = "36px";
      ring.style.height = "36px";
    }

    window.addEventListener("mousemove", onMouseMove);
    rafId = requestAnimationFrame(animateRing);

    // Attach hover scaling to all interactive elements
    const interactives = document.querySelectorAll("a, button");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);
}
