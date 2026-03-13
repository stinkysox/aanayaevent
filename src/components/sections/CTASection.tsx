import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="section-padding bg-section-warm text-section-warm-foreground">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <ScrollReveal>
          <span className="editorial-subheading block mb-6">Begin</span>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="editorial-heading text-4xl md:text-6xl lg:text-7xl text-foreground mb-10">
            Let's Craft Your
            <br />
            Celebration
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <Button variant="editorial" size="xl" asChild>
            <Link to="/contact">Start Planning</Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
