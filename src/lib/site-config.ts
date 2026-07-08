export const SITE_URL = "https://mcfwebs.agency";

export const BUSINESS = {
  name: "MCFWebs",
  legalName: "MCFWebs",
  domain: "mcfwebs.agency",
  url: SITE_URL,
  email: "websitesmcf@gmail.com",
  phones: [
    { display: "073 015 0646", href: "tel:+27730150646", label: "Call" },
    { display: "078 106 4098", href: "tel:+27781064098", label: "Alt" },
  ],
  instagram: "https://instagram.com/mcf_webs",
  instagramHandle: "@mcf_webs",
  areaServed: "South Africa",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/demos", label: "Demos" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export type ServiceSlug =
  | "custom-websites"
  | "digital-menus"
  | "booking-systems"
  | "3d-experiences"
  | "design-systems";

export const SERVICES: Array<{
  slug: ServiceSlug;
  title: string;
  short: string;
  icon: string;
}> = [
  {
    slug: "custom-websites",
    title: "Custom Website Design & Development",
    short: "Hand-built, fast, mobile-first websites designed around your business, not a template.",
    icon: "Globe",
  },
  {
    slug: "digital-menus",
    title: "Digital Menus & QR-Code Menus",
    short: "Instant, always-up-to-date menus your customers scan and view in seconds.",
    icon: "QrCode",
  },
  {
    slug: "booking-systems",
    title: "Booking System Integration",
    short: "Let customers book appointments, tables, or call-outs online, day or night.",
    icon: "CalendarDays",
  },
  {
    slug: "3d-experiences",
    title: "Interactive & 3D (WebGL) Web Experiences",
    short: "Scroll-driven 3D storytelling that turns your website into a memorable experience.",
    icon: "Box",
  },
  {
    slug: "design-systems",
    title: "Design Systems for Growing Brands",
    short: "A consistent, reusable visual language that scales as your business grows.",
    icon: "Layers",
  },
];
