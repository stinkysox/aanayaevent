import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import PlaceholderImage from "@/components/PlaceholderImage";

const About = () => {
  return (
    <PageLayout>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <span className="editorial-subheading block mb-4">About</span>
            <h1 className="editorial-heading text-4xl md:text-6xl lg:text-7xl text-foreground max-w-3xl mb-8">
              A Legacy of
              <br />
              Rare Beauty
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
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
                  was founded on the belief that every celebration deserves to be as
                  singular and precious as the moments it marks.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="editorial-body mb-6">
                  Based in Bangalore, we have orchestrated celebrations across India and
                  the world — from the palatial courtyards of Udaipur to the sun-drenched
                  vineyards of Tuscany.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <p className="editorial-body">
                  Our team of designers, planners, and artisans brings together decades of
                  experience in luxury hospitality, haute couture, and sustainable design
                  to create celebrations that are both breathtaking and responsible.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { number: "200+", label: "Celebrations Crafted" },
              { number: "15+", label: "Destinations Worldwide" },
              { number: "12", label: "Years of Excellence" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div className="text-center">
                  <span className="font-serif text-5xl md:text-6xl text-foreground block mb-4">
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
