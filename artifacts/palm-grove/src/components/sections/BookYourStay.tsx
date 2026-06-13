import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SiBookingdotcom, SiAirbnb } from "react-icons/si";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const platforms = [
  { name: "Booking.com", icon: <SiBookingdotcom className="w-5 h-5" />, color: "#003580" },
  { name: "MakeMyTrip", icon: null,                                      color: "#D4201B" },
  { name: "Agoda",      icon: null,                                      color: "#5392CC" },
  { name: "Airbnb",     icon: <SiAirbnb className="w-5 h-5" />,         color: "#FF5A5F" },
  { name: "Goibibo",    icon: null,                                      color: "#E43B37" },
];

export function BookYourStay() {
  return (
    <section className="py-24 md:py-32 px-4" style={{ backgroundColor: "#F7F3EC" }}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">Book Your Stay</h2>
          <p className="font-cormorant italic text-xl text-foreground/60 mb-14">Choose your preferred platform</p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {platforms.map((p, i) => (
              <motion.a
                key={i}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
                whileHover={{ y: -5, scale: 1.05, boxShadow: "0 12px 30px rgba(0,0,0,0.12)" }}
                whileTap={{ scale: 0.97 }}
                data-testid={`btn-platform-${p.name.toLowerCase().replace(/\s/g, "-")}`}
                className="flex items-center gap-2 px-7 py-3.5 bg-card border border-border rounded-2xl shadow-sm font-semibold"
              >
                {p.icon && <span style={{ color: p.color }}>{p.icon}</span>}
                <span style={{ color: p.color }}>{p.name}</span>
              </motion.a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://wa.me/919447012345"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 32px rgba(37,211,102,0.4)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 20 }}
              data-testid="btn-whatsapp-inquiry"
              className="flex items-center justify-center gap-3 px-12 py-4 rounded-full text-white font-semibold text-base shadow-md"
              style={{ backgroundColor: "#25D366" }}
            >
              <FaWhatsapp className="w-5 h-5" />
              WhatsApp Inquiry
            </motion.a>
            <motion.a
              href="tel:+919447012345"
              whileHover={{ scale: 1.05, backgroundColor: "#5E7A4D", color: "#F7F3EC" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 20 }}
              data-testid="btn-call-now"
              className="flex items-center justify-center gap-3 px-12 py-4 rounded-full border-2 border-primary text-primary font-semibold text-base"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
