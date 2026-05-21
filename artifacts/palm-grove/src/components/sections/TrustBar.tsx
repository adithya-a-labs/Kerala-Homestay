import { motion } from "framer-motion";
import { Star, MapPin, Train, ShoppingBag } from "lucide-react";
import { LotusIcon } from "@/components/ui/icons";

export function TrustBar() {
  const items = [
    { icon: <Star className="w-5 h-5 text-accent" fill="currentColor" />, text: "8.3 Guest Rating" },
    { icon: <MapPin className="w-5 h-5 text-accent" />, text: "Edappally, Kochi" },
    { icon: <Train className="w-5 h-5 text-accent" />, text: "600m from Metro" },
    { icon: <ShoppingBag className="w-5 h-5 text-accent" />, text: "500m from Lulu Mall" },
    { icon: <LotusIcon className="w-5 h-5 text-accent" />, text: "Morning Yoga Sessions" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 -mt-16 md:-mt-24 relative z-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 flex flex-wrap justify-center gap-6 md:gap-12"
      >
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            {item.icon}
            <span className="text-sm font-medium text-foreground">{item.text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
