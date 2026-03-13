import ScrollReveal from "@/components/ScrollReveal";
import PlaceholderImage from "@/components/PlaceholderImage";

const destinations = [
  { name: "Goa", desc: "Coastal elegance where ocean breezes meet golden sands." },
  { name: "Udaipur", desc: "Palatial grandeur reflected in serene lake waters." },
  { name: "Bali", desc: "Tropical sanctuary of sacred beauty and lush greenery." },
  { name: "Tuscany", desc: "Rolling vineyards and sun-drenched stone villas." },
  { name: "Maldives", desc: "Overwater luxury in the heart of the Indian Ocean." },
];

const DestinationsSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <span className="editorial-subheading block mb-4">Destinations</span>
          <h2 className="editorial-heading text-3xl md:text-5xl text-foreground mb-16 md:mb-24">
            Where We Create
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large feature */}
          <div className="md:col-span-7">
            <ScrollReveal>
              <div className="group cursor-pointer relative overflow-hidden">
                <div className="hover-zoom">
                  <PlaceholderImage aspectRatio="16/10" label={destinations[0].name} />
                </div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="font-serif text-3xl text-foreground mb-2">{destinations[0].name}</h3>
                  <p className="editorial-body text-foreground/70 text-xs">{destinations[0].desc}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="md:col-span-5">
            <ScrollReveal delay={100}>
              <div className="group cursor-pointer relative overflow-hidden">
                <div className="hover-zoom">
                  <PlaceholderImage aspectRatio="4/5" label={destinations[1].name} />
                </div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="font-serif text-2xl text-foreground mb-1">{destinations[1].name}</h3>
                  <p className="editorial-body text-foreground/70 text-xs">{destinations[1].desc}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Bottom row */}
          {destinations.slice(2).map((dest, i) => (
            <div key={dest.name} className="md:col-span-4">
              <ScrollReveal delay={(i + 2) * 100}>
                <div className="group cursor-pointer relative overflow-hidden">
                  <div className="hover-zoom">
                    <PlaceholderImage aspectRatio="3/4" label={dest.name} />
                  </div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="font-serif text-2xl text-foreground mb-1">{dest.name}</h3>
                    <p className="editorial-body text-foreground/70 text-xs">{dest.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
