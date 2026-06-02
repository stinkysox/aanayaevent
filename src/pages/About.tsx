import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ShimmerImage } from "@/components/ui/ShimmerImage";
import { 
  Maximize2,     // Representing spatial architecture and custom layouts
  Sliders,       // Representing orchestrating complex sensory/artistic production
  ConciergeBell, // Elevating hospitality to premium concierge care
  Film,          // Moving from standard "camera" to editorial cinematography/frames
  Layers,        // Fine vendor coordination and multi-party layering
  Wind           // Ethereal execution, moving from standard sparkles to atmospheric magic
} from "lucide-react";

const services = [
  {
    icon: Maximize2,
    title: "Decor & Designing",
    desc: "Crafting atmospheric spatial designs, custom textures, and immersive visual storytelling tailored to your environment.",
  },
  {
    icon: Sliders,
    title: "Entertainment Management",
    desc: "Curating seamless artistic line-ups, high-end sensory production, and captivating structural sequencing.",
  },
  {
    icon: ConciergeBell,
    title: "Hospitality & Guest Logistics",
    desc: "Providing elevated concierge care, meticulous transport routing across devices, and intentional guest experiences.",
  },
  {
    icon: Film,
    title: "Photography & Wedding Content Creation",
    desc: "Preserving every frame with editorial-grade cinematography, documentary storytelling, and real-time digital curation.",
  },
  {
    icon: Layers,
    title: "Vendor Referrals & Coordination",
    desc: "Connecting you with premium elite artisans while orchestrating frictionless on-site management across all parties.",
  },
  {
    icon: Wind,
    title: "End-to-End Wedding Planning Services",
    desc: "A completely unified comprehensive execution from the spark of first conceptual drafting to post-celebration closure.",
  },
];

const About = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const galleryRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: galleryScroll } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -60]);

  // Distinct parallax relative movements for the complex visual grid
  const gridYSlow = useTransform(galleryScroll, [0, 1], [30, -40]);
  const gridYFast = useTransform(galleryScroll, [0, 1], [90, -100]);
  const gridYMid = useTransform(galleryScroll, [0, 1], [50, -60]);

  return (
    <PageLayout>
      {/* HERO SECTION */}
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
                  <span
                    className="
                      uppercase
                      tracking-[0.35em]
                      text-[10px]
                      md:text-xs
                      text-white/50
                    "
                  >
                    Founder’s Story
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
                  Designing
                  <span className="block italic text-white/65">
                    Stories With Soul
                  </span>
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
                  I’m Neha Singh, founder of Aanaya Events and a storyteller at
                  heart. Long before I ever imagined planning weddings, I found
                  joy in creating things with intention, like styling spaces,
                  crafting by hand, and turning fleeting ideas into something
                  meaningful.
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
                  My years at Google taught me structure and precision, while my
                  background in fashion and art gave me the freedom to explore
                  beauty through emotion, texture, colour, and atmosphere. In
                  weddings, I discovered the perfect intersection of creativity
                  and feeling, where every detail holds meaning and every
                  celebration becomes deeply personal.
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
              {/* Image Container only */}
              <div className="overflow-hidden rounded-[2rem] md:rounded-[2.5rem]">
                <ShimmerImage
                  src="https://i.postimg.cc/bNrq8Dhg/profile-pic-2.png"
                  alt="Neha Singh Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="py-28 md:py-40 bg-[#f5eee6]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* LEFT */}
            <div className="lg:col-span-4">
              <ScrollReveal>
                <div className="sticky top-32">
                  <div className="flex items-center gap-4 mb-8">
                    <span
                      className="
                        uppercase
                        tracking-[0.3em]
                        text-[10px]
                        text-black/50
                      "
                    >
                      Our Philosophy
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
                    We Design.
                    <span className="block text-black/80">We Curate.</span>
                    <span className="block italic text-black/60">
                      We Execute.
                    </span>
                  </h2>
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-7 lg:col-start-6 space-y-10">
              <ScrollReveal>
                <p
                  className="
                    font-serif
                    italic
                    text-2xl
                    md:text-4xl
                    leading-tight
                    text-black/80
                    font-light
                    mb-6
                  "
                >
                  “Timeless Celebrations.”
                </p>
              </ScrollReveal>

              <ScrollReveal delay={120}>
                <p
                  className="
                    text-black/70
                    text-lg
                    md:text-2xl
                    leading-relaxed
                    font-light
                  "
                >
                  We believe that an exceptional celebration is drawn from a precise balance of architecture, legacy, and contemporary visual culture. At Aanaya Events, our foundational direction is built around bringing authentic structural clarity and breathless aesthetic compositions into execution. 
                </p>
              </ScrollReveal>

              <ScrollReveal delay={240}>
                <p
                  className="
                    text-black/60
                    text-base
                    md:text-lg
                    leading-relaxed
                  "
                >
                  Every micro interaction is intentionally weighted to provide frictionless operational layouts while preserving high-end tactile value. From complex material coordination to sensory atmosphere arrangement, we ensure everything lives in absolute equilibrium.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLEX LAYOUT GALLERY SECTION */}
      <section 
        ref={galleryRef} 
        className="bg-[#f5eee6] pb-32 md:pb-52 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-12 gap-4 md:gap-8 items-start">
            
            {/* Column 1 - Tall Left Parallax Image */}
            <motion.div 
              style={{ y: gridYSlow }} 
              className="col-span-6 lg:col-span-4 space-y-8"
            >
              <ScrollReveal>
                <div className="overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] bg-black/5 group relative aspect-[3/4]">
                  <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.6 }} className="w-full h-full">
                    <ShimmerImage
                      src="https://i.postimg.cc/15T7GM5k/2-21.jpg"
                      alt="Bespoke luxury table styling layout"
                      className="w-full h-full object-cover transition-transform duration-700"
                    />
                  </motion.div>
                </div>
              </ScrollReveal>
              <div className="hidden lg:block h-24" />
            </motion.div>

            {/* Column 2 - Central High Dynamic Offset Image */}
            <motion.div 
              style={{ y: gridYFast }} 
              className="col-span-6 lg:col-span-4 mt-12 lg:mt-0"
            >
              <ScrollReveal delay={150}>
                <div className="overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] bg-black/5 group relative aspect-[2/3] shadow-2xl shadow-black/10">
                  <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.6 }} className="w-full h-full">
                    <ShimmerImage
                      src="https://i.postimg.cc/j5CP4C6h/DSC02440.jpg"
                      alt="Luxury wedding entrance curation"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </ScrollReveal>
            </motion.div>

            {/* Column 3 - Right Layered Block with dynamic offset */}
            <motion.div 
              style={{ y: gridYMid }} 
              className="col-span-12 lg:col-span-4 space-y-6 md:space-y-12 mt-8 lg:mt-24"
            >
              <ScrollReveal delay={250}>
                <div className="overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] bg-black/5 group relative aspect-[4/3] w-11/12 lg:w-full mx-auto">
                  <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.6 }} className="w-full h-full">
                    <ShimmerImage
                      src="https://i.postimg.cc/wv3LQ351/BHARGAVI.jpg"
                      alt="Atmospheric sensory event lighting"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </ScrollReveal>
              
              {/* Context text layout accenting the grid layout */}
              <div className="hidden lg:block pl-8 max-w-xs">
                <p className="font-serif italic text-xl text-black/40 leading-normal">
                  Every asset perfectly anchored to compose striking structural balance.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-28 md:py-44 bg-[#FAF6F0] border-b border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="max-w-2xl mb-24">
            <ScrollReveal>
              <span className="uppercase tracking-[0.3em] text-[10px] md:text-xs text-black/40 block mb-6">
                Our Offerings
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-serif text-4xl md:text-6xl tracking-[-0.04em] text-black leading-tight">
                Signature Services For{" "}
                <span className="italic text-black/50">Flawless Curation</span>
              </h2>
            </ScrollReveal>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {services.map((svc, i) => {
              const IconComponent = svc.icon;
              return (
                <ScrollReveal key={svc.title} delay={i * 100}>
                  <motion.div 
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex flex-col group"
                  >
                    {/* Icon Container */}
                    <div className="w-12 h-12 rounded-full bg-[#f5eee6] flex items-center justify-center text-black/80 mb-6 transition-colors duration-500 group-hover:bg-primary group-hover:text-white">
                      <IconComponent className="w-5 h-5 stroke-[1.25]" />
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl text-black mb-3 tracking-tight">
                      {svc.title}
                    </h3>

                    {/* Description */}
                    <p className="text-black/60 text-sm leading-relaxed max-w-sm">
                      {svc.desc}
                    </p>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                number: "350+",
                label: "Celebrations Curated",
              },
              {
                number: "40+",
                label: "Couples Served",
              },
              {
                number: "3+",
                label: "Years Of Storytelling",
              },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 120}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="pt-10"
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