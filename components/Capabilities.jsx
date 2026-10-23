'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Blocks } from 'lucide-react';

export default function Capabilities() {
  const techStack = [
    "AI AUTOMATION", "WORDPRESS", "CUSTOM WEBSITES", "SHOPIFY", "NEXT.JS", "MERN STACK", "UI/UX DESIGN",
    "AI AUTOMATION", "WORDPRESS", "CUSTOM WEBSITES", "SHOPIFY", "NEXT.JS", "MERN STACK", "UI/UX DESIGN",
    "AI AUTOMATION", "WORDPRESS", "CUSTOM WEBSITES", "SHOPIFY", "NEXT.JS", "MERN STACK", "UI/UX DESIGN"
  ];

  const capabilities = [
    {
      id: "01",
      title: "MERN Architecture",
      description: "Designing robust, scalable, and high-performance full-stack architectures built for complex data handling.",
      icon: <Database className="w-5 h-5" />
    },
    {
      id: "02",
      title: "Custom Web Solutions",
      description: "Pixel-perfect, ultra-fast interfaces using React, Next.js, and WordPress tailored for premium brand experiences.",
      icon: <Code2 className="w-5 h-5" />
    },
    {
      id: "03",
      title: "AI Automation Workflows",
      description: "Integrating intelligent AI agents and automated pipelines to reduce overhead and scale your operations effortlessly.",
      icon: <Cpu className="w-5 h-5" />
    },
    {
      id: "04",
      title: "E-Commerce & Shopify",
      description: "Building high-converting online stores using Shopify and custom MERN stack solutions to maximize your digital sales.",
      icon: <Blocks className="w-5 h-5" />
    }
  ];

  return (
    <section id="expertise" className="w-full bg-[#FAFAF8] flex flex-col items-center font-sans overflow-hidden pb-24">
      
      {/* 1. INFINITE SCROLLING TECH MARQUEE (Minimal & Elegant) */}
      <div className="w-full border-y border-black/[0.05] bg-[#FAFAF8] py-4 flex relative items-center mb-16 sm:mb-24">
        <motion.div
          className="flex whitespace-nowrap gap-8 pr-8"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        >
          {techStack.map((tech, index) => (
            <div key={index} className="flex items-center gap-8">
              <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-black/40 uppercase">
                {tech}
              </span>
              <span className="text-black/20 text-[10px]">+</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 2. CAPABILITIES GRID SECTION */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
        >
          <div>
            <h4 className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-black/40 uppercase mb-4">
              Our Capabilities
            </h4>
            <h2 className="text-4xl sm:text-5xl font-serif text-[#111111] tracking-tight leading-[1.1] max-w-xl">
              Systems engineered for <span className="italic text-[#2C4A3B]">scale and precision.</span>
            </h2>
          </div>
          
          <button className="px-6 py-2.5 bg-white text-black border border-black/10 text-[14px] font-medium rounded-full hover:bg-gray-50 transition-all duration-300 shadow-sm whitespace-nowrap">
            View Technical Process
          </button>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.02)] group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500"
            >
              {/* Card Header (Icon & Number) */}
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 rounded-full bg-[#FAFAF8] flex items-center justify-center text-[#111111] group-hover:scale-110 transition-transform duration-500">
                  {cap.icon}
                </div>
                <span className="text-gray-300 font-serif text-lg">
                  {cap.id}
                </span>
              </div>
              
              {/* Card Content */}
              <div>
                <h4 className="text-2xl sm:text-[1.7rem] font-serif text-[#111111] tracking-tight mb-3">
                  {cap.title}
                </h4>
                <p className="text-gray-500 text-[15px] sm:text-base leading-relaxed font-light">
                  {cap.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}