'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { projectsData } from '@/data/projectsData';

export default function ProjectDetailPage({ params }) {
  // Unwrap params for Next.js 15+ compatibility
  const resolvedParams = typeof params?.then === 'function' ? use(params) : params;
  const slug = resolvedParams?.slug;

  // Find the project matching the slug ID
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl font-serif font-bold text-[#021024] dark:text-white mb-4">
          Project Case Study Not Found
        </h1>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#021024] text-[#C1E8FF] dark:bg-[#C1E8FF] dark:text-[#021024] font-bold text-sm shadow-lg"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Work
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative overflow-hidden">
      {/* Back Button */}
      <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-[#052659]/30 border border-[#5483B3]/30 text-xs sm:text-sm font-medium text-[#021024] dark:text-[#C1E8FF] hover:border-[#C1E8FF]/60 backdrop-blur-xl transition-all shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Projects
        </Link>
      </motion.div>

      {/* Main Case Study Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[2.5rem] p-6 sm:p-10 bg-white/75 dark:bg-[#052659]/25 border border-[#5483B3]/25 dark:border-[#5483B3]/20 backdrop-blur-2xl shadow-2xl overflow-hidden"
      >
        {/* Category & Title */}
        <div className="mb-6">
          <span className="px-3.5 py-1 rounded-full bg-[#5483B3]/15 border border-[#5483B3]/30 text-xs font-semibold text-[#5483B3] dark:text-[#C1E8FF] inline-block mb-4">
            {project.category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#021024] dark:text-white tracking-tight leading-tight">
            {project.title}
          </h1>
          <p className="mt-2 text-base sm:text-lg text-[#5483B3] dark:text-[#7DA0CA] font-medium">
            {project.tagline}
          </p>
        </div>

        {/* Project Meta Info Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-[#021024]/5 dark:bg-[#021024]/40 border border-[#5483B3]/20 mb-8">
          <div>
            <span className="text-[11px] font-mono text-[#5483B3] uppercase tracking-wider block">Client / Build</span>
            <span className="text-xs sm:text-sm font-bold text-[#021024] dark:text-white">{project.client}</span>
          </div>
          <div>
            <span className="text-[11px] font-mono text-[#5483B3] uppercase tracking-wider block">Timeline</span>
            <span className="text-xs sm:text-sm font-bold text-[#021024] dark:text-white">{project.timeline}</span>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <span className="text-[11px] font-mono text-[#5483B3] uppercase tracking-wider block">Status</span>
            <span className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400">{project.status}</span>
          </div>
        </div>

        {/* Featured Main Image */}
        {project.images?.[0] && (
          <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden mb-10 border border-[#5483B3]/30 shadow-xl bg-[#010915]">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          </div>
        )}

        {/* Full Overview */}
        <div className="mb-10">
          <h2 className="text-xl font-serif font-bold text-[#021024] dark:text-white mb-3">
            Project Overview & Architecture
          </h2>
          <p className="text-sm sm:text-base text-[#052659]/85 dark:text-[#C1E8FF]/80 leading-relaxed">
            {project.fullOverview}
          </p>
        </div>

        {/* Key Deliverables */}
        <div className="mb-10">
          <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#5483B3] dark:text-[#7DA0CA] mb-4">
            Key Modules & Features
          </h3>
          <ul className="space-y-3">
            {project.deliverables?.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#052659]/85 dark:text-[#C1E8FF]/80">
                <CheckCircle2 className="w-5 h-5 text-[#5483B3] dark:text-[#C1E8FF] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Used */}
        <div className="mb-10 pt-6 border-t border-[#5483B3]/20">
          <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#5483B3] dark:text-[#7DA0CA] mb-4">
            Technologies Deployed
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {project.tech?.map((t, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-xl bg-[#021024]/5 dark:bg-[#021024]/60 border border-[#5483B3]/25 text-xs sm:text-sm font-mono text-[#021024] dark:text-[#C1E8FF]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Additional Screenshots */}
        {project.images?.length > 1 && (
          <div className="mb-10 pt-6 border-t border-[#5483B3]/20">
            <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#5483B3] dark:text-[#7DA0CA] mb-4">
              System Workflows & Screenshots
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.images.slice(1).map((img, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden border border-[#5483B3]/20 h-48 sm:h-56 bg-[#010915]">
                  <img src={img} alt="Workflow Screenshot" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="pt-8 border-t border-[#5483B3]/20 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-[#052659]/80 dark:text-[#7DA0CA]">
            Want a system like this built for your business operations?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#021024] text-[#C1E8FF] dark:bg-[#C1E8FF] dark:text-[#021024] font-bold text-xs sm:text-sm hover:opacity-90 transition-all shadow-lg"
          >
            Book a Free Consultation <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}