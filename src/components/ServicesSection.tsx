'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Layout, Smartphone, CalendarDays, ShoppingBag, Globe, Zap } from 'lucide-react';
import FrameSequence from './FrameSequence';

const TOTAL_FRAMES = 40;

const services = [
  {
    icon: <Globe className="w-6 h-6 text-cyan-300" />,
    title: 'AI-Built Websites',
    description: 'Fast, modern websites for businesses that need a professional online presence.',
  },
  {
    icon: <Layout className="w-6 h-6 text-blue-300" />,
    title: 'Landing Pages',
    description: 'High-converting pages for offers, campaigns, events, and services.',
  },
  {
    icon: <Smartphone className="w-6 h-6 text-purple-300" />,
    title: 'Digital Menus',
    description: 'Clean online menus for restaurants, cafés, and hospitality businesses.',
  },
  {
    icon: <CalendarDays className="w-6 h-6 text-emerald-300" />,
    title: 'Booking Systems',
    description: 'Simple digital booking flows for appointments, classes, courts, and services.',
  },
  {
    icon: <ShoppingBag className="w-6 h-6 text-pink-300" />,
    title: 'Online Stores',
    description: 'Lightweight e-commerce experiences for selling products online.',
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-300" />,
    title: 'Business Automation',
    description: 'Forms, lead capture, basic workflows, and AI-assisted customer interaction.',
  },
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
      <div className="sticky top-0 w-full min-h-screen flex items-center z-10 overflow-hidden">

        {/* Frame sequence background */}
        <FrameSequence
          path="/frames/waterfall/frame_"
          totalFrames={TOTAL_FRAMES}
          progress={frameIndex / TOTAL_FRAMES}
          className="saturate-[1.3] brightness-[1.1]"
        />
        {/* Cover watermark */}
        <div className="absolute bottom-0 right-0 w-32 h-12 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />

        {/* Fully black side panel — 38% width on desktop, full on mobile */}
        <div className="absolute left-0 top-0 bottom-0 w-full md:w-[38%] z-20 pointer-events-none">
          <div className="absolute inset-0 bg-black" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 md:px-12 relative z-30 w-full md:w-[38%] mr-auto">
          <div className="max-w-lg">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-5 text-white">Digital Capabilities</h2>
              <div className="w-16 h-0.5 bg-cyan-400 shadow-[0_0_12px_rgba(0,255,255,0.5)]" />
            </motion.div>

            <div className="flex flex-col gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-default relative"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-white transition-all duration-500 ease-out-expo mb-1 flex items-center gap-3">
                    <span className="opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                      {service.icon}
                    </span>
                    {service.title}
                  </h3>
                  <p className="text-white/70 font-medium text-sm md:text-base max-w-sm group-hover:text-white/90 transition-colors duration-300">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}