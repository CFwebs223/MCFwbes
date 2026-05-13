'use client';

import { useState, useEffect } from 'react';

interface FrameSequenceProps {
  path: string;
  totalFrames: number;
  progress: number;
  ext?: string;
  pad?: number;
  className?: string;
  onLoaded?: () => void;
}

let globalFrameCache = new Map<string, boolean>();

/**
 * FrameSequence — preloaded JPEG frame scrubber.
 *
 * On mount, ALL frames are preloaded via Image() constructor.
 * The browser caches them automatically. During scroll, <img src>
 * swaps are served from cache — zero network cost, minimal decode.
 */
export default function FrameSequence({
  path,
  totalFrames,
  progress,
  ext = 'jpg',
  pad = 4,
  className = '',
  onLoaded,
}: FrameSequenceProps) {
  const [ready, setReady] = useState(globalFrameCache.has(`${path}1`));

  const clamped = Math.max(0, Math.min(1, progress));
  const frameIndex = Math.min(Math.floor(clamped * totalFrames), totalFrames - 1);
  const frameNum = String(frameIndex + 1).padStart(pad, '0');
  const src = `${path}${frameNum}.${ext}`;

  useEffect(() => {
    if (ready) return;

    let cancelled = false;
    let firstLoaded = false;

    for (let i = 0; i < totalFrames; i++) {
      const num = String(i + 1).padStart(pad, '0');
      const frameSrc = `${path}${num}.${ext}`;

      if (globalFrameCache.has(frameSrc)) continue;

      const img = new Image();
      img.onload = () => {
        if (cancelled) return;
        globalFrameCache.set(frameSrc, true);
        if (!firstLoaded) {
          firstLoaded = true;
          setReady(true);
          onLoaded?.();
        }
      };
      img.onerror = () => {
        if (cancelled) return;
        if (!firstLoaded) {
          firstLoaded = true;
          setReady(true);
          onLoaded?.();
        }
      };
      img.src = frameSrc;
    }

    // If all already cached, mark ready immediately
    let allCached = true;
    for (let i = 0; i < totalFrames; i++) {
      const num = String(i + 1).padStart(pad, '0');
      if (!globalFrameCache.has(`${path}${num}.${ext}`)) { allCached = false; break; }
    }
    if (allCached && totalFrames > 0) {
      setReady(true);
      onLoaded?.();
    }

    return () => { cancelled = true; };
  }, [path, totalFrames, ext, pad, ready, onLoaded]);

  return (
    <div className={`absolute inset-0 ${className}`}>
      {!ready && <div className="absolute inset-0 bg-black" />}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        className={`w-full h-full object-cover object-top ${ready ? 'opacity-100' : 'opacity-0'}`}
        draggable={false}
        fetchPriority={frameIndex < 5 ? 'high' : 'auto'}
      />
    </div>
  );
}

export { globalFrameCache };