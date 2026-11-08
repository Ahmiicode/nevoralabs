'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowUpRight, Sparkles, ShieldCheck } from 'lucide-react';
import { teamMembers } from '@/data/teamData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function TeamSection() {
  const router = useRouter();

  return (
    <section className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#5483B3]/10 to-[#C1E8FF]/10 dark:from-[#052659]/30 dark:to-[#5483B3]/20 blur-[140px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-[#052659]/40 border border-[#5483B3]/30 backdrop-blur-xl shadow-sm mb-5"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#5483B3] dark:text-[#C1E8FF]" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#052659] dark:text-[#C1E8FF]">
            Nevora Leadership & Experts
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#021024] dark:text-white max-w-3xl font-serif leading-[1.15]"
        >
          The Masterminds Behind{' '}
          <span className="bg-gradient-to-r from-[#052659] via-[#5483B3] to-[#7DA0CA] dark:from-[#7DA0CA] dark:via-[#5483B3] dark:to-[#C1E8FF] bg-clip-text text-transparent italic">
            Nevora Labs
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-sm sm:text-base text-[#052659]/80 dark:text-[#7DA0CA] max-w-xl leading-relaxed font-normal"
        >
          Uniting executive strategy, full-stack enterprise engineering, and autonomous AI automation.
        </motion.p>
      </div>

      {/* Team Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
      >
        {teamMembers.map((member) => (
          <motion.div
            key={member.slug}
            variants={cardVariants}
            onClick={() => router.push(`/about/${member.slug}`)}
            role="button"
            tabIndex={0}
            className="cursor-pointer group relative rounded-[2.5rem] p-6 sm:p-7 bg-white/70 dark:bg-[#052659]/20 border border-[#5483B3]/25 dark:border-[#5483B3]/20 backdrop-blur-2xl hover:border-[#5483B3] dark:hover:border-[#C1E8FF] hover:-translate-y-2.5 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-[0_10px_30px_rgba(5,38,89,0.08)] hover:shadow-[0_20px_45px_rgba(5,38,89,0.18)]"
          >
            {/* Top Hover Light Sweep Animation */}
            <div className="pointer-events-none absolute -top-32 -right-32 w-56 h-56 rounded-full bg-[#5483B3]/25 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div>
              {/* Premium Image Container with Full Display & No Clipping */}
              <div className="relative w-full h-64 sm:h-72 rounded-[2rem] overflow-hidden mb-6 bg-gradient-to-b from-[#021024]/10 to-[#021024]/30 dark:from-[#052659]/50 dark:to-[#021024]/80 border border-[#5483B3]/20 shadow-inner">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient Shadow Overlay for Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#021024]/80 via-transparent to-transparent opacity-80" />
                
                {/* Floating Role Pill Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 dark:bg-[#021024]/80 backdrop-blur-md text-[10px] font-bold tracking-widest text-[#021024] dark:text-[#C1E8FF] uppercase border border-[#5483B3]/30 shadow-sm">
                  <ShieldCheck className="w-3 h-3 text-[#5483B3] dark:text-[#C1E8FF]" />
                  <span>{member.role.split(' ')[0]}</span>
                </div>

                <span className="absolute bottom-4 left-4 right-4 text-xs font-mono font-medium text-white/90 truncate">
                  {member.specialty}
                </span>
              </div>

              {/* Name & Bio */}
              <h3 className="text-2xl font-serif font-bold text-[#021024] dark:text-white group-hover:text-[#5483B3] dark:group-hover:text-[#C1E8FF] transition-colors mb-2 tracking-tight">
                {member.name}
              </h3>

              <p className="text-xs sm:text-sm text-[#052659]/80 dark:text-[#7DA0CA] leading-relaxed mb-6 line-clamp-3 font-normal">
                {member.shortBio}
              </p>
            </div>

            {/* Bottom Interactive Footer */}
            <div className="pt-4 border-t border-[#5483B3]/15 dark:border-[#5483B3]/20 flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#5483B3] dark:text-[#7DA0CA] font-semibold">
                {member.experience}
              </span>

              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#021024] dark:text-[#C1E8FF] group-hover:translate-x-1.5 transition-transform duration-300 bg-[#5483B3]/10 dark:bg-[#021024]/60 px-3.5 py-1.5 rounded-full border border-[#5483B3]/30 shadow-sm">
                <span>View Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}