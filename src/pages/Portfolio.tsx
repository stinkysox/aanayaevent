import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import PlaceholderImage from "@/components/PlaceholderImage";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["Wedding", "Haldi", "Reception", "Other"];

const galleryItems = [
  {
    category: "Wedding",
    title: "Royal Crimson Celebration",
    location: "Hyderabad",
  },
  {
    category: "Wedding",
    title: "Traditional South Vows",
    location: "Secunderabad",
  },
  {
    category: "Wedding",
    title: "Ivory & Gold Mandap",
    location: "Hyderabad",
  },
  {
    category: "Haldi",
    title: "Marigold Dreams",
    location: "Gachibowli",
  },
  {
    category: "Haldi",
    title: "Sun-Kissed Rituals",
    location: "Banjara Hills",
  },
  {
    category: "Reception",
    title: "Starlight Soirée",
    location: "HITEC City",
  },
  {
    category: "Reception",
    title: "Midnight Bloom",
    location: "Jubilee Hills",
  },
  {
    category: "Other",
    title: "Decor Details",
    location: "Hyderabad",
  },
  {
    category: "Other",
    title: "Bespoke Arrangements",
    location: "Hyderabad",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Wedding");

  const filteredItems = galleryItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <PageLayout>
      {/* ========================= */}
      {/* HERO */}
      {/* ========================= */}
      <section
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
              font-serif
              text-[4rem]
              sm:text-[7rem]
              md:text-[14rem]
              xl:text-[20rem]
              tracking-[-0.08em]
              leading-none
              text-white/[0.04]
            "
          >
            GALLERY
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

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
            {/* LEFT */}
            <div className="lg:col-span-7">
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
                    mb-10
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
                  "
                >
                  A curated archive of weddings, celebrations, details, and
                  emotional moments designed with elegance, atmosphere, and
                  cinematic storytelling.
                </p>
              </ScrollReveal>
            </div>

            {/* RIGHT FLOATING CARD */}
            <div className="lg:col-span-4 lg:col-start-9">
              <ScrollReveal delay={300}>
                <div
                  className="
                    bg-white/10
                    border
                    border-white/10
                    backdrop-blur-xl
                    rounded-[2rem]
                    p-8
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
                    Featured Categories
                  </span>

                  <div className="space-y-5">
                    {categories.map((category, i) => (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className="
                          w-full
                          flex
                          items-center
                          justify-between
                          group
                        "
                      >
                        <span
                          className={`
                            font-serif
                            text-2xl
                            transition-all
                            duration-300
                            ${
                              activeCategory === category
                                ? "text-white"
                                : "text-white/35 group-hover:text-white/70"
                            }
                          `}
                        >
                          {category}
                        </span>

                        {activeCategory === category && (
                          <motion.div
                            layoutId="gallery-active"
                            className="w-10 h-px bg-white"
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
      <section className="py-24 md:py-32 bg-[#f5eee6]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* TOP BAR */}
          <div
            className="
              flex
              flex-col
              md:flex-row
              md:items-end
              justify-between
              gap-8
              mb-16
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
                    mb-4
                  "
                >
                  Selected Works
                </span>

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
                  {activeCategory}
                  <span className="block italic text-black/50">
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
                "
              >
                Thoughtfully curated celebrations captured through emotion,
                atmosphere, detail, and timeless visual storytelling.
              </p>
            </ScrollReveal>
          </div>

          {/* GRID */}
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
                  key={item.title}
                  layout
                  initial={{
                    opacity: 0,
                    y: 60,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 40,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.05,
                  }}
                  className="
                    break-inside-avoid
                    group
                    cursor-pointer
                  "
                >
                  {/* IMAGE */}
                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-[2rem]
                      bg-black
                    "
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8 }}
                    >
                      <PlaceholderImage
                        aspectRatio={
                          i % 3 === 0
                            ? "3/4"
                            : i % 2 === 0
                            ? "1/1"
                            : "4/5"
                        }
                        label={item.title}
                        className="
                          bg-primary/5
                          transition-all
                          duration-700
                        "
                      />
                    </motion.div>

                    {/* Overlay */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/80
                        via-black/10
                        to-transparent
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-500
                        flex
                        items-end
                        p-8
                      "
                    >
                      <div
                        className="
                          translate-y-8
                          group-hover:translate-y-0
                          transition-transform
                          duration-500
                        "
                      >
                        <span
                          className="
                            uppercase
                            tracking-[0.3em]
                            text-[10px]
                            text-white/50
                            block
                            mb-3
                          "
                        >
                          {item.location}
                        </span>

                        <h3
                          className="
                            font-serif
                            text-2xl
                            md:text-3xl
                            text-white
                            leading-none
                            tracking-[-0.04em]
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