import { motion } from "framer-motion";
import { Star, ChevronRight } from "lucide-react";
import { LeafIcon } from "@/components/ui/icons";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const reviews = [
  { text: "Excellent location! Very close to Lulu Mall and Metro. The garden is beautiful and peaceful.",      author: "Neha",  country: "India" },
  { text: "Peaceful stay, great hospitality and clean rooms. Perfect for families.",                           author: "Arun",  country: "India" },
  { text: "Loved the greenery and the warm welcome. Felt like staying at a friend's home.",                    author: "Priya", country: "India" },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-4 bg-background">
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
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">What Our Guests Say</h2>
            <LeafIcon className="w-6 h-6 text-primary scale-x-[-1]" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
              whileHover={{ y: -8, boxShadow: "0 20px 48px rgba(94,122,77,0.15)" }}
              className="bg-card border border-border rounded-2xl p-7 md:p-9 shadow-sm relative overflow-hidden cursor-default"
              data-testid={`card-review-${i}`}
            >
              {/* Quote mark */}
              <motion.div
                animate={{ opacity: [0.12, 0.2, 0.12] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
                className="absolute top-4 left-6 font-serif text-8xl leading-none select-none text-primary"
              >
                "
              </motion.div>
              <p className="text-foreground/80 leading-relaxed mb-6 relative z-10 pt-5">{r.text}</p>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="font-semibold text-foreground text-sm">— {r.author}, {r.country}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.button
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400 }}
            data-testid="btn-read-all-reviews"
            className="inline-flex items-center gap-2 text-primary font-semibold"
          >
            Read all reviews on Google
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
