import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BUSINESS, SITE_URL } from "@/lib/site-config";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const LenisProvider = dynamic(() => import("@/components/LenisProvider"), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });
const ScrollProgress = dynamic(() => import("@/components/ScrollProgress"), { ssr: false });
const LoadingScreen = dynamic(() => import("@/components/LoadingScreen"), { ssr: false });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MCFWebs | Custom Website Design & 3D Web Experiences in South Africa",
    template: "%s | MCFWebs",
  },
  description:
    "MCFWebs designs and builds custom websites, digital menus, booking systems, and interactive 3D web experiences for businesses across South Africa.",
  alternates: { canonical: "/" },
  other: {
    "theme-color": "#050505",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS.name,
  url: BUSINESS.url,
  email: BUSINESS.email,
  telephone: BUSINESS.phones[0].display,
  contactPoint: BUSINESS.phones.map((phone) => ({
    "@type": "ContactPoint",
    telephone: phone.href.replace("tel:", ""),
    contactType: "customer service",
    areaServed: "ZA",
  })),
  areaServed: { "@type": "Country", name: "South Africa" },
  sameAs: [BUSINESS.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <LoadingScreen />
        <CustomCursor />
        <ScrollProgress />
        <LenisProvider />
        <Navbar />
        <main className="relative z-10 min-h-screen bg-black">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
