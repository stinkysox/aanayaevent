import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import PlaceholderImage from "@/components/PlaceholderImage";

const destinations = [
  {
    name: "Goa",
    description: "Where the Arabian Sea meets golden shores, creating the perfect backdrop for barefoot luxury celebrations beneath swaying palms.",
  },
  {
    name: "Udaipur",
    description: "The City of Lakes offers palatial venues where Mughal architecture and romantic waterscapes create an atmosphere of regal splendour.",
  },
  {
    name: "Bali",
    description: "Sacred temples, emerald rice terraces, and cliff-top venues make this Indonesian paradise an ethereal wedding destination.",
  },
  {
    name: "Tuscany",
    description: "Rolling vineyards, Renaissance villas, and golden light create a timeless European romance for your celebration.",
  },
  {
    name: "Maldives",
    description: "Overwater pavilions and private islands in the Indian Ocean offer the ultimate intimate luxury escape.",
  },
];

const Destinations = () => {
  return (
    <PageLayout>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <span className="editorial-subheading block mb-4">Destinations</span>
            <h1 className="editorial-heading text-4xl md:text-6xl lg:text-7xl text-foreground max-w-4xl">
              Where Dreams
              <br />
              Take Shape
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {destinations.map((dest, i) => (
        <section key={dest.name} className={`py-16 md:py-24 ${i % 2 === 1 ? "bg-card" : ""}`}>
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:col-start-6 lg:order-2" : ""}`}>
                <ScrollReveal>
                  <div className="overflow-hidden">
                    <div className="hover-zoom">
                      <PlaceholderImage aspectRatio="16/10" label={dest.name} />
                    </div>
                  </div>
                </ScrollReveal>
              </div>
              <div className={`lg:col-span-4 ${i % 2 === 1 ? "lg:col-start-1 lg:order-1" : "lg:col-start-9"}`}>
                <ScrollReveal delay={150}>
                  <span className="editorial-subheading block mb-4">0{i + 1}</span>
                  <h2 className="editorial-heading text-3xl md:text-5xl text-foreground mb-6">
                    {dest.name}
                  </h2>
                  <p className="editorial-body">{dest.description}</p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      ))}
    </PageLayout>
  );
};

export default Destinations;
