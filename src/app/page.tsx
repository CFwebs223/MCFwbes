import Navbar from "@/components/Navbar";
import HeroOceanScene from "@/components/HeroOceanScene";
import CinematicSpacer from "@/components/CinematicSpacer";
import SectionWipe from "@/components/SectionWipe";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import WhyMcfWebsSection from "@/components/WhyMcfWebsSection";
import PortfolioPreviewSection from "@/components/PortfolioPreviewSection";
import PricingSection from "@/components/PricingSection";
import OrbitReviews from "@/components/OrbitReviews";
import FinalCTASection from "@/components/FinalCTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative">
      <Navbar />
      <HeroOceanScene />

      <CinematicSpacer />
      <SectionWipe />

      <ServicesSection />

      <CinematicSpacer />
      <SectionWipe />

      <ProcessSection />

      <CinematicSpacer />
      <SectionWipe />

      <WhyMcfWebsSection />

      <CinematicSpacer />

      <PortfolioPreviewSection />

      <CinematicSpacer />
      <SectionWipe />

      <PricingSection />

      <CinematicSpacer />

      <OrbitReviews />

      <CinematicSpacer />
      <SectionWipe />

      <FinalCTASection />
    </main>
  );
}
