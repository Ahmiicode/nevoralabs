'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Mail, MessageSquare, Globe2, Sparkles, Send } from 'lucide-react';
import Link from 'next/link';

const services = [
  "Next.js & MERN",
  "n8n & AI Automation",
  "Full-Stack Web",
  "APIs & Systems"
];

const budgets = [
  "$1k - $3k",
  "$3k - $7k",
  "$7k - $15k",
  "$15k+"
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState(services[0]);
  const [selectedBudget, setSelectedBudget] = useState(budgets[1]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Magnetic Button Effect
  const btnRef = useRef(null);
  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);
  const springX = useSpring(btnX, { stiffness: 200, damping: 15 });
  const springY = useSpring(btnY, { stiffness: 200, damping: 15 });

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    btnX.set((e.clientX - centerX) * 0.18);
    btnY.set((e.clientY - centerY) * 0.18);
  };

  const handleMouseLeave = () => {
    btnX.set(0);
    btnY.set(0);
  };

  return (
    <div className="relative w-full min-h-screen bg-transparent pt-32 pb-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="w-full max-w-5xl mx-auto relative z-10">
        
        {/* Back to Home Link */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold tracking-widest text-[#5483B3] dark:text-[#7DA0CA] hover:text-[#021024] dark:hover:text-[#C1E8FF] transition-colors uppercase group"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span>Back to Home</span>
          </Link>
        </motion.div>

        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#5483B3]/30 bg-white/70 dark:bg-[#052659]/60 backdrop-blur-md shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#052659] dark:text-[#C1E8FF]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#052659] dark:text-[#C1E8FF] uppercase">
              Start A Project
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#021024] dark:text-[#C1E8FF] tracking-tight leading-[1.08] mb-5">
            Let's build something <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#052659] via-[#5483B3] to-[#021024] dark:from-[#7DA0CA] dark:via-[#5483B3] dark:to-[#C1E8FF]">
              exceptional together.
            </span>
          </h1>

          <p className="text-[#052659]/80 dark:text-[#7DA0CA] text-base sm:text-lg font-normal max-w-xl leading-relaxed">
            Fill out your project specifications below. Our technical lead reviews all submissions and replies within 24 hours with an actionable roadmap.
          </p>
        </motion.div>

        {/* Contact Container (Form + Direct Info) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Direct Contact Info (Slides in from Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 flex flex-col gap-6 bg-white/75 dark:bg-[#052659]/40 backdrop-blur-xl rounded-[2.2rem] p-7 sm:p-8 border border-[#5483B3]/25 dark:border-[#5483B3]/25 shadow-[0_12px_40px_rgba(5,38,89,0.08)] dark:shadow-[0_15px_45px_rgba(2,16,36,0.5)]"
          >
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#5483B3] dark:text-[#7DA0CA] uppercase block mb-1">
                Direct Inquiry
              </span>
              <a 
                href="mailto:hello@nevoralabs.com" 
                className="text-base font-serif text-[#021024] dark:text-[#C1E8FF] hover:underline flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#5483B3] dark:text-[#7DA0CA]" />
                <span>hello@nevoralabs.com</span>
              </a>
            </div>

            <div className="pt-4 border-t border-[#5483B3]/15">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#5483B3] dark:text-[#7DA0CA] uppercase block mb-1">
                Priority Communication
              </span>
              <a 
                href="https://wa.me/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-base font-serif text-[#021024] dark:text-[#C1E8FF] hover:underline flex items-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4 text-[#5483B3] dark:text-[#7DA0CA]" />
                <span>WhatsApp Dedicated Line</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#7DA0CA]" />
              </a>
            </div>

            <div className="pt-4 border-t border-[#5483B3]/15">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#5483B3] dark:text-[#7DA0CA] uppercase block mb-1">
                Operational Reach
              </span>
              <div className="flex items-center gap-2 text-xs sm:text-[13px] text-[#052659]/80 dark:text-[#7DA0CA] mt-1 font-normal">
                <Globe2 className="w-4 h-4 text-[#5483B3] dark:text-[#7DA0CA] shrink-0" />
                <span>UK • US • Pakistan • Operating Globally</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#5483B3]/10 dark:bg-[#021024]/60 border border-[#5483B3]/20 mt-2">
              <span className="text-[11px] font-mono text-[#052659] dark:text-[#C1E8FF] font-semibold block mb-0.5">
                ⚡ 24h Guarantee
              </span>
              <span className="text-xs text-[#052659]/75 dark:text-[#7DA0CA] leading-relaxed block">
                Direct access to architecture review without intermediate sales reps.
              </span>
            </div>
          </motion.div>

          {/* Right: The Interactive Form (Slides in from Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 bg-white/85 dark:bg-[#052659]/60 backdrop-blur-xl rounded-[2.2rem] p-7 sm:p-10 md:p-12 border border-[#5483B3]/30 dark:border-[#7DA0CA]/35 shadow-[0_15px_50px_rgba(5,38,89,0.1)] dark:shadow-[0_20px_55px_rgba(2,16,36,0.6)]"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="py-14 text-center flex flex-col items-center justify-center gap-3"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-2"
                  >
                    <CheckCircle2 className="w-9 h-9" />
                  </motion.div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#021024] dark:text-[#C1E8FF]">
                    Message Dispatched
                  </h3>
                  <p className="text-[#052659]/80 dark:text-[#7DA0CA] text-sm max-w-sm mb-6 font-normal leading-relaxed">
                    Thank you, <span className="font-semibold text-[#021024] dark:text-[#C1E8FF]">{formData.name || 'there'}</span>. Your requirements have reached our engineering desk. We will respond within 24 hours.
                  </p>
                  <button 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="px-6 py-2.5 bg-[#021024] text-[#C1E8FF] dark:bg-[#C1E8FF] dark:text-[#021024] text-xs font-semibold rounded-full hover:scale-105 transition-all shadow-sm"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit} 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col gap-6"
                >
                  {/* Service Selection */}
                  <div>
                    <label className="text-[11px] font-mono font-semibold text-[#5483B3] dark:text-[#7DA0CA] uppercase tracking-wider block mb-2">
                      1. Required Discipline
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setSelectedService(item)}
                          className={`relative px-4 py-2 rounded-xl text-xs font-mono transition-colors duration-200 border ${
                            selectedService === item
                              ? 'text-[#021024] dark:text-[#021024] font-semibold border-transparent'
                              : 'text-[#052659]/80 dark:text-[#C1E8FF]/80 bg-white/40 dark:bg-[#021024]/40 border-[#5483B3]/25 hover:border-[#5483B3]/50'
                          }`}
                        >
                          {selectedService === item && (
                            <motion.span
                              layoutId="activeServiceTab"
                              className="absolute inset-0 bg-[#C1E8FF] rounded-xl -z-10 shadow-sm"
                              transition={{ type: "spring", stiffness: 350, damping: 30 }}
                            />
                          )}
                          <span>{item}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Selection */}
                  <div>
                    <label className="text-[11px] font-mono font-semibold text-[#5483B3] dark:text-[#7DA0CA] uppercase tracking-wider block mb-2">
                      2. Target Budget
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgets.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setSelectedBudget(item)}
                          className={`relative px-4 py-2 rounded-xl text-xs font-mono transition-colors duration-200 border ${
                            selectedBudget === item
                              ? 'text-[#021024] dark:text-[#021024] font-semibold border-transparent'
                              : 'text-[#052659]/80 dark:text-[#C1E8FF]/80 bg-white/40 dark:bg-[#021024]/40 border-[#5483B3]/25 hover:border-[#5483B3]/50'
                          }`}
                        >
                          {selectedBudget === item && (
                            <motion.span
                              layoutId="activeBudgetTab"
                              className="absolute inset-0 bg-[#C1E8FF] rounded-xl -z-10 shadow-sm"
                              transition={{ type: "spring", stiffness: 350, damping: 30 }}
                            />
                          )}
                          <span>{item}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Text Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-mono font-semibold text-[#5483B3] dark:text-[#7DA0CA] uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input 
                        type="text" 
                        required 
                        placeholder="John Doe" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/60 dark:bg-[#021024]/60 border border-[#5483B3]/30 rounded-xl px-4 py-3 text-sm text-[#021024] dark:text-[#C1E8FF] placeholder:text-[#5483B3]/50 dark:placeholder:text-[#7DA0CA]/50 focus:outline-none focus:border-[#5483B3] transition-colors" 
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-mono font-semibold text-[#5483B3] dark:text-[#7DA0CA] uppercase tracking-wider">
                        Work Email *
                      </label>
                      <input 
                        type="email" 
                        required 
                        placeholder="john@company.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/60 dark:bg-[#021024]/60 border border-[#5483B3]/30 rounded-xl px-4 py-3 text-sm text-[#021024] dark:text-[#C1E8FF] placeholder:text-[#5483B3]/50 dark:placeholder:text-[#7DA0CA]/50 focus:outline-none focus:border-[#5483B3] transition-colors" 
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-mono font-semibold text-[#5483B3] dark:text-[#7DA0CA] uppercase tracking-wider">
                      Project Goals & Bottlenecks *
                    </label>
                    <textarea 
                      rows={4} 
                      required 
                      placeholder="Outline your vision, architecture preferences, or current operational delays..." 
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/60 dark:bg-[#021024]/60 border border-[#5483B3]/30 rounded-xl p-4 text-sm text-[#021024] dark:text-[#C1E8FF] placeholder:text-[#5483B3]/50 dark:placeholder:text-[#7DA0CA]/50 focus:outline-none focus:border-[#5483B3] transition-colors resize-none"
                    />
                  </div>

                  {/* Magnetic Interactive Submit Button */}
                  <motion.div
                    ref={btnRef}
                    style={{ x: springX, y: springY }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="w-full sm:w-auto self-start mt-2"
                  >
                    <button 
                      type="submit" 
                      className="group w-full sm:w-auto px-8 py-3.5 bg-[#021024] text-[#C1E8FF] dark:bg-[#C1E8FF] dark:text-[#021024] text-sm font-semibold rounded-full hover:shadow-[0_8px_30px_rgba(2,16,36,0.25)] dark:hover:shadow-[0_0_30px_rgba(193,232,255,0.35)] transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
                    >
                      <span>Submit Architecture Blueprint</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </motion.div>

                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </div>
  );
}