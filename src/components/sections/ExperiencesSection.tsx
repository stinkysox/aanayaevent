import ScrollReveal from "@/components/ScrollReveal";
import PlaceholderImage from "@/components/PlaceholderImage";

const experiences = [
  {
    title: "Luxury Weddings",
    description: "Opulent celebrations designed to leave an indelible impression on every guest.",
  },
  {
    title: "Destination Weddings",
    description: "Curated escapes in the world's most breathtaking locations, seamlessly orchestrated.",
  },
  {
    title: "Bespoke Decor",
    description: "Artisanal installations and design narratives crafted exclusively for your celebration.",
  },
  {
    title: "Full Planning",
    description: "End-to-end wedding orchestration from conception to the final farewell.",
  },
];

const ExperiencesSection = () => {
  return (
    <section className="section-padding bg-section-champagne text-section-champagne-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <span className="editorial-subheading block mb-4">Signature Experiences</span>
          <h2 className="editorial-heading text-3xl md:text-5xl text-foreground mb-16 md:mb-24">
            Crafted with Care
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.title} delay={i * 100}>
              <div className="group cursor-pointer">
                <div className="overflow-hidden mb-6">
                  <div className="hover-zoom">
                    <PlaceholderImage aspectRatio="4/3" label={exp.title} />
                  </div>
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-3 group-hover:text-muted-foreground transition-colors duration-300">
                  {exp.title}
                </h3>
                <p className="editorial-body">{exp.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
