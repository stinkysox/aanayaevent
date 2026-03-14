import ScrollReveal from "@/components/ScrollReveal";
import PlaceholderImage from "@/components/PlaceholderImage";

const experiences = [
  {
    title: "Wedding Planning",
    description: "Complete wedding coordination from start to finish — venues, vendors, timelines, and everything in between.",
  },
  {
    title: "Destination Events",
    description: "Planning events across India's most beautiful locations — from Goa's beaches to Rajasthan's heritage venues.",
  },
  {
    title: "Decor & Styling",
    description: "Custom decor concepts that reflect your personality — florals, lighting, tablescapes, and stage design.",
  },
  {
    title: "Day-of Coordination",
    description: "Already planned your event? We'll handle the day so you can enjoy every moment without worry.",
  },
];

const ExperiencesSection = () => {
  return (
    <section className="section-padding bg-section-champagne text-section-champagne-foreground">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        <ScrollReveal>
          <span className="editorial-subheading block mb-4">What We Do</span>
          <h2 className="editorial-heading text-3xl md:text-5xl text-foreground mb-12 sm:mb-16 md:mb-24">
            Our Services
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.title} delay={i * 100}>
              <div className="group cursor-pointer">
                <div className="overflow-hidden mb-4 sm:mb-6">
                  <div className="hover-zoom">
                    <PlaceholderImage aspectRatio="4/3" label={exp.title} />
                  </div>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-3 group-hover:text-muted-foreground transition-colors duration-300">
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
