import ScrollReveal from "@/components/ScrollReveal";
import PlaceholderImage from "@/components/PlaceholderImage";

const atelierItems = [
  { title: "Floral Installations", desc: "Living sculptures that transform spaces into gardens of wonder." },
  { title: "Tablescapes", desc: "Curated settings where every vessel and bloom tells a story." },
  { title: "Lighting Design", desc: "Atmospheric compositions that paint the evening in warmth." },
  { title: "Stage Styling", desc: "Architectural moments designed for grandeur and intimacy alike." },
];

const DecorAtelierSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Right text - appears first on mobile */}
          <div className="lg:col-span-4 lg:col-start-9 lg:order-2">
            <ScrollReveal>
              <span className="editorial-subheading block mb-4">Decor Atelier</span>
              <h2 className="editorial-heading text-3xl md:text-4xl text-foreground mb-8">
                The Art of Setting
              </h2>
              <p className="editorial-body">
                Our atelier approaches every celebration as a canvas. Each installation is
                conceived as a singular work of art — never repeated, always remembered.
              </p>
            </ScrollReveal>
          </div>

          {/* Left images - asymmetric */}
          <div className="lg:col-span-7 lg:col-start-1 lg:order-1 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <ScrollReveal>
                <PlaceholderImage aspectRatio="3/4" label="Floral" />
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <div className="mt-12">
                  <PlaceholderImage aspectRatio="4/5" label="Tablescape" />
                </div>
              </ScrollReveal>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <ScrollReveal delay={200}>
                <div className="-mt-8">
                  <PlaceholderImage aspectRatio="1/1" label="Lighting" />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <PlaceholderImage aspectRatio="3/4" label="Stage" />
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Items list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          {atelierItems.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100}>
              <div className="border-t border-border pt-6">
                <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                <p className="editorial-body text-xs">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DecorAtelierSection;
