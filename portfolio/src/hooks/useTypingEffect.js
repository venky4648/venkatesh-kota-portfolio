// src/hooks/useTypingEffect.js
// ─────────────────────────────────────────────────────────
// Custom hook that cycles through an array of strings,
// typing and deleting each one character by character.
// ─────────────────────────────────────────────────────────

import { useState, useEffect } from "react";

/**
 * @param {string[]} texts   - Array of strings to cycle through
 * @param {number}   speed   - Typing speed in ms per character (default 80)
 * @param {number}   pause   - Pause duration after full text is typed (default 2000)
 * @returns {string}         - The currently displayed string slice
 */
export function useTypingEffect(texts, speed = 80, pause = 2000) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    let timeout;

    if (!deleting && charIdx < current.length) {
      // Still typing
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      // Fully typed — wait then start deleting
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      // Still deleting
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else {
      // Fully deleted — move to next string
      setDeleting(false);
      setIdx((i) => (i + 1) % texts.length);
    }

    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, idx, texts, speed, pause]);

  return display;
}
