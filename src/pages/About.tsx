import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import PlaceholderImage from "@/components/PlaceholderImage";

const About = () => {
  return (
    <PageLayout>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
          <ScrollReveal>
            <span className="editorial-subheading block mb-4">About</span>
            <h1 className="editorial-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-foreground max-w-3xl mb-8">
              Crafting Moments
              <br />
              That Matter
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <ScrollReveal>
                <PlaceholderImage aspectRatio="3/4" label="Founder" />
              </ScrollReveal>
            </div>
            <div className="lg:col-span-5 lg:col-start-7 lg:mt-24">
              <ScrollReveal delay={100}>
                <p className="editorial-body mb-6">
                  Named after one of the rarest gemstones in the world, Taaffeite Events
                  was founded on the belief that every celebration — big or small — deserves
                  care, creativity, and a personal touch.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="editorial-body mb-6">
                  Based in Bangalore, we've had the pleasure of planning weddings and
                  events across Karnataka, Goa, Rajasthan, and other beautiful locations
                  across India. We're growing, and every new project teaches us something
                  valuable.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <p className="editorial-body">
                  Our close-knit team brings together experience in event design,
                  hospitality, and decor to create celebrations that feel genuine,
                  well-organized, and truly memorable.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            {[
              { number: "50+", label: "Events Completed" },
              { number: "8+", label: "Cities Covered" },
              { number: "4", label: "Years & Growing" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div className="text-center">
                  <span className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground block mb-4">
                    {stat.number}
                  </span>
                  <span className="editorial-subheading">{stat.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
