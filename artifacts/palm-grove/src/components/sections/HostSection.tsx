import { motion } from "framer-motion";
import hostImage from "@/assets/host.png";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export function HostSection() {
  return (
    <section className="py-24 md:py-32 px-4" style={{ backgroundColor: "#EDE4D3" }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
              className="text-foreground/55 font-medium mb-1"
            >
              Hosted by
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.12, ease: EASE }}
              className="font-cormorant italic text-4xl md:text-5xl text-foreground mb-6"
            >
              Francis Xavier
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ transformOrigin: "left" }}
              className="w-12 h-0.5 bg-primary mb-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.28, ease: EASE }}
              className="text-base md:text-lg leading-relaxed text-foreground/75 mb-8"
            >
              We love meeting new people and sharing our little piece of Kerala with you. From morning yoga to local tips, we're here to make your stay comfortable and memorable.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.38, ease: EASE }}
              className="font-cormorant italic text-2xl text-primary"
            >
              With warmth, Francis Xavier ♡
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.88, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: EASE }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="relative"
            >
              <div className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-secondary shadow-2xl">
                <img
                  src={hostImage}
                  alt="Francis Xavier, host of Palm Grove Service Villa"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                animate={{ scale: [1, 1.12, 1], rotate: [0, 8, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl shadow-lg"
                style={{ backgroundColor: "#5E7A4D" }}
              >
                ♡
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
