import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // smoother cinematic transforms
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    [0.08, 0.35]
  );

  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 180]
  );

  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.6],
    [1, 0]
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-[180vh] bg-primary"
    >
      {/* Sticky Hero */}
      <div className="sticky top-0 h-screen overflow-hidden bg-primary">
        {/* Desktop Background */}
        <div className="absolute inset-0 bg-primary" />

        {/* Editorial Gradient */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/5
            via-transparent
            to-black/20
          "
        />

        {/* Side Typography */}
        <div
          className="
            absolute
            right-6
            xl:right-12
            top-1/2
            -translate-y-1/2
            z-10
            hidden
            xl:block
          "
        >
          <p
            className="
              text-white/20
              uppercase
              tracking-[0.4em]
              text-[10px]
              rotate-180
              [writing-mode:vertical-rl]
            "
          >
            Editorial Wedding Atelier
          </p>
        </div>

        {/* Main Content */}
        <motion.div
          style={{
            y: textY,
            opacity: textOpacity,
          }}
          className="
            relative
            z-20
            h-full
            flex
            flex-col
            justify-center
            px-6
            sm:px-8
            md:px-12
            lg:px-16
            xl:px-24
            pt-24
            md:pt-28
            lg:pt-20
          "
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              text-white
              font-serif
              text-[3.5rem]
              leading-[0.92]
              tracking-[-0.06em]
              max-w-5xl

              sm:text-[4.5rem]
              md:text-[6rem]
              lg:text-[6.8rem]
              xl:text-[7.5rem]
              2xl:text-[8.5rem]
            "
          >
            Designing
            <span className="block italic text-white/65">
              Stories
            </span>
            With
            <span className="block">Soul</span>
          </motion.h1>

          {/* Bottom Area */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 1,
            }}
            className="
              mt-10
              md:mt-12
              lg:mt-14

              flex
              flex-col
              lg:flex-row
              lg:items-end
              justify-between
              gap-10
            "
          >
            {/* Left Content */}
            <div className="max-w-sm md:max-w-md">
              <p
                className="
                  text-white/60
                  leading-relaxed
                  text-sm
                  md:text-base
                "
              >
                At Aanaya Events, we transform emotions into
                celebrations that feel intimate, immersive,
                and deeply personal. Curating moments with
                elegance, beauty, and storytelling.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-7">
                {[
                  "Destination Weddings",
                  "Luxury Design",
                  "Editorial Styling",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      border
                      border-white/10
                      bg-white/[0.03]
                      backdrop-blur-xl
                      rounded-full
                      px-4
                      py-2
                    "
                  >
                    <span
                      className="
                        text-white/70
                        text-[11px]
                        tracking-wide
                      "
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-5 items-start lg:items-end">
              <Link to="/gallery">
                <Button
                  className="
                    rounded-full
                    px-8
                    py-6
                    bg-white
                    text-black
                    hover:bg-white/90
                    text-sm
                  "
                >
                  Explore Gallery
                </Button>
              </Link>

              <span
                className="
                  text-white/35
                  text-[10px]
                  tracking-[0.35em]
                  uppercase
                "
              >
                Scroll to Discover
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;