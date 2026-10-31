'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Mail } from 'lucide-react';

// Lightweight Brand SVGs
const GithubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const XIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = {
    services: [
      { name: "Next.js & MERN Core", href: "/services" },
      { name: "AI & Autonomous Pipelines", href: "/services" },
      { name: "Cloud & Distributed Systems", href: "/services" },
      { name: "API Architecture", href: "/services" },
    ],
    company: [
      { name: "Case Studies", href: "/work" },
      { name: "Our Process", href: "/#process" },
      { name: "Start a Project", href: "/contact" },
      { name: "Engineering Terms", href: "/terms" },
    ],
    social: [
      { name: "GitHub", href: "https://github.com", icon: GithubIcon },
      { name: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon },
      { name: "X", href: "https://twitter.com", icon: XIcon },
    ]
  };

  return (
    <footer className="w-full bg-transparent pt-16 pb-12 px-4 sm:px-6 lg:px-8 font-sans border-t border-[#5483B3]/20 dark:border-[#5483B3]/25">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        
        {/* Top Grid: Brand & Structured Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Info & Vector Logo */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center">
              <div className="relative h-7 sm:h-8 w-auto flex items-center">
                <img
                  src="/logo-full.png"
                  alt="NevoraLabs"
                  className="h-full w-auto object-contain transition-all duration-300 dark:brightness-0 dark:invert"
                />
              </div>
            </Link>

            <p className="text-sm text-[#052659]/75 dark:text-[#7DA0CA] leading-relaxed max-w-sm mt-1">
              Engineering high-throughput web applications, scalable cloud infrastructure, and autonomous AI integrations for global enterprises.
            </p>

            {/* Direct Inquiry Pill */}
            <a 
              href="mailto:hello@nevoralabs.com"
              className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#052659] dark:text-[#C1E8FF] px-3.5 py-1.5 rounded-full bg-[#5483B3]/10 dark:bg-[#5483B3]/20 hover:bg-[#5483B3]/20 transition-colors mt-2"
            >
              <Mail className="w-3.5 h-3.5 text-[#5483B3] dark:text-[#7DA0CA]" />
              <span>hello@nevoralabs.com</span>
              <ArrowUpRight className="w-3 h-3 text-[#5483B3] dark:text-[#7DA0CA]" />
            </a>
          </div>

          {/* Quick Links: Capabilities */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-[11px] font-mono font-semibold tracking-widest text-[#5483B3] dark:text-[#7DA0CA] uppercase mb-1">
              Capabilities
            </span>
            <ul className="flex flex-col gap-2.5">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-xs sm:text-[13px] text-[#052659]/80 dark:text-[#7DA0CA] hover:text-[#021024] dark:hover:text-[#C1E8FF] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links: Index & Socials */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-[11px] font-mono font-semibold tracking-widest text-[#5483B3] dark:text-[#7DA0CA] uppercase mb-1">
              Index
            </span>
            <ul className="flex flex-col gap-2.5 mb-4">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-xs sm:text-[13px] text-[#052659]/80 dark:text-[#7DA0CA] hover:text-[#021024] dark:hover:text-[#C1E8FF] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              {navigation.social.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/40 dark:bg-[#052659]/30 border border-[#5483B3]/25 text-[#052659] dark:text-[#C1E8FF] hover:scale-105 transition-all duration-200 flex items-center justify-center"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, System Status & Legal Policies */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-[#5483B3]/15 text-xs font-mono"
        >
          {/* Copyright */}
          <div className="text-center sm:text-left text-[#052659]/70 dark:text-[#7DA0CA]/80">
            © {currentYear} <span className="font-semibold text-[#021024] dark:text-[#C1E8FF]">Nevoralabs</span>. All rights reserved.
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4">
            <Link 
              href="/privacy-policy" 
              className="text-[#052659]/75 dark:text-[#7DA0CA] hover:text-[#021024] dark:hover:text-[#C1E8FF] transition-colors hover:underline"
            >
              Privacy Policy
            </Link>
            <span className="text-[#5483B3]/30">•</span>
            <Link 
              href="/terms" 
              className="text-[#052659]/75 dark:text-[#7DA0CA] hover:text-[#021024] dark:hover:text-[#C1E8FF] transition-colors hover:underline"
            >
              Terms of Service
            </Link>
          </div>

          {/* Operational Pulse */}
          <div className="flex items-center gap-2 text-[#052659]/80 dark:text-[#7DA0CA]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Systems Optimal</span>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}