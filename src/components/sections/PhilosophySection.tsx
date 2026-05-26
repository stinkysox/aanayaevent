import ScrollReveal from "@/components/ScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ShimmerImage } from "@/components/ui/ShimmerImage";

const PhilosophySection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // smoother + less aggressive movement
  const imageY = useTransform(scrollYProgress, [0, 1], [80, -60]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -20]);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        py-24
        md:py-32
        lg:py-40
        bg-[#f5eee6]
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 relative z-10">
        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            style={{ y: textY }}
            className="lg:col-span-5"
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
                  Our Philosophy
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2
                className="
                  font-serif
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-[5.5rem]
                  leading-[0.95]
                  tracking-[-0.05em]
                  text-black
                  mb-8
                "
              >
                Curated
                <span className="block italic text-black/60">
                  By Distinction
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
                  mb-6
                  max-w-lg
                "
              >
                Great design is felt long before it is noticed. We approach every 
                celebration as an artistic composition, balancing architectural precision 
                with the unique emotional frequency of our clients.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p
                className="
                  text-black/55
                  leading-relaxed
                  max-w-md
                  text-sm
                  md:text-base
                "
              >
                We strip away the temporary trends to build environments that resonate deeply, 
                transforming fleeting moments into permanent, beautiful memories.
              </p>
            </ScrollReveal>
          </motion.div>

          {/* Right Image Container */}
          <motion.div
            style={{ y: imageY }}
            className="
              lg:col-span-6
              lg:col-start-7
              relative
              flex
              flex-col
              gap-5
            "
          >
            {/* Main Image - Directly styled and rendered without extra bg div */}
            <ShimmerImage
              src="https://i.postimg.cc/tCJsH459/1-3.jpg"
              alt="Aanaya Events Editorial Wedding"
              className="
                w-full
                aspect-[4/5]
                object-cover
                object-center
                rounded-[2rem]
                md:rounded-[2.5rem]
              "
            />

            {/* Bottom Floating Text */}
            <div
              className="
                self-end
                bg-black
                text-white
                px-5
                md:px-8
                py-5
                rounded-[1.5rem]
                md:rounded-[2rem]
                max-w-[260px]
                md:max-w-[320px]
                shadow-2xl
                -mt-10
                md:-mt-16
                relative
                z-20
              "
            >
              <p className="text-sm leading-relaxed text-white/80">
                Bringing fine art sensibilities and precise execution 
                together in absolute balance.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Values */}
        <div className="mt-24 md:mt-32 lg:mt-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                number: "01",
                title: "Personal",
                desc: "Every celebration is shaped around emotion, connection, and meaningful storytelling.",
              },
              {
                number: "02",
                title: "Atmospheric",
                desc: "Designing immersive spaces filled with warmth, elegance, and cinematic beauty.",
              },
              {
                number: "03",
                title: "Intentional",
                desc: "Every detail is approached thoughtfully to create a seamless and refined experience.",
              },
              {
                number: "04",
                title: "Timeless",
                desc: "Blending modern aesthetics with enduring elegance that never feels temporary.",
              },
            ].map((item, i) => (
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