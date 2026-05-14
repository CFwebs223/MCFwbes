'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Layout, Smartphone, CalendarDays, ShoppingBag, Globe, Zap } from 'lucide-react';
import FrameSequence from './FrameSequence';

const TOTAL_FRAMES = 40;

const services = [
  { icon: <Globe className="w-5 h-5" />, title: 'AI-Built Websites', desc: 'Fast, modern websites for a professional online presence.' },
  { icon: <Layout className="w-5 h-5" />, title: 'Landing Pages', desc: 'High-converting pages for campaigns and services.' },
  { icon: <Smartphone className="w-5 h-5" />, title: 'Digital Menus', desc: 'Online menus for restaurants and hospitality.' },
  { icon: <CalendarDays className="w-5 h-5" />, title: 'Booking Systems', desc: 'Simple booking flows for services and appointments.' },
  { icon: <ShoppingBag className="w-5 h-5" />, title: 'Online Stores', desc: 'Lightweight e-commerce experiences.' },
  { icon: <Zap className="w-5 h-5" />, title: 'Business Automation', desc: 'Forms, lead capture, and AI-assisted workflows.' },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const lastFrameRef = useRef(-1);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const [frameIndex, setFrameIndex] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idx = Math.min(Math.floor(latest * TOTAL_FRAMES), TOTAL_FRAMES - 1);
    if (idx !== lastFrameRef.current) {
      lastFrameRef.current = idx;
      setFrameIndex(idx);
    }
  });

  return (
    <section ref={sectionRef} id="services" className="relative h-[200vh] w-full bg-black">
      <div className="sticky top-0 w-full h-screen overflow-hidden">

        {/* Full-screen frame sequence */}
        <FrameSequence
          path="/frames/waterfall/frame_"
          totalFrames={TOTAL_FRAMES}
          progress={frameIndex / TOTAL_FRAMES}
        />
        {/* Cover watermark */}
        <div className="absolute bottom-0 right-0 w-32 h-12 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />

        {/* Dark overlay at top for text readability */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black/60 to-transparent pointer-events-none z-10" />

        {/* Text at top */}
        <div className="absolute top-0 left-0 right-0 z-20 pt-16 md:pt-20 px-6 md:px-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">Digital Capabilities</h2>
              <p className="text-white/60 text-base font-light max-w-xl">
                From websites to automation — we build what your business needs to grow online.
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}