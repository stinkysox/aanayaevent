import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    quote: "I absolutely loved working with Neha. She helped me create a mood board, choose the right colors, and brought everything together beautifully. From the Engagement to the Pellikuthuru, every setup was perfect.",
    author: "Apurva & Surya",
  },
  {
    quote: "A big thank you to the team for handling everything so smoothly and creating such an amazing setup despite the morning rain. Sitting on that beautiful mandap felt truly magical.",
    author: "Ashok & Bhargavi",
  },
  {
    quote: "Even though we were in Australia, the team was always available at odd hours through Google Meet. Every setup felt deeply personal, beautiful, and thoughtfully planned.",
    author: "Priyanka & Akhil",
  },
  {
    quote: "We absolutely loved the decor and the seamless management. Thank you for making our celebration so incredibly memorable for us.",
    author: "Drishti & Prajnay",
  },
  {
    quote: "Just wanted to let you know that we loved the decor, and all our guests liked it as well. We are so glad to work with you guys.",
    author: "Pranathi",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-section-dark text-section-dark-foreground">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-12 text-center">
        <ScrollReveal>
          <span className="editorial-subheading block mb-12 sm:mb-16 text-section-dark-muted">
            Our Couples
          </span>
        </ScrollReveal>

        <div className="space-y-16 sm:space-y-24">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <blockquote className="group">
                <p className="font-serif text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light leading-tight italic mb-6 sm:mb-8 balance">
                  "{t.quote}"
                </p>
                <footer>
                  <cite className="editorial-subheading not-italic block tracking-widest text-sm uppercase opacity-80">
                    {t.author}
                  </cite>
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