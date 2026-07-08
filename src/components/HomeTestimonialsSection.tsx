'use client';

import { motion } from 'framer-motion';
import TestimonialCarousel from '@/components/carousel/TestimonialCarousel';
import { TESTIMONIALS } from '@/lib/testimonials';

export default function HomeTestimonialsSection() {
  return (
    <section className="relative py-28 md:py-40 px-5 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-cyan-400/80 font-mono text-xs tracking-[0.25em] uppercase block mb-3">
            Client Feedback
          </span>
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-3">What Clients Say</h2>
          <p className="text-white/40 text-sm font-light">
            Client reviews coming soon &mdash; here&rsquo;s a preview of how they&rsquo;ll look.
          </p>
        </motion.div>

        <TestimonialCarousel items={TESTIMONIALS} />
      </div>
    </section>
  );
}
