'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const demoItems = [
  {
    title: 'Example Plumbing Co.',
    type: 'Plumber &mdash; Emergency Call-Outs & Quotes',
    url: '/demos/plumber',
    gradient: 'from-blue-500/20 to-cyan-500/5',
  },
  {
    title: 'Example Electrical Services',
    type: 'Electrician &mdash; Load-Shedding & Backup Power',
    url: '/demos/electrician',
    gradient: 'from-yellow-500/20 to-orange-500/5',
  },
  {
    title: 'Example Coffee House',
    type: 'Café &mdash; Digital QR-Code Menu',
    url: '/demos/cafe',
    gradient: 'from-emerald-500/20 to-amber-500/5',
  },
];

export default function PortfolioPreviewSection() {
  return (
    <section id="demos" className="relative py-28 md:py-40 px-5 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20 text-center"
        >
          <span className="text-cyan-400/80 font-mono text-xs tracking-[0.25em] uppercase block mb-3">
            See It In Action
          </span>
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-4">
            Fully Interactive Concept Demos
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto font-light">
            Three complete, clickable example websites &mdash; built to show what MCFWebs can do
            for a plumber, an electrician, and a caf&eacute;. These are illustrative concept
            builds, not real clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {demoItems.map((item, i) => (
            <motion.div
              key={item.url}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                href={item.url}
                className={`group relative block aspect-[4/3] rounded-2xl overflow-hidden glass-card bg-gradient-to-br ${item.gradient} hover:scale-[1.02] transition-transform duration-500`}
              >
                <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-[10px] font-semibold uppercase tracking-wider text-white/80">
                  Concept Demo
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <h3 className="text-xl font-medium text-white mb-2">{item.title}</h3>
                  <p
                    className="text-white/60 text-sm font-light"
                    dangerouslySetInnerHTML={{ __html: item.type }}
                  />
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-yellow-500 font-medium group-hover:gap-2.5 transition-all">
                    Explore Demo <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/demos"
            className="inline-block px-8 py-3.5 rounded-full glass border border-white/20 text-white font-medium hover:bg-white/10 transition-colors hover-target"
          >
            View All Demos
          </Link>
        </div>
      </div>
    </section>
  );
}
