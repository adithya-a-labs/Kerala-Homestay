import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SiBookingdotcom, SiAirbnb } from "react-icons/si";

const platforms = [
  { name: "Booking.com", icon: <SiBookingdotcom className="w-5 h-5" />, color: "#003580", href: "#" },
  { name: "MakeMyTrip", icon: null, color: "#E74C3C", href: "#" },
  { name: "Agoda", icon: null, color: "#E91E63", href: "#" },
  { name: "Airbnb", icon: <SiAirbnb className="w-5 h-5" />, color: "#FF5A5F", href: "#" },
  { name: "Goibibo", icon: null, color: "#E91E63", href: "#" },
];

export function BookYourStay() {
  return (
    <section className="py-20 md:py-28 px-4 bg-secondary/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
            Book Your Stay
          </h2>
          <p className="text-foreground/60 mb-12 font-cormorant italic text-lg">Choose your preferred platform</p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {platforms.map((p, i) => (
              <motion.a
                key={i}
                href={p.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                data-testid={`btn-platform-${p.name.toLowerCase().replace(/\s/g, "-")}`}
                className="flex items-center gap-2 px-7 py-3.5 bg-card border border-border rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 font-semibold text-foreground"
              >
                {p.icon && <span style={{ color: p.color }}>{p.icon}</span>}
                <span style={{ color: p.color }}>{p.name}</span>
              </motion.a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://wa.me/919447012345"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              data-testid="btn-whatsapp-inquiry"
              className="flex items-center justify-center gap-3 px-10 py-4 rounded-full text-white font-semibold text-base shadow-md hover:shadow-lg transition-all duration-200"
              style={{ backgroundColor: "#25D366" }}
            >
              <FaWhatsapp className="w-5 h-5" />
              WhatsApp Inquiry
            </motion.a>
            <motion.a
              href="tel:+919447012345"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              data-testid="btn-call-now"
              className="flex items-center justify-center gap-3 px-10 py-4 rounded-full border-2 border-primary text-primary font-semibold text-base hover:bg-primary hover:text-primary-foreground transition-all duration-200"
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
