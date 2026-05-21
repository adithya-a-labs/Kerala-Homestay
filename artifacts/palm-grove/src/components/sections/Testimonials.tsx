import { motion } from "framer-motion";
import { Star, ChevronRight } from "lucide-react";
import { LeafIcon } from "@/components/ui/icons";

const reviews = [
  {
    text: "Excellent location! Very close to Lulu Mall and Metro. The garden is beautiful and peaceful.",
    author: "Neha",
    country: "India",
  },
  {
    text: "Peaceful stay, great hospitality and clean rooms. Perfect for families.",
    author: "Arun",
    country: "India",
  },
  {
    text: "Loved the greenery and the warm welcome. Felt like staying at a friend's home.",
    author: "Priya",
    country: "India",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <LeafIcon className="w-6 h-6 text-primary" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              What Our Guests Say
            </h2>
            <LeafIcon className="w-6 h-6 text-primary scale-x-[-1]" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 relative"
              data-testid={`card-review-${i}`}
            >
              <div
                className="absolute top-5 left-6 font-serif text-7xl leading-none select-none"
                style={{ color: "#5E7A4D", opacity: 0.15 }}
              >
                "
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6 relative z-10 pt-4">
                {r.text}
              </p>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="font-semibold text-foreground text-sm">
                — {r.author}, {r.country}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button
            data-testid="btn-read-all-reviews"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
          >
            Read all reviews on Google
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
