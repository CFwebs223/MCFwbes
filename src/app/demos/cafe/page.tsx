import type { Metadata } from "next";
import { Coffee, Croissant, Clock4, MapPin, QrCode } from "lucide-react";
import DemoPhotoTile from "@/components/demos/DemoPhotoTile";
import DemoQuoteForm from "@/components/demos/DemoQuoteForm";
import TestimonialCarousel from "@/components/carousel/TestimonialCarousel";
import MockQRCode from "@/components/demos/MockQRCode";

export const metadata: Metadata = {
  title: "Example Coffee House — Concept Demo | MCFWebs",
  description:
    "A concept demo café website built by MCFWebs, centered on a digital QR-code menu — plus warm brand styling, hours, and table booking. Illustrative example, not a real business.",
  alternates: { canonical: "/demos/cafe" },
  robots: { index: false, follow: true },
};

const menu = [
  {
    category: "Coffee",
    items: [
      { name: "Flat White", price: "R32" },
      { name: "Cappuccino", price: "R32" },
      { name: "Filter Coffee", price: "R28" },
      { name: "Iced Latte", price: "R38" },
    ],
  },
  {
    category: "Pastries",
    items: [
      { name: "Butter Croissant", price: "R28" },
      { name: "Almond Croissant", price: "R38" },
      { name: "Banana Bread", price: "R32" },
    ],
  },
  {
    category: "Breakfast",
    items: [
      { name: "Avo on Sourdough", price: "R65" },
      { name: "Shakshuka", price: "R75" },
      { name: "Granola & Yoghurt", price: "R55" },
    ],
  },
];

const reviews = [
  { name: "Sample Review — Weekend Regular", quote: "The QR menu is so easy, no more waiting for someone to bring a physical menu. Coffee is excellent too.", rating: 5 },
  { name: "Sample Review — Breakfast Visit", quote: "Shakshuka was fantastic and the space is warm and relaxed. Will be back.", rating: 5 },
  { name: "Sample Review — Work Meeting", quote: "Good wifi, quiet corner tables, and the flat white is consistently great.", rating: 4 },
];

export default function CafeDemoPage() {
  return (
    <>
      <section className="relative pt-20 pb-24 px-5 md:px-12 bg-gradient-to-b from-amber-950/30 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-amber-400 text-sm font-medium mb-6 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20">
            <Coffee className="w-4 h-4" /> Fresh Coffee, Warm Space
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Good Coffee.<br />No Rush.
          </h1>
          <p className="text-white/70 text-lg font-light max-w-xl mx-auto mb-8">
            Example Coffee House is a neighbourhood café serving specialty coffee, pastries, and
            breakfast &mdash; browse our menu below by scanning the code at your table.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-white/60 text-sm">
            <span className="flex items-center gap-1.5"><Clock4 className="w-4 h-4 text-amber-400" /> Open Daily 7am &ndash; 4pm</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-amber-400" /> Main Road, Example Suburb</span>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 px-5 md:px-12 bg-black/30">
        <div className="max-w-4xl mx-auto grid md:grid-cols-[240px_1fr] gap-12 items-start">
          <div className="text-center md:sticky md:top-32">
            <MockQRCode />
            <p className="text-white/50 text-xs mt-4 flex items-center justify-center gap-1.5">
              <QrCode className="w-3.5 h-3.5" /> Scan to view this menu on your phone
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-8">Our Menu</h2>
            <div className="space-y-8">
              {menu.map((section) => (
                <div key={section.category}>
                  <h3 className="text-amber-400 font-semibold uppercase tracking-wider text-sm mb-3">
                    {section.category}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item.name} className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-white/80 font-light">{item.name}</span>
                        <span className="text-white/50 font-mono text-sm">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-5 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">A Warm Corner of the Neighbourhood</h2>
            <p className="text-white/60 font-light leading-relaxed mb-4">
              Example Coffee House roasts and pours specialty coffee alongside fresh pastries and
              a small breakfast menu. The digital QR-code menu means no waiting for a physical
              menu, and prices and specials always stay current &mdash; exactly the kind of
              digital menu system MCFWebs builds for real cafés and restaurants.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <DemoPhotoTile icon={Coffee} label="Café Interior" gradient="from-amber-900/50 to-slate-900" alt="Placeholder photo representing the café interior" />
            <DemoPhotoTile icon={Croissant} label="Pastry Counter" gradient="from-slate-800 to-amber-950/50" alt="Placeholder photo representing the pastry display counter" />
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-5 md:px-12 bg-black/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-3">What Customers Say</h2>
          <p className="text-white/50 text-sm mb-12">Sample reviews for this concept demo business.</p>
          <TestimonialCarousel items={reviews} accentClassName="text-amber-400" activeDotClassName="bg-amber-400" />
        </div>
      </section>

      <section id="quote" className="py-20 px-5 md:px-12">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-3">Book a Table</h2>
          <p className="text-white/50 text-center text-sm mb-10">
            Demo form only &mdash; nothing is actually sent.
          </p>
          <DemoQuoteForm
            services={["Table for 2", "Table for 4", "Table for 6+", "Private Event"]}
            submitLabel="Book Table"
            buttonClassName="bg-amber-400 text-black hover:bg-amber-300"
            focusClassName="focus:border-amber-400/50"
          />
        </div>
      </section>
    </>
  );
}
