'use client';

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

// ==========================================
// BUBBLE NAV LINK COMPONENT (Hover & Ripple)
// ==========================================
function BubbleNavLink({ href, children, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { x, y, id: Date.now() };

    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);

    if (onClick) onClick();
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative px-4 py-2 rounded-full text-[13.5px] font-medium transition-colors duration-300 text-[#052659] hover:text-[#021024] dark:text-[#7DA0CA] dark:hover:text-[#C1E8FF]"
    >
      {/* Floating Pill Bubble Background on Hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.span
            layoutId="navBubbleHover"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.88 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="absolute inset-0 rounded-full bg-[#5483B3]/20 dark:bg-[#5483B3]/30 border border-[#5483B3]/35 dark:border-[#7DA0CA]/35 -z-10 shadow-sm"
          />
        )}
      </AnimatePresence>

      {/* Ripple Bubble Burst on Click */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="pointer-events-none absolute rounded-full bg-[#5483B3]/40 dark:bg-[#C1E8FF]/30 animate-ping -z-10"
          style={{
            top: ripple.y - 12,
            left: ripple.x - 12,
            width: 24,
            height: 24,
          }}
        />
      ))}

      <span className="relative z-10">{children}</span>
    </Link>
  );
}

// ==========================================
// MAGNETIC BUBBLE BUTTON ("Let's talk")
// ==========================================
function MagneticBubbleButton({ children, href }) {
  const btnRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 15 });
  const springY = useSpring(y, { stiffness: 220, damping: 15 });
  const [bubbleGlow, setBubbleGlow] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set((e.clientX - centerX) * 0.22);
    y.set((e.clientY - centerY) * 0.22);

    const posX = ((e.clientX - rect.left) / rect.width) * 100;
    const posY = ((e.clientY - rect.top) / rect.height) * 100;
    setBubbleGlow({ x: posX, y: posY, opacity: 1 });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setBubbleGlow((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={btnRef}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={href}
        className="group relative overflow-hidden inline-flex items-center justify-center px-6 py-2.5 rounded-full text-[13.5px] font-semibold transition-all duration-300 active:scale-95 bg-[#021024] text-[#C1E8FF] shadow-[0_4px_16px_rgba(2,16,36,0.2)] dark:bg-[#C1E8FF] dark:text-[#021024] dark:shadow-[0_0_20px_rgba(193,232,255,0.25)] border border-transparent"
      >
        <span
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-full"
          style={{
            opacity: bubbleGlow.opacity,
            background: `radial-gradient(circle 50px at ${bubbleGlow.x}% ${bubbleGlow.y}%, rgba(125,160,202,0.45), transparent)`,
          }}
        />
        <span className="relative z-10">{children}</span>
      </Link>
    </motion.div>
  );
}

// ==========================================
// MAIN NAVBAR
// ==========================================
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Process link removed — Home, Services, Work, and Contact
  const navLinks = [
    { name: "Home", href: "/#hero" },
    { name: "Services", href: "/#services" },
    { name: "Work", href: "/#works" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-5 sm:px-8 ${
          isScrolled
            ? "bg-white/65 dark:bg-[#021024]/80 backdrop-blur-xl py-3.5 shadow-[0_4px_25px_rgba(5,38,89,0.08)] border-b border-[#5483B3]/25 dark:border-[#5483B3]/20"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          
          {/* Logo / Wordmark */}
          <Link href="/#hero" className="z-50 flex items-center group">
            <span className="text-xl sm:text-2xl font-serif tracking-tight text-[#021024] dark:text-[#C1E8FF] transition-colors duration-300 font-medium">
              Nevora
              <span className="font-light text-[#5483B3] dark:text-[#7DA0CA] transition-colors italic">
                labs
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white/40 dark:bg-[#052659]/35 border border-[#5483B3]/25 dark:border-[#5483B3]/20 backdrop-blur-xl shadow-sm">
            {navLinks.map((link) => (
              <BubbleNavLink key={link.name} href={link.href}>
                {link.name}
              </BubbleNavLink>
            ))}
          </nav>

          {/* Right Action & Controls */}
          <div className="flex items-center gap-3 sm:gap-4 z-50">
            {/* Theme Toggle Button */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 sm:p-2.5 rounded-full border border-[#5483B3]/30 bg-white/60 dark:bg-[#052659]/70 backdrop-blur-md text-[#021024] dark:text-[#C1E8FF] hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-[#C1E8FF]" />
                ) : (
                  <Moon className="w-4 h-4 text-[#021024]" />
                )}
              </button>
            )}

            {/* Let's Talk Magnetic CTA */}
            <div className="hidden sm:block">
              <MagneticBubbleButton href="/contact">
                Let's talk
              </MagneticBubbleButton>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="block md:hidden p-1.5 text-[#021024] dark:text-[#C1E8FF] hover:opacity-75 transition-opacity"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-[#EDF7FF] dark:bg-[#021024] px-6 py-24 md:hidden transition-colors duration-300"
          >
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + index * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-serif text-[#021024] dark:text-[#C1E8FF] hover:opacity-75 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-6"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center w-full px-8 py-3.5 bg-[#021024] text-[#C1E8FF] dark:bg-[#C1E8FF] dark:text-[#021024] rounded-full font-semibold text-[15px] shadow-md transition-all active:scale-95"
                >
                  Start a Project
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="mt-auto border-t border-[#5483B3]/25 pt-6"
              >
                <p className="text-xs font-mono font-semibold text-[#5483B3] dark:text-[#7DA0CA] uppercase tracking-widest mb-1.5">
                  Direct Line
                </p>
                <a
                  href="mailto:hello@nevoralabs.com"
                  className="text-[#021024] dark:text-[#C1E8FF] text-sm font-medium hover:underline"
                >
                  hello@nevoralabs.com
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}