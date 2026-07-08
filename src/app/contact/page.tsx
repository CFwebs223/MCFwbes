import type { Metadata } from "next";
import { Phone, Mail } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { BUSINESS, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with MCFWebs for a custom website, digital menu, booking system, or 3D web experience quote. Call, WhatsApp, or email — we serve businesses across South Africa.",
  alternates: { canonical: "/contact" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS.name,
  url: `${SITE_URL}/contact`,
  email: BUSINESS.email,
  telephone: BUSINESS.phones[0].display,
  contactPoint: BUSINESS.phones.map((phone) => ({
    "@type": "ContactPoint",
    telephone: phone.href.replace("tel:", ""),
    contactType: "customer service",
    areaServed: "ZA",
  })),
  areaServed: { "@type": "Country", name: "South Africa" },
};

export default function ContactPage() {
  return (
    <div className="relative pt-32 md:pt-40 pb-28 px-5 md:px-12">
      <JsonLd data={schema} />
      <div className="max-w-5xl mx-auto">
        <span className="text-yellow-500/80 font-mono text-xs tracking-[0.25em] uppercase block mb-4">
          Contact
        </span>
        <h1 className="text-3xl md:text-5xl font-medium text-white mb-6">
          Let&rsquo;s Build Something
        </h1>
        <p className="text-lg text-white/70 font-light leading-relaxed max-w-2xl mb-14">
          Call, email, or send a message below and tell us about your business &mdash; we
          typically reply within one business day. MCFWebs serves businesses across South Africa,
          remotely.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl glass-card">
              <div className="flex items-center gap-3 mb-3 text-yellow-500">
                <Phone className="w-5 h-5" />
                <h2 className="text-white font-medium">Call</h2>
              </div>
              <div className="flex flex-col gap-1.5">
                {BUSINESS.phones.map((phone) => (
                  <a
                    key={phone.href}
                    href={phone.href}
                    className="text-white/70 hover:text-yellow-500 transition-colors"
                  >
                    {phone.label}: {phone.display}
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl glass-card">
              <div className="flex items-center gap-3 mb-3 text-yellow-500">
                <Mail className="w-5 h-5" />
                <h2 className="text-white font-medium">Email</h2>
              </div>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="text-white/70 hover:text-yellow-500 transition-colors break-all"
              >
                {BUSINESS.email}
              </a>
            </div>

            <div className="p-6 rounded-2xl glass-card">
              <div className="flex items-center gap-3 mb-3 text-yellow-500">
                <InstagramIcon className="w-5 h-5" />
                <h2 className="text-white font-medium">Instagram</h2>
              </div>
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-yellow-500 transition-colors"
              >
                {BUSINESS.instagramHandle}
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
