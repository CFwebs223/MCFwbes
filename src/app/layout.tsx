import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

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
  title: "mcf.webs | AI-Built Websites & Digital Products",
  description: "mcf.webs creates modern websites, landing pages, digital menus, booking systems, and online tools for businesses that need to look sharper online.",
  other: {
    "theme-color": "#050505",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preload" href="/videos/hero_optimized.mp4" as="video" type="video/mp4" />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <LoadingScreen />
        <CustomCursor />
        <ScrollProgress />
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
