import { useEffect, useState, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ScrollReveal from "@/components/ScrollReveal";
import { ShimmerImage } from "../ui/ShimmerImage";

const testimonials = [
  {
    quote: `I absolutely loved working with Neha. In the beginning, I was completely confused about what I wanted, but she helped me create a mood board, choose the right colors, outfits, and brought everything together beautifully through the decor.\n\nFrom the Engagement to the Pellikuthuru and Wedding, every setup was so perfect and thoughtful. We received so many compliments, even from people watching the livestream. Thank you, Neha, for making our events look so beautiful and memorable.`,
    author: "Apurva & Surya",
    image: "https://i.postimg.cc/g0WZQNVr/Apurva-Surya.jpg",
  },
  {
    quote: `It was a challenging start to the day with a little bit of rain in the morning, but everything came together so beautifully in the end. The sun came out at the perfect time, and sitting here on this beautiful mandap feels truly magical.\n\nA big thank you to Neha and the entire team for handling everything so smoothly and creating such an amazing setup despite the challenges. Their effort, creativity, and calmness made the whole experience so special and memorable for us.`,
    author: "Ashok & Bhargavi",
    image: "https://i.postimg.cc/3Jkmvy8q/Bhargavi-Ashok.jpg",
  },
  {
    quote: `From the first function till the wedding day, everything was handled with so much care and detail. Every setup felt beautiful, personal, and thoughtfully planned.\n\nEven though we were in Australia, the team was always available for us at odd hours through Google Meet and calls. We never felt left out at any point, and their constant support, communication, and availability made the entire process feel smooth and stress-free.\n\nOur guests are still talking about how lovely and well-organized all the events were planned.`,
    author: "Priyanka & Akhil",
    image: "https://i.postimg.cc/rpkr3Q1m/Priyanka-Akhil.jpg",
  },
  {
    quote: `Thank you 🥰\nWe loved the decor and the management. Thank you for making it memorable for us`,
    author: "Drishti & Prajnay",
    image: "https://i.postimg.cc/qBb2qcTL/drishti-and-prajnay.jpg",
  },

];

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 45,
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const stopAutoplay = useCallback(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();

    autoplayTimerRef.current = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 7500);
  }, [emblaApi, stopAutoplay]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    startAutoplay();

    emblaApi.on("select", onSelect);
    emblaApi.on("pointerDown", stopAutoplay);
    emblaApi.on("pointerUp", startAutoplay);

    return () => {
      stopAutoplay();
      emblaApi.off("select", onSelect);
      emblaApi.off("pointerDown", stopAutoplay);
      emblaApi.off("pointerUp", startAutoplay);
    };
  }, [emblaApi, onSelect, startAutoplay, stopAutoplay]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
        startAutoplay();
      }
    },
    [emblaApi, startAutoplay]
  );

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-section-dark text-section-dark-foreground overflow-hidden">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 md:px-10">
        <ScrollReveal>
          <span className="editorial-subheading block text-center mb-10 sm:mb-16 md:mb-20 text-section-dark-muted tracking-[0.3em] text-[10px] sm:text-xs uppercase">
            Our Couples
          </span>
        </ScrollReveal>

        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          ref={emblaRef}
        >
          <div className="flex touch-pan-y">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-[0_0_100%] min-w-0 px-0 sm:px-4 md:px-6"
              >
                <blockquote className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-8 md:gap-12 items-center">
                  {/* Image Container with Shimmer Integration */}
                  <div className="md:col-span-4 flex justify-center">
                    <div className="relative w-full max-w-[250px] sm:max-w-[260px] md:max-w-[300px] aspect-[4/5] overflow-hidden rounded-sm bg-section-dark-muted/10 shadow-sm group">
                      <ShimmerImage
                        src={t.image}
                        alt={`${t.author} Celebration`}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none select-none"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-8 text-center md:text-left">
                    <p className="font-serif text-[13.5px] leading-7 sm:text-lg sm:leading-8 lg:text-[1.2rem] lg:leading-9 font-light whitespace-pre-line opacity-90 break-words px-1 sm:px-0">
                      "{t.quote}"
                    </p>

                    <footer className="mt-6 sm:mt-8">
                      <cite className="editorial-subheading not-italic block tracking-[0.2em] text-[10px] sm:text-xs uppercase opacity-75">
                        {t.author}
                      </cite>
                    </footer>
                  </div>
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-2 mt-10 sm:mt-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-[1.5px] transition-all duration-500 ease-out ${
                index === selectedIndex
                  ? "w-8 bg-section-dark-foreground opacity-100"
                  : "w-3 bg-section-dark-muted opacity-35 hover:opacity-60"
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