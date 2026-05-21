import { motion } from "framer-motion";
import { ShoppingBag, Train, Landmark, BookOpen, Plane, ChevronRight } from "lucide-react";
import { PalmTreeIcon, HouseboatIcon } from "@/components/ui/icons";
import houseboat from "@/assets/houseboat.png";

const places = [
  { icon: <ShoppingBag className="w-5 h-5 text-primary" />, name: "Lulu Mall", distance: "500 m" },
  { icon: <Train className="w-5 h-5 text-primary" />, name: "Edappally Metro", distance: "600 m" },
  { icon: <Landmark className="w-5 h-5 text-primary" />, name: "Fort Kochi", distance: "10 km" },
  { icon: <BookOpen className="w-5 h-5 text-primary" />, name: "Kerala Museum", distance: "2.3 km" },
  { icon: <Plane className="w-5 h-5 text-primary" />, name: "Cochin International Airport", distance: "20 km" },
];

export function ExploreKochi() {
  return (
    <section id="explore" className="py-20 md:py-28 px-4" style={{ backgroundColor: "#EDE4D3" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <PalmTreeIcon className="w-8 h-8 text-primary" />
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Explore Kochi
              </h2>
            </div>
            <div className="space-y-4 mb-8">
              {places.map((place, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-border/60 group">
                  <div className="flex items-center gap-3">
                    {place.icon}
                    <span className="font-medium text-foreground">{place.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {place.distance}
                  </span>
                </div>
              ))}
            </div>
            <button
              data-testid="btn-see-all-places"
              className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
            >
              See all nearby places
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={houseboat}
                alt="Traditional Kerala houseboat on serene backwaters"
                className="w-full h-80 md:h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 text-primary/20">
              <HouseboatIcon className="w-24 h-24" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
