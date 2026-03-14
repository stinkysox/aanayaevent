import ScrollReveal from "@/components/ScrollReveal";
import PlaceholderImage from "@/components/PlaceholderImage";

const atelierItems = [
  { title: "Floral Design", desc: "Fresh and dried arrangements that set the mood." },
  { title: "Tablescapes", desc: "Curated table settings that feel personal and polished." },
  { title: "Lighting", desc: "Warm, ambient lighting that transforms any venue." },
  { title: "Stage & Mandap", desc: "Custom stage designs for ceremonies and receptions." },
];

const DecorAtelierSection = () => {
  return (
    <section className="section-padding bg-section-champagne text-section-champagne-foreground">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16">
          <div className="lg:col-span-4 lg:col-start-9 lg:order-2">
            <ScrollReveal>
              <span className="editorial-subheading block mb-4">Decor Studio</span>
              <h2 className="editorial-heading text-3xl md:text-4xl text-foreground mb-8">
                Setting the Scene
              </h2>
              <p className="editorial-body">
                Our in-house decor team brings your vision to life with custom
                installations, handpicked materials, and a keen eye for detail.
                Every setup is designed just for you.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-1 lg:order-1 space-y-4 sm:space-y-6">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <ScrollReveal>
                <PlaceholderImage aspectRatio="3/4" label="Floral" />
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <div className="mt-8 sm:mt-12">
                  <PlaceholderImage aspectRatio="4/5" label="Tablescape" />
                </div>
              </ScrollReveal>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <ScrollReveal delay={200}>
                <div className="-mt-6 sm:-mt-8">
                  <PlaceholderImage aspectRatio="1/1" label="Lighting" />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <PlaceholderImage aspectRatio="3/4" label="Stage" />
              </ScrollReveal>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-16 sm:mt-24">
          {atelierItems.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100}>
              <div className="border-t border-border pt-6">
                <h3 className="font-serif text-base sm:text-lg text-foreground mb-2">{item.title}</h3>
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
