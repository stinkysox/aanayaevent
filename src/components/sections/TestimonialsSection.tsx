import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    quote: "Taaffeite turned our wedding into a timeless masterpiece.",
    author: "Priya & Arjun",
    location: "Udaipur, 2025",
  },
  {
    quote: "Every detail felt like it was pulled from our dreams.",
    author: "Sarah & James",
    location: "Tuscany, 2024",
  },
  {
    quote: "A celebration that honoured our values and exceeded our imagination.",
    author: "Ananya & Vikram",
    location: "Goa, 2025",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-section-dark text-section-dark-foreground">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <ScrollReveal>
          <span className="editorial-subheading block mb-16 text-section-dark-muted">Voices</span>
        </ScrollReveal>

        <div className="space-y-24">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <blockquote>
                <p className="font-serif text-2xl md:text-4xl lg:text-5xl font-light leading-tight italic mb-8">
                  "{t.quote}"
                </p>
                <footer>
                  <cite className="editorial-subheading not-italic block mb-1 text-foreground">
                    {t.author}
                  </cite>
                  <span className="editorial-body text-xs">{t.location}</span>
                </footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
