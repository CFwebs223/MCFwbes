import type { Metadata } from "next";
import ServicePageContent from "@/components/ServicePageContent";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Digital Menus & QR-Code Menus",
  description:
    "Digital and QR-code menus for restaurants, cafés, and bars — instant, always up to date, and no reprinting when prices change. See how it works and what's included.",
  alternates: { canonical: "/services/digital-menus" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Digital Menu and QR-Code Menu Development",
  provider: { "@type": "LocalBusiness", name: "MCFWebs", url: SITE_URL },
  areaServed: { "@type": "Country", name: "South Africa" },
  url: `${SITE_URL}/services/digital-menus`,
};

export default function DigitalMenusPage() {
  return (
    <>
      <JsonLd data={schema} />
      <ServicePageContent
        eyebrow="Service"
        title="Digital Menus & QR-Code Menus"
        intro="A digital menu is a mobile-friendly web page that customers reach by scanning a QR code on the table, at the counter, or on your storefront window — no app download required. MCFWebs builds digital menus that load instantly, look like your brand, and can be updated in minutes whenever prices or dishes change."
        sections={[
          {
            heading: 'Why restaurants and cafés are switching',
            body: [
              'Printed menus are expensive to reprint every time a price or dish changes, and laminated menus get worn, sticky, and outdated fast. A digital menu solves both problems: it is always current, it costs nothing to "reprint," and it gives customers a cleaner, faster way to browse what you offer, especially for tourists or new customers who prefer to browse quietly before ordering.',
              'For hospitality businesses specifically, a well-built digital menu also demonstrates that the business is current and well run, which matters to customers deciding where to spend money in a competitive market.',
            ],
          },
          {
            heading: 'How it works for your customers',
            body: [
              'Customers scan a printed QR code with their phone camera — no app, no login, no account. The menu opens directly in their browser, organised by category (starters, mains, drinks, specials), with prices, descriptions, and dietary or allergen notes where relevant. The page is designed to load in under a couple of seconds even on average mobile data, because a slow menu page defeats the purpose.',
            ],
          },
          {
            heading: 'Updating your menu',
            body: [
              'Once built, updating the menu content — a new special, a sold-out item, a seasonal price change — is a quick edit, not a design project or a reprint order. We set the menu up so day-to-day changes (prices, availability, specials) can be handled without needing a developer for every small update, while structural changes (new categories, a full rebrand) go through us.',
            ],
          },
          {
            heading: 'Getting started',
            body: [
              'We start by collecting your current menu, categories, and any photos or branding you want used, then design and build the digital menu, test the QR code flow on real phones, and hand over printable QR code table cards. Most digital menu projects are completed within about a week, and can be paired with a full custom website for a restaurant, café, or bar that wants an online presence beyond just the menu.',
            ],
          },
        ]}
      />
    </>
  );
}
