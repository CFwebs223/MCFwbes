'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Mounts smooth scrolling as a side effect only — renders no children — so
 * it can safely be dynamic-imported with ssr:false without bailing the rest
 * of the page (which it would wrap) out of server rendering.
 */
export default function LenisProvider() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const isMobile = window.matchMedia('(pointer: coarse)').matches;

    const lenis = new Lenis({
      duration: isMobile ? 2.0 : 3.0,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: !isMobile,
      wheelMultiplier: 0.35,
      touchMultiplier: isMobile ? 0.6 : 0.8,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
