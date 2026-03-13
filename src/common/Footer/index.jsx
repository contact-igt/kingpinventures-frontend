import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest text-gray-600 font-body relative z-10 bg-brand-gray border-t border-gray-100">
      <span>© 2025 Kingpin Ventures — Growth Partners</span>
      <div className="flex gap-8 mt-6 md:mt-0 items-center">
        <a
          href="https://www.instagram.com/kingpinventures/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-dark hover:text-brand-lime hover:scale-125 transition-all duration-300"
        >
          <Instagram size={20} />
        </a>
        <a
          href="https://www.facebook.com/people/Kingpin-Ventures/61557394517942/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-dark hover:text-brand-lime hover:scale-125 transition-all duration-300"
        >
          <Facebook size={20} />
        </a>
        <a
          href="https://www.youtube.com/@kingpinventures"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-dark hover:text-brand-lime hover:scale-125 transition-all duration-300"
        >
          <Youtube size={20} />
        </a>
        <a
          href="https://www.linkedin.com/company/kingpin-ventures/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-dark hover:text-brand-lime hover:scale-125 transition-all duration-300"
        >
          <Linkedin size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
