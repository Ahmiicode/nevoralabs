'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Sparkles, ArrowUpRight, Clock, Tag } from 'lucide-react';
import { servicesData } from '@/data/servicesData';

export default function ServiceDetailPage({ params }) {
  const resolvedParams = typeof params?.then === 'function' ? use(params) : params;
  const slug = resolvedParams?.slug;

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl font-bold text-[#021024] dark:text-white mb-4">
          Service Not Found
        </h1>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C1E8FF] text-[#021024] font-semibold text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8"
      >
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-[#052659]/30 border border-[#5483B3]/30 text-xs sm:text-sm font-medium text-[#021024] dark:text-[#C1E8FF] hover:border-[#C1E8FF]/60 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Services
        </Link>
      </motion.div>

      {/* Main Service Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative rounded-3xl p-6 sm:p-10 bg-white/60 dark:bg-[#052659]/20 border border-[#5483B3]/25 backdrop-blur-2xl overflow-hidden shadow-xl"
      >
        {/* Header Category & Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5483B3]/15 border border-[#5483B3]/30 text-xs font-semibold text-[#5483B3] dark:text-[#C1E8FF]">
            <Sparkles className="w-3.5 h-3.5" />
            {service.category}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-medium text-emerald-600 dark:text-emerald-300">
            <Clock className="w-3.5 h-3.5" />
            {service.timeline}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#021024]/10 dark:bg-[#021024]/60 border border-[#5483B3]/30 text-xs font-semibold text-[#021024] dark:text-[#C1E8FF]">
            <Tag className="w-3.5 h-3.5 text-[#5483B3]" />
            {service.pricing}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#021024] dark:text-white tracking-tight">
          {service.title}
        </h1>

        <p className="mt-3 text-base sm:text-lg text-[#052659]/90 dark:text-[#C1E8FF]/85 font-medium">
          {service.tagline}
        </p>

        {/* Full Overview Description */}
        <div className="mt-8 pt-8 border-t border-[#5483B3]/20">
          <h2 className="text-lg font-bold text-[#021024] dark:text-white mb-3">
            Service Overview & Architecture
          </h2>
          <p className="text-sm sm:text-base text-[#052659]/85 dark:text-[#C1E8FF]/80 leading-relaxed">
            {service.fullDesc || service.shortDesc}
          </p>
        </div>

        {/* Deliverables List */}
        {service.deliverables && (
          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#5483B3] dark:text-[#7DA0CA] mb-4">
              Key Deliverables & Scope
            </h3>
            <ul className="space-y-3">
              {service.deliverables.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm sm:text-base text-[#052659]/85 dark:text-[#C1E8FF]/80"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#5483B3] dark:text-[#C1E8FF] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack Chips */}
        {service.techStack && (
          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#5483B3] dark:text-[#7DA0CA] mb-4">
              Technologies & Stack Used
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {service.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl bg-[#021024]/5 dark:bg-[#021024]/60 border border-[#5483B3]/25 text-xs sm:text-sm font-mono text-[#021024] dark:text-[#C1E8FF]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-10 pt-6 border-t border-[#5483B3]/20 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-[#052659]/80 dark:text-[#C1E8FF]/70">
            Ready to initiate this architecture sprint for your brand?
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#021024] text-[#C1E8FF] dark:bg-[#C1E8FF] dark:text-[#021024] font-bold text-xs sm:text-sm hover:opacity-90 transition-all shadow-lg"
          >
            Book This Service <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}