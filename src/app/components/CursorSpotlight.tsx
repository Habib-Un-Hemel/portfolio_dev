"use client";

import { useEffect } from "react";

/**
 * Tracks the pointer and writes its position (as % offsets) onto whichever
 * .glass / .glass-card element it's currently over, via --spot-x / --spot-y.
 * The actual glow is pure CSS (see .glass::after in globals.css) — this just
 * feeds it coordinates, so no per-component wiring is needed.
 */
const CursorSpotlight = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;

    const handleMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const target = (e.target as HTMLElement)?.closest<HTMLElement>(
          ".glass, .glass-card"
        );
        if (!target) return;
        const rect = target.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        target.style.setProperty("--spot-x", `${x}%`);
        target.style.setProperty("--spot-y", `${y}%`);
      });
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
};

export default CursorSpotlight;
