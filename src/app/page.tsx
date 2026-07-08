import type { Metadata } from "next";
import HomeExperience from "@/components/three/HomeExperience";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioPreviewSection from "@/components/PortfolioPreviewSection";
import HomeTestimonialsSection from "@/components/HomeTestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";

export const metadata: Metadata = {
  title: "MCFWebs | Custom Website Design & 3D Web Experiences in South Africa",
  description:
    "MCFWebs builds custom websites, digital menus, booking systems, and interactive 3D web experiences for businesses across South Africa. See live concept demos and get a quote.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <HomeExperience />
      <div className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <PortfolioPreviewSection />
        <ProcessSection />
        <HomeTestimonialsSection />
        <FinalCTASection />
      </div>
    </>
  );
}
