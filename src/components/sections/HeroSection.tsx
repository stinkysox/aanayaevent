import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Premium, subtle parallax: moves up gently as you scroll
  const textY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  // Clean, linear fade out as the user moves down the page
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[150vh] bg-primary select-none w-full"
    >
      {/* Sticky Container - Anchored viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-primary flex flex-col justify-between items-center py-16 px-6 sm:px-12 z-10">
        
        {/* Background Layer to prevent any flashes */}
        <div className="absolute inset-0 bg-primary -z-10" />

        {/* Top Spacer / Logo Area */}
        <div className="w-full flex justify-center pt-8 sm:pt-12">
          <motion.img
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            src="https://i.postimg.cc/qR6FB3wR/Screenshot-2026-05-23-191725.png"
            alt="Aanaya Events Logo"
            className="w-[180px] sm:w-[240px] md:w-[300px] lg:w-[380px] object-contain opacity-95"
          />
        </div>

        {/* Central Core Content Area - Framer motion isolated to its own container */}
        <motion.div
          style={{
            y: textY,
            opacity: textOpacity,
          }}
          className="w-full flex flex-col items-center text-center max-w-5xl mx-auto my-auto px-4"
        >
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-white font-serif text-[2.75rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[7.2rem] leading-[0.95] tracking-tight"
          >
            Designing
            <span className="block italic text-white/70 font-normal my-3 lg:my-4">
              Stories
            </span>
            With Soul
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 1.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-8 sm:mt-10 text-white/60 font-sans font-light text-sm sm:text-base md:text-lg max-w-xl leading-relaxed tracking-wide"
          >
            At Aanaya Events, we transform emotions into celebrations that
            feel intimate, immersive, and deeply personal. Curating moments
            with elegance, beauty, and storytelling.
          </motion.p>
        </motion.div>

        {/* Bottom Area: Fixed Scroll Indicator Anchor */}
        <div className="w-full flex flex-col items-center pb-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-white text-[10px] tracking-[0.4em] uppercase font-light">
              Scroll
            </span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;