import Navbar from "@/components/Navbar";
import HeroOceanScene from "@/components/HeroOceanScene";
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
      <ServicesSection />
      <ProcessSection />
      <WhyMcfWebsSection />
      <PortfolioPreviewSection />
      <PricingSection />
      <OrbitReviews />
      <FinalCTASection />
    </main>
  );
}
