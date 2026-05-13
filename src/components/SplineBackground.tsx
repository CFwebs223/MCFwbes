'use client';

import { useRef, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Spline viewer (heavy dependency, lazy loaded)
const SplineViewer = dynamic(
  () => import('@splinetool/react-spline').then((mod) => ({ default: mod.default })),
  { ssr: false }
);

interface SplineBackgroundProps {
  scene: string;
  className?: string;
  mobileFallback?: boolean;
}

export default function SplineBackground({ scene, className = '', mobileFallback = true }: SplineBackgroundProps) {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia('(pointer: coarse)').matches);
    setMounted(true);
  }, []);

  if (!mounted || (mobileFallback && isMobile) || hasError) {
    return null;
  }

  return (
    <div className={`absolute inset-0 pointer-events-none z-0 overflow-hidden ${className}`}>
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-30' : 'opacity-0'}`}>
        <SplineViewer
          scene={scene}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          style={{ width: '100%', height: '100%', background: 'transparent' }}
        />
      </div>
      {/* Ambient gradient overlay to soften Spline */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none" />
    </div>
  );
}