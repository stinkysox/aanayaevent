import ScrollReveal from "@/components/ScrollReveal";
import PlaceholderImage from "@/components/PlaceholderImage";

const stories = [
  { title: "A Goan Reverie", location: "Goa, India" },
  { title: "Palace of Dreams", location: "Udaipur, India" },
  { title: "Tuscan Golden Hour", location: "Tuscany, Italy" },
  { title: "Island Whispers", location: "Maldives" },
  { title: "Balinese Serenity", location: "Bali, Indonesia" },
  { title: "Garden of Time", location: "Bangalore, India" },
];

const PortfolioSection = () => {
  return (
    <section className="section-padding bg-section-dark text-section-dark-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <span className="editorial-subheading block mb-4 text-section-dark-muted">Event Stories</span>
          <h2 className="editorial-heading text-3xl md:text-5xl mb-16 md:mb-24">
            Recent Celebrations
          </h2>
        </ScrollReveal>

        {/* Masonry-style grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {stories.map((story, i) => (
            <ScrollReveal key={story.title} delay={i * 80}>
              <div className="break-inside-avoid group cursor-pointer relative overflow-hidden">
                <div className="hover-zoom">
                  <PlaceholderImage
                    aspectRatio={i % 3 === 0 ? "3/4" : i % 3 === 1 ? "4/5" : "1/1"}
                    label={story.title}
                  />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-500 flex items-end p-6">
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="font-serif text-xl text-primary-foreground mb-1">
                      {story.title}
                    </h3>
                    <span className="editorial-subheading text-primary-foreground/70">
                      {story.location}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
