import type { Metadata } from "next";
import ServicePageContent from "@/components/ServicePageContent";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Design Systems for Growing Brands",
  description:
    "A reusable design system — colours, typography, components, and layout rules — so your brand stays consistent as you add pages, products, and team members.",
  alternates: { canonical: "/services/design-systems" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Design System Development",
  provider: { "@type": "LocalBusiness", name: "MCFWebs", url: SITE_URL },
  areaServed: { "@type": "Country", name: "South Africa" },
  url: `${SITE_URL}/services/design-systems`,
};

export default function DesignSystemsPage() {
  return (
    <>
      <JsonLd data={schema} />
      <ServicePageContent
        eyebrow="Service"
        title="Design Systems for Growing Brands"
        intro="A design system is a documented set of colours, typography, spacing, and reusable components that keeps every page, product, and marketing asset consistent, instead of each new page being designed from scratch. MCFWebs builds design systems for South African businesses that have outgrown a single-page site and are adding more pages, products, or team members."
        sections={[
          {
            heading: 'Why this matters as a business grows',
            body: [
              'A single well-designed page is easy to keep consistent. Once a business has ten, twenty, or fifty pages — plus social graphics, email templates, and maybe a second brand extension — small inconsistencies creep in: three shades of the same blue, four different button styles, headings that don\'t line up the same way twice. A design system fixes this at the source by defining the rules once and reusing them everywhere.',
            ],
          },
          {
            heading: 'What is included',
            body: [
              'A typical design system includes a defined colour palette with clear usage rules, a type scale (heading and body sizes, weights, and line-heights), spacing and layout grid rules, and a library of reusable components — buttons, cards, forms, navigation — built once and used consistently across every page. For code-based sites, we implement this as an actual reusable component library (built with Tailwind CSS and React), not just a static style guide document that goes out of date.',
            ],
          },
          {
            heading: 'Who this is for',
            body: [
              'This service is aimed at businesses actively growing their web presence — adding service pages, launching a second location or product line, building an internal team that will maintain the site after launch, or a franchise-style business that needs the same brand applied consistently across multiple sites. It is usually paired with a custom website build rather than sold entirely on its own.',
            ],
          },
          {
            heading: 'Our process',
            body: [
              'We audit your existing brand assets and pages, define the core rules (colour, type, spacing, components), and build them into the actual site as reusable, documented components your team (or ours) can keep using correctly going forward. Timelines depend on how much existing material there is to reconcile, typically one to three weeks alongside a website build.',
            ],
          },
        ]}
      />
    </>
  );
}
