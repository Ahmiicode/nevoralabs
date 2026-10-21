'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projectsData'; 

export default function Projects() {
  return (
    <section id="works" className="w-full bg-white flex flex-col items-center py-24 border-t border-black">
      <div className="w-full max-w-7xl px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h2 className="uppercase tracking-widest text-[11px] font-bold text-[#D4AF37] mb-4">
              Selected Works
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-black tracking-tighter leading-tight max-w-2xl">
              Showcasing precision, <br/> 
              performance, and scale.
            </h3>
          </div>
          <button className="hidden md:flex px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-sm items-center gap-2">
            View All Projects <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* 
          Projects List 
          Mobile: Horizontal Slider (overflow-x-auto, snap-x) 
          Desktop: Vertical Stack (md:flex-col)
          Hide Scrollbar: [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
        */}
        <div className="flex flex-row md:flex-col gap-6 md:gap-20 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none pb-8 md:pb-0 w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              // Mobile card sizing (w-[85vw]) and snapping (snap-center)
              className="group relative flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center w-[85vw] md:w-full shrink-0 snap-center md:snap-align-none"
            >
              {/* Project Image Container */}
              <div className="w-full md:w-3/5 overflow-hidden border border-black relative bg-black shrink-0">
                <div 
                  className={`w-full aspect-[4/3] md:aspect-[16/10] ${project.placeholderColor} transition-transform duration-700 ease-in-out group-hover:scale-105 flex items-center justify-center`}
                  // style={{ backgroundImage: `url(${project.imagePath})`, backgroundSize: 'cover', backgroundPosition: 'center' }} 
                >
                  <span className="text-white/20 font-bold tracking-widest uppercase text-xs md:text-base">
                    {project.title} Image
                  </span>
                </div>
                
                {/* Minimal Gold Overlay Effect on Hover */}
                <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/10 transition-colors duration-500 z-10 pointer-events-none"></div>
              </div>

              {/* Project Info */}
              <div className="w-full md:w-2/5 flex flex-col">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <span className="text-[#D4AF37] font-black text-lg md:text-xl">{project.id}</span>
                  <span className="w-8 md:w-12 h-px bg-black"></span>
                  <span className="uppercase tracking-widest text-[9px] md:text-[10px] font-bold text-black truncate">
                    {project.category}
                  </span>
                </div>

                <h4 className="text-2xl md:text-4xl font-black text-black tracking-tight mb-3 md:mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {project.title}
                </h4>
                
                <p className="text-sm md:text-base text-black/70 font-medium leading-relaxed mb-6 md:mb-8 line-clamp-3 md:line-clamp-none">
                  {project.description}
                </p>

                {/* Tech Stack Tags from Data File */}
                <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-10">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-2 md:px-3 py-1 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-black border border-black/20 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Case Study Link */}
                <div className="mt-auto">
                  <a href="#" className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-black uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                    Explore Case Study 
                    <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#D4AF37] transition-transform duration-300 group-hover:rotate-45" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Only: View All Button (Shown below the slider) */}
        <div className="mt-8 flex md:hidden w-full justify-center">
          <button className="px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-xs flex items-center gap-2">
            View All Projects <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}