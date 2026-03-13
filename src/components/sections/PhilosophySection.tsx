import ScrollReveal from "@/components/ScrollReveal";
import PlaceholderImage from "@/components/PlaceholderImage";

const PhilosophySection = () => {
  return (
    <section className="section-padding bg-section-warm text-section-warm-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Text block */}
          <div className="lg:col-span-5 lg:col-start-1">
            <ScrollReveal>
              <span className="editorial-subheading block mb-8">Our Philosophy</span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="editorial-heading text-3xl md:text-5xl text-foreground mb-8">
                Where Luxury Meets
                <br />
                Intention
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="editorial-body mb-6">
                At Taaffeite Events, we believe every celebration should be as rare and
                precious as the gemstone we're named after. Our approach marries
                time-honored craftsmanship with a deep commitment to sustainability.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="editorial-body">
                Every detail is considered, every element is intentional. From the first
                floral sketch to the final farewell, we create celebrations that honor
                both the couple and the world around them.
              </p>
            </ScrollReveal>
          </div>

          {/* Image block - offset */}
          <div className="lg:col-span-6 lg:col-start-7 lg:mt-24">
            <ScrollReveal delay={200}>
              <PlaceholderImage aspectRatio="3/4" label="Editorial Image" />
            </ScrollReveal>
          </div>
        </div>

        {/* Values row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 md:mt-32">
          {[
            { title: "Luxury", desc: "Uncompromising quality in every detail" },
            { title: "Bespoke", desc: "Tailored to your unique story" },
            { title: "Sustainable", desc: "Mindful celebrations that give back" },
            { title: "Precision", desc: "Meticulous attention to every moment" },
          ].map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 100}>
              <div className="border-t border-border pt-6">
                <h3 className="font-serif text-xl text-foreground mb-3">{value.title}</h3>
                <p className="editorial-body text-xs">{value.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
