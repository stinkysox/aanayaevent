import PageLayout from "@/components/PageLayout";
import HeroSection from "@/components/sections/HeroSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import ExperiencesSection from "@/components/sections/ExperiencesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import DecorAtelierSection from "@/components/sections/DecorAtelierSection";
import DestinationsSection from "@/components/sections/DestinationsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <PhilosophySection />
      <ExperiencesSection />
      <PortfolioSection />
      <DecorAtelierSection />
      <DestinationsSection />
      <TestimonialsSection />
      <CTASection />
    </PageLayout>
  );
};

export default Index;
