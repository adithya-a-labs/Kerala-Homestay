import { motion } from "framer-motion";
import welcome1 from "@/assets/welcome-1.png";
import welcome2 from "@/assets/welcome-2.png";
import welcome3 from "@/assets/welcome-3.png";
import { LeafIcon } from "@/components/ui/icons";

export function WelcomeSection() {
  return (
    <section id="rooms" className="py-20 md:py-28 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -top-8 -left-6 text-primary/20">
            <LeafIcon className="w-20 h-20 rotate-[-30deg]" />
          </div>
          <p className="font-cormorant italic text-xl text-primary mb-1">Welcome to</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Palm Grove<br />Service Villa
          </h2>
          <div className="w-16 h-0.5 bg-primary mb-6" />
          <p className="text-base md:text-lg leading-relaxed text-foreground/80 mb-8">
            We are a family-run villa offering a peaceful and comfortable stay surrounded by lush tropical greenery. Just minutes from the city's best attractions, yet tucked away in a calm and relaxing environment.
          </p>
          <p className="font-cormorant italic text-2xl text-primary">
            Come, stay with us and feel at home. ♡
          </p>
          <div className="absolute -bottom-6 right-0 text-primary/15">
            <LeafIcon className="w-16 h-16 rotate-[45deg]" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="col-span-2 rounded-2xl overflow-hidden h-52 md:h-64 shadow-md">
            <img
              src={welcome1}
              alt="Lush tropical garden pathway at Palm Grove"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-2xl overflow-hidden h-40 md:h-48 shadow-md">
            <img
              src={welcome2}
              alt="Traditional Kerala wooden dining area"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-2xl overflow-hidden h-40 md:h-48 shadow-md">
            <img
              src={welcome3}
              alt="Cozy bedroom with warm Kerala lighting"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
