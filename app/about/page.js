'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import TeamSection from '@/components/TeamSection';
import { ShieldCheck, Zap, Globe, Cpu, ArrowRight, Sparkles } from 'lucide-react';

const values = [
  {
    icon: Cpu,
    title: 'AI-First Architecture',
    description: 'We embed intelligent automation and custom AI workflows directly into modern web stacks to multiply operational speed.',
  },
  {
    icon: Zap,
    title: 'Zero-Bloat Performance',
    description: 'Built on Next.js App Router, edge caching, and clean codebases that guarantee sub-second load times and 99+ Core Web Vitals.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Reliability',
    description: 'Scalable database schemas, secure API layers, and production-grade deployments engineered to handle real-world traffic.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 sm:pt-36 pb-20 font-sans">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#5483B3]/30 bg-white/70 dark:bg-[#052659]/60 backdrop-blur-md shadow-sm mb-6"
        >
          <Globe className="w-3.5 h-3.5 text-[#5483B3] dark:text-[#C1E8FF]" />
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#052659] dark:text-[#C1E8FF]">
            About Nevora Labs
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#021024] dark:text-[#C1E8FF] tracking-tight max-w-4xl mx-auto leading-[1.1]"
        >
          Engineering the Future of{' '}
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#052659] via-[#5483B3] to-[#021024] dark:from-[#7DA0CA] dark:via-[#5483B3] dark:to-[#C1E8FF]">
            Web & AI Systems
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-sm sm:text-base text-[#052659]/80 dark:text-[#7DA0CA] max-w-2xl mx-auto leading-relaxed"
        >
          Nevora Labs is a digital architecture and AI automation agency. We partner with ambitious founders and global brands to build scalable web applications, high-converting interfaces, and autonomous workflows.
        </motion.p>
      </section>

      {/* Core Values / Pillars Cards */}
      <section className="mt-16 sm:mt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-[2rem] p-6 sm:p-8 bg-white/70 dark:bg-[#052659]/25 border border-[#5483B3]/25 dark:border-[#5483B3]/20 backdrop-blur-xl hover:border-[#5483B3]/60 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#021024] text-[#C1E8FF] dark:bg-[#C1E8FF] dark:text-[#021024] flex items-center justify-center mb-5 shadow-md">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-serif text-[#021024] dark:text-white font-bold">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#052659]/80 dark:text-[#7DA0CA] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Team Section Component */}
      <TeamSection />

      {/* Bottom CTA Banner */}
      <section className="mt-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="rounded-[2.5rem] p-8 sm:p-12 bg-gradient-to-br from-[#052659]/80 via-[#021024] to-[#052659]/90 border border-[#5483B3]/30 backdrop-blur-2xl text-center shadow-2xl relative overflow-hidden">
          <div className="pointer-events-none absolute -top-24 -right-24 w-56 h-56 rounded-full bg-[#5483B3]/30 blur-3xl" />
          
          <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Ready to build your next digital flagship?
          </h3>
          <p className="mt-3 text-xs sm:text-sm text-[#C1E8FF]/80 max-w-xl mx-auto leading-relaxed">
            Let’s turn your product vision into a high-speed, scalable reality with Nevora Labs.
          </p>
          <div className="mt-7 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C1E8FF] text-[#021024] font-bold text-xs sm:text-sm hover:bg-white transition-all shadow-lg"
            >
              Start a Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}