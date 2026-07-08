import type { Metadata } from "next";
import { Wrench, Droplets, Flame, AlertTriangle, ShieldCheck, Clock, MapPin } from "lucide-react";
import DemoPhotoTile from "@/components/demos/DemoPhotoTile";
import DemoQuoteForm from "@/components/demos/DemoQuoteForm";
import TestimonialCarousel from "@/components/carousel/TestimonialCarousel";

export const metadata: Metadata = {
  title: "Example Plumbing Co. — Concept Demo | MCFWebs",
  description:
    "A concept demo plumbing services website built by MCFWebs — emergency call-outs, service list, and quote requests. Illustrative example, not a real business.",
  alternates: { canonical: "/demos/plumber" },
  robots: { index: false, follow: true },
};

const services = [
  { icon: Flame, title: "Geyser Repair & Replacement", desc: "Fast diagnosis and replacement for burst, leaking, or failed geysers." },
  { icon: Droplets, title: "Leak Detection", desc: "Non-invasive leak detection for hidden pipe leaks before they cause damage." },
  { icon: Wrench, title: "Installations", desc: "New installations for taps, basins, toilets, and full bathroom fit-outs." },
  { icon: AlertTriangle, title: "Emergency Call-Outs", desc: "Same-day emergency response for burst pipes and major leaks." },
];

const reviews = [
  { name: "Sample Review — Geyser Replacement", quote: "Called in the morning after our geyser burst, fixed by lunchtime. Clean work and explained everything clearly.", rating: 5 },
  { name: "Sample Review — Leak Detection", quote: "Found a slow leak under the slab that two other companies missed. Saved us a huge water bill.", rating: 5 },
  { name: "Sample Review — Bathroom Installation", quote: "Full bathroom re-plumb done on schedule and on quote, no surprise costs at the end.", rating: 4 },
];

export default function PlumberDemoPage() {
  return (
    <>
      <section className="relative pt-20 pb-24 px-5 md:px-12 bg-gradient-to-b from-cyan-950/40 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium mb-6 px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20">
            <AlertTriangle className="w-4 h-4" /> 24/7 Emergency Call-Outs
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Fast, Reliable Plumbing.<br />Any Time You Need It.
          </h1>
          <p className="text-white/70 text-lg font-light max-w-xl mx-auto mb-8">
            Example Plumbing Co. handles geyser repairs, leak detection, and installations across
            the greater metro area &mdash; licensed, insured, and on call around the clock.
          </p>
          <a href="#quote" className="inline-block px-8 py-4 rounded-full bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition-colors">
            Request a Call-Out
          </a>

          <div className="flex flex-wrap justify-center gap-4 mt-10 text-white/60 text-sm">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-cyan-400" /> Licensed & Insured</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-cyan-400" /> Same-Day Response</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-cyan-400" /> Serving the Greater Metro Area</span>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-5 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.title} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <s.icon className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="font-semibold text-lg mb-1.5">{s.title}</h3>
                <p className="text-white/60 text-sm font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-5 md:px-12 bg-black/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-3">Recent Job Photos</h2>
          <p className="text-white/50 text-center text-sm mb-12">Illustrative placeholder photos for this concept demo.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <DemoPhotoTile icon={Flame} label="Geyser Replacement — After" gradient="from-cyan-900/60 to-slate-900" alt="Placeholder photo representing a completed geyser replacement job" />
            <DemoPhotoTile icon={Droplets} label="Leak Detection — Before" gradient="from-slate-800 to-cyan-950/60" alt="Placeholder photo representing a leak detection job before repair" />
            <DemoPhotoTile icon={Wrench} label="Bathroom Install — After" gradient="from-cyan-900/60 to-slate-900" alt="Placeholder photo representing a completed bathroom installation" />
            <DemoPhotoTile icon={AlertTriangle} label="Emergency Call-Out" gradient="from-slate-800 to-cyan-950/60" alt="Placeholder photo representing an emergency plumbing call-out" />
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-5 md:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-3">What Customers Say</h2>
          <p className="text-white/50 text-sm mb-12">Sample reviews for this concept demo business.</p>
          <TestimonialCarousel items={reviews} accentClassName="text-cyan-400" activeDotClassName="bg-cyan-400" />
        </div>
      </section>

      <section id="quote" className="py-20 px-5 md:px-12 bg-black/30">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-3">Request a Quote</h2>
          <p className="text-white/50 text-center text-sm mb-10">
            Demo form only &mdash; nothing is actually sent.
          </p>
          <DemoQuoteForm
            services={["Geyser Repair", "Leak Detection", "Installation", "Emergency Call-Out"]}
            submitLabel="Request Call-Out"
            buttonClassName="bg-cyan-400 text-black hover:bg-cyan-300"
            focusClassName="focus:border-cyan-400/50"
          />
        </div>
      </section>
    </>
  );
}
