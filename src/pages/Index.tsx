import PageLayout from "@/components/PageLayout";
import HeroSection from "@/components/sections/HeroSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import DecorAtelierSection from "@/components/sections/DecorAtelierSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <PhilosophySection />
      <PortfolioSection />
      <DecorAtelierSection />
      <TestimonialsSection />
      <CTASection />
    </PageLayout>
  );
};

export default Index;
