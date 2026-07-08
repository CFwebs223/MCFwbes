'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export type DemoWhyUsItem = { icon: ReactNode; title: string; desc: string };

export default function DemoWhyUs({
  heading,
  items,
}: {
  heading: string;
  items: DemoWhyUsItem[];
}) {
  return (
    <section className="py-20 px-5 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-5"
            >
              <div className="flex justify-center mb-3">{item.icon}</div>
              <h3 className="font-semibold mb-1.5">{item.title}</h3>
              <p className="text-white/60 text-sm font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
