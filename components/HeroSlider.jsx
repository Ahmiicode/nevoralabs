'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function NevoraHero() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] flex flex-col items-center justify-center px-4 sm:px-6 relative overflow-hidden font-sans pt-20">
      
      {/* Container */}
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Top Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-black/10 bg-white shadow-sm mb-8"
        >
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.15em] text-black/60 uppercase">
            AI Automation & Web Development
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          {/* Using a serif font specifically for the premium feel as seen in the video */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif text-[#111111] leading-[1.1] tracking-tight">
            Systems that work <br className="hidden sm:block" />
            <span className="italic text-[#2C4A3B]">while you sleep.</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-8 text-lg sm:text-xl text-gray-500 max-w-2xl font-light leading-relaxed px-4"
        >
          Nevoralabs designs <span className="text-[#8B7355] font-medium">intelligent n8n automations</span> and <span className="text-[#4A5B69] font-medium">fast, elegant websites</span> that help your business save time, close more deals and look the part.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button className="w-full sm:w-auto px-8 py-3.5 bg-black text-white text-[15px] font-medium rounded-full hover:bg-black/80 transition-all duration-300">
            Start a project
          </button>
          
          <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-black border border-black/10 text-[15px] font-medium rounded-full hover:bg-gray-50 transition-all duration-300 shadow-sm">
            Explore services
          </button>
        </motion.div>

      </div>
    </div>
  );
}