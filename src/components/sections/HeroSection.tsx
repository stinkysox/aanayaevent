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

  // Smooth cinematic transforms
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.1, 0.5]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 280]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[220vh] bg-primary"
    >
      {/* Sticky Hero */}
      <div className="sticky top-0 h-screen overflow-hidden bg-primary">
        {/* ========================= */}
        {/* MOBILE IMAGE BACKGROUND */}
        {/* ========================= */}
    

        {/* ========================= */}
        {/* DESKTOP MINIMAL BACKGROUND */}
        {/* ========================= */}
        <div className="absolute inset-0 hidden md:block bg-primary" />

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
        {/* Right Vertical Text */}
        <div
          className="
            absolute
            right-8
            xl:right-14
            top-1/2
            -translate-y-1/2
            z-10
            hidden
            lg:block
          "
        >
          <p
            className="
              text-white/20
              uppercase
              tracking-[0.45em]
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
            md:px-12
            lg:px-20
          "
        >
          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="mb-8 md:mb-10"
          >
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              text-white
              font-serif
              text-5xl
              sm:text-6xl
              md:text-8xl
              xl:text-[9rem]
              leading-[0.9]
              tracking-[-0.06em]
              max-w-6xl
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
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 1,
            }}
            className="
              mt-14
              flex
              flex-col
              lg:flex-row
              lg:items-end
              justify-between
              gap-12
            "
          >
            {/* Left Content */}
            <div className="max-w-md">
              <p
                className="
                  text-white/60
                  leading-relaxed
                  text-sm
                  md:text-base
                "
              >
                At Aanaya Events, we transform emotions into celebrations that
                feel intimate, immersive, and deeply personal. Curating moments
                with elegance, beauty, and storytelling.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-8">
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