import { motion } from "framer-motion";
import { Leaf, Sunrise, Home, Users, MapPin, Coffee } from "lucide-react";
import { LeafIcon } from "@/components/ui/icons";

const features = [
  {
    icon: <Leaf className="w-7 h-7" />,
    title: "Tropical Garden Living",
    desc: "Surrounded by lush greenery and fresh air",
  },
  {
    icon: <Sunrise className="w-7 h-7" />,
    title: "Morning Yoga",
    desc: "Start your day with peace and mindfulness",
  },
  {
    icon: <Home className="w-7 h-7" />,
    title: "Kerala Charm",
    desc: "Traditional architecture with warm hospitality",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Family Friendly",
    desc: "Spacious rooms and a safe, cozy environment",
  },
  {
    icon: <MapPin className="w-7 h-7" />,
    title: "Prime Location",
    desc: "Close to metro, malls and major attractions",
  },
  {
    icon: <Coffee className="w-7 h-7" />,
    title: "Home Comforts",
    desc: "Feel at home with personal care",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function WhyGuestsLove() {
  return (
    <section id="experiences" className="py-20 md:py-28 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <LeafIcon className="w-6 h-6 text-primary" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Why Guests Love Staying Here
            </h2>
            <LeafIcon className="w-6 h-6 text-primary scale-x-[-1]" />
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="bg-card border border-border rounded-2xl p-5 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow duration-300"
              data-testid={`card-feature-${i}`}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                {f.icon}
              </div>
              <p className="font-serif font-semibold text-sm text-foreground leading-tight">{f.title}</p>
              <p className="text-xs text-foreground/60 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
