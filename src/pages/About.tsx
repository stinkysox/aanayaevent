import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import PlaceholderImage from "@/components/PlaceholderImage";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -60]);

  return (
    <PageLayout>
      {/* ========================= */}
      {/* HERO SECTION */}
      {/* ========================= */}
      <section
        ref={sectionRef}
        className="
          relative
          min-h-screen
          bg-primary
          overflow-hidden
          flex
          items-start
          md:items-center
          pt-32
          md:pt-0
        "
      >
        {/* Massive Background Typography */}
        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            pointer-events-none
            select-none
          "
        >
          <h2
            className="
              text-[4rem]
              sm:text-[7rem]
              md:text-[14rem]
              xl:text-[20rem]
              leading-none
              tracking-[-0.08em]
              font-serif
              text-white/[0.04]
            "
          >
            ABOUT
          </h2>
        </div>

        {/* Vertical Line */}
        <div
          className="
            absolute
            left-6
            md:left-12
            top-0
            bottom-0
            w-px
            bg-white/10
          "
        />

        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            md:px-12
            relative
            z-10
            w-full
            pb-20
            md:pb-0
          "
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              style={{ y: textY }}
              className="lg:col-span-6"
            >
              <ScrollReveal>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-px bg-white/20" />

                  <span
                    className="
                      uppercase
                      tracking-[0.35em]
                      text-[10px]
                      md:text-xs
                      text-white/50
                    "
                  >
                    About Aanaya
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1
                  className="
                    font-serif
                    text-4xl
                    sm:text-5xl
                    md:text-8xl
                    leading-[0.95]
                    tracking-[-0.06em]
                    text-white
                    mb-10
                  "
                >
                  Crafting
                  <span className="block italic text-white/65">
                    Moments
                  </span>
                  That Matter
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p
                  className="
                    text-white/70
                    text-base
                    md:text-lg
                    leading-relaxed
                    max-w-xl
                    mb-8
                  "
                >
                  Aanaya Events was founded with a simple belief —
                  celebrations should feel emotional, immersive, and deeply
                  personal.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <p
                  className="
                    text-white/50
                    leading-relaxed
                    max-w-lg
                  "
                >
                  Blending cinematic storytelling, refined aesthetics, and
                  thoughtful event design, we create experiences that remain
                  timeless long after the celebration ends.
                </p>
              </ScrollReveal>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              style={{ y: imageY }}
              className="
                lg:col-span-5
                lg:col-start-8
                relative
                mt-10
                lg:mt-0
              "
            >
              {/* Floating Card */}
              <div
                className="
                  absolute
                  -top-6
                  -left-2
                  md:-top-8
                  md:-left-8
                  z-20
                  flex
                  items-center
                  gap-4
                  bg-white/10
                  backdrop-blur-xl
                  border
                  border-white/10
                  px-5
                  md:px-6
                  py-3
                  md:py-4
                  rounded-full
                "
              >
                <div className="w-2 h-2 rounded-full bg-white" />

                <span
                  className="
                    uppercase
                    tracking-[0.25em]
                    text-[9px]
                    md:text-[10px]
                    text-white/70
                  "
                >
                  Hyderabad Based
                </span>
              </div>

              {/* Image */}
              <div className="overflow-hidden rounded-[2rem] md:rounded-[2.5rem]">
                <PlaceholderImage
                  aspectRatio="3/4"
                  label="Founder Portrait"
                />
              </div>

              {/* Bottom Quote */}
              <div
                className="
                  absolute
                  -bottom-6
                  right-0
                  md:right-6
                  bg-white
                  text-black
                  px-6
                  md:px-8
                  py-5
                  md:py-6
                  rounded-[1.5rem]
                  md:rounded-[2rem]
                  max-w-[220px]
                  md:max-w-xs
                  z-20
                "
              >
                <p className="text-xs md:text-sm leading-relaxed text-black/70">
                  Creating celebrations rooted in elegance, emotion, and
                  timeless storytelling.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* STORY SECTION */}
      {/* ========================= */}
      <section className="py-28 md:py-40 bg-[#f5eee6]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* LEFT */}
            <div className="lg:col-span-4">
              <ScrollReveal>
                <div className="sticky top-32">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-px bg-black/20" />

                    <span
                      className="
                        uppercase
                        tracking-[0.3em]
                        text-[10px]
                        text-black/50
                      "
                    >
                      Our Story
                    </span>
                  </div>

                  <h2
                    className="
                      font-serif
                      text-4xl
                      md:text-6xl
                      leading-[0.95]
                      tracking-[-0.05em]
                      text-black
                    "
                  >
                    Designed
                    <span className="block italic text-black/60">
                      With Heart
                    </span>
                  </h2>
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-7 lg:col-start-6 space-y-10">
              {[
                "Every event we create begins with understanding the people behind it — their story, personality, culture, and vision.",
                "From intimate ceremonies to large-scale weddings, our process focuses on atmosphere, emotional detail, and thoughtful execution.",
                "Our close-knit team combines event styling, decor artistry, hospitality, and creative direction to craft celebrations that feel cinematic yet deeply personal.",
              ].map((text, i) => (
                <ScrollReveal key={i} delay={i * 120}>
                  <p
                    className="
                      text-black/70
                      text-lg
                      md:text-2xl
                      leading-relaxed
                      font-light
                    "
                  >
                    {text}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* STATS SECTION */}
      {/* ========================= */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                number: "120+",
                label: "Events Designed",
              },
              {
                number: "85+",
                label: "Happy Clients",
              },
              {
                number: "6+",
                label: "Years Experience",
              },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 120}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="
                    border-t
                    border-white/10
                    pt-10
                  "
                >
                  <h2
                    className="
                      font-serif
                      text-6xl
                      md:text-8xl
                      tracking-[-0.06em]
                      text-white
                      mb-4
                    "
                  >
                    {stat.number}
                  </h2>

                  <p
                    className="
                      uppercase
                      tracking-[0.3em]
                      text-xs
                      text-white/50
                    "
                  >
                    {stat.label}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;