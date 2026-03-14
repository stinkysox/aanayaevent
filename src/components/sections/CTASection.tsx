import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="section-padding bg-section-warm text-section-warm-foreground">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-12 text-center">
        <ScrollReveal>
          <span className="editorial-subheading block mb-6">Get in Touch</span>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="editorial-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-8 sm:mb-10">
            Let's Plan Your
            <br />
            Next Event
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <Button variant="editorial" size="xl" asChild>
            <Link to="/contact">Start a Conversation</Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
