import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
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
  // Initialize Embla with drag/swipe options and smooth resistance physics
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    duration: 35,
    dragFree: false 
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  return (
    <section className="section-padding bg-section-dark text-section-dark-foreground overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 md:px-12 text-center">
        
        <ScrollReveal>
          <span className="editorial-subheading block mb-12 sm:mb-16 text-section-dark-muted">
            Our Couples
          </span>
        </ScrollReveal>

        {/* Embla Viewport Wrapper */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          {/* Slider Container */}
          <div className="flex touch-pan-y">
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className="flex-none w-full min-w-0 px-4 sm:px-8 md:px-16"
              >
                <blockquote className="group select-none">
                  <p className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-tight italic mb-6 sm:mb-8 balance mx-auto max-w-4xl">
                    "{t.quote}"
                  </p>
                  <footer>
                    <cite className="editorial-subheading not-italic block tracking-widest text-xs sm:text-sm uppercase opacity-80">
                      {t.author}
                    </cite>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Minimal Editorial Slide Indicators */}
        <div className="flex justify-center items-center gap-3 mt-12 sm:mt-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-[2px] transition-all duration-500 ease-out ${
                index === selectedIndex 
                  ? "w-8 bg-section-dark-foreground opacity-100" 
                  : "w-3 bg-section-dark-muted opacity-40 hover:opacity-70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;