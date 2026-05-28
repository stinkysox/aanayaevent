import ScrollReveal from "@/components/ScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ShimmerImage } from "@/components/ui/ShimmerImage";

const atelierItems = [
  {
    number: "01",
    title: "Thoughtful Styling",
    desc: "Carefully curated visual details designed to create emotion, atmosphere, and timeless beauty.",
  },
  {
    number: "02",
    title: "Editorial Aesthetics",
    desc: "A refined balance of textures, composition, and storytelling inspired by modern luxury celebrations.",
  },
  {
    number: "03",
    title: "Immersive Experiences",
    desc: "Spaces designed to feel intimate, cinematic, and emotionally memorable from every perspective.",
  },
  {
    number: "04",
    title: "Timeless Celebrations",
    desc: "Elegant environments crafted with intention to reflect each celebration in a deeply personal way.",
  },
];

const atelierImages = [
  {
    image:
      "https://i.postimg.cc/yNNV6v2f/1-5.jpg",
    aspect: "3/4",
  },
  {
    image:
      "https://i.postimg.cc/k5zjqxfv/JRC-Mandap-28.jpg",
    aspect: "1/1",
  },
  {
    image:
      "https://i.postimg.cc/v82Z1FGD/All-pics-229.jpg",
    aspect: "4/5",
  },
  {
    image:
      "https://i.postimg.cc/yxdCthxB/DSC06893.jpg",
    aspect: "3/4",
  },
];

const DecorAtelierSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftY = useTransform(scrollYProgress, [0, 1], [100, -80]);
  const rightY = useTransform(scrollYProgress, [0, 1], [0, -140]);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        py-32
        md:py-44
        bg-[#f1e4d5]
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LEFT IMAGE LAYOUT */}
          <motion.div
            style={{ y: leftY }}
            className="
              lg:col-span-7
              relative
            "
          >
            {/* Floating Label */}
            <div
              className="
                absolute
                top-6
                left-6
                z-20
                bg-white/70
                backdrop-blur-xl
                border
                border-black/10
                rounded-full
                px-5
                py-3
                hidden
                md:flex
                items-center
                gap-3
              "
            >
              <div className="w-2 h-2 rounded-full bg-black" />

              <span
                className="
                  uppercase
                  tracking-[0.25em]
                  text-[10px]
                  text-black/60
                "
              >
                Editorial Atelier
              </span>
            </div>

            {/* Image Composition */}
            <div className="grid grid-cols-2 gap-5 md:gap-7">
              {/* LEFT COLUMN */}
              <div className="space-y-5 md:space-y-7">
                <ScrollReveal>
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden rounded-[2rem]"
                  >
                    <ShimmerImage
                      src={atelierImages[0].image}
                      alt="Editorial Celebration"
                      className="
                        w-full
                        object-cover
                        aspect-[3/4]
                        transition-transform
                        duration-700
                        hover:scale-105
                      "
                    />
                  </motion.div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="
                      overflow-hidden
                      rounded-[2rem]
                      ml-6
                    "
                  >
                    <ShimmerImage
                      src={atelierImages[1].image}
                      alt="Luxury Celebration"
                      className="
                        w-full
                        object-cover
                        aspect-square
                        transition-transform
                        duration-700
                        hover:scale-105
                      "
                    />
                  </motion.div>
                </ScrollReveal>
              </div>

              {/* RIGHT COLUMN */}
              <div className="pt-12 md:pt-20 space-y-5 md:space-y-7">
                <ScrollReveal delay={100}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden rounded-[2rem]"
                  >
                    <ShimmerImage
                      src={atelierImages[2].image}
                      alt="Modern Editorial Decor"
                      className="
                        w-full
                        object-cover
                        aspect-[4/5]
                        transition-transform
                        duration-700
                        hover:scale-105
                      "
                    />
                  </motion.div>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="
                      overflow-hidden
                      rounded-[2rem]
                      -ml-6
                    "
                  >
                    <ShimmerImage
                      src={atelierImages[3].image}
                      alt="Elegant Atmosphere"
                      className="
                        w-full
                        object-cover
                        aspect-[3/4]
                        transition-transform
                        duration-700
                        hover:scale-105
                      "
                    />
                  </motion.div>
                </ScrollReveal>
              </div>
            </div>
          </motion.div>

          {/* RIGHT TEXT CONTENT */}
          <motion.div
            style={{ y: rightY }}
            className="
              lg:col-span-4
              lg:col-start-9
              relative
            "
          >
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-8">
                <span
                  className="
                    uppercase
                    tracking-[0.35em]
                    text-[10px]
                    md:text-xs
                    text-black/50
                  "
                >
                  Editorial Studio
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2
                className="
                  font-serif
                  text-5xl
                  md:text-6xl
                  leading-[0.95]
                  tracking-[-0.05em]
                  text-black
                  mb-10
                "
              >
                Curated
                <span className="block italic text-black/60">
                  With Intention
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p
                className="
                  text-black/70
                  leading-relaxed
                  text-base
                  md:text-lg
                  mb-8
                "
              >
                Every celebration is approached through emotion, storytelling,
                atmosphere, and refined visual composition creating moments
                that feel immersive and timeless.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="text-black/55 leading-relaxed">
                Through layered textures, thoughtful styling, and cinematic
                aesthetics, each space is transformed into an experience that
                feels intitmate, elevated, and unforgettable.
              </p>
            </ScrollReveal>

            {/* Floating Quote */}
            <ScrollReveal delay={400}>
              <div className="mt-14 pl-6">
                <p
                  className="
                    font-serif
                    italic
                    text-xl
                    leading-relaxed
                    text-black/70
                  "
                >
                  “Atmosphere is what transforms
                  <br />
                  a moment into a memory.”
                </p>
              </div>
            </ScrollReveal>
          </motion.div>
        </div>

        {/* BOTTOM VALUES */}
        <div className="mt-32 md:mt-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {atelierItems.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 120}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="group relative"
                >
                  <span
                    className="
                      absolute
                      top-0
                      right-0
                      text-5xl
                      font-serif
                      text-black/[0.05]
                      transition-all
                      duration-500
                      group-hover:text-black/[0.12]
                    "
                  >
                    {item.number}
                  </span>

                  <h3
                    className="
                      font-serif
                      text-2xl
                      text-black
                      mb-4
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      text-black/60
                      leading-relaxed
                      text-sm
                    "
                  >
                    {item.desc}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecorAtelierSection;