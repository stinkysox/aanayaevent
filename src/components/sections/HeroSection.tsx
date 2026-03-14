import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.3);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-primary">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-primary/40" />

      {/* Content */}
      <div
        className="relative z-10 h-full flex flex-col justify-end pb-16 sm:pb-20 md:pb-28 px-5 sm:px-6 md:px-12 max-w-7xl mx-auto"
        style={{ transform: `translateY(${-offsetY * 0.15}px)` }}
      >
        <h1 className="editorial-heading text-3xl sm:text-4xl md:text-6xl lg:text-8xl text-primary-foreground max-w-4xl mb-6 sm:mb-8">
          Beautiful Events,
          <br />
          Thoughtfully Planned
        </h1>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
          <div className="flex flex-wrap gap-x-4 sm:gap-x-8 gap-y-2">
            {[
              "Wedding Planning",
              "Corporate Events",
              "Bespoke Decor",
              "Full Coordination",
            ].map((item) => (
              <span key={item} className="editorial-subheading text-primary-foreground/70">
                {item}
              </span>
            ))}
          </div>

          <Button variant="editorial-outline" size="xl" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            <Link to="/portfolio">View Our Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
