import { motion } from "framer-motion";
import { ShoppingBag, Train, Landmark, BookOpen, Plane, ChevronRight } from "lucide-react";
import { PalmTreeIcon, HouseboatIcon } from "@/components/ui/icons";
import houseboat from "@/assets/houseboat.png";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const places = [
  { icon: <ShoppingBag className="w-5 h-5 text-primary" />, name: "Lulu Mall",                    distance: "500 m" },
  { icon: <Train className="w-5 h-5 text-primary" />,       name: "Edappally Metro",               distance: "600 m" },
  { icon: <Landmark className="w-5 h-5 text-primary" />,    name: "Fort Kochi",                    distance: "10 km" },
  { icon: <BookOpen className="w-5 h-5 text-primary" />,    name: "Kerala Museum",                 distance: "2.3 km" },
  { icon: <Plane className="w-5 h-5 text-primary" />,       name: "Cochin International Airport",  distance: "20 km" },
];

export function ExploreKochi() {
  return (
    <section id="explore" className="py-24 md:py-32 px-4" style={{ backgroundColor: "#E8DCC2" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <div className="flex items-center gap-3 mb-8">
              <PalmTreeIcon className="w-8 h-8 text-primary" />
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Explore Kochi</h2>
            </div>

            <div className="space-y-1 mb-8">
              {places.map((place, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.07, ease: EASE }}
                  whileHover={{ x: 6 }}
                  className="flex items-center justify-between py-3.5 border-b border-border/50 group"
                >
                  <div className="flex items-center gap-3">
                    {place.icon}
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                      {place.name}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {place.distance}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 400 }}
              data-testid="btn-see-all-places"
              className="flex items-center gap-2 text-primary font-semibold"
            >
              See all nearby places
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.95, ease: EASE }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src={houseboat}
                alt="Traditional Kerala houseboat on serene backwaters"
                className="w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 4, 0], rotate: [0, 5, -3, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="absolute -bottom-5 -right-4 text-primary/20 pointer-events-none"
            >
              <HouseboatIcon className="w-20 h-20" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
