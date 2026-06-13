import { motion } from "framer-motion";
import welcome1 from "@/assets/welcome-1.png";
import welcome2 from "@/assets/welcome-2.png";
import welcome3 from "@/assets/welcome-3.png";
import { LeafIcon } from "@/components/ui/icons";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36, filter: "blur(3px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.85, delay, ease: EASE },
});

export function WelcomeSection() {
  return (
    <section id="rooms" className="py-24 md:py-32 px-4 max-w-7xl mx-auto relative overflow-visible">
      <div className="grid md:grid-cols-2 gap-14 md:gap-24 items-center">
        {/* Left text */}
        <div className="relative">
          <motion.div
            animate={{ rotate: [-30, -22, -32, -30], y: [0, -8, 4, 0] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            className="absolute -top-10 -left-6 text-primary/15 pointer-events-none"
          >
            <LeafIcon className="w-24 h-24" />
          </motion.div>

          <motion.p {...fadeUp(0)} className="font-cormorant italic text-xl text-primary mb-1">
            Welcome to
          </motion.p>
          <motion.h2 {...fadeUp(0.1)} className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
            Palm Grove<br />Service Villa
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            style={{ transformOrigin: "left" }}
            className="w-16 h-0.5 bg-primary mb-6"
          />
          <motion.p {...fadeUp(0.3)} className="text-base md:text-lg leading-relaxed text-foreground/75 mb-8">
            We are a family-run villa offering a peaceful and comfortable stay surrounded by lush tropical greenery. Just minutes from the city's best attractions, yet tucked away in a calm and relaxing environment.
          </motion.p>
          <motion.p {...fadeUp(0.45)} className="font-cormorant italic text-2xl text-primary">
            Come, stay with us and feel at home. ♡
          </motion.p>

          <motion.div
            animate={{ rotate: [45, 55, 38, 45], y: [0, 10, -5, 0] }}
            transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 1.5 }}
            className="absolute -bottom-6 right-0 text-primary/10 pointer-events-none"
          >
            <LeafIcon className="w-16 h-16" />
          </motion.div>
        </div>

        {/* Right images */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.95, delay: 0.15, ease: EASE }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { src: welcome1, alt: "Lush tropical garden pathway", cls: "col-span-2 h-56 md:h-72" },
            { src: welcome2, alt: "Traditional Kerala dining area",    cls: "h-40 md:h-52" },
            { src: welcome3, alt: "Cozy bedroom with warm lighting",   cls: "h-40 md:h-52" },
          ].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={`${img.cls} rounded-2xl overflow-hidden shadow-md group`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
