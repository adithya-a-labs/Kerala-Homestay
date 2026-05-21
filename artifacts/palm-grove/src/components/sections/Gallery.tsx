import { motion } from "framer-motion";
import { LeafIcon } from "@/components/ui/icons";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";

const images = [
  { src: gallery1, alt: "Garden stone pathway with tropical greenery" },
  { src: gallery2, alt: "Shaded outdoor seating area" },
  { src: gallery3, alt: "Lush green corridor between traditional buildings" },
  { src: gallery4, alt: "Cozy warm-lit interior sitting room" },
  { src: gallery5, alt: "Evening garden with warm lighting" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <LeafIcon className="w-6 h-6 text-primary" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              A glimpse of our home
            </h2>
            <LeafIcon className="w-6 h-6 text-primary scale-x-[-1]" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`overflow-hidden rounded-2xl shadow-md group ${i === 0 ? "col-span-2 md:col-span-1 row-span-2" : ""}`}
              data-testid={`img-gallery-${i}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${i === 0 ? "h-72 md:h-80" : "h-48 md:h-52"}`}
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            data-testid="btn-view-gallery"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View Full Gallery
            <LeafIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
