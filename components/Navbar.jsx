'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll event listener to change navbar appearance on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update Logo to point to #hero instead of / to enable smooth scrolling
  const navLinks = [
    { name: "Expertise", href: "#expertise" },
    { name: "Selected Works", href: "#works" },
    { name: "Process", href: "#process" },
    { name: "Agency", href: "#about" },
  ];

  return (
    <>
      {/* ========================================= */}
      {/* MAIN DESKTOP HEADER */}
      {/* ========================================= */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
        } px-6 md:px-12`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          
          {/* Logo - Changed href to #hero */}
          <Link href="#hero" className="group flex items-center gap-2 z-50">
            <div className="flex h-8 w-8 items-center justify-center bg-black text-white font-black text-lg group-hover:bg-[#D4AF37] transition-colors duration-300">
              N
            </div>
            <span className="text-xl font-black tracking-tighter text-black uppercase">
              Nevora <span className="text-black/60">Labs</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <Link 
                key={index} 
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-black hover:text-[#D4AF37] transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-6 z-50">
            <Link 
              href="#contact"
              className="hidden md:flex items-center gap-2 px-6 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37] transition-colors duration-300"
            >
              Book a Call <ArrowUpRight className="w-4 h-4" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="block md:hidden p-2 text-black hover:text-[#D4AF37] transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* ========================================= */}
      {/* MOBILE FULL-SCREEN MENU */}
      {/* ========================================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-30 flex flex-col bg-black px-6 py-24 md:hidden"
          >
            <div className="flex flex-col gap-8 mt-10">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-black tracking-tighter text-white hover:text-[#D4AF37] transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-10"
              >
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center gap-3 border border-[#D4AF37] text-[#D4AF37] px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-[#D4AF37] hover:text-black transition-colors duration-300"
                >
                  Start a Project <ArrowUpRight className="w-5 h-5" />
                </Link>
              </motion.div>
              
              {/* Minimal contact info in mobile menu */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-auto border-t border-white/20 pt-8"
              >
                <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2">Email Us</p>
                <a href="mailto:hello@nevoralabs.online" className="text-white text-sm hover:text-[#D4AF37]">hello@nevoralabs.online</a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}