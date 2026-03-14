import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import PlaceholderImage from "@/components/PlaceholderImage";

const experiences = [
  {
    title: "Wedding Planning",
    description:
      "From venue scouting to vendor coordination, we handle everything so you can focus on enjoying your big day. We work within your budget to create something beautiful.",
  },
  {
    title: "Destination Weddings",
    description:
      "Dreaming of a wedding in Goa, Jaipur, or Udaipur? We plan and coordinate destination events across India, taking care of travel logistics, local vendors, and on-ground management.",
  },
  {
    title: "Decor & Styling",
    description:
      "Our decor team creates custom setups — from floral installations and mandaps to table settings and lighting — all designed around your personal style.",
  },
  {
    title: "Day-of Coordination",
    description:
      "Already have your plans in place? We step in on the day to manage timelines, vendors, and all the moving parts so everything runs smoothly.",
  },
];

const Experiences = () => {
  return (
    <PageLayout>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
          <ScrollReveal>
            <span className="editorial-subheading block mb-4">Services</span>
            <h1 className="editorial-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-foreground max-w-4xl">
              What We
              <br />
              Offer
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {experiences.map((exp, i) => (
        <section key={exp.title} className={`py-12 sm:py-16 md:py-24 ${i % 2 === 1 ? "bg-card" : ""}`}>
          <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
            <div
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center ${
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
