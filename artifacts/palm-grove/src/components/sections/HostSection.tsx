import { motion } from "framer-motion";
import hostImage from "@/assets/host.png";

export function HostSection() {
  return (
    <section className="py-20 md:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-foreground/60 font-medium mb-1">Hosted by</p>
            <h2 className="font-cormorant italic text-4xl md:text-5xl text-foreground mb-6">
              Francis Xavier
            </h2>
            <div className="w-12 h-0.5 bg-primary mb-6" />
            <p className="text-base md:text-lg leading-relaxed text-foreground/80 mb-8">
              We love meeting new people and sharing our little piece of Kerala with you. From morning yoga to local tips, we're here to make your stay comfortable and memorable.
            </p>
            <p className="font-cormorant italic text-2xl text-primary">
              With warmth, Francis Xavier ♡
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-secondary shadow-xl">
                <img
                  src={hostImage}
                  alt="Francis Xavier, host of Palm Grove Service Villa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl shadow-md"
                style={{ backgroundColor: "#5E7A4D" }}
              >
                ♡
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
