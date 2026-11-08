'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Briefcase, CheckCircle2, Sparkles, ArrowUpRight, ShieldCheck, Code2 } from 'lucide-react';
import { teamMembers } from "@/data/teamData";

export default function TeamMemberDetailPage({ params }) {
  const resolvedParams = typeof params?.then === 'function' ? use(params) : params;
  const slug = resolvedParams?.slug;

  const member = teamMembers.find((m) => m.slug === slug);

  if (!member) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl font-serif font-bold text-[#021024] dark:text-white mb-4">
          Team Member Not Found
        </h1>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#021024] text-[#C1E8FF] dark:bg-[#C1E8FF] dark:text-[#021024] font-bold text-sm shadow-lg"
        >
          <ArrowLeft className="w-4 h-4" /> Back to About
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative overflow-hidden">
      {/* Background Glow Elements */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#5483B3]/15 dark:bg-[#052659]/30 blur-[120px] pointer-events-none rounded-full" />

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8 relative z-10"
      >
        <Link
          href="/about"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-[#052659]/30 border border-[#5483B3]/30 text-xs sm:text-sm font-medium text-[#021024] dark:text-[#C1E8FF] hover:border-[#C1E8FF]/60 backdrop-blur-xl transition-all shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Team
        </Link>
      </motion.div>

      {/* Main Profile Header Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative rounded-[2.5rem] p-6 sm:p-10 bg-white/75 dark:bg-[#052659]/25 border border-[#5483B3]/25 dark:border-[#5483B3]/20 backdrop-blur-2xl overflow-hidden shadow-2xl z-10"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 sm:gap-10">
          
          {/* Stunning Large Portrait Box */}
          <div className="relative w-48 h-56 sm:w-60 sm:h-72 rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#021024]/10 to-[#021024]/30 dark:from-[#052659]/50 dark:to-[#021024]/80 border border-[#5483B3]/30 shrink-0 shadow-xl">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#021024]/70 via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-3 left-3 right-3 text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-white/90 dark:bg-[#021024]/90 backdrop-blur-md text-[10px] font-bold tracking-widest text-[#021024] dark:text-[#C1E8FF] uppercase border border-[#5483B3]/30">
                {member.experience}
              </span>
            </div>
          </div>

          {/* Info Section */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5483B3]/15 border border-[#5483B3]/30 text-xs font-semibold text-[#5483B3] dark:text-[#C1E8FF] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{member.role}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#021024] dark:text-white tracking-tight">
              {member.name}
            </h1>

            <p className="mt-2 text-sm sm:text-base font-medium text-[#5483B3] dark:text-[#C1E8FF]">
              {member.tagline}
            </p>

            <div className="mt-4 flex flex-wrap justify-center md:justify-start items-center gap-4 text-xs sm:text-sm text-[#052659]/80 dark:text-[#7DA0CA]">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#5483B3] dark:text-[#C1E8FF]" />
                {member.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-[#5483B3] dark:text-[#C1E8FF]" />
                {member.availability}
              </span>
            </div>
          </div>
        </div>

        {/* Full Biography */}
        <div className="mt-10 pt-8 border-t border-[#5483B3]/20">
          <h2 className="text-xl font-serif font-bold text-[#021024] dark:text-white mb-3">
            About & Architecture Focus
          </h2>
          <p className="text-sm sm:text-base text-[#052659]/85 dark:text-[#C1E8FF]/80 leading-relaxed font-normal">
            {member.fullBio}
          </p>
        </div>

        {/* Core Tech Stack & Skills */}
        <div className="mt-8">
          <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#5483B3] dark:text-[#7DA0CA] mb-4">
            Core Stack & Capabilities
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {member.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-xl bg-[#021024]/5 dark:bg-[#021024]/60 border border-[#5483B3]/25 text-xs sm:text-sm font-mono text-[#021024] dark:text-[#C1E8FF]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="mt-8">
          <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#5483B3] dark:text-[#7DA0CA] mb-4">
            Key Engineering Highlights
          </h3>
          <ul className="space-y-3">
            {member.highlights.map((item, idx) => (
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

        {/* Featured Projects / Case Studies if available */}
        {member.featuredProjects && member.featuredProjects.length > 0 && (
          <div className="mt-10 pt-8 border-t border-[#5483B3]/20">
            <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#5483B3] dark:text-[#7DA0CA] mb-6">
              Featured Deliverables & Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {member.featuredProjects.map((proj, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white/50 dark:bg-[#021024]/40 border border-[#5483B3]/20">
                  <div className="flex items-center gap-2 mb-2 text-[#5483B3] dark:text-[#C1E8FF]">
                    <Code2 className="w-4 h-4" />
                    <span className="text-xs font-mono uppercase tracking-wider">{proj.tech}</span>
                  </div>
                  <h4 className="text-base font-bold text-[#021024] dark:text-white mb-1">
                    {proj.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#052659]/80 dark:text-[#7DA0CA] leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA & Social Links */}
        <div className="mt-12 pt-6 border-t border-[#5483B3]/20 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {member.socials?.github && member.socials.github !== '#' && (
              <a
                href={member.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#021024]/10 dark:bg-[#021024]/70 border border-[#5483B3]/30 text-xs font-semibold text-[#021024] dark:text-[#C1E8FF] hover:border-[#C1E8FF] transition-all inline-flex items-center gap-1.5"
              >
                GitHub <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            {member.socials?.instagram && member.socials.instagram !== '#' && (
              <a
                href={member.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#021024]/10 dark:bg-[#021024]/70 border border-[#5483B3]/30 text-xs font-semibold text-[#021024] dark:text-[#C1E8FF] hover:border-[#C1E8FF] transition-all inline-flex items-center gap-1.5"
              >
                Instagram <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#021024] text-[#C1E8FF] dark:bg-[#C1E8FF] dark:text-[#021024] font-bold text-xs sm:text-sm hover:opacity-90 transition-all shadow-lg"
          >
            Work with {member.name.split(' ')[0]} <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}