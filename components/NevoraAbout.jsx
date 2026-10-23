'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const highlights = [
    {
      title: "100%",
      subtitle: "Custom, no templates",
      description: "Every line of code and automation flow is built strictly for your business logic from scratch."
    },
    {
      title: "24/7",
      subtitle: "Systems that never clock out",
      description: "Your AI agents and web infrastructure run seamlessly around the clock to capture leads and close deals."
    }
  ];

  return (
    <section id="about" className="w-full bg-[#FAFAF8] py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Header / Main Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h4 className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-black/40 uppercase mb-4">
            About Nevoralabs
          </h4>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#111111] tracking-tight leading-[1.1] mb-8">
            Small team. <span className="italic text-[#2C4A3B]">Serious craft.</span>
          </h2>
          
          <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed mb-6">
            Nevoralabs is a focused studio that blends automation engineering with thoughtful design. We believe good software should be <span className="text-[#111111] font-medium">quiet, reliable and beautiful.</span>
          </p>

          <p className="text-gray-500 text-[15px] sm:text-[17px] font-light leading-relaxed">
            You work directly with the people building your system, with honest timelines, clean code and no unnecessary complexity.
          </p>
        </motion.div>

        {/* Highlights / Stats Cards (As seen in video) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl sm:text-5xl font-serif text-[#111111] mb-2">
                  {item.title}
                </div>
                <h3 className="text-base font-medium text-[#111111] mb-3">
                  {item.subtitle}
                </h3>
              </div>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}