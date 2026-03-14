import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import PlaceholderImage from "@/components/PlaceholderImage";

const stories = [
  { title: "A Beachside Celebration", location: "Goa, India", season: "Winter 2025" },
  { title: "Heritage Elegance", location: "Jaipur, India", season: "Spring 2025" },
  { title: "Garden Romance", location: "Bangalore, India", season: "Winter 2024" },
  { title: "Lakeside Vows", location: "Udaipur, India", season: "Autumn 2024" },
  { title: "Hilltop Affair", location: "Coorg, India", season: "Summer 2024" },
  { title: "City Chic", location: "Mumbai, India", season: "Spring 2024" },
  { title: "Backwater Bliss", location: "Kerala, India", season: "Winter 2024" },
  { title: "Vineyard Celebration", location: "Nashik, India", season: "Autumn 2023" },
];

const Portfolio = () => {
  return (
    <PageLayout>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
          <ScrollReveal>
            <span className="editorial-subheading block mb-4">Portfolio</span>
            <h1 className="editorial-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-foreground max-w-3xl">
              Events We've
              <br />
              Brought to Life
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
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
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-500 flex items-end p-4 sm:p-6">
                    <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <h3 className="font-serif text-lg sm:text-xl text-primary-foreground mb-1">
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
