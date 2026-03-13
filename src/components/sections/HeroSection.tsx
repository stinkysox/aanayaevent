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
    <section className="relative h-screen overflow-hidden">
      {/* Background placeholder */}
      <div
        className="absolute inset-0 placeholder-image"
        style={{ transform: `translateY(${offsetY}px)` }}
      >
        <span className="editorial-subheading text-muted-foreground/30">Hero Image</span>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/10" />

      {/* Content */}
      <div
        className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-12 max-w-7xl mx-auto"
        style={{ transform: `translateY(${-offsetY * 0.15}px)` }}
      >
        <h1 className="editorial-heading text-4xl md:text-6xl lg:text-8xl text-foreground max-w-4xl mb-8">
          Rare Celebrations
          <br />
          Crafted with Precision
        </h1>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {[
              "Luxury Wedding Planners",
              "Destination Celebrations",
              "Bespoke Decor",
              "Sustainable Events",
            ].map((item) => (
              <span key={item} className="editorial-subheading text-foreground/70">
                {item}
              </span>
            ))}
          </div>

          <Button variant="editorial-outline" size="xl" asChild>
            <Link to="/portfolio">Explore Celebrations</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
