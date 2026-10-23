'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear(); // 2026

  return (
    <footer className="w-full bg-[#FAFAF8] pt-4 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 pt-6 border-t border-black/10 text-gray-500 text-xs sm:text-[15px] font-medium"
        >
          {/* Left Side: Copyright */}
          <div className="text-center sm:text-left">
            © {currentYear} Nevoralabs. All rights reserved.
          </div>
          
          {/* Right Side: Services Tags */}
          <div className="text-center sm:text-right flex items-center justify-center gap-3">
            <span>AI Automation</span>
            <span className="text-gray-300">•</span>
            <span>Web Development</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}