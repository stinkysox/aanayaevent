import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import PlaceholderImage from "@/components/PlaceholderImage";

const stories = [
  { title: "A Goan Reverie", location: "Goa, India", season: "Winter 2025" },
  { title: "Palace of Dreams", location: "Udaipur, India", season: "Spring 2025" },
  { title: "Tuscan Golden Hour", location: "Tuscany, Italy", season: "Summer 2024" },
  { title: "Island Whispers", location: "Maldives", season: "Winter 2024" },
  { title: "Balinese Serenity", location: "Bali, Indonesia", season: "Autumn 2024" },
  { title: "Garden of Time", location: "Bangalore, India", season: "Spring 2024" },
  { title: "Monsoon Romance", location: "Kerala, India", season: "Summer 2024" },
  { title: "Highland Vows", location: "Scotland, UK", season: "Autumn 2023" },
];

const Portfolio = () => {
  return (
    <PageLayout>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <span className="editorial-subheading block mb-4">Portfolio</span>
            <h1 className="editorial-heading text-4xl md:text-6xl lg:text-7xl text-foreground max-w-3xl">
              Stories We've
              <br />
              Told
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {stories.map((story, i) => (
              <ScrollReveal key={story.title} delay={i * 60}>
                <div className="break-inside-avoid group cursor-pointer relative overflow-hidden">
                  <div className="hover-zoom">
                    <PlaceholderImage
                      aspectRatio={
                        i % 4 === 0 ? "3/4" : i % 4 === 1 ? "4/5" : i % 4 === 2 ? "1/1" : "4/3"
                      }
                      label={story.title}
                    />
                  </div>
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-500 flex items-end p-6">
                    <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <h3 className="font-serif text-xl text-primary-foreground mb-1">
                        {story.title}
                      </h3>
                      <span className="editorial-subheading text-primary-foreground/70">
                        {story.location} — {story.season}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Portfolio;
