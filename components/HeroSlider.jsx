'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Check, Terminal, Sparkles, Workflow } from 'lucide-react';

// ==========================================
// 1. TYPEWRITER HOOK
// ==========================================
function useTypewriter(text, speed = 35, startDelay = 150) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    setDisplayedText('');
    setIsComplete(false);

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);

  return { displayedText, isComplete };
}

// ==========================================
// 2. MAGNETIC CTA BUTTON
// ==========================================
function MagneticButton({ children, href, isPrimary = false }) {
  const btnRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18 });
  const springY = useSpring(y, { stiffness: 200, damping: 18 });

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={btnRef}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full sm:w-auto inline-block"
    >
      <Link
        href={href}
        className={`group inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 w-full sm:w-auto shadow-sm active:scale-95 ${
          isPrimary
            ? 'bg-[#021024] text-[#C1E8FF] dark:bg-[#C1E8FF] dark:text-[#021024] hover:shadow-[0_8px_25px_rgba(2,16,36,0.25)] dark:hover:shadow-[0_0_25px_rgba(193,232,255,0.3)]'
            : 'bg-white/70 text-[#052659] border border-[#5483B3]/35 backdrop-blur-md dark:bg-[#052659]/40 dark:text-[#C1E8FF] dark:border-[#5483B3]/40 hover:bg-white dark:hover:bg-[#052659]/70'
        }`}
      >
        <span className="flex items-center gap-2">
          {children}
        </span>
      </Link>
    </motion.div>
  );
}

// ==========================================
// 3. MAIN HERO COMPONENT
// ==========================================
export default function NevoraHero() {
  const [terminalStep, setTerminalStep] = useState(0);

  // Typewriter hooks
  const line1 = useTypewriter("Systems that work", 40, 100);
  const line2 = useTypewriter("while you sleep.", 40, 950);
  const subtitle = useTypewriter(
    "Nevoralabs designs bespoke full-stack web platforms and autonomous n8n workflows that eliminate operational friction and scale client conversions.",
    14,
    1850
  );

  // Step ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setTerminalStep((prev) => (prev < 5 ? prev + 1 : 1));
    }, 1400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative w-full min-h-[92vh] bg-transparent flex items-center justify-center px-4 sm:px-6 lg:px-12 font-sans pt-32 sm:pt-40 pb-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center relative z-10">
        
        {/* =================================================== */}
        {/* LEFT COLUMN: Typography & CTAs                      */}
        {/* =================================================== */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Top Pill Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#5483B3]/30 bg-white/70 dark:bg-[#052659]/60 backdrop-blur-md shadow-sm mb-6 sm:mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5483B3] dark:bg-[#7DA0CA] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#052659] dark:bg-[#C1E8FF]"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-[#052659] dark:text-[#C1E8FF] uppercase">
              Web Engineering & Autonomous Pipelines
            </span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[4.6rem] xl:text-[5rem] font-serif text-[#021024] dark:text-[#C1E8FF] leading-[1.08] tracking-tight min-h-[125px] sm:min-h-[150px]">
            <span>{line1.displayedText}</span>
            {!line1.isComplete && (
              <span className="inline-block w-1 h-9 sm:h-12 bg-[#052659] dark:bg-[#C1E8FF] animate-pulse ml-1.5 align-middle" />
            )}
            <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#052659] via-[#5483B3] to-[#021024] dark:from-[#7DA0CA] dark:via-[#5483B3] dark:to-[#C1E8FF]">
              {line2.displayedText}
            </span>
            {line1.isComplete && !line2.isComplete && (
              <span className="inline-block w-1 h-9 sm:h-12 bg-[#5483B3] dark:bg-[#7DA0CA] animate-pulse ml-1.5 align-middle" />
            )}
          </h1>

          {/* Subtitle Description */}
          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-[#052659]/80 dark:text-[#7DA0CA] max-w-xl font-normal leading-relaxed min-h-[70px]">
            {subtitle.displayedText}
            {!subtitle.isComplete && line2.isComplete && (
              <span className="inline-block w-0.5 h-4 bg-[#052659] dark:bg-[#7DA0CA] animate-pulse ml-1 align-baseline" />
            )}
          </p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <MagneticButton href="/contact" isPrimary={true}>
              <span>Start a project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticButton>

            <MagneticButton href="#services" isPrimary={false}>
              <span>Explore services</span>
            </MagneticButton>
          </motion.div>

        </div>

        {/* =================================================== */}
        {/* RIGHT COLUMN: Streamlined Terminal & Docked Stack   */}
        {/* =================================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 w-full flex flex-col items-center lg:items-end"
        >
          {/* Main Glassmorphic Terminal Card */}
          <div className="w-full max-w-md bg-[#021024]/95 dark:bg-[#021024]/90 backdrop-blur-xl rounded-[2rem] p-6 sm:p-7 text-left shadow-[0_20px_50px_rgba(5,38,89,0.28)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.6)] border border-[#5483B3]/35 font-mono text-xs sm:text-sm relative overflow-hidden">
            
            {/* Terminal Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#5483B3]/25">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7DA0CA]/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#5483B3]/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#052659]/80"></span>
                <span className="text-[11px] font-mono text-[#7DA0CA] ml-2 tracking-wider">nevora://agent.run</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-500/25">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>ONLINE</span>
              </div>
            </div>

            {/* Terminal Live Output Cycle */}
            <div className="space-y-3 min-h-[160px] text-[#C1E8FF]">
              <div className="text-[#C1E8FF] font-medium flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#5483B3]" />
                <span>$ nevora sync --pipeline autonomous</span>
              </div>

              {terminalStep >= 1 && (
                <motion.div initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2 text-[#7DA0CA]">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Webhook trigger connected (200 OK)</span>
                </motion.div>
              )}

              {terminalStep >= 2 && (
                <motion.div initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2 text-[#7DA0CA]/80">
                  <span className="animate-spin text-[#C1E8FF]">↻</span>
                  <span>AI Agent qualifying high-intent lead...</span>
                </motion.div>
              )}

              {terminalStep >= 3 && (
                <motion.div initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} className="pl-5 text-xs text-[#C1E8FF]/90 font-mono bg-[#052659]/40 py-1.5 px-3 rounded-lg border border-[#5483B3]/25">
                  score: <span className="text-emerald-400 font-bold">96/100</span> • routing: <span className="text-[#7DA0CA]">Instant Handover</span>
                </motion.div>
              )}

              {terminalStep >= 4 && (
                <motion.div initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2 text-[#7DA0CA]">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>PostgreSQL state synced & Slack alert sent</span>
                </motion.div>
              )}

              {terminalStep >= 5 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-1 flex items-center justify-between text-[11px] text-[#7DA0CA]/70 border-t border-white/5">
                  <span>Latency: 0.38s</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> System Autopilot Active
                  </span>
                </motion.div>
              )}
            </div>

            {/* Docked Integration Stack Footer (No messy scattered badges) */}
            <div className="mt-5 pt-4 border-t border-[#5483B3]/20 flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#7DA0CA] uppercase tracking-wider">
                Integrated Stack
              </span>
              <div className="flex items-center gap-1.5">
                {['n8n', 'Next.js', 'OpenAI', 'Supabase'].map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-white/10 text-[#C1E8FF] border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}