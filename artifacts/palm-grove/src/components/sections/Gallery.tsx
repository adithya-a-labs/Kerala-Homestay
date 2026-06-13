import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { LeafIcon } from "@/components/ui/icons";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const images = [
  { src: gallery1, alt: "Garden stone pathway with tropical greenery" },
  { src: gallery2, alt: "Shaded outdoor seating area" },
  { src: gallery3, alt: "Lush green corridor between traditional buildings" },
  { src: gallery4, alt: "Cozy warm-lit interior sitting room" },
  { src: gallery5, alt: "Evening garden with warm lighting" },
];

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 px-4">
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
              A glimpse of our home
            </h2>
            <LeafIcon className="w-6 h-6 text-primary scale-x-[-1]" />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.93, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.09, ease: EASE }}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => setSelected(i)}
              className={`overflow-hidden rounded-2xl shadow-md group cursor-zoom-in ${i === 0 ? "col-span-2 md:col-span-1 row-span-2" : ""}`}
              data-testid={`img-gallery-${i}`}
            >
              <div className="w-full h-full overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out ${i === 0 ? "h-72 md:h-[25rem]" : "h-48 md:h-56"}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 8px 28px rgba(94,122,77,0.22)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            data-testid="btn-view-gallery"
            className="inline-flex items-center gap-2 px-10 py-3.5 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            View Full Gallery
            <LeafIcon className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.button
              className="absolute top-5 right-5 text-white/80 hover:text-white z-10"
              whileHover={{ scale: 1.2 }}
              onClick={() => setSelected(null)}
            >
              <X className="w-8 h-8" />
            </motion.button>
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
