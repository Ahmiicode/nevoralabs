'use client';
import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, MessageSquare, Clock, ShieldCheck } from 'lucide-react';

export default function Contact() {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50, opacity: 0 });

  // Spotlight physics
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, opacity: 0 }));
  };

  // Magnetic button physics
  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);
  const springX = useSpring(btnX, { stiffness: 180, damping: 15 });
  const springY = useSpring(btnY, { stiffness: 180, damping: 15 });

  const handleBtnMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    btnX.set((e.clientX - centerX) * 0.2);
    btnY.set((e.clientY - centerY) * 0.2);
  };

  const handleBtnLeave = () => {
    btnX.set(0);
    btnY.set(0);
  };

  return (
    <section 
      id="contact" 
      className="relative w-full bg-transparent pt-8 pb-24 px-4 sm:px-6 lg:px-8 font-sans"
      aria-label="Get in touch with NevoraLabs"
    >
      <div className="w-full max-w-5xl mx-auto relative z-10">
        
        {/* Compact Frosted Glass Action Card */}
        <motion.div 
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full rounded-[2.5rem] bg-[#021024]/90 dark:bg-[#021024]/80 backdrop-blur-2xl p-8 sm:p-14 md:p-16 border border-[#5483B3]/35 shadow-[0_20px_60px_rgba(5,38,89,0.3)] dark:shadow-[0_25px_70px_rgba(0,0,0,0.6)] text-white overflow-hidden text-center flex flex-col items-center"
        >
          {/* Spotlight Radial Glow Layer */}
          <span
            className="pointer-events-none absolute inset-0 rounded-[2.5rem] transition-opacity duration-300"
            style={{
              opacity: mousePos.opacity,
              background: `radial-gradient(circle 320px at ${mousePos.x}% ${mousePos.y}%, rgba(84, 131, 179, 0.22), transparent 70%)`,
            }}
          />

          {/* Top Pill Status */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#5483B3]/40 bg-white/10 backdrop-blur-md mb-6 relative z-10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#C1E8FF] uppercase font-semibold">
              Available For New Deployments
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white tracking-tight leading-[1.08] mb-5 max-w-3xl relative z-10">
            Ready to automate <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#7DA0CA] via-[#5483B3] to-[#C1E8FF]">
              and elevate your systems?
            </span>
          </h2>

          {/* Short Punchy Subtitle */}
          <p className="text-[#C1E8FF]/80 text-sm sm:text-base font-light max-w-xl leading-relaxed mb-10 relative z-10">
            Apne project requirements aur bottlenecks share karein. Hum 24 ghante ke andar ek comprehensive architecture roadmap ke sath contact karenge.
          </p>

          {/* Direct Magnetic Push Button to /contact Page */}
          <motion.div
            style={{ x: springX, y: springY }}
            onMouseMove={handleBtnMove}
            onMouseLeave={handleBtnLeave}
            className="relative z-10"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-[#C1E8FF] text-[#021024] font-semibold text-sm sm:text-base hover:bg-white transition-all duration-300 shadow-[0_4px_30px_rgba(193,232,255,0.3)] active:scale-95"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>

          {/* Trust Metrics Footer Inside Card */}
          <div className="mt-12 pt-8 border-t border-[#5483B3]/25 w-full flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-[#7DA0CA] relative z-10">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#C1E8FF]" />
              <span>&lt; 24h Response Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Code & Pipeline Ownership</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C1E8FF]" />
              <span>Free Architecture Audit</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}