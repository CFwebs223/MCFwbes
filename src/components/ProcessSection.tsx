'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const steps = [
  { number: '01', title: 'Discovery', desc: 'We learn your business, goals, and audience to define the scope.' },
  { number: '02', title: 'Design & Build', desc: 'We craft a custom design and develop it with clean, performant code.' },
  { number: '03', title: 'Review & Refine', desc: 'You review the live draft. We iterate until it is exactly right.' },
  { number: '04', title: 'Launch & Grow', desc: 'We deploy, optimize, and hand over everything you need to succeed.' },
];

export default function ProcessSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, []);

  return (
    <section ref={sectionRef} id="process" className="relative h-screen w-full bg-black overflow-hidden">
      {/* Background video — normal playback, smooth and cinematic */}
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        autoPlay
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/tropical.mp4" type="video/mp4" />
      </video>

      {/* Blur watermark corner */}
      <div className="absolute bottom-0 right-0 w-28 h-14 backdrop-blur-[6px] pointer-events-none z-10" />
      {/* Edge blur — subtle feathered border hides watermark edges */}
      <div className="absolute bottom-0 right-0 w-40 h-20 bg-gradient-to-br from-transparent via-transparent to-black/10 pointer-events-none z-10" />
      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.3)_100%)] z-10 pointer-events-none" />

      {/* Translucent glass backdrop over top half */}
      <div className="absolute top-0 left-0 right-0 h-[55%] z-15 pointer-events-none">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-start pt-16 md:pt-32 px-5 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-16"
          >
            <span className="text-white/50 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">How We Work</span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-white/30 text-3xl md:text-5xl font-bold tabular-nums block mb-2 md:mb-3">{step.number}</span>
                <h3 className="text-white text-lg md:text-2xl font-bold mb-1 md:mb-2">{step.title}</h3>
                <p className="text-white/70 text-sm md:text-base font-medium leading-relaxed max-w-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}