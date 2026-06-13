import { motion } from "framer-motion";
import { Leaf, Sunrise, Home, Users, MapPin, Coffee } from "lucide-react";
import { LeafIcon } from "@/components/ui/icons";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const features = [
  { icon: <Leaf className="w-7 h-7" />,   title: "Tropical Garden Living", desc: "Surrounded by lush greenery and fresh air" },
  { icon: <Sunrise className="w-7 h-7" />, title: "Morning Yoga",            desc: "Start your day with peace and mindfulness" },
  { icon: <Home className="w-7 h-7" />,    title: "Kerala Charm",             desc: "Traditional architecture with warm hospitality" },
  { icon: <Users className="w-7 h-7" />,   title: "Family Friendly",          desc: "Spacious rooms and a safe, cozy environment" },
  { icon: <MapPin className="w-7 h-7" />,  title: "Prime Location",           desc: "Close to metro, malls and major attractions" },
  { icon: <Coffee className="w-7 h-7" />,  title: "Home Comforts",            desc: "Feel at home with personal care" },
];

export function WhyGuestsLove() {
  return (
    <section id="experiences" className="py-24 md:py-32 px-4" style={{ backgroundColor: "#EDE4D3" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="flex items-center justify-center gap-3"
          >
            <LeafIcon className="w-6 h-6 text-primary" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Why Guests Love Staying Here
            </h2>
            <LeafIcon className="w-6 h-6 text-primary scale-x-[-1]" />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.08, ease: EASE }}
              whileHover={{ y: -8, scale: 1.04, boxShadow: "0 16px 40px rgba(94,122,77,0.18)" }}
              className="bg-card border border-border rounded-2xl p-5 flex flex-col items-center text-center gap-3 cursor-default"
              data-testid={`card-feature-${i}`}
            >
              <motion.div
                whileHover={{ rotate: [0, -8, 8, 0], scale: 1.15 }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary"
              >
                {f.icon}
              </motion.div>
              <p className="font-serif font-semibold text-sm text-foreground leading-tight">{f.title}</p>
              <p className="text-xs text-foreground/55 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
