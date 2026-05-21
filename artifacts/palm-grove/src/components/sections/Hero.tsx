import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PalmTreeIcon, KathakaliIcon } from "@/components/ui/icons";
import heroImage from "@assets/829763380_1779350392783.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] pt-20 flex flex-col md:flex-row items-center overflow-hidden bg-gradient-to-b from-background to-secondary/30 rounded-b-[3rem] md:rounded-b-[5rem]">
      {/* Decorative SVGs */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-32 left-10 text-primary/20"
      >
        <PalmTreeIcon className="w-24 h-24" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-32 right-1/2 text-primary/20"
      >
        <KathakaliIcon className="w-32 h-32 opacity-20" />
      </motion.div>

      <div className="w-full md:w-1/2 px-6 md:pl-20 md:pr-10 py-16 md:py-0 flex flex-col justify-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">
            A home in the heart of Kochi
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-foreground leading-[1.1] mb-6">
            <span className="font-cormorant italic text-primary block mb-2">A peaceful</span>
            <span className="font-serif font-bold">Kerala retreat</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
            Surrounded by greenery, filled with warmth and close to everything that matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full text-base px-8 h-14" data-testid="btn-hero-book">
              Book Your Stay
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-base px-8 h-14 border-primary text-primary hover:bg-primary/5" data-testid="btn-hero-explore">
              Explore The Villa
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative p-4 md:p-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full h-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative"
        >
          <img 
            src={heroImage} 
            alt="Traditional Kerala villa surrounded by lush greenery" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
}
