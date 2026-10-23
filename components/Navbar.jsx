'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Agar aap homepage par hain toh section IDs (#services) chalengi, 
  // doosre page par hone se yeh automatically home par redirect karke scroll karega.
  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Process", href: "/#process" },
    { name: "Work", href: "/#works" },
    { name: "About", href: "/#about" },
  ];

  return (
    <>
      {/* MAIN HEADER */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#FAFAF8]/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-5"
        } px-5 sm:px-8`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          
          {/* Logo */}
          <Link href="/#hero" className="z-50 flex items-center">
            <span className="text-xl sm:text-2xl font-medium tracking-tight text-[#111111]">
              Nevora<span className="font-light">labs</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link 
                key={index} 
                href={link.href}
                className="text-[14px] font-medium text-gray-500 hover:text-black transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-4 z-50">
            {/* Let's Talk Button - Directs to Contact Page */}
            <Link 
              href="/contact"
              className="px-5 py-2.5 bg-black text-white text-[14px] font-medium rounded-full hover:bg-black/80 transition-all duration-300 shadow-sm"
            >
              Let's talk
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="block md:hidden p-1 text-black hover:opacity-70 transition-opacity"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE FULL-SCREEN MENU (Light Theme) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-[#FAFAF8] px-6 py-24 md:hidden"
          >
            <div className="flex flex-col gap-6 mt-12">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-serif text-[#111111] hover:opacity-70 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center w-full px-8 py-4 bg-black text-white rounded-full font-medium text-[15px] hover:bg-black/80 transition-all duration-300"
                >
                  Start a Project
                </Link>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-auto border-t border-black/10 pt-8"
              >
                <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">Email Us</p>
                <a href="mailto:hello@nevoralabs.com" className="text-black text-sm font-medium">hello@nevoralabs.com</a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}