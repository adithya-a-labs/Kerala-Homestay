import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PalmTreeIcon, KathakaliIcon, LeafIcon } from "@/components/ui/icons";
import heroImage from "@assets/829763380_1779350392783.jpg";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

function AnimatedWord({ word, delay }: { word: string; delay: number }) {
  return (
    <motion.span
      className="inline-block"
      initial={{ opacity: 0, y: 32, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {word}
    </motion.span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] pt-20 flex flex-col md:flex-row items-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #F7F3EC 0%, #EDE4D3 100%)" }}
    >
      {/* Floating decorative palm */}
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 3, -2, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-28 left-6 text-primary/15 pointer-events-none"
      >
        <PalmTreeIcon className="w-28 h-28" />
      </motion.div>

      {/* Floating Kathakali */}
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -4, 3, 0] }}
        transition={{ repeat: Infinity, duration: 11, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-36 left-1/3 text-primary/10 pointer-events-none"
      >
        <KathakaliIcon className="w-36 h-36" />
      </motion.div>

      {/* Floating leaf bottom-right */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [20, 26, 18, 20] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-8 text-primary/10 pointer-events-none hidden md:block"
      >
        <LeafIcon className="w-20 h-20" />
      </motion.div>

      {/* Left — text */}
      <motion.div
        style={{ y: textY, opacity }}
        className="w-full md:w-1/2 px-6 md:pl-20 md:pr-10 py-16 md:py-0 flex flex-col justify-center z-10"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="text-xs font-bold tracking-[0.25em] text-primary uppercase mb-5"
        >
          A home in the heart of Kochi
        </motion.p>

        <h1 className="leading-[1.05] mb-7">
          <motion.span
            className="font-cormorant italic text-primary block text-5xl md:text-6xl lg:text-7xl mb-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: EASE }}
          >
            A peaceful
          </motion.span>
          <span className="font-serif font-bold text-foreground text-5xl md:text-6xl lg:text-7xl block overflow-hidden">
            {["Kerala", "retreat"].map((w, i) => (
              <AnimatedWord key={w} word={w + (i === 0 ? "\u00A0" : "")} delay={0.45 + i * 0.14} />
            ))}
          </span>
          <motion.span
            className="font-serif font-bold text-foreground text-4xl md:text-5xl lg:text-6xl block"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75, ease: EASE }}
          >
            in the heart of Kochi
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
          className="text-base md:text-lg text-foreground/70 mb-10 max-w-md leading-relaxed"
        >
          Surrounded by greenery, filled with warmth and close to everything that matters.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05, ease: EASE }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(94,122,77,0.35)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            data-testid="btn-hero-book"
            className="inline-flex items-center justify-center px-8 h-14 rounded-full text-base font-semibold text-primary-foreground cursor-pointer"
            style={{ backgroundColor: "#5E7A4D" }}
          >
            Book Your Stay
          </motion.a>
          <motion.a
            href="#gallery"
            whileHover={{ scale: 1.04, backgroundColor: "rgba(94,122,77,0.06)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            data-testid="btn-hero-explore"
            className="inline-flex items-center justify-center px-8 h-14 rounded-full text-base font-semibold border-2 border-primary text-primary cursor-pointer"
          >
            Explore The Villa
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Right — parallax image */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative p-4 md:p-8 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3, ease: EASE }}
          className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl relative"
          style={{ willChange: "transform" }}
        >
          <motion.img
            src={heroImage}
            alt="Palm Grove Service Villa — a traditional Kerala home surrounded by lush greenery"
            style={{ y: imageY }}
            className="w-full h-[115%] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
