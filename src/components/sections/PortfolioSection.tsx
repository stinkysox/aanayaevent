import ScrollReveal from "@/components/ScrollReveal";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { ShimmerImage } from "@/components/ui/ShimmerImage";

const stories = [
  {
    title: "Royal Crimson Wedding",
    image:
      "https://i.postimg.cc/x8bgy3mZ/vivekkrishnanphotography-122.jpg",
  },
  {
    title: "Marigold Haldi Rituals",
    image:
      "https://i.postimg.cc/QC1YrZb1/Boulder-Haldi-102.jpg",
  },
  {
    title: "Ivory Garden Soirée",
    image:
      "https://i.postimg.cc/524Jps4r/1-12.jpg",
  },
  {
    title: "Modern Reception Gala",
    image:
      "https://i.postimg.cc/cHX4MPY9/All-pics-541.jpg",
  },
];

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "0.35 start"],
  });

  /* Hero animation */
  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [1, 1, 0]
  );

  const heroScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.94]
  );

  const heroY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -80]
  );

  return (
    <section
      ref={sectionRef}
      className="
        relative
        bg-primary
        text-primary-foreground
      "
    >
      {/* ========================= */}
      {/* HERO */}
      {/* ========================= */}
      <motion.div
        style={{
          opacity: heroOpacity,
          scale: heroScale,
          y: heroY,
        }}
        className="
          sticky
          top-0
          h-screen
          flex
          items-center
          z-0
          pointer-events-none
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            md:px-12
            w-full
          "
        >
          <ScrollReveal>
            <span
              className="
                uppercase
                tracking-[0.35em]
                text-[10px]
                md:text-xs
                text-primary-foreground/40
                block
                mb-8
              "
            >
              Selected Celebrations
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2
              className="
                font-serif
                text-5xl
                sm:text-6xl
                md:text-8xl
                leading-[0.92]
                tracking-[-0.06em]
                max-w-5xl
              "
            >
              Moments
              <span className="block italic text-primary-foreground/60">
                Captured,
              </span>
              Stories Told
            </h2>
          </ScrollReveal>
        </div>
      </motion.div>

      {/* ========================= */}
      {/* CONTENT */}
      {/* ========================= */}
      <div
        className="
          relative
          z-20
          bg-primary
          pt-[20vh]
          pb-32
        "
      >
        <div
          className="
            max-w-6xl
            mx-auto
            px-6
            md:px-12
            space-y-40
          "
        >
          {stories.map((story, i) => {
            const imageRef =
              useRef<HTMLDivElement | null>(null);

            const { scrollYProgress } = useScroll({
              target: imageRef,
              offset: ["start end", "end start"],
            });

            const imageY = useTransform(
              scrollYProgress,
              [0, 1],
              [60, -60]
            );

            return (
              <div
                key={story.title}
                className="
                  grid
                  grid-cols-1
                  lg:grid-cols-12
                  gap-10
                  lg:gap-16
                  items-center
                "
              >
                {/* IMAGE */}
                <motion.div
                  ref={imageRef}
                  style={{ y: imageY }}
                  className={`
                    ${
                      i % 2 === 0
                        ? "lg:col-span-8"
                        : "lg:col-span-7 lg:col-start-6"
                    }
                  `}
                >
                  <div
                    className="
                      overflow-hidden
                      rounded-[2rem]
                    "
                  >
                    <ShimmerImage
                      src={story.image}
                      alt={story.title}
                      className={`
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        hover:scale-105
                        ${
                          i % 2 === 0
                            ? "aspect-[16/9]"
                            : "aspect-[4/5]"
                        }
                      `}
                    />
                  </div>
                </motion.div>

                {/* TEXT */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{
                    once: true,
                    amount: 0.4,
                  }}
                  className={`
                    ${
                      i % 2 === 0
                        ? "lg:col-span-3 lg:col-start-10"
                        : "lg:col-span-4 lg:col-start-1 lg:row-start-1"
                    }
                  `}
                >
                  <h3
                    className="
                      font-serif
                      text-3xl
                      md:text-5xl
                      leading-[0.95]
                      tracking-[-0.05em]
                      mb-6
                    "
                  >
                    {story.title}
                  </h3>

                  <p
                    className="
                      text-primary-foreground/55
                      leading-relaxed
                    "
                  >
                    Thoughtfully curated celebrations blending
                    emotion, atmosphere, and timeless elegance.
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;