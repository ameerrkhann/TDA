"use client";

import { useEffect, useState } from "react";

/**
 * Returns true while the hero section is in view (intersecting the viewport).
 * The Header uses this to hide itself when the hero is visible.
 */
export function useHeroVisible() {
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    const heroEl = document.getElementById("hero-section");
    if (!heroEl) {
      setHeroVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hero is "visible" if more than 10% is showing
        setHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  return heroVisible;
}
