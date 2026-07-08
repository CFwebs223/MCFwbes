import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for custom websites, digital menus, booking systems, and 3D web experiences from MCFWebs — clear packages, no hidden fees.",
  alternates: { canonical: "/pricing" },
};

const tiers = [
  {
    name: "Digital Menu",
    price: "From R2,000",
    description: "A QR-code digital menu for restaurants, cafés, and bars.",
    features: [
      "Mobile-first digital menu page",
      "QR code generation for tables",
      "Easy price & availability updates",
      "Launch within about a week",
    ],
  },
  {
    name: "Custom Website",
    price: "From R5,000",
    description: "A professional, multi-page website for any business.",
    features: [
      "Custom design, not a template",
      "Up to 5 pages (home, services, about, contact +1)",
      "Mobile-first, fast-loading build",
      "On-page SEO & contact form",
    ],
    popular: true,
  },
  {
    name: "Booking System Add-On",
    price: "From R1,500",
    description: "Online quote-request or appointment booking, added to a site.",
    features: [
      "Quote-request or calendar booking flow",
      "Client-side validation & success/error states",
      "Routed to email or a simple dashboard",
    ],
  },
  {
    name: "3D Scroll-Based Experience",
    price: "From R8,000",
    description: "A cinematic, scroll-driven WebGL experience for premium brands.",
    features: [
      "Custom Three.js / WebGL scene",
      "Full scroll-synced camera & object animation",
      "Reduced-motion & low-end device fallbacks",
      "Performance-budgeted for mobile",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="relative pt-32 md:pt-40 pb-28 px-5 md:px-12">
      <div className="max-w-5xl mx-auto">
        <span className="text-yellow-500/80 font-mono text-xs tracking-[0.25em] uppercase block mb-4">
          Pricing
        </span>
        <h1 className="text-3xl md:text-5xl font-medium text-white mb-6">
          Transparent, One-Time Project Pricing
        </h1>
        <p className="text-lg text-white/70 font-light leading-relaxed max-w-2xl mb-16">
          Every project is quoted in South African Rand as a one-time project fee based on scope
          — the ranges below give a realistic starting point for each service. Design systems are
          scoped and quoted alongside a website build depending on how much existing brand
          material there is to work with. Get in touch for an exact quote for your business.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative p-7 md:p-8 rounded-2xl glass-card ${
                tier.popular ? "border-yellow-500/40" : ""
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-7 bg-yellow-500 text-black text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              )}
              <h2 className="text-xl font-medium text-white mb-1">{tier.name}</h2>
              <p className="text-white/50 text-sm font-light mb-4">{tier.description}</p>
              <p className="text-3xl font-light text-white mb-6">{tier.price}</p>
              <ul className="space-y-2.5">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-white/70 text-sm font-light">
                    <Check className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="p-8 rounded-2xl glass-card flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-medium text-lg mb-1">Not sure what you need?</h3>
            <p className="text-white/50 text-sm font-light">
              Tell us about your business and we&rsquo;ll recommend the right package and an exact
              quote.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-8 py-3.5 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors hover-target"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
