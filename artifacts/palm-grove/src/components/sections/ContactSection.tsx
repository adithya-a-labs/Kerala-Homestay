import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { LeafIcon } from "@/components/ui/icons";
import { useState } from "react";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const contactItems = [
  { icon: <MapPin className="w-5 h-5 text-primary" />,  label: "Address", value: "Edappally, Kochi, Kerala – 682024\n600m from Edappally Metro" },
  { icon: <Phone className="w-5 h-5 text-primary" />,   label: "Phone",   value: "+91 94470 12345",                   href: "tel:+919447012345" },
  { icon: <Mail className="w-5 h-5 text-primary" />,    label: "Email",   value: "palmgroveservicevilla@gmail.com",    href: "mailto:palmgroveservicevilla@gmail.com" },
  { icon: <Clock className="w-5 h-5 text-primary" />,   label: "Hours",   value: "Mon – Sun: 24 Hours" },
];

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  return (
    <section id="contact" className="py-24 md:py-32 px-4 relative overflow-hidden" style={{ backgroundColor: "#EDE4D3" }}>
      <motion.div
        animate={{ rotate: [20, 28, 16, 20], y: [0, -12, 6, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute top-10 right-10 text-primary/10 pointer-events-none"
      >
        <LeafIcon className="w-36 h-36" />
      </motion.div>
      <motion.div
        animate={{ rotate: [-30, -22, -36, -30], y: [0, 8, -5, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-10 left-10 text-primary/10 pointer-events-none"
      >
        <LeafIcon className="w-24 h-24" />
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Contact Us</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 md:gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <h3 className="font-serif font-bold text-foreground mb-8 tracking-wider uppercase text-xs">Get in Touch</h3>
            <div className="space-y-6">
              {contactItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.07, ease: EASE }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-primary text-sm hover:underline whitespace-pre-line" data-testid={`link-${item.label.toLowerCase()}`}>
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground/65 text-sm leading-relaxed whitespace-pre-line">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <h3 className="font-serif font-bold text-foreground mb-8 tracking-wider uppercase text-xs">Send Us a Message</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              {[
                { key: "name",    type: "text",  placeholder: "Your Name" },
                { key: "email",   type: "email", placeholder: "Email Address" },
                { key: "phone",   type: "tel",   placeholder: "Phone Number" },
              ].map((f) => (
                <motion.input
                  key={f.key}
                  whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(94,122,77,0.2)" }}
                  type={f.type}
                  placeholder={f.placeholder}
                  value={form[f.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  data-testid={`input-contact-${f.key}`}
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none text-sm transition-shadow duration-200"
                />
              ))}
              <motion.textarea
                whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(94,122,77,0.2)" }}
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                data-testid="input-contact-message"
                className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none text-sm resize-none transition-shadow duration-200"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(94,122,77,0.35)" }}
                whileTap={{ scale: 0.97 }}
                data-testid="btn-send-message"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-primary-foreground font-semibold transition-shadow duration-200"
                style={{ backgroundColor: "#5E7A4D" }}
              >
                <Send className="w-4 h-4" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
