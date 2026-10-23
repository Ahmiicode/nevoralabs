'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function ProcessSection() {
  const steps = [
    {
      numeral: "i.",
      title: "Discover",
      description: "We learn how your business runs today and identify the bottlenecks worth fixing first."
    },
    {
      numeral: "ii.",
      title: "Build",
      description: "We design and ship your automation or website, tested end to end with real data."
    },
    {
      numeral: "iii.",
      title: "Scale",
      description: "We monitor, refine and extend the system as your business grows, so it keeps paying off."
    }
  ];

  return (
    <section id="process" className="w-full bg-[#FAFAF8] py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h4 className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-black/40 uppercase mb-4">
            How It Works
          </h4>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#111111] tracking-tight leading-[1.1] mb-8">
            Simple process. <span className="italic text-[#2C4A3B]">Clear results.</span>
          </h2>
          
          {/* Subtle Divider Line as seen in the video */}
          <div className="w-full h-[1px] bg-black/10"></div>
        </motion.div>

        {/* Steps List */}
        <div className="flex flex-col gap-14">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col gap-3"
            >
              {/* Large Roman Numeral */}
              <div className="text-5xl sm:text-[3.5rem] font-serif text-[#111111] mb-1 leading-none">
                {step.numeral}
              </div>
              
              {/* Step Title */}
              <h3 className="text-[1.35rem] sm:text-2xl font-medium text-[#111111]">
                {step.title}
              </h3>
              
              {/* Step Description */}
              <p className="text-gray-500 text-[15px] sm:text-[17px] leading-relaxed font-light max-w-lg">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}