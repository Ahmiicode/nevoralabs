'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Scale, FileText, CheckCircle2 } from 'lucide-react';

export default function TermsPage() {
  const sections = [
    {
      title: "1. Intellectual Property & Ownership",
      desc: "Upon full settlement of contracted milestone invoices, 100% ownership of all custom Next.js source code, schemas, and deployed architectures is transferred unconditionally to the client with zero vendor lock-in."
    },
    {
      title: "2. Engineering Scope & Iterations",
      desc: "Project sprints are governed by mutually agreed technical architecture specifications. Staging builds are deployed for client review at dedicated milestones, including standard revisions outlined in the project proposal."
    },
    {
      title: "3. Deployment & Cloud Environments",
      desc: "All production deployments are configured using industry-standard platforms (such as Vercel, AWS, and MongoDB Atlas). Client credentials, environment variables, and production keys remain strictly confidential under NDA."
    },
    {
      title: "4. Post-Launch Maintenance",
      desc: "Every completed architecture delivery includes 30 days of complimentary engineering warranty covering bug remediation, edge performance tuning, and operational uptime validation."
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
            <Scale className="w-3.5 h-3.5" />
            <span>Legal Framework</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif text-[#021024] dark:text-[#C1E8FF] tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-sm sm:text-base text-[#052659]/80 dark:text-[#7DA0CA] max-w-2xl leading-relaxed">
            Standard contractual guidelines governing architecture engineering, deliverables, milestone payments, and source ownership at NevoraLabs.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="flex flex-col gap-6">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-white/70 dark:bg-[#052659]/30 border border-[#5483B3]/20 dark:border-[#5483B3]/25 backdrop-blur-md shadow-sm"
            >
              <h2 className="text-lg sm:text-xl font-serif text-[#021024] dark:text-[#C1E8FF] mb-3 flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#5483B3] dark:text-[#7DA0CA] shrink-0" />
                <span>{section.title}</span>
              </h2>
              <p className="text-sm text-[#052659]/80 dark:text-[#7DA0CA] leading-relaxed pl-7">
                {section.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}