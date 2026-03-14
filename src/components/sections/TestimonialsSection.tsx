import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    quote: "Taaffeite made our wedding day absolutely seamless and beautiful.",
    author: "Priya & Arjun",
    location: "Bangalore, 2025",
  },
  {
    quote: "They understood our vision perfectly and brought it to life beyond what we imagined.",
    author: "Meera & Rahul",
    location: "Goa, 2024",
  },
  {
    quote: "Professional, creative, and genuinely caring — exactly what we needed.",
    author: "Ananya & Vikram",
    location: "Jaipur, 2024",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-section-dark text-section-dark-foreground">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-12 text-center">
        <ScrollReveal>
          <span className="editorial-subheading block mb-12 sm:mb-16 text-section-dark-muted">What Couples Say</span>
        </ScrollReveal>

        <div className="space-y-16 sm:space-y-24">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <blockquote>
                <p className="font-serif text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light leading-tight italic mb-6 sm:mb-8">
                  "{t.quote}"
                </p>
                <footer>
                   <cite className="editorial-subheading not-italic block mb-1">
                     {t.author}
                  </cite>
                  <span className="text-xs text-section-dark-muted">{t.location}</span>
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
