'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { scrollStore } from '@/lib/scroll-store';

gsap.registerPlugin(ScrollTrigger);

/**
 * Drives scrollStore's 0-1 progress value from the full homepage scroll
 * length via GSAP ScrollTrigger. Lenis (mounted sitewide in the root
 * layout) updates real window scroll position as it smooths, so
 * ScrollTrigger's native scroll listening stays in sync automatically.
 */
export default function HomeScrollController() {
  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => scrollStore.set(self.progress),
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    const timer = setTimeout(refresh, 500);

    return () => {
      trigger.kill();
      window.removeEventListener('load', refresh);
      clearTimeout(timer);
    };
  }, []);

  return null;
}
