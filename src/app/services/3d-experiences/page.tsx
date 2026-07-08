import type { Metadata } from "next";
import ServicePageContent from "@/components/ServicePageContent";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Interactive & 3D (WebGL) Web Experiences",
  description:
    "Scroll-driven 3D web experiences built with Three.js and WebGL — a memorable, high-impact site for brands that want to stand out, with real performance safeguards.",
  alternates: { canonical: "/services/3d-experiences" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Interactive and 3D WebGL Web Experience Development",
  provider: { "@type": "LocalBusiness", name: "MCFWebs", url: SITE_URL },
  areaServed: { "@type": "Country", name: "South Africa" },
  url: `${SITE_URL}/services/3d-experiences`,
};

export default function ThreeDExperiencesPage() {
  return (
    <>
      <JsonLd data={schema} />
      <ServicePageContent
        eyebrow="Service"
        title="Interactive & 3D (WebGL) Web Experiences"
        intro="A 3D web experience uses WebGL — the same technology behind browser-based 3D graphics — to turn a website into an interactive scene that responds to scrolling and movement, instead of a flat page of static sections. This site you are on right now is itself an example: the moving scene behind the homepage content runs the full length of the page."
        sections={[
          {
            heading: 'What makes it different from a normal website',
            body: [
              'A standard website is a stack of static sections that appear as you scroll. A 3D web experience adds a real, continuously rendered scene — built with Three.js and React Three Fiber, both free and open-source — where camera movement, object transitions, and depth are tied directly to how far the visitor has scrolled. Done well, it feels less like reading a page and more like moving through a space.',
            ],
          },
          {
            heading: 'Who this is for',
            body: [
              'This service suits brands where the website itself needs to demonstrate creativity, technical capability, or premium positioning — design studios, architecture and property brands, product launches, portfolios, and any business whose website is effectively part of its sales pitch. It is a deliberate, higher-effort option rather than the default choice for every business; a plumber or café is usually better served by a fast, clear custom website (see our other services) than a heavy 3D scene.',
            ],
          },
          {
            heading: 'Performance and accessibility are not optional',
            body: [
              'A 3D experience that is slow or excludes people is a liability, not an asset. Every 3D build we deliver detects prefers-reduced-motion and serves a fully static fallback for visitors who request less motion, detects lack of WebGL support or low-end devices and serves a lightweight 2D fallback, and lazy-loads 3D assets so they never block the page\'s first paint. Real page content — headings, text, contact details — always exists as crawlable HTML underneath the 3D layer, so search engines and AI crawlers still see and index the actual content, not just a blank canvas.',
            ],
          },
          {
            heading: 'Our process',
            body: [
              'We start by defining the narrative or metaphor the 3D scene should express for your brand, then prototype the core camera and object motion before building out full scroll-synced chapters. Because these are custom-built scenes rather than templates, timelines vary by scope — typically two to four weeks for a hero-level scene, longer for a full-site continuous experience like this one.',
            ],
          },
        ]}
      />
    </>
  );
}
