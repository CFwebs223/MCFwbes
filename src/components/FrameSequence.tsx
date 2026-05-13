'use client';

import { useRef, useState, useEffect, useCallback } from 'react';

interface FrameSequenceProps {
  /** Path prefix like "/frames/hero/frame_" */
  path: string;
  /** Total number of frames */
  totalFrames: number;
  /** Current scroll progress 0-1 */
  progress: number;
  /** File extension (default: jpg) */
  ext?: string;
  /** Padding for frame number (default: 4) */
  pad?: number;
  className?: string;
}

/**
 * FrameSequence — renders sequential JPEG/PNG frames based on scroll progress.
 * No video seeking, no codec decode, no rAF.
 * Frame images are cached by the browser after first load.
 */
export default function FrameSequence({
  path,
  totalFrames,
  progress,
  ext = 'jpg',
  pad = 4,
  className = '',
}: FrameSequenceProps) {
  const [loaded, setLoaded] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clamp progress to [0, 1]
  const clamped = Math.max(0, Math.min(1, progress));
  // Compute frame index (last frame stays on the final frame)
  const frameIndex = Math.min(
    Math.floor(clamped * totalFrames),
    totalFrames - 1
  );
  const frameNum = String(frameIndex + 1).padStart(pad, '0');
  const src = `${path}${frameNum}.${ext}`;

  // Preload the next few frames for smoother scrubbing
  useEffect(() => {
    const preloadCount = 3;
    for (let i = 1; i <= preloadCount; i++) {
      const nextIndex = frameIndex + i;
      if (nextIndex < totalFrames) {
        const nextNum = String(nextIndex + 1).padStart(pad, '0');
        const img = new Image();
        img.src = `${path}${nextNum}.${ext}`;
      }
    }
  }, [frameIndex, path, totalFrames, ext, pad]);

  // Preload first frame on mount
  useEffect(() => {
    const img = new Image();
    img.onload = () => setLoaded(true);
    img.src = src;
  }, []);

  return (
    <div className={`absolute inset-0 ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-black" />
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        className={`w-full h-full object-cover object-top transition-opacity duration-75 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        draggable={false}
        loading="eager"
      />
    </div>
  );
}