import type { Metadata } from "next";
import ServicePageContent from "@/components/ServicePageContent";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Custom Website Design & Development",
  description:
    "Hand-built, mobile-first websites for South African businesses — custom design and development, not a page-builder template. See process, timelines, and what's included.",
  alternates: { canonical: "/services/custom-websites" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Custom Website Design and Development",
  provider: { "@type": "LocalBusiness", name: "MCFWebs", url: SITE_URL },
  areaServed: { "@type": "Country", name: "South Africa" },
  url: `${SITE_URL}/services/custom-websites`,
};

export default function CustomWebsitesPage() {
  return (
    <>
      <JsonLd data={schema} />
      <ServicePageContent
        eyebrow="Service"
        title="Custom Website Design & Development"
        intro="A custom website is a site designed and coded around your specific business, content, and customers, instead of a generic template stretched to fit. MCFWebs builds every site from the ground up so it loads fast, works properly on a phone in poor signal, and actually represents what your business does."
        sections={[
          {
            heading: 'What "custom" actually means',
            body: [
              'Most cheap websites are built from a page-builder template: the same layout, the same section order, and the same stock photography as thousands of other small business sites. Visitors can tell within seconds, and so can search engines. A custom build starts from a blank page — the layout, navigation, and content structure are designed specifically around what your business sells and how your customers actually decide to buy.',
              'That does not mean starting from zero on everything. We use proven, modern tooling (Next.js, React, and Tailwind CSS) so the site is fast and maintainable, but the design, copy structure, and information architecture are built for your business specifically, not reused from a template library.',
            ],
          },
          {
            heading: 'Who this is for',
            body: [
              'This service suits any South African business that wants a professional web presence that holds up to scrutiny — trades businesses, professional services, retailers, restaurants, and studios who currently have no website, an outdated one, or a template site that looks like everyone else\'s. If your current site takes more than a few seconds to load on mobile data, or customers say they couldn\'t find your number, that\'s usually a sign it needs a rebuild.',
            ],
          },
          {
            heading: 'What is included',
            body: [
              'A typical custom website project includes a home page, a services or products section, an about/contact page, mobile-first responsive design, on-page SEO basics (proper headings, meta descriptions, sitemap), and a contact form or click-to-call setup. Multi-page sites, blogs, image galleries, and integrations with booking or menu systems (see our other services) can be added depending on what your business needs.',
              'Every site is built with real, crawlable HTML content underneath any visual polish, so search engines and AI answer engines can actually read and cite what your business does — not just see a blank loading screen.',
            ],
          },
          {
            heading: 'Our process',
            body: [
              'We start with a short discovery conversation about your business, your customers, and what the site needs to achieve. From there we design the layout and content structure, build the real site, and review it with you before launch. Most custom website projects take one to three weeks from kickoff to launch, depending on scope and how quickly content and feedback come back to us.',
            ],
          },
        ]}
      />
    </>
  );
}
