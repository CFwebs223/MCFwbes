'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, useMotionValue } from 'framer-motion';

const VIDEO_DURATION = 24.0;
// Budget: max 5 video seeks per second (200ms between seeks)
// This keeps each seek within 16ms frame budget at 60fps
const SEEK_INTERVAL = 200;
// Minimum frame advance to bother seeking (0.1s = ~3-4 frames)
const FRAME_THRESHOLD = 0.1;

export default function HeroOceanScene() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const lastSeekRef = useRef({ time: -1, at: 0 });

  useEffect(() => {
    setIsMobile(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  // Scroll physics — 200vh: just enough scroll room for the effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Text fade — compositor-only
  const textOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.15], [0, -60]);

  // Branding — compositor-only
  const brandingOpacity = useTransform(scrollYProgress, [0.65, 0.8], [0, 1]);
  const brandingScale = useTransform(scrollYProgress, [0.65, 0.9], [0.92, 1.02]);
  const brandingY = useTransform(scrollYProgress, [0.65, 0.8], [30, 0]);

  // Frame-budgeted video seeking: max 5 seeks/sec
  // Every seek must complete within the 16ms frame budget
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const video = videoRef.current;
    if (!video || video.readyState < 3) return;

    const now = performance.now();
    const targetTime = latest * VIDEO_DURATION;
    const diff = Math.abs(lastSeekRef.current.time - targetTime);

    // Skip if frame barely changed OR we're still within the budget window
    if (diff < FRAME_THRESHOLD || now - lastSeekRef.current.at < SEEK_INTERVAL) return;

    video.currentTime = targetTime;
    lastSeekRef.current = { time: targetTime, at: now };
  });

  // Mouse parallax — desktop only, transform only
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  const handleMouseMove = isMobile ? undefined : useCallback((e: React.MouseEvent) => {
    mouseX.set((e.clientX / window.innerWidth - 0.5) * 30);
    mouseY.set((e.clientY / window.innerHeight - 0.5) * 30);
  }, []);

  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
  };

  const lineVars = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  return (
    <section
      ref={containerRef}
      className="relative h-[200vh] w-full bg-black"
      onMouseMove={handleMouseMove}
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-center bg-black">

        {/* Video — scroll-sought at max 5fps, no rAF, no polling */}
        <motion.div
          className="absolute inset-0 z-0"
          style={!isMobile ? { x: smoothMouseX, y: smoothMouseY } : {}}
        >
          <video
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover object-top brightness-[0.85]"
          >
            <source src="/videos/hero_optimized.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,10,5,0.7)_100%)] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#020a06]/90 pointer-events-none" />
        </motion.div>

        {/* Branding */}
        <motion.div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none"
          style={{ opacity: brandingOpacity, scale: brandingScale, y: brandingY }}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            {['M','C','F'].map((l) => (
              <span key={l} className="text-6xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 via-yellow-500 to-yellow-800 drop-shadow-[0_0_30px_rgba(234,179,8,0.4)]">{l}</span>
            ))}
          </div>
          <h2 className="text-2xl md:text-4xl font-medium tracking-[0.3em] text-white uppercase mb-4 drop-shadow-xl">Websites</h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent mb-4" />
          <p className="text-sm md:text-base font-light tracking-[0.2em] text-yellow-500/80 uppercase">Premium Web Design & Development</p>
        </motion.div>

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent z-30" />

        {/* Text — compositor-only */}
        <motion.div
          className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-32 pointer-events-none"
          style={{ opacity: textOpacity, y: textY }}
        >
          <div className="max-w-4xl pointer-events-auto">
            <motion.div variants={containerVars} initial="hidden" animate="show">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight mb-8 text-white drop-shadow-2xl leading-[1.1]">
                <div className="overflow-hidden pb-2">
                  <motion.div variants={lineVars}>Digital Experiences</motion.div>
                </div>
                <div className="overflow-hidden pb-4">
                  <motion.div variants={lineVars} className="italic font-light text-emerald-400">That Move Effortlessly.</motion.div>
                </div>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
              className="text-lg md:text-xl lg:text-2xl text-white/80 font-light max-w-2xl leading-relaxed mb-10"
            >
              We engineer high-performance websites and immersive WebGL experiences that command attention without breaking a sweat. Built for businesses that refuse to settle for average.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut", delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-full bg-white text-[#020a06] font-medium hover:bg-emerald-50 transition-colors hover-target text-base shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >Start Your Project</button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-full glass border border-white/20 text-white font-medium hover:bg-white/10 transition-colors hover-target text-base"
              >Explore Capabilities</button>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center cursor-pointer z-20 group"
          style={{ opacity: textOpacity }}
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-white/40 text-[10px] font-medium tracking-[0.3em] uppercase mb-4 group-hover:text-emerald-400 transition-colors">Descend</span>
          <div className="w-px h-16 bg-white/20 relative overflow-hidden">
            <motion.div
              className="w-full h-1/2 bg-emerald-400 absolute top-0 left-0"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}