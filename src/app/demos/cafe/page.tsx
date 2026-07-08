import type { Metadata } from "next";
import { Coffee, Croissant, Clock4, MapPin, QrCode, Leaf, Users, Heart, Sparkles } from "lucide-react";
import DemoPhotoTile from "@/components/demos/DemoPhotoTile";
import DemoQuoteForm from "@/components/demos/DemoQuoteForm";
import TestimonialCarousel from "@/components/carousel/TestimonialCarousel";
import MockQRCode from "@/components/demos/MockQRCode";
import DemoParallaxHero from "@/components/demos/DemoParallaxHero";
import DemoStatsBar from "@/components/demos/DemoStatsBar";
import DemoWhyUs from "@/components/demos/DemoWhyUs";
import DemoFAQ from "@/components/demos/DemoFAQ";
import DemoStickyCTA from "@/components/demos/DemoStickyCTA";
import DemoScrollReveal from "@/components/demos/DemoScrollReveal";

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

const whyUs = [
  { icon: <Leaf className="w-8 h-8 text-amber-400" />, title: "Ethically Sourced", desc: "Beans sourced from small, traceable farms and roasted in small batches." },
  { icon: <Users className="w-8 h-8 text-amber-400" />, title: "Community Space", desc: "A relaxed spot to work, meet, or just slow down with good coffee." },
  { icon: <Heart className="w-8 h-8 text-amber-400" />, title: "Made With Care", desc: "Pastries baked fresh daily, nothing sitting around from yesterday." },
  { icon: <Sparkles className="w-8 h-8 text-amber-400" />, title: "Always Current", desc: "Our QR menu means specials and prices are always up to date." },
];

const reviews = [
  { name: "Sample Review — Weekend Regular", quote: "The QR menu is so easy, no more waiting for someone to bring a physical menu. Coffee is excellent too.", rating: 5 },
  { name: "Sample Review — Breakfast Visit", quote: "Shakshuka was fantastic and the space is warm and relaxed. Will be back.", rating: 5 },
  { name: "Sample Review — Work Meeting", quote: "Good wifi, quiet corner tables, and the flat white is consistently great.", rating: 4 },
  { name: "Sample Review — First Visit", quote: "Loved being able to scan and browse the whole menu before deciding. Great pastry selection.", rating: 5 },
];

const faqs = [
  { question: "Do I need an app to view the menu?", answer: "No, scanning the QR code opens the menu directly in your phone's browser, no app or account needed." },
  { question: "Do you take table bookings?", answer: "Yes, you can request a table through the booking form below, and we'll confirm availability directly." },
  { question: "Is the menu updated for seasonal specials?", answer: "Yes, our digital menu is updated as soon as a dish or price changes, so what you see is always current." },
];

export default function CafeDemoPage() {
  return (
    <>
      <DemoParallaxHero
        icon={<Coffee className="w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] text-white" />}
        gradientClassName="from-amber-950/40 to-transparent"
      >
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
      </DemoParallaxHero>

      <DemoStatsBar
        accentClassName="text-amber-400"
        stats={[
          { value: 8, label: "Years Open" },
          { value: 40, suffix: "+", label: "Menu Items" },
          { value: 7, suffix: "am", label: "Opens Daily" },
          { value: 5, suffix: ".0★", label: "Average Rating" },
        ]}
      />

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
              {menu.map((section, si) => (
                <DemoScrollReveal key={section.category} delay={si * 0.1}>
                  <div>
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
                </DemoScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DemoWhyUs heading="Why Regulars Keep Coming Back" items={whyUs} />

      <section id="about" className="py-20 px-5 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <DemoScrollReveal>
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-4">A Warm Corner of the Neighbourhood</h2>
              <p className="text-white/60 font-light leading-relaxed mb-4">
                Example Coffee House roasts and pours specialty coffee alongside fresh pastries and
                a small breakfast menu. The digital QR-code menu means no waiting for a physical
                menu, and prices and specials always stay current &mdash; exactly the kind of
                digital menu system MCFWebs builds for real cafés and restaurants.
              </p>
            </div>
          </DemoScrollReveal>
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

      <DemoFAQ heading="Common Questions" items={faqs} />

      <section id="quote" className="py-20 px-5 md:px-12 pb-32 md:pb-20">
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

      <DemoStickyCTA label="Book a Table" buttonClassName="bg-amber-400 text-black" />
    </>
  );
}
