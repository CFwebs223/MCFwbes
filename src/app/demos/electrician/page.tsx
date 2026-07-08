import type { Metadata } from "next";
import { Zap, PlugZap, FileCheck2, BatteryCharging, ShieldCheck, Clock, MapPin, Cable, ThumbsUp, BadgeCheck } from "lucide-react";
import DemoPhotoTile from "@/components/demos/DemoPhotoTile";
import DemoQuoteForm from "@/components/demos/DemoQuoteForm";
import TestimonialCarousel from "@/components/carousel/TestimonialCarousel";
import DemoParallaxHero from "@/components/demos/DemoParallaxHero";
import DemoStatsBar from "@/components/demos/DemoStatsBar";
import DemoWhyUs from "@/components/demos/DemoWhyUs";
import DemoFAQ from "@/components/demos/DemoFAQ";
import DemoStickyCTA from "@/components/demos/DemoStickyCTA";
import DemoScrollReveal from "@/components/demos/DemoScrollReveal";

export const metadata: Metadata = {
  title: "Example Electrical Services — Concept Demo | MCFWebs",
  description:
    "A concept demo electrician website built by MCFWebs — rewiring, safety certificates, and load-shedding backup power solutions. Illustrative example, not a real business.",
  alternates: { canonical: "/demos/electrician" },
  robots: { index: false, follow: true },
};

const services = [
  { icon: Cable, title: "Rewiring", desc: "Full and partial home or business rewiring to current safety standards." },
  { icon: FileCheck2, title: "Compliance Certificates", desc: "Certificate of Compliance (CoC) inspections for sales, rentals, and insurance." },
  { icon: PlugZap, title: "Fault Finding & Repairs", desc: "Diagnosis and repair of tripping breakers, faulty circuits, and power loss." },
  { icon: BatteryCharging, title: "Load-Shedding & Backup Power", desc: "Inverter, battery, and backup power system installation to keep you running." },
];

const whyUs = [
  { icon: <ShieldCheck className="w-8 h-8 text-yellow-400" />, title: "Certified & Insured", desc: "Registered electricians, fully insured for residential and commercial work." },
  { icon: <Clock className="w-8 h-8 text-yellow-400" />, title: "Fast Response", desc: "Fault-finding and callouts scheduled quickly, urgent jobs prioritised." },
  { icon: <ThumbsUp className="w-8 h-8 text-yellow-400" />, title: "Honest Quoting", desc: "A clear, itemised quote before any work starts, no hidden extras." },
  { icon: <BadgeCheck className="w-8 h-8 text-yellow-400" />, title: "Compliant Installations", desc: "Every installation signed off to current wiring and safety standards." },
];

const reviews = [
  { name: "Sample Review — Backup Power Install", quote: "Set up our inverter and battery system so the whole house stays on through load-shedding stages. Explained the setup clearly.", rating: 5 },
  { name: "Sample Review — Compliance Certificate", quote: "Needed a CoC fast for a house sale, got the inspection and certificate within two days.", rating: 5 },
  { name: "Sample Review — Fault Finding", quote: "Found a tripping breaker issue that had been happening for months. Fixed same visit.", rating: 4 },
  { name: "Sample Review — Full Rewire", quote: "Rewired our whole house room by room with minimal disruption. Left everything clean each day.", rating: 5 },
];

const faqs = [
  { question: "Can you size a backup power system for my home?", answer: "Yes, we assess your actual power needs and recommend an inverter-and-battery or generator system sized correctly for your essential circuits." },
  { question: "How long does a Certificate of Compliance take?", answer: "Most compliance inspections are completed within one to two days of the initial assessment, including any required remedial work." },
  { question: "Do you work on both homes and businesses?", answer: "Yes, our electricians handle residential and commercial rewiring, fault finding, and backup power installations." },
];

export default function ElectricianDemoPage() {
  return (
    <>
      <DemoParallaxHero
        icon={<Zap className="w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] text-white" />}
        gradientClassName="from-yellow-950/40 to-transparent"
      >
        <span className="inline-flex items-center gap-2 text-yellow-400 text-sm font-medium mb-6 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20">
          <BatteryCharging className="w-4 h-4" /> Load-Shedding Backup Power Specialists
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Keep The Lights On.<br />Whatever Stage We&rsquo;re On.
        </h1>
        <p className="text-white/70 text-lg font-light max-w-xl mx-auto mb-8">
          Example Electrical Services handles rewiring, compliance certificates, fault finding,
          and backup power installations &mdash; qualified, certified, and ready for load-shedding.
        </p>
        <a href="#quote" className="inline-block px-8 py-4 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-colors">
          Request a Quote
        </a>

        <div className="flex flex-wrap justify-center gap-4 mt-10 text-white/60 text-sm">
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-yellow-400" /> Certified & Insured</span>
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-yellow-400" /> Fast Response Times</span>
          <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-yellow-400" /> Serving the Greater Metro Area</span>
        </div>
      </DemoParallaxHero>

      <DemoStatsBar
        accentClassName="text-yellow-400"
        stats={[
          { value: 900, suffix: "+", label: "Installations Completed" },
          { value: 10, suffix: "+", label: "Years in Business" },
          { value: 48, suffix: "hr", label: "Average CoC Turnaround" },
          { value: 5, suffix: ".0★", label: "Average Rating" },
        ]}
      />

      <section id="services" className="py-20 px-5 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <DemoScrollReveal key={s.title} delay={i * 0.08}>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 h-full">
                  <s.icon className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-1.5">{s.title}</h3>
                  <p className="text-white/60 text-sm font-light">{s.desc}</p>
                </div>
              </DemoScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <DemoWhyUs heading="Why Homes & Businesses Choose Us" items={whyUs} />

      <section id="backup-power" className="py-20 px-5 md:px-12 bg-black/30">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <DemoScrollReveal>
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-4">Backup Power, Sized Right</h2>
              <p className="text-white/60 font-light leading-relaxed mb-4">
                Load-shedding is one of the most common reasons South African homes and businesses
                call an electrician. We assess your actual power needs and install an
                inverter-and-battery or generator backup system sized correctly, so essential
                circuits stay powered without overpaying for capacity you don&rsquo;t need.
              </p>
              <p className="text-white/60 font-light leading-relaxed">
                Every installation includes a compliance check so your backup system is safe,
                correctly earthed, and won&rsquo;t void your home insurance.
              </p>
            </div>
          </DemoScrollReveal>
          <div className="grid grid-cols-2 gap-4">
            <DemoPhotoTile icon={BatteryCharging} label="Inverter Install — After" gradient="from-yellow-900/50 to-slate-900" alt="Placeholder photo representing a completed inverter and battery backup installation" />
            <DemoPhotoTile icon={Zap} label="Distribution Board" gradient="from-slate-800 to-yellow-950/50" alt="Placeholder photo representing an upgraded electrical distribution board" />
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-5 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-3">Recent Job Photos</h2>
          <p className="text-white/50 text-center text-sm mb-12">Illustrative placeholder photos for this concept demo.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: Cable, label: "Full Rewire — After", alt: "Placeholder photo representing a completed home rewiring job" },
              { icon: FileCheck2, label: "Compliance Inspection", alt: "Placeholder photo representing a compliance certificate inspection" },
              { icon: PlugZap, label: "Fault Finding", alt: "Placeholder photo representing an electrical fault-finding job" },
              { icon: BatteryCharging, label: "Backup Power — After", alt: "Placeholder photo representing a completed backup power installation" },
              { icon: ShieldCheck, label: "Safety Upgrade", alt: "Placeholder photo representing a safety compliance upgrade" },
              { icon: BadgeCheck, label: "Signed-Off Installation", alt: "Placeholder photo representing a signed-off electrical installation" },
            ].map((tile, i) => (
              <DemoScrollReveal key={tile.label} delay={i * 0.06}>
                <DemoPhotoTile
                  icon={tile.icon}
                  label={tile.label}
                  gradient={i % 2 === 0 ? "from-yellow-900/50 to-slate-900" : "from-slate-800 to-yellow-950/50"}
                  alt={tile.alt}
                />
              </DemoScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-5 md:px-12 bg-black/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-3">What Customers Say</h2>
          <p className="text-white/50 text-sm mb-12">Sample reviews for this concept demo business.</p>
          <TestimonialCarousel items={reviews} accentClassName="text-yellow-400" activeDotClassName="bg-yellow-400" />
        </div>
      </section>

      <DemoFAQ heading="Common Questions" items={faqs} />

      <section id="quote" className="py-20 px-5 md:px-12 pb-32 md:pb-20">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-3">Request a Quote</h2>
          <p className="text-white/50 text-center text-sm mb-10">
            Demo form only &mdash; nothing is actually sent.
          </p>
          <DemoQuoteForm
            services={["Backup Power / Inverter", "Rewiring", "Compliance Certificate", "Fault Finding"]}
            submitLabel="Request Quote"
            buttonClassName="bg-yellow-400 text-black hover:bg-yellow-300"
            focusClassName="focus:border-yellow-400/50"
          />
        </div>
      </section>

      <DemoStickyCTA label="Request a Quote" buttonClassName="bg-yellow-400 text-black" />
    </>
  );
}
