'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import FrameSequence from './FrameSequence';

export default function HeroOceanScene() {
  const containerRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Text fades IN mid-scroll (reaches full opacity by 35% of section)
  const textOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.15, 0.35], [40, 0]);

  // Branding — appears after text
  const brandingOpacity = useTransform(scrollYProgress, [0.55, 0.7], [0, 1]);
  const brandingScale = useTransform(scrollYProgress, [0.55, 0.8], [0.92, 1.02]);
  const brandingY = useTransform(scrollYProgress, [0.55, 0.7], [30, 0]);

  // Scroll button fades out as text appears
  const buttonOpacity = useTransform(scrollYProgress, [0.1, 0.25], [1, 0]);
  const buttonScale = useTransform(scrollYProgress, [0.1, 0.25], [1, 0.8]);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  const handleMouseMove = isMobile ? undefined : (e: React.MouseEvent) => {
    mouseX.set((e.clientX / window.innerWidth - 0.5) * 30);
    mouseY.set((e.clientY / window.innerHeight - 0.5) * 30);
  };

  const TOTAL_FRAMES = 120;
  const [frameIndex, setFrameIndex] = useState(0);
  const lastFrameRef = useRef(-1);
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      const idx = Math.min(Math.floor(v * TOTAL_FRAMES), TOTAL_FRAMES - 1);
      if (idx !== lastFrameRef.current) {
        lastFrameRef.current = idx;
        setFrameIndex(idx);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section
      ref={containerRef}
      className="relative h-[350vh] w-full bg-black"
      onMouseMove={handleMouseMove}
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-center bg-black">

        {/* Frame sequence */}
        <motion.div
          className="absolute inset-0 z-0"
          style={!isMobile ? { x: smoothMouseX, y: smoothMouseY } : {}}
        >
          <FrameSequence
            path="/frames/hero/frame_"
            totalFrames={TOTAL_FRAMES}
            progress={frameIndex / TOTAL_FRAMES}
            className="brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,10,5,0.7)_100%)] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#020a06]/90 pointer-events-none" />
          {/* Cover watermark */}
          <div className="absolute bottom-0 right-0 w-32 h-12 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
        </motion.div>

        {/* Branding — appears at end */}
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

        {/* Text — hidden initially, parent opacity controls visibility via scroll */}
        <motion.div
          className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-32 pointer-events-none"
          style={{ opacity: textOpacity, y: textY }}
        >
          <div className="max-w-4xl pointer-events-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight mb-8 text-white drop-shadow-2xl leading-[1.1]">
              Digital Experiences<br />
              <span className="italic font-light text-emerald-400">That Move Effortlessly.</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-white/80 font-light max-w-2xl leading-relaxed mb-10">
              We engineer high-performance websites and immersive WebGL experiences that command attention without breaking a sweat. Built for businesses that refuse to settle for average.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-full bg-white text-[#020a06] font-medium hover:bg-emerald-50 transition-colors hover-target text-base shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >Start Your Project</button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-full glass border border-white/20 text-white font-medium hover:bg-white/10 transition-colors hover-target text-base"
              >Explore Capabilities</button>
            </div>
          </div>
        </motion.div>

        {/* Big centered scroll button — visible at start, fades as text appears */}
        <motion.div
          className="absolute inset-0 z-15 flex flex-col items-center justify-center cursor-pointer"
          style={{ opacity: buttonOpacity, scale: buttonScale }}
          onClick={() => {
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className="flex flex-col items-center gap-6">
            <div className="w-12 h-20 md:w-16 md:h-24 rounded-full border-2 border-white/30 flex items-start justify-center p-3">
              <motion.div
                className="w-1.5 h-4 md:w-2 md:h-5 rounded-full bg-white"
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            <span className="text-white/50 text-xs md:text-sm font-medium tracking-[0.35em] uppercase">
              Scroll to explore
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}