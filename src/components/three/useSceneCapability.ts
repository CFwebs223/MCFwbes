'use client';

import { useEffect, useState } from 'react';

export type SceneCapability = 'checking' | 'animated' | 'static';

function detectWebGL2(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!canvas.getContext('webgl2');
  } catch {
    return false;
  }
}

export function useSceneCapability(): SceneCapability {
  const [capability, setCapability] = useState<SceneCapability>('checking');

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasWebGL2 = detectWebGL2();
    const lowEndDevice =
      typeof navigator !== 'undefined' &&
      'hardwareConcurrency' in navigator &&
      navigator.hardwareConcurrency > 0 &&
      navigator.hardwareConcurrency <= 2;

    setCapability(prefersReducedMotion || !hasWebGL2 || lowEndDevice ? 'static' : 'animated');
  }, []);

  return capability;
}
