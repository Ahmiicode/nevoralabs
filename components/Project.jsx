'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  // Data matching the video's exact text and structure
  const projectsData = [
    {
      id: 1,
      tag: "N8N • AI",
      title: "Lead Qualification Engine",
      description: "Automated lead intake, scoring and CRM routing, cutting manual follow-up work significantly.",
      imagePlaceholder: "Automation Case"
    },
    {
      id: 2,
      tag: "WEB DEVELOPMENT",
      title: "Brand Website Launch",
      description: "A fast, minimal website designed to present a brand with clarity and drive enquiries.",
      imagePlaceholder: "Website Case"
    },
    {
      id: 3,
      tag: "AUTOMATION",
      title: "Reporting Pipeline",
      description: "Scheduled data collection and AI summaries delivered straight to the team every morning.",
      imagePlaceholder: "Ops Case"
    }
  ];

  return (
    <section id="works" className="w-full bg-[#FAFAF8] py-24 px-4 sm:px-6 lg:px-8 font-sans">
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
            Selected Work
          </h4>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#111111] tracking-tight leading-[1.1]">
            Recent <span className="italic text-[#2C4A3B]">projects.</span>
          </h2>
        </motion.div>

        {/* Projects List (Vertical Stack as seen in video) */}
        <div className="flex flex-col gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-[2rem] p-4 sm:p-6 border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.02)] group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500"
            >
              {/* Image Placeholder (As seen in the video: "Automation Case", "Website Case") */}
              <div className="w-full h-56 sm:h-72 bg-[#F4F4F2] rounded-3xl mb-8 flex items-center justify-center overflow-hidden relative">
                <span className="font-serif text-xl sm:text-2xl text-black/30 group-hover:scale-105 transition-transform duration-700">
                  {project.imagePlaceholder}
                </span>
                
                {/* Optional: Agar future mein real images lagani hon, toh is img tag ko uncomment kar lein */}
                {/* <img src={project.imagePath} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 hover:opacity-100" /> */}
              </div>

              {/* Project Info */}
              <div className="px-2 sm:px-4 pb-4">
                <div className="text-[11px] sm:text-xs font-semibold tracking-[0.15em] text-black/50 uppercase mb-3">
                  {project.tag}
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-serif text-[#111111] tracking-tight mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-500 text-[15px] sm:text-[17px] leading-relaxed font-light">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}