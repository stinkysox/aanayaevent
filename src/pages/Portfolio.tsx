import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { ShimmerImage } from "@/components/ui/ShimmerImage";
import { galleryItems, categories } from "@/data/portfolio";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Wedding");

  const filteredItems = galleryItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <PageLayout>
      {/* ========================= */}
      {/* HERO SECTION */}
      {/* ========================= */}
      <section
        className="
          relative
          min-h-[85vh]
          bg-primary
          overflow-hidden
          flex
          items-start
          md:items-center
          pt-36
          md:pt-0
        "
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            
            {/* LEFT - TEXT HEADER */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className="
                      uppercase
                      tracking-[0.35em]
                      text-[10px]
                      md:text-xs
                      text-white/40
                    "
                  >
                    Curated Moments
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
                    mb-8
                  "
                >
                  Moments
                  <span className="block italic text-white/65">
                    Captured,
                  </span>
                  Stories Told
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p
                  className="
                    text-white/60
                    leading-relaxed
                    max-w-xl
                    text-base
                    md:text-lg
                    font-light
                  "
                >
                  A curated archive of weddings, celebrations, and emotional 
                  milestones designed with elegance, atmosphere, and cinematic storytelling.
                </p>
              </ScrollReveal>
            </div>

            {/* RIGHT - PREMIUM FILTER CARD */}
            <div className="lg:col-span-5 xl:col-span-4 lg:col-start-8 xl:col-start-9 w-full">
              <ScrollReveal delay={300}>
                <div
                  className="
                    bg-white/[0.03]
                    border
                    border-white/10
                    backdrop-blur-xl
                    rounded-[2.5rem]
                    p-8
                    md:p-10
                  "
                >
                  <span
                    className="
                      uppercase
                      tracking-[0.3em]
                      text-[10px]
                      text-white/40
                      block
                      mb-6
                    "
                  >
                    Featured Collections
                  </span>

                  <div className="space-y-4">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className="
                          w-full
                          flex
                          items-center
                          justify-between
                          group
                          py-2
                          text-left
                        "
                      >
                        <span
                          className={`
                            font-serif
                            text-2xl
                            transition-all
                            duration-300
                            tracking-tight
                            ${
                              activeCategory === category
                                ? "text-white scale-[1.02] origin-left"
                                : "text-white/35 group-hover:text-white/70"
                            }
                          `}
                        >
                          {category}
                        </span>

                        {activeCategory === category && (
                          <motion.div
                            layoutId="gallery-active"
                            className="w-12 h-px bg-white"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* GALLERY GRID */}
      {/* ========================= */}
      <section className="py-28 md:py-36 bg-[#f5eee6]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* INTRO BAR */}
          <div
            className="
              flex
              flex-col
              md:flex-row
              md:items-end
              justify-between
              gap-6
              mb-20
            "
          >
            <ScrollReveal>
              <div>
                <span
                  className="
                    uppercase
                    tracking-[0.3em]
                    text-[10px]
                    text-black/40
                    block
                    mb-3
                  "
                >
                  Selected Works
                </span>

                <h2
                  className="
                    font-serif
                    text-4xl
                    md:text-6xl
                    leading-[1]
                    tracking-[-0.05em]
                    text-black
                  "
                >
                  {activeCategory}
                  <span className="block italic text-black/40 font-light mt-1">
                    Collection
                  </span>
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p
                className="
                  text-black/50
                  max-w-md
                  leading-relaxed
                  text-sm
                  md:text-base
                "
              >
                Thoughtfully curated celebrations captured through raw emotion, 
                intentional atmosphere, and timeless visual framing.
              </p>
            </ScrollReveal>
          </div>

          {/* MASONRY DISPLAY */}
          <motion.div
            layout
            className="
              columns-1
              sm:columns-2
              lg:columns-3
              gap-6
              space-y-6
            "
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, i) => (
                <motion.div
                  key={item.image}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.215, 0.61, 0.355, 1],
                    delay: i * 0.04,
                  }}
                  className="
                    break-inside-avoid
                    group
                    relative
                    cursor-pointer
                    overflow-hidden
                    rounded-[2rem]
                    bg-black/5
                  "
                >
                  {/* IMAGE WRAPPER */}
                  <div className="relative overflow-hidden w-full h-full">
                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
                    >
                      <ShimmerImage
                        src={item.image}
                        alt={item.title}
                        className={`
                          w-full
                          object-cover
                          ${
                            i % 3 === 0
                              ? "aspect-[3/4]"
                              : i % 2 === 0
                              ? "aspect-square"
                              : "aspect-[4/5]"
                          }
                        `}
                      />
                    </motion.div>

                    {/* VIGNETTE OVERLAY */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/70
                        via-black/20
                        to-transparent
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-500
                        ease-out
                        flex
                        items-end
                        p-8
                      "
                    >
                      {/* TEXT TRANSLATION */}
                      <div
                        className="
                          translate-y-4
                          group-hover:translate-y-0
                          transition-transform
                          duration-500
                          ease-out
                        "
                      >
                        <h3
                          className="
                            font-serif
                            text-2xl
                            text-white
                            tracking-tight
                          "
                        >
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
        </div>
      </section>
    </PageLayout>
  );
};

export default Portfolio;