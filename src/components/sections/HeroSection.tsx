import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Tracks the scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Premium, subtle parallax: moves up gently as you scroll
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Clean, linear fade out as the user moves down the page
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[150vh] bg-primary select-none"
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-primary px-6 sm:px-12">
        
        {/* Background Layer */}
        <div className="absolute inset-0 bg-primary z-0" />

        {/* Logo */}
        <motion.img
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          src="https://i.postimg.cc/qR6FB3wR/Screenshot-2026-05-23-191725.png"
          alt="Aanaya Events Logo"
          className="
            relative
            z-10
            w-[220px]
            sm:w-[280px]
            md:w-[340px]
            lg:w-[420px]
            object-contain
            mb-8
            sm:mb-10
            opacity-95
          "
        />

        {/* Core Content Area */}
        <motion.div
          style={{
            y: textY,
            opacity: textOpacity,
          }}
          className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-white font-serif text-[3.5rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[7.5rem] leading-[0.95] tracking-tight"
          >
            Designing
            <span className="block italic text-white/70 font-normal my-2">
              Stories
            </span>
            With Soul
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-8 sm:mt-10 text-white/60 font-sans font-light text-sm sm:text-base md:text-lg max-w-xl leading-relaxed tracking-wide"
          >
            At Aanaya Events, we transform emotions into celebrations that
            feel intimate, immersive, and deeply personal. Curating moments
            with elegance, beauty, and storytelling.
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-white text-[10px] tracking-[0.4em] uppercase font-light">
            Scroll
          </span>

          <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;