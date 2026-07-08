import type { Metadata } from "next";
import Link from "next/link";
import { Globe, QrCode, CalendarDays, Box, Layers, ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom website design, digital menus, booking systems, interactive 3D web experiences, and design systems — built for South African businesses.",
  alternates: { canonical: "/services" },
};

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  QrCode,
  CalendarDays,
  Box,
  Layers,
};

export default function ServicesIndexPage() {
  return (
    <div className="relative pt-32 md:pt-40 pb-28 px-5 md:px-12">
      <div className="max-w-5xl mx-auto">
        <span className="text-yellow-500/80 font-mono text-xs tracking-[0.25em] uppercase block mb-4">
          Services
        </span>
        <h1 className="text-3xl md:text-5xl font-medium text-white mb-6">
          Five Ways We Build Your Business Online
        </h1>
        <p className="text-lg text-white/70 font-light leading-relaxed max-w-2xl mb-16">
          MCFWebs offers five core services covering everything a growing South African business
          needs online: a custom website, a digital menu, an online booking system, an
          interactive 3D web experience, or a design system to keep every touchpoint consistent.
          Each service page below explains what it is, who it&rsquo;s for, and how the process
          works.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group p-7 rounded-2xl glass-card hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-5 text-yellow-500 group-hover:bg-yellow-500/20 transition-colors">
                  {Icon && <Icon className="w-5 h-5" />}
                </div>
                <h2 className="text-white font-medium text-xl mb-2 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-yellow-500 transition-colors" />
                </h2>
                <p className="text-white/60 text-sm font-light leading-relaxed">{service.short}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
