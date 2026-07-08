'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    desc: 'We learn your business, your customers, and your goals, then define exactly what the site needs to do.',
  },
  {
    number: '02',
    title: 'Design',
    desc: 'We design a custom layout and visual system around your brand, not a recycled template.',
  },
  {
    number: '03',
    title: 'Build',
    desc: 'We develop the real site with clean, performant code, wiring up menus, bookings, or 3D as needed.',
  },
  {
    number: '04',
    title: 'Launch',
    desc: 'We deploy, test on real devices, and hand over a site that is fast, findable, and ready to grow.',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-28 md:py-40 px-5 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20 text-center"
        >
          <span className="text-white/50 text-xs font-bold tracking-[0.3em] uppercase block mb-3">
            How We Work
          </span>
          <h2 className="text-3xl md:text-5xl font-medium text-white">
            From First Call to Live Site
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-2xl glass-card"
            >
              <span className="text-yellow-500/60 text-3xl md:text-4xl font-bold tabular-nums block mb-3">
                {step.number}
              </span>
              <h3 className="text-white text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-white/60 text-sm font-light leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
