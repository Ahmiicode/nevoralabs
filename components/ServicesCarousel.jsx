'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function ServicesSection() {
  const services = [
    {
      id: "01",
      title: "AI Automations",
      description: "We connect your tools, data and AI models into workflows that run on their own. From lead capture to reporting, every repetitive task gets handled automatically and reliably.",
      tags: ["n8n", "Workflow design", "AI agents", "API integrations", "CRM sync", "Lead routing"]
    },
    {
      id: "02",
      title: "Website Development",
      description: "Custom, responsive websites built for speed, clarity and conversion. Every page is crafted to feel premium on any device and to turn visitors into customers.",
      tags: ["Landing pages", "Business sites", "Portfolios", "Responsive design", "SEO basics", "Fast hosting"]
    }
  ];

  return (
    <section id="services" className="w-full bg-[#FAFAF8] py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h4 className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-black/40 uppercase mb-4">
            What We Do
          </h4>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#111111] tracking-tight leading-[1.1]">
            Two disciplines. <span className="italic text-[#2C4A3B]">One standard.</span>
          </h2>
        </motion.div>

        {/* Services Cards */}
        <div className="flex flex-col gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 sm:p-12 border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
            >
              {/* Number */}
              <div className="text-gray-300 font-serif text-lg mb-6">
                {service.id}
              </div>

              {/* Title */}
              <h3 className="text-3xl sm:text-4xl font-serif text-[#111111] mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-[15px] sm:text-[17px] leading-relaxed font-light max-w-2xl mb-10">
                {/* Simple mapping to make specific words bold/highlighted like in the video (optional, but adds to the premium feel) */}
                {service.description.split(/ (run on their own|feel premium)/).map((part, i) => 
                  ['run on their own', 'feel premium'].includes(part) ? 
                    <span key={i} className="text-[#8B7355] font-medium">{part}</span> : part
                )}
              </p>

              {/* Tags (Pills) */}
              <div className="flex flex-wrap gap-2.5">
                {service.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-4 py-2 rounded-full border border-black/[0.08] text-gray-600 text-[13px] font-medium tracking-wide bg-[#FAFAF8]/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}