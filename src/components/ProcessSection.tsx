'use client';

import { useRef, useEffect, useState } from 'react';
import { useScroll, useVelocity, useSpring, useMotionValueEvent } from 'framer-motion';

export default function ProcessSection() {
  const containerRef = useRef<HTMLElement>(null);
  const scrollVideoRef = useRef<HTMLVideoElement>(null);
  const [timecode, setTimecode] = useState("00:00:00:00");

  // Use GLOBAL scroll (no target) so velocity tracks across the entire page
  const { scrollY } = useScroll();

  // Calculate scroll velocity to determine playback rate
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });

  // Track idle vs scrolling state
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useMotionValueEvent(smoothVelocity, "change", (latestVelocity) => {
    if (!scrollVideoRef.current) return;

    const speed = Math.abs(latestVelocity);

    if (speed > 5) {
      // User is scrolling — speed up
      isScrollingRef.current = true;
      const targetRate = 1.0 + (speed / 1000) * 1.5;
      scrollVideoRef.current.playbackRate = Math.min(targetRate, 3.0);

      // Reset idle timeout
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
        if (scrollVideoRef.current) {
          scrollVideoRef.current.playbackRate = 1.0;
        }
      }, 200);
    }
  });

  useEffect(() => {
    const video = scrollVideoRef.current;
    if (!video) return;

    // Start playing at normal speed
    video.playbackRate = 1.0;
    const playVideo = () => {
      video.play().catch(() => {});
    };

    playVideo();

    // Resume playback if it pauses
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        playVideo();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    // Fake timecode generator for the HUD
    const interval = setInterval(() => {
      const now = new Date();
      const ms = Math.floor(performance.now() % 99).toString().padStart(2, '0');
      const s = now.getSeconds().toString().padStart(2, '0');
      const m = now.getMinutes().toString().padStart(2, '0');
      setTimecode(`01:${m}:${s}:${ms}`);
    }, 50);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibility);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <section id="process" ref={containerRef} className="relative h-[300vh] w-full bg-black">
      <div className="sticky top-0 w-full h-screen overflow-hidden">

        {/* Dynamic Playback Rate Video */}
        <video
          ref={scrollVideoRef}
          loop
          muted
          playsInline
          autoPlay
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/0510(9)_optimized.mp4" type="video/mp4" />
        </video>

        {/* Premium Cinematic HUD Decorations */}
        <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-8 md:p-12">

          {/* Subtle Scanlines overlay */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[linear-gradient(transparent_50%,rgba(0,0,0,1)_50%)] bg-[length:100%_4px]" />

          {/* Heavy Vignette to frame the video */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.8)_100%)]" />

          {/* Top Row HUD */}
          <div className="relative z-20 flex justify-between items-start text-cyan-500/60 font-mono text-xs tracking-[0.2em] uppercase">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(255,0,0,0.8)]" />
              <span>REC // SYSTEM_ACTIVE</span>
            </div>
            <div className="text-right">
              <span className="block opacity-50 mb-1">DATA_STREAM</span>
              <span className="text-white/80">{timecode}</span>
            </div>
          </div>

          {/* Center Targeting / Focus Brackets */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[80vw] md:max-w-[800px] aspect-video border border-white/[0.05] flex items-center justify-center">
             {/* Corner Accents on the box */}
             <div className="absolute -top-[1px] -left-[1px] w-8 h-8 border-t border-l border-cyan-400/50" />
             <div className="absolute -top-[1px] -right-[1px] w-8 h-8 border-t border-r border-cyan-400/50" />
             <div className="absolute -bottom-[1px] -left-[1px] w-8 h-8 border-b border-l border-cyan-400/50" />
             <div className="absolute -bottom-[1px] -right-[1px] w-8 h-8 border-b border-r border-cyan-400/50" />

             {/* Subtle Center Crosshair */}
             <div className="w-12 h-px bg-cyan-400/30 absolute" />
             <div className="w-px h-12 bg-cyan-400/30 absolute" />
          </div>

          {/* Bottom Row HUD */}
          <div className="relative z-20 flex justify-between items-end text-white/30 font-mono text-[10px] tracking-widest">
            <div>
              <p>COORD: 34.0522° N, 118.2437° W</p>
              <p>ZOOM: 2.4X OPTICAL</p>
            </div>
            <div className="flex gap-1">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`w-1 h-3 ${i < 4 ? 'bg-cyan-500/50' : 'bg-white/10'}`} />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}