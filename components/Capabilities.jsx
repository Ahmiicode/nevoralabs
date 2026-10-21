'use client';
import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Blocks } from 'lucide-react';

export default function Capabilities() {
  // Updated list for marquee with smaller text requirement
  const techStack = [
    "AI AUTOMATION", "WORDPRESS", "CUSTOM WEBSITES", "SHOPIFY", "NEXT.JS", "MERN STACK", "UI/UX DESIGN",
    "AI AUTOMATION", "WORDPRESS", "CUSTOM WEBSITES", "SHOPIFY", "NEXT.JS", "MERN STACK", "UI/UX DESIGN",
    "AI AUTOMATION", "WORDPRESS", "CUSTOM WEBSITES", "SHOPIFY", "NEXT.JS", "MERN STACK", "UI/UX DESIGN"
  ];

  // Services/Capabilities data
  const capabilities = [
    {
      id: "01",
      title: "MERN Architecture",
      description: "Designing robust, scalable, and high-performance full-stack architectures built for complex data handling.",
      icon: <Database className="w-6 h-6" />
    },
    {
      id: "02",
      title: "Custom Web Solutions",
      description: "Pixel-perfect, ultra-fast interfaces using React, Next.js, and WordPress tailored for premium brand experiences.",
      icon: <Code2 className="w-6 h-6" />
    },
    {
      id: "03",
      title: "AI Automation Workflows",
      description: "Integrating intelligent AI agents and automated pipelines to reduce overhead and scale your operations effortlessly.",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      id: "04",
      title: "E-Commerce & Shopify",
      description: "Building high-converting online stores using Shopify and custom MERN stack solutions to maximize your digital sales.",
      icon: <Blocks className="w-6 h-6" />
    }
  ];

  return (
    <section id="expertise" className="w-full bg-white flex flex-col items-center">
      
      {/* 1. INFINITE SCROLLING TECH MARQUEE (Updated: Smaller & New Tech) */}
      <div className="w-full border-y border-black bg-white overflow-hidden py-3 flex relative items-center">
        <motion.div
          className="flex whitespace-nowrap gap-6 pr-6"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        >
          {techStack.map((tech, index) => (
            <div key={index} className="flex items-center gap-6">
              {/* Text size reduced to text-[10px] for minimal look */}
              <span className="text-[10px] md:text-[11px] font-bold tracking-widest text-black uppercase">
                {tech}
              </span>
              <span className="text-[#D4AF37] text-[10px]">✦</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 2. CAPABILITIES GRID SECTION */}
      <div className="w-full max-w-7xl px-6 md:px-12 py-20 md:py-24">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h2 className="uppercase tracking-widest text-[11px] font-bold text-[#D4AF37] mb-4">
              Our Capabilities
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-black tracking-tighter leading-tight max-w-2xl">
              Systems engineered for <br/> 
              scale and precision.
            </h3>
          </div>
          <button className="px-6 py-3 bg-white text-black border border-black font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-300 text-sm">
            View Technical Process
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col p-8 md:p-10 border border-black bg-white hover:bg-[#FAFAFA] transition-colors duration-300"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-12">
                <div className="p-3 bg-black text-[#D4AF37] rounded-sm">
                  {cap.icon}
                </div>
                <span className="text-xl font-bold text-black/20 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {cap.id}
                </span>
              </div>
              
              {/* Card Content */}
              <div>
                <h4 className="text-2xl font-black text-black tracking-tight mb-3">
                  {cap.title}
                </h4>
                <p className="text-base text-black/70 font-medium leading-relaxed">
                  {cap.description}
                </p>
              </div>

              {/* Bottom Decorative Line (Animates on hover) */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#D4AF37] group-hover:w-full transition-all duration-500 ease-out"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}