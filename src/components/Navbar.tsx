"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b",
          scrolled 
            ? "bg-espresso/95 backdrop-blur-md border-gold/20 shadow-lg text-cream py-4" 
            : "bg-transparent border-transparent text-cream py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Camellia Spa Logo" className="h-12 md:h-16 w-auto object-contain" />
            <span className="text-xl md:text-2xl font-brand font-bold tracking-widest uppercase">
              Camellia Spa
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <Link href="/services" className="hover:text-gold transition-colors">Services</Link>
            <Link href="/contact" className="hover:text-gold transition-colors">Contact</Link>
          </nav>

          <div className="hidden md:block">
            <Link href="/contact" className="px-6 py-3 bg-gold text-espresso hover:bg-cream hover:text-espresso transition-colors text-xs font-bold uppercase tracking-widest">
              Book Appointment
            </Link>
          </div>

          <button 
            className="md:hidden text-cream"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-espresso text-cream flex flex-col"
          >
            <div className="p-6 flex justify-end">
              <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                <X className="w-8 h-8 text-cream" />
              </button>
            </div>
            
            <nav className="flex flex-col items-center justify-center flex-1 gap-12 text-3xl font-serif">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold transition-colors">Home</Link>
              <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold transition-colors">Services</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold transition-colors">Contact</Link>
              
              <Link 
                href="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 px-8 py-4 bg-gold text-espresso text-lg font-sans uppercase tracking-widest"
              >
                Book Appointment
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
