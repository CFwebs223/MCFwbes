export type Testimonial = {
  name: string;
  quote: string;
  rating: number;
};

// Placeholder entries ready to be swapped for real client reviews later —
// e.g. once pulled from the business's Google Business Profile.
export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sample Client — Custom Website Project',
    quote:
      'The new site loads instantly and finally looks like a business people trust. Bookings came in within the first week of launch.',
    rating: 5,
  },
  {
    name: 'Sample Client — Digital Menu Project',
    quote:
      'Customers scan the QR code and the menu is just there, no app, no waiting. Updating prices takes minutes instead of reprinting everything.',
    rating: 5,
  },
  {
    name: 'Sample Client — Booking System Project',
    quote:
      'We used to take bookings over WhatsApp and lose track constantly. Now everything is online and organised automatically.',
    rating: 5,
  },
  {
    name: 'Sample Client — 3D Web Experience Project',
    quote:
      'The scroll-driven site made our brand feel a full level more premium than our competitors, and it still loads fast on mobile.',
    rating: 5,
  },
];
