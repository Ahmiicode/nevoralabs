'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Eye, Server } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const policies = [
    {
      icon: Lock,
      title: "1. Information Collection",
      desc: "We exclusively collect client-provided project details, contact identifiers, and technical specifications submitted through our secure project inquiry forms to scope and execute engineering blueprints."
    },
    {
      icon: Shield,
      title: "2. Data Utilization & Non-Disclosure",
      desc: "Information submitted to NevoraLabs is strictly utilized for client communication, project delivery, and architecture scoping. We never sell, monetize, or distribute client intelligence to third-party brokers."
    },
    {
      icon: Server,
      title: "3. Infrastructure & Secure Handling",
      desc: "Project communications and sensitive environment parameters are routed across encrypted endpoints (TLS/SSL) with isolated access controls restricted strictly to verified technical leads."
    },
    {
      icon: Eye,
      title: "4. Cookies & Analytical Telemetry",
      desc: "Our platform uses minimal anonymous telemetry cookies strictly to track application latency, user interface performance, and global CDN delivery speed."
    }
  ];

  return (
    <main className="relative w-full min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="w-full max-w-4xl mx-auto relative z-10">
        
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold tracking-widest text-[#5483B3] dark:text-[#7DA0CA] hover:text-[#021024] dark:hover:text-[#C1E8FF] transition-colors uppercase group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Return to Home</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#5483B3]/30 bg-white/60 dark:bg-[#052659]/60 backdrop-blur-md mb-4 text-xs font-mono text-[#5483B3] dark:text-[#7DA0CA] uppercase">
            <Shield className="w-3.5 h-3.5" />
            <span>Data Protection</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif text-[#021024] dark:text-[#C1E8FF] tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-[#052659]/80 dark:text-[#7DA0CA] max-w-2xl leading-relaxed">
            How NevoraLabs manages proprietary blueprints, client communication data, and enterprise information security.
          </p>
        </motion.div>

        {/* Policy Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {policies.map((policy, idx) => {
            const Icon = policy.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 sm:p-7 rounded-2xl bg-white/70 dark:bg-[#052659]/30 border border-[#5483B3]/20 dark:border-[#5483B3]/25 backdrop-blur-md shadow-sm flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#5483B3]/15 dark:bg-[#5483B3]/25 flex items-center justify-center text-[#052659] dark:text-[#C1E8FF]">
                  <Icon className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-serif text-[#021024] dark:text-[#C1E8FF]">
                  {policy.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#052659]/80 dark:text-[#7DA0CA] leading-relaxed">
                  {policy.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </main>
  );
}