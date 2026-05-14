import ScrollReveal from "@/components/ScrollReveal";
import PlaceholderImage from "@/components/PlaceholderImage";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const PhilosophySection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const textY = useTransform(scrollYProgress, [0, 1], [80, -40]);
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        py-32
        md:py-44
        bg-[#f5eee6]
        overflow-hidden
      "
    >
      {/* Massive Background Typography */}
      <div
        className="
          absolute
          top-20
          left-1/2
          -translate-x-1/2
          pointer-events-none
          select-none
          z-0
        "
      >
        <h2
          className="
            text-[5rem]
            sm:text-[8rem]
            md:text-[14rem]
            lg:text-[18rem]
            leading-none
            font-serif
            tracking-[-0.06em]
            text-black/[0.03]
          "
        >
          AANAYA
        </h2>
      </div>

      {/* Floating Vertical Line */}
      <div
        className="
          absolute
          left-6
          md:left-14
          top-0
          bottom-0
          w-px
          bg-black/10
        "
      >
        <motion.div
          style={{ height: lineHeight }}
          className="w-full bg-black/40 origin-top"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            style={{ y: textY }}
            className="lg:col-span-5"
          >
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-px bg-black/30" />

                <span
                  className="
                    uppercase
                    tracking-[0.35em]
                    text-[10px]
                    md:text-xs
                    text-black/50
                  "
                >
                  Our Philosophy
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2
                className="
                  font-serif
                  text-5xl
                  md:text-7xl
                  leading-[0.95]
                  tracking-[-0.05em]
                  text-black
                  mb-10
                "
              >
                Crafted
                <span className="block italic text-black/60">
                  With Intention
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p
                className="
                  text-black/70
                  text-base
                  md:text-lg
                  leading-relaxed
                  mb-8
                  max-w-lg
                "
              >
                Every event we create begins with understanding the people
                behind it — their story, personality, culture, and vision.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p
                className="
                  text-black/55
                  leading-relaxed
                  max-w-md
                "
              >
                We believe weddings are more than beautifully styled spaces.
                They are feelings preserved in time — woven together with care
                and meaning.
              </p>
            </ScrollReveal>
          </motion.div>

          {/* Right Image */}
          <motion.div
            style={{ y: imageY }}
            className="
              lg:col-span-6
              lg:col-start-7
              relative
            "
          >
            {/* Floating Card */}
            <div
              className="
                absolute
                -top-10
                -left-10
                z-20
                hidden
                md:flex
                items-center
                gap-4
                bg-white/70
                backdrop-blur-xl
                border
                border-black/10
                px-6
                py-4
                rounded-full
                shadow-2xl
              "
            >
              <div className="w-3 h-3 rounded-full bg-black" />

              <p className="uppercase tracking-[0.25em] text-[10px] text-black/60">
                Since 2018
              </p>
            </div>

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-[2.5rem]">
              <div className="absolute inset-0 bg-black/10 z-10" />

              <PlaceholderImage
                aspectRatio="3/4"
                label="Editorial Wedding"
              />
            </div>

            {/* Bottom Floating Text */}
            <div
              className="
                absolute
                -bottom-8
                right-0
                md:right-8
                bg-black
                text-white
                px-8
                py-6
                rounded-[2rem]
                max-w-xs
                z-20
              "
            >
              <p className="text-sm leading-relaxed text-white/80">
                Crafting celebrations where emotion, beauty, and storytelling
                exist in perfect harmony.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Values */}
        <div className="mt-32 md:mt-40">
          {/* Top Divider */}
          <div className="w-full h-px bg-black/10 mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                number: "01",
                title: "Personal",
                desc: "Every love story carries its own rhythm — we transform those emotions into celebrations that feel deeply personal.",
              },
              {
                number: "02",
                title: "Atmospheric",
                desc: "We believe weddings are feelings preserved in time — candlelight, blooms, and details woven together with care.",
              },
              {
                number: "03",
                title: "Intentional",
                desc: "From the first conversation to the final celebration, every interaction and design choice is intentional.",
              },
              {
                number: "04",
                title: "Timeless",
                desc: "Blending storytelling and refined aesthetics to create experiences that linger long after the music fades.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 120}>
                <motion.div
                  whileHover={{ y: -10 }}
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
                      top-8
                      right-0
                      text-5xl
                      font-serif
                      text-black/[0.06]
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

                  <p className="text-black/60 leading-relaxed text-sm">
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

export default PhilosophySection;