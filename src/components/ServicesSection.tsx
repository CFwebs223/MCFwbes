'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Globe, QrCode, CalendarDays, Box, Layers, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '@/lib/site-config';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  QrCode,
  CalendarDays,
  Box,
  Layers,
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-28 md:py-40 px-5 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20 text-center"
        >
          <span className="text-yellow-500/80 font-mono text-xs tracking-[0.25em] uppercase block mb-3">
            What We Build
          </span>
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-4">Digital Capabilities</h2>
          <p className="text-white/60 max-w-2xl mx-auto font-light">
            Five core services cover everything a growing South African business needs online:
            a custom website, a digital menu, an online booking flow, an interactive 3D
            experience, or a design system to keep it all consistent as you scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group block h-full p-6 md:p-8 rounded-2xl glass-card hover:bg-white/[0.05] transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-5 text-yellow-500 group-hover:bg-yellow-500/20 transition-colors">
                    {Icon && <Icon className="w-5 h-5" />}
                  </div>
                  <h3 className="text-white font-medium text-lg mb-2 flex items-center gap-2">
                    {service.title}
                    <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-yellow-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>
                  <p className="text-white/60 text-sm font-light leading-relaxed">{service.short}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block px-8 py-3.5 rounded-full glass border border-white/20 text-white font-medium hover:bg-white/10 transition-colors hover-target"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
