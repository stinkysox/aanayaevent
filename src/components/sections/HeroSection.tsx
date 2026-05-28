import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full bg-primary select-none flex flex-col items-center justify-center px-6 sm:px-12 py-24 overflow-hidden">
      
      {/* Background Layer */}
      <div className="absolute inset-0 bg-primary z-0" />

      {/* Logo Area */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.4,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative z-10 w-full flex justify-center mb-10 sm:mb-16 lg:mb-20"
      >
        <img
          src="https://i.postimg.cc/qR6FB3wR/Screenshot-2026-05-23-191725.png"
          alt="Aanaya Events Logo"
          className="w-[200px] sm:w-[280px] md:w-[340px] lg:w-[420px] object-contain opacity-95"
        />
      </motion.div>

      {/* Core Content Area */}
      <div className="relative z-10 w-full flex flex-col items-center text-center max-w-5xl mx-auto">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-white font-serif text-[3rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[7.2rem] leading-[0.95] tracking-tight"
        >
          Designing
          <span className="block italic text-white/70 font-normal my-3 lg:my-4">
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
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-8 sm:mt-12 text-white/60 font-sans font-light text-sm sm:text-base md:text-lg max-w-xl leading-relaxed tracking-wide"
        >
          At Aanaya Events, we transform emotions into celebrations that
          feel intimate, immersive, and deeply personal. Curating moments
          with elegance, beauty, and storytelling.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;