import { motion } from "framer-motion";
import { Star, MapPin, Train, ShoppingBag } from "lucide-react";
import { LotusIcon } from "@/components/ui/icons";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const items = [
  { icon: <Star className="w-5 h-5 text-amber-400 fill-amber-400" />, label: "Guest Rating", value: "8.3" },
  { icon: <MapPin className="w-5 h-5 text-primary" />,                label: "Location",     value: "Edappally, Kochi" },
  { icon: <Train className="w-5 h-5 text-primary" />,                 label: "Metro",        value: "600m away" },
  { icon: <ShoppingBag className="w-5 h-5 text-primary" />,           label: "Lulu Mall",    value: "500m away" },
  { icon: <LotusIcon className="w-5 h-5 text-primary" />,             label: "Wellness",     value: "Morning Yoga" },
];

export function TrustBar() {
  return (
    <div className="max-w-5xl mx-auto px-4 -mt-14 md:-mt-20 relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.85, delay: 1.3, ease: EASE }}
        className="bg-card/95 backdrop-blur-md rounded-2xl shadow-xl border border-border/60 p-5 md:p-7 flex flex-wrap justify-center gap-6 md:gap-10"
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 1.5 + i * 0.08, ease: EASE }}
            className="flex items-center gap-3"
          >
            {item.icon}
            <div>
              <p className="text-xs text-foreground/50 leading-none mb-0.5">{item.label}</p>
              <p className="text-sm font-semibold text-foreground leading-none">{item.value}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
