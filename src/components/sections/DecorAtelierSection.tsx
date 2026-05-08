import ScrollReveal from "@/components/ScrollReveal";
import PlaceholderImage from "@/components/PlaceholderImage";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const atelierItems = [
  {
    number: "01",
    title: "Floral Design",
    desc: "Fresh florals and sculptural arrangements designed with emotion and atmosphere in mind.",
  },
  {
    number: "02",
    title: "Tablescapes",
    desc: "Layered textures, refined table styling, and intimate editorial compositions.",
  },
  {
    number: "03",
    title: "Lighting",
    desc: "Warm cinematic lighting crafted to transform the emotional tone of the space.",
  },
  {
    number: "04",
    title: "Stage & Mandap",
    desc: "Architectural ceremony spaces tailored to your celebration and visual identity.",
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
      {/* Background Typography */}
      <div
        className="
          absolute
          top-10
          left-1/2
          -translate-x-1/2
          pointer-events-none
          select-none
        "
      >
        <h2
          className="
            text-[5rem]
            sm:text-[8rem]
            md:text-[14rem]
            xl:text-[18rem]
            leading-none
            tracking-[-0.08em]
            font-serif
            text-black/[0.03]
          "
        >
          ATELIER
        </h2>
      </div>

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
                Decor Atelier
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
                    <PlaceholderImage
                      aspectRatio="3/4"
                      label="Floral Design"
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
                    <PlaceholderImage
                      aspectRatio="1/1"
                      label="Lighting"
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
                    <PlaceholderImage
                      aspectRatio="4/5"
                      label="Tablescape"
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
                    <PlaceholderImage
                      aspectRatio="3/4"
                      label="Mandap Design"
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
                <div className="w-14 h-px bg-black/20" />

                <span
                  className="
                    uppercase
                    tracking-[0.35em]
                    text-[10px]
                    md:text-xs
                    text-black/50
                  "
                >
                  Decor Studio
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
                Setting
                <span className="block italic text-black/60">
                  the Scene
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
                Every detail is approached like a visual composition —
                intentional, atmospheric, and emotionally immersive.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="text-black/55 leading-relaxed">
                From sculptural florals to cinematic lighting and layered
                textures, our atelier creates spaces that feel intimate,
                luxurious, and unforgettable.
              </p>
            </ScrollReveal>

            {/* Floating Quote */}
            <ScrollReveal delay={400}>
              <div
                className="
                  mt-14
                  border-l
                  border-black/20
                  pl-6
                "
              >
                <p
                  className="
                    font-serif
                    italic
                    text-xl
                    leading-relaxed
                    text-black/70
                  "
                >
                  “Design is not decoration —
                  <br />
                  it is atmosphere.”
                </p>
              </div>
            </ScrollReveal>
          </motion.div>
        </div>

        {/* BOTTOM VALUES */}
        <div className="mt-32 md:mt-40">
          <div className="w-full h-px bg-black/10 mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {atelierItems.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 120}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="
                    group
                    relative
                    border-t
                    border-black/10
                    pt-8
                  "
                >
                  <span
                    className="
                      absolute
                      top-6
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