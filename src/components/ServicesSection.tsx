'use client';

import { motion, useReducedMotion, useInView } from 'framer-motion';
import { Layout, Smartphone, CalendarDays, ShoppingBag, Globe, Zap } from 'lucide-react';
import { useRef, useEffect } from 'react';

const services = [
  {
    icon: <Globe className="w-6 h-6 text-cyan-400" />,
    title: 'AI-Built Websites',
    description: 'Fast, modern websites for businesses that need a professional online presence.',
  },
  {
    icon: <Layout className="w-6 h-6 text-blue-400" />,
    title: 'Landing Pages',
    description: 'High-converting pages for offers, campaigns, events, and services.',
  },
  {
    icon: <Smartphone className="w-6 h-6 text-purple-400" />,
    title: 'Digital Menus',
    description: 'Clean online menus for restaurants, cafés, and hospitality businesses.',
  },
  {
    icon: <CalendarDays className="w-6 h-6 text-emerald-400" />,
    title: 'Booking Systems',
    description: 'Simple digital booking flows for appointments, classes, courts, and services.',
  },
  {
    icon: <ShoppingBag className="w-6 h-6 text-pink-400" />,
    title: 'Online Stores',
    description: 'Lightweight e-commerce experiences for selling products online.',
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    title: 'Business Automation',
    description: 'Forms, lead capture, basic workflows, and AI-assisted customer interaction.',
  },
];

export default function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const isInView = useInView(sectionRef, { margin: "200px 0px" });

  useEffect(() => {
    if (videoRef.current) {
      if (isInView && !shouldReduceMotion) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView, shouldReduceMotion]);

  return (
    <section ref={sectionRef} id="services" className="py-32 relative min-h-[120vh] flex items-center z-10 bg-black overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover saturate-200 brightness-[1.3] contrast-[1.1]"
        >
          <source src="/videos/0510(6).mp4" type="video/mp4" />
        </video>
        {/* Dark readability overlay - reduced to let turtle show through */}
        <div className="absolute inset-0 bg-black/20 z-10" />
        {/* Subtle left gradient to anchor text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent z-10 pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-medium mb-6 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">Digital Capabilities</h2>
            <div className="w-20 h-1 bg-cyan-500/50 shadow-[0_0_15px_rgba(0,255,255,0.5)]" />
          </motion.div>

          <div className="flex flex-col gap-8 md:gap-10 border-l border-white/10 pl-6 md:pl-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-default relative"
              >
                {/* Hover indicator dot */}
                <div className="absolute -left-[27px] md:-left-[43px] top-2.5 w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
                
                <h3 className="text-2xl font-light text-white/80 group-hover:text-white transition-colors drop-shadow-lg mb-2 flex items-center gap-4">
                  <span className="opacity-40 group-hover:opacity-100 group-hover:text-cyan-400 transition-all duration-300 transform group-hover:scale-110">
                    {service.icon}
                  </span>
                  {service.title}
                </h3>
                <p className="text-white/50 font-light text-sm md:text-base max-w-sm drop-shadow-md group-hover:text-white/80 transition-colors">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
