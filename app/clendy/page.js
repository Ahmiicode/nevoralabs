'use client';
import { motion } from 'framer-motion';
import { Calendar, Clock, Video, Sparkles, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function BookCallPage() {
  return (
    <div className="relative w-full min-h-screen bg-transparent pt-32 pb-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="w-full max-w-4xl mx-auto relative z-10">
        
        {/* Back to Contact */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold tracking-widest text-[#5483B3] dark:text-[#7DA0CA] hover:text-[#021024] dark:hover:text-[#C1E8FF] transition-colors uppercase group"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span>Back to Contact</span>
          </Link>
        </motion.div>

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#5483B3]/30 bg-white/70 dark:bg-[#052659]/60 backdrop-blur-md shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#052659] dark:text-[#C1E8FF]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#052659] dark:text-[#C1E8FF] uppercase">
              Discovery Session
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif text-[#021024] dark:text-[#C1E8FF] tracking-tight mb-4">
            Schedule Your <span className="italic">15-Min Architecture Call</span>
          </h1>

          <p className="text-[#052659]/80 dark:text-[#7DA0CA] text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed">
            Select a convenient time slot below to discuss your project requirements or n8n automation pipelines directly with our lead engineer.
          </p>

          {/* Perks Row */}
          <div className="flex flex-wrap items-center justify-center gap-5 mt-5 text-xs font-mono text-[#5483B3] dark:text-[#7DA0CA]">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#021024] dark:text-[#C1E8FF]" />
              <span>15 Minutes</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Video className="w-3.5 h-3.5 text-[#021024] dark:text-[#C1E8FF]" />
              <span>Google Meet</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#021024] dark:text-[#C1E8FF]" />
              <span>Zero Sales Reps</span>
            </div>
          </div>
        </motion.div>

        {/* Booking Container Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white/85 dark:bg-[#052659]/60 backdrop-blur-xl rounded-[2rem] p-6 sm:p-8 border border-[#5483B3]/30 dark:border-[#7DA0CA]/35 shadow-md overflow-hidden text-center"
        >
          <div className="w-full py-16 flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#5483B3]/30 bg-white/40 dark:bg-[#021024]/40 p-6">
            
            <Calendar className="w-12 h-12 text-[#5483B3] dark:text-[#7DA0CA] mb-4" />
            <h3 className="text-xl font-serif text-[#021024] dark:text-[#C1E8FF] mb-2">
              Ready to Book Your Slot?
            </h3>
            <p className="text-xs sm:text-sm text-[#052659]/75 dark:text-[#7DA0CA] max-w-md mb-6 leading-relaxed">
              Aap apna official Calendly scheduling link yahan connect kar sakte hain taake clients direct seamlessly slot select kar sakein.
            </p>

            <a
              href="https://calendly.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full bg-[#021024] text-[#C1E8FF] dark:bg-[#C1E8FF] dark:text-[#021024] text-xs font-mono font-bold tracking-wider hover:scale-105 transition-all shadow-sm"
            >
              Open Calendly Scheduler ↗
            </a>
          </div>

        </motion.div>

      </div>
    </div>
  );
}