import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full bg-primary select-none flex flex-col items-center justify-center px-6 sm:px-12 py-24 overflow-hidden">
      
      {/* Background Layer */}
      <div className="absolute inset-0 bg-primary z-0" />

      {/* Core Content Area */}
      <div className="relative z-10 w-full flex flex-col items-center text-center max-w-5xl mx-auto mb-12">
        {/* Subtle Category/Pre-title Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-6 sm:mb-8"
        >
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
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
            delay: 0.6,
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

      {/* Scroll Visual Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        <span className="uppercase tracking-[0.3em] text-[9px] text-white/30 font-sans">
          Scroll
        </span>
        
        {/* Minimalist Animated Indicator Line */}
        <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden rounded-full">
          <motion.div
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-white/60"
          />
        </div>
      </motion.div>
      
    </section>
  );
};

export default HeroSection;