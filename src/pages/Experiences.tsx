import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import PlaceholderImage from "@/components/PlaceholderImage";

const experiences = [
  {
    title: "Luxury Weddings",
    description:
      "Opulent celebrations designed with exquisite attention to detail. Every element — from couture linens to hand-arranged florals — is curated to create an atmosphere of refined grandeur.",
  },
  {
    title: "Destination Weddings",
    description:
      "We transform the world's most breathtaking locations into intimate celebration spaces. Our destination expertise spans palaces, beaches, vineyards, and private islands.",
  },
  {
    title: "Bespoke Decor",
    description:
      "Our atelier creates one-of-a-kind installations that transcend decoration. Each piece is conceived as a work of art — sculptural, evocative, and uniquely yours.",
  },
  {
    title: "Full Wedding Planning",
    description:
      "From the first conversation to the last dance, we orchestrate every detail. Our comprehensive planning ensures a seamless, stress-free journey to your perfect celebration.",
  },
];

const Experiences = () => {
  return (
    <PageLayout>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <span className="editorial-subheading block mb-4">Experiences</span>
            <h1 className="editorial-heading text-4xl md:text-6xl lg:text-7xl text-foreground max-w-4xl">
              Signature
              <br />
              Celebrations
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {experiences.map((exp, i) => (
        <section key={exp.title} className={`py-16 md:py-24 ${i % 2 === 1 ? "bg-card" : ""}`}>
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                i % 2 === 1 ? "direction-reverse" : ""
              }`}
            >
              <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:col-start-7 lg:order-2" : ""}`}>
                <ScrollReveal>
                  <div className="overflow-hidden">
                    <div className="hover-zoom">
                      <PlaceholderImage
                        aspectRatio={i % 2 === 0 ? "4/3" : "3/4"}
                        label={exp.title}
                      />
                    </div>
                  </div>
                </ScrollReveal>
              </div>
              <div
                className={`lg:col-span-5 ${
                  i % 2 === 1 ? "lg:col-start-1 lg:order-1" : "lg:col-start-8"
                }`}
              >
                <ScrollReveal delay={150}>
                  <span className="editorial-subheading block mb-4">0{i + 1}</span>
                  <h2 className="editorial-heading text-3xl md:text-4xl text-foreground mb-6">
                    {exp.title}
                  </h2>
                  <p className="editorial-body">{exp.description}</p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      ))}
    </PageLayout>
  );
};

export default Experiences;
