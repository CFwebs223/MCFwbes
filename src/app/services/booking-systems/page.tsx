import type { Metadata } from "next";
import ServicePageContent from "@/components/ServicePageContent";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Booking System Integration",
  description:
    "Online booking and appointment systems integrated into your website — let customers book call-outs, tables, or appointments online, day or night.",
  alternates: { canonical: "/services/booking-systems" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Booking System Integration",
  provider: { "@type": "LocalBusiness", name: "MCFWebs", url: SITE_URL },
  areaServed: { "@type": "Country", name: "South Africa" },
  url: `${SITE_URL}/services/booking-systems`,
};

export default function BookingSystemsPage() {
  return (
    <>
      <JsonLd data={schema} />
      <ServicePageContent
        eyebrow="Service"
        title="Booking System Integration"
        intro="A booking system lets customers request an appointment, table, or call-out directly from your website, at any hour, without a phone call. MCFWebs integrates booking flows into your site so requests land in one organised place instead of scattered across WhatsApp messages, missed calls, and sticky notes."
        sections={[
          {
            heading: 'The problem this solves',
            body: [
              'Many South African service businesses still take bookings entirely by phone or WhatsApp. That works until the business gets busy — then calls get missed, times get double-booked, and customers who message outside business hours may not hear back until the next day, by which point they have already booked with a competitor. A booking system captures the request the moment the customer is ready to commit.',
            ],
          },
          {
            heading: 'What we build',
            body: [
              'Depending on your business, this can range from a structured quote-request form (common for trades like plumbers and electricians, where jobs need assessment before a fixed booking) through to a full calendar-based appointment or table-booking flow with available time slots, confirmation messages, and reminders. We match the system to how your business actually operates rather than forcing a one-size-fits-all booking widget onto your site.',
              'All booking and quote-request forms include client-side validation and a clear success or error state, so customers know immediately whether their request went through, and every submission is accessible and usable via keyboard alone.',
            ],
          },
          {
            heading: 'Where the bookings go',
            body: [
              'Booking requests can be routed to email, a shared inbox, or a simple dashboard depending on how your team prefers to manage incoming work. The goal is to reduce the number of places you need to check for new business, not add another app to your daily routine.',
            ],
          },
          {
            heading: 'Getting started',
            body: [
              'We start by mapping out how bookings currently work for your business — what information you need from a customer before you can confirm or quote a job — then design and build a form or calendar flow that matches. Integration timelines vary from a few days for a quote-request form up to one to two weeks for a full calendar booking system with time-slot management.',
            ],
          },
        ]}
      />
    </>
  );
}
