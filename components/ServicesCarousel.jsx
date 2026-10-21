"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ServicesCarousel() {
  const [activeIndex, setActiveIndex] = useState(1); // Default active index set to 1 (center)

  // Dummy data with external Unsplash image links
  const services = [
    {
      id: 0,
      title: "AI Automation",
      description: "Intelligent workflows using custom AI to eliminate repetitive work and free up your team.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 1,
      title: "WordPress",
      description: "Enterprise WordPress builds with custom themes, plugins, and maximum performance out of the box.",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Custom Dev",
      description: "Bespoke web applications, portals, and platforms built exactly to your unique specifications.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "E-Commerce",
      description: "High-converting online stores built on Shopify and custom architectures for maximum sales.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    }
  ];

  // Helper logic to determine card positions (Left, Center, Right, Hidden)
  const getCardStyle = (index) => {
    const diff = index - activeIndex;
    
    // For 4 items, managing circular logic slightly
    if (diff === 0) return 'center';
    if (diff === 1 || (activeIndex === 3 && index === 0)) return 'right';
    if (diff === -1 || (activeIndex === 0 && index === 3)) return 'left';
    return 'hidden';
  };

  const variants = {
    center: { 
      x: '0%', 
      scale: 1, 
      zIndex: 30, 
      opacity: 1,
      filter: 'blur(0px)'
    },
    left: { 
      x: '-65%', 
      scale: 0.85, 
      zIndex: 20, 
      opacity: 0.7,
      filter: 'blur(2px)'
    },
    right: { 
      x: '65%', 
      scale: 0.85, 
      zIndex: 20, 
      opacity: 0.7,
      filter: 'blur(2px)'
    },
    hidden: { 
      x: '0%', 
      scale: 0.6, 
      zIndex: 10, 
      opacity: 0,
      filter: 'blur(4px)'
    }
  };

  return (
    <section id="about" className="w-full bg-white py-24 overflow-hidden selection:bg-[#D4AF37] selection:text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-[#D4AF37] font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
              What We Do
            </h4>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 tracking-tighter">
              Services That Scale.
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg font-medium leading-relaxed">
              Every digital solution your business needs to dominate online, delivered with premium craftsmanship.
            </p>
          </motion.div>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative h-[450px] sm:h-[500px] md:h-[550px] w-full flex justify-center items-center perspective-1000">
          <AnimatePresence initial={false}>
            {services.map((service, index) => {
              const position = getCardStyle(index);
              
              return (
                <motion.div
                  key={service.id}
                  variants={variants}
                  initial={false}
                  animate={position}
                  transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                  className="absolute w-[280px] sm:w-[320px] md:w-[360px] h-[400px] sm:h-[450px] md:h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl"
                  onClick={() => setActiveIndex(index)}
                  style={{
                    boxShadow: position === 'center' ? '0 25px 50px -12px rgba(0,0,0,0.25)' : '0 10px 15px -3px rgba(0,0,0,0.1)',
                  }}
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />

                  {/* Dark overlay just at the top for contrast if needed, but keeping it clean */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent"></div>

                  {/* Glassmorphism Panel (Bottom) */}
                  <div className="absolute bottom-0 w-full h-[55%] sm:h-[50%] bg-white/90 backdrop-blur-md border-t border-white shadow-[0_-10px_30px_rgba(0,0,0,0.05)] flex flex-col justify-between p-6 sm:p-8">
                    
                    <div>
                      {/* Service Badge */}
                      <div className="inline-block px-3 py-1 mb-4 rounded-full border border-gray-200 bg-white/50 text-[10px] sm:text-xs font-bold tracking-widest uppercase text-gray-500">
                        Service
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl sm:text-2xl font-black text-black mb-2 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed font-medium">
                        {service.description}
                      </p>
                    </div>

                    {/* Gold Action Button */}
                    <button className="w-fit px-6 py-2.5 bg-[#D4AF37] text-black text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-black hover:text-white transition-colors duration-300">
                      Read More
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-3 mt-12 md:mt-16">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === index 
                  ? 'w-8 h-2.5 bg-[#D4AF37]' 
                  : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}