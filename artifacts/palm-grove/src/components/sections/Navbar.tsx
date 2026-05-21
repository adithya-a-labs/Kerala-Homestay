import React from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PalmTreeIcon } from "@/components/ui/icons";
import { FaWhatsapp } from "react-icons/fa";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Rooms", href: "#rooms" },
    { name: "Gallery", href: "#gallery" },
    { name: "Experiences", href: "#experiences" },
    { name: "Explore Kochi", href: "#explore" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <PalmTreeIcon className="w-8 h-8 text-primary" />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-foreground text-sm tracking-wider leading-tight">PALM GROVE / SERVICE VILLA</span>
              <span className="font-cormorant italic text-muted-foreground text-xs">A home in the heart of Kochi</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button className="bg-[#25D366] hover:bg-[#1DA851] text-white rounded-full flex items-center gap-2">
              <FaWhatsapp className="w-4 h-4" />
              WhatsApp Inquiry
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-[#25D366] hover:bg-[#1DA851] text-white rounded-full flex items-center gap-2 w-full justify-center mt-4">
              <FaWhatsapp className="w-4 h-4" />
              WhatsApp Inquiry
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
