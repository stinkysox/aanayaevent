import ScrollReveal from "@/components/ScrollReveal";
import PlaceholderImage from "@/components/PlaceholderImage";

const PhilosophySection = () => {
  return (
    <section className="section-padding bg-section-warm text-section-warm-foreground">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:col-start-1">
            <ScrollReveal>
              <span className="editorial-subheading block mb-8">Our Approach</span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="editorial-heading text-3xl md:text-5xl text-foreground mb-8">
                Thoughtful Planning,
                <br />
                Real Results
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="editorial-body mb-6">
                We believe great events come from listening carefully and planning
                thoughtfully. Every celebration we take on gets our full attention — because
                your special day matters to us as much as it does to you.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="editorial-body">
                From understanding your vision to handling the last details on the day,
                we work closely with you to make sure everything feels right — personal,
                beautiful, and stress-free.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 lg:mt-24">
            <ScrollReveal delay={200}>
              <PlaceholderImage aspectRatio="3/4" label="Editorial Image" />
            </ScrollReveal>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-16 sm:mt-24 md:mt-32">
          {[
            { title: "Personal", desc: "We treat every event like it's our own" },
            { title: "Bespoke", desc: "Tailored to your unique style and story" },
            { title: "Reliable", desc: "On time, on budget, no surprises" },
            { title: "Creative", desc: "Fresh ideas that make your event stand out" },
          ].map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 100}>
              <div className="border-t border-border pt-6">
                <h3 className="font-serif text-lg sm:text-xl text-foreground mb-3">{value.title}</h3>
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
