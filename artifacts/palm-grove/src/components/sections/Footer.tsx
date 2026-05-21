import { PalmTreeIcon } from "@/components/ui/icons";
import { FaInstagram, FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";

function KeralaHouseIllustration() {
  return (
    <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M60 120 L60 70 L100 40 L140 70 L140 120 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none"/>
      <path d="M45 75 L100 38 L155 75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <rect x="82" y="90" width="16" height="30" stroke="currentColor" strokeWidth="1.5" fill="none" rx="1"/>
      <rect x="68" y="80" width="14" height="14" stroke="currentColor" strokeWidth="1.5" fill="none" rx="1"/>
      <rect x="118" y="80" width="14" height="14" stroke="currentColor" strokeWidth="1.5" fill="none" rx="1"/>
      <path d="M20 120 C20 120 18 105 22 100 C24 97 28 100 26 105" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M22 100 C16 92 8 90 4 84" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M22 100 C28 93 28 85 32 82" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M22 100 C22 95 24 88 20 84" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M178 120 C178 120 176 105 180 100 C182 97 186 100 184 105" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M180 100 C174 92 166 90 162 84" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M180 100 C186 93 186 85 190 82" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="0" y1="120" x2="200" y2="120" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#3E6B4F" }} className="text-white/90 pt-16 pb-8 px-4 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-64 h-48 opacity-15 pointer-events-none">
        <KeralaHouseIllustration />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <PalmTreeIcon className="w-7 h-7 text-white" />
              <div>
                <p className="font-serif font-bold text-white text-sm leading-tight">PALM GROVE</p>
                <p className="font-serif text-white/80 text-xs">SERVICE VILLA</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              A peaceful Kerala home in the heart of Kochi. Stay close to everything, yet away in nature.
            </p>
            <div className="flex gap-3">
              {[FaInstagram, FaFacebook, FaWhatsapp, FaYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  data-testid={`link-social-${i}`}
                  className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-white mb-4 text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Rooms", "Gallery", "Experiences", "Explore Kochi", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(" ", "")}`} className="text-white/60 hover:text-white text-sm transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-white mb-4 text-sm tracking-wider uppercase">Amenities</h4>
            <ul className="space-y-2">
              {["Free WiFi", "Free Parking", "Family Rooms", "Room Service", "24-hour Front Desk", "Air Conditioning"].map((a) => (
                <li key={a} className="text-white/60 text-sm">{a}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-white mb-4 text-sm tracking-wider uppercase">Contact</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Edappally, Kochi, Kerala – 682024</li>
              <li>600m from Edappally Metro</li>
              <li>+91 94470 12345</li>
              <li>palmgroveservicevilla@gmail.com</li>
              <li>Mon – Sun: 24 Hours</li>
            </ul>
          </div>
        </div>

        <div className="relative text-center mb-6">
          <p className="font-cormorant italic text-3xl md:text-4xl text-white/80">
            We can't wait to welcome you!
          </p>
        </div>

        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-white/40 text-xs">
          <p>2024 Palm Grove Service Villa. All rights reserved.</p>
          <p>Made with love in Kochi</p>
        </div>
      </div>
    </footer>
  );
}
