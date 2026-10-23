'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="w-full bg-[#FAFAF8] flex flex-col items-center pt-12 pb-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="w-full max-w-4xl mx-auto flex flex-col">
        
        {/* Large Dark Contact Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="w-full bg-[#111111] rounded-[2rem] p-10 sm:p-16 md:p-20 flex flex-col items-center text-center mb-16 shadow-2xl"
        >
          {/* Tag */}
          <h4 className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-white/40 uppercase mb-6 sm:mb-8">
            Get in touch
          </h4>
          
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white tracking-tight leading-[1.1] mb-6">
            Ready to automate <br className="hidden sm:block" />
            <span className="italic text-white/90">and elevate?</span>
          </h2>
          
          {/* Description */}
          <p className="text-gray-400 text-[15px] sm:text-[17px] leading-relaxed font-light max-w-xl mb-10 sm:mb-12">
            Tell us what you want to streamline or build. We'll reply within 24 hours with a clear plan.
          </p>
          
          {/* Email Button */}
          <motion.a 
            href="mailto:hello@nevoralabs.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-white text-[#111111] text-[15px] font-medium rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-sm"
          >
            hello@nevoralabs.com
          </motion.a>
        </motion.div>

        
          
   
      

      </div>
    </section>
  );
}