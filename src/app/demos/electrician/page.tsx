import type { Metadata } from "next";
import { Zap, PlugZap, FileCheck2, BatteryCharging, ShieldCheck, Clock, MapPin, Cable } from "lucide-react";
import DemoPhotoTile from "@/components/demos/DemoPhotoTile";
import DemoQuoteForm from "@/components/demos/DemoQuoteForm";
import TestimonialCarousel from "@/components/carousel/TestimonialCarousel";

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

const reviews = [
  { name: "Sample Review — Backup Power Install", quote: "Set up our inverter and battery system so the whole house stays on through load-shedding stages. Explained the setup clearly.", rating: 5 },
  { name: "Sample Review — Compliance Certificate", quote: "Needed a CoC fast for a house sale, got the inspection and certificate within two days.", rating: 5 },
  { name: "Sample Review — Fault Finding", quote: "Found a tripping breaker issue that had been happening for months. Fixed same visit.", rating: 4 },
];

export default function ElectricianDemoPage() {
  return (
    <>
      <section className="relative pt-20 pb-24 px-5 md:px-12 bg-gradient-to-b from-yellow-950/30 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
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
        </div>
      </section>

      <section id="services" className="py-20 px-5 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.title} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <s.icon className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="font-semibold text-lg mb-1.5">{s.title}</h3>
                <p className="text-white/60 text-sm font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="backup-power" className="py-20 px-5 md:px-12 bg-black/30">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
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
          <div className="grid grid-cols-2 gap-4">
            <DemoPhotoTile icon={BatteryCharging} label="Inverter Install — After" gradient="from-yellow-900/50 to-slate-900" alt="Placeholder photo representing a completed inverter and battery backup installation" />
            <DemoPhotoTile icon={Zap} label="Distribution Board" gradient="from-slate-800 to-yellow-950/50" alt="Placeholder photo representing an upgraded electrical distribution board" />
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-5 md:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-3">What Customers Say</h2>
          <p className="text-white/50 text-sm mb-12">Sample reviews for this concept demo business.</p>
          <TestimonialCarousel items={reviews} accentClassName="text-yellow-400" activeDotClassName="bg-yellow-400" />
        </div>
      </section>

      <section id="quote" className="py-20 px-5 md:px-12 bg-black/30">
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
    </>
  );
}
