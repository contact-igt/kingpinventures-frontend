import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu when route changes
  useEffect(() => {
    const handleRouteChange = () => setIsMenuOpen(false);
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  const isActive = (path) => router.pathname === path;

  return (
    <>
      <nav className="fixed w-full z-50 mix-blend-normal bg-brand-warm/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/assets/kingpin_logo.png"
              alt="Kingpin Ventures"
              className="h-10 w-auto object-contain  transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12 text-xs font-bold tracking-[0.2em] uppercase font-body text-[#111827]">
            <Link
              href="/services"
              className={`relative hover:text-[#111827] transition-colors ${isActive('/services') ? 'text-[#111827]' : ''}`}
            >
              Services
            </Link>
            <Link
              href="/clients"
              className={`relative hover:text-[#111827] transition-colors ${isActive('/clients') ? 'text-[#111827]' : ''}`}
            >
              Clients & Industries
            </Link>
            <Link
              href="/global"
              className={`relative hover:text-[#111827] transition-colors ${isActive('/global') ? 'text-[#111827]' : ''}`}
            >
              Where We Are
            </Link>
            <Link
              href="/about"
              className={`relative hover:text-[#111827] transition-colors ${isActive('/about') ? 'text-[#111827]' : ''}`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`relative hover:text-[#111827] transition-colors ${isActive('/contact') ? 'text-[#111827]' : ''}`}
            >
              Contact
            </Link>
            <a
              href="https://whatsnexus.kingpinventures.in/"
              target="_blank"
              className="group btn-premium !px-7 !py-3.5 !text-[11px] transform transition-all hover:scale-105 active:scale-95 shadow-sm hover:shadow-brand-lime/20"
            >
              <span className="relative text-xs z-10 text-white group-hover:text-brand-dark">WhatsNexus</span>
            </a>
          </div>

          <button onClick={toggleMenu} className="lg:hidden text-[#111827] hover:text-[#333333] transition-colors p-2 rounded-lg">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-brand-warm z-40 flex items-center justify-center transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col text-center gap-8 font-display text-4xl uppercase font-bold">
          <Link href="/services" className="hover:text-[#111827]">Services</Link>
          <Link href="/clients" className="hover:text-[#111827]">Clients & Industries</Link>
          <Link href="/global" className="hover:text-[#111827]">Where We Are</Link>
          <Link href="/about" className="hover:text-[#111827]">About</Link>
          <Link href="/contact" className="hover:text-[#111827]">Contact</Link>
          <a
            href="https://whatsnexus.kingpinventures.in/"
            target="_blank"
            className="group btn-premium !text-sm !px-12 !py-5 mt-4"
          >
            <span className="relative z-10 text-white group-hover:text-brand-dark transition-colors duration-300">WhatsNexus</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
