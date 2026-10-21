'use client';
import { motion } from 'framer-motion';

export default function Process() {
  const steps = [
    {
      id: "01",
      title: "Discovery & Architecture",
      description: "We start by analyzing your business logic. We design a scalable database architecture and map out the exact MERN/Next.js tech stack needed for your specific goals."
    },
    {
      id: "02",
      title: "AI & Workflow Design",
      description: "Before writing a single line of code, we identify bottlenecks and integrate AI automation workflows to ensure your system does the heavy lifting."
    },
    {
      id: "03",
      title: "Precision Development",
      description: "Our engineers build your solution with a jeweler's obsession for detail. Clean code, pixel-perfect UI, and robust backend APIs utilizing Node.js and Supabase."
    },
    {
      id: "04",
      title: "Deployment & Scale",
      description: "We deploy your application on high-performance cloud infrastructure (like Vercel/AWS), ensuring it's lightning-fast, secure, and ready to scale globally."
    }
  ];

  return (
    <section id="process" className="w-full bg-white flex flex-col items-center py-24 border-t border-black">
      <div className="w-full max-w-5xl px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-20 text-center flex flex-col items-center">
          <h2 className="uppercase tracking-widest text-[11px] font-bold text-[#D4AF37] mb-4 border border-[#D4AF37]/30 px-4 py-1 rounded-full">
            The Pipeline
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-black tracking-tighter leading-tight">
            How we engineer <br/> 
            your success.
          </h3>
        </div>

        {/* Vertical Process Steps */}
        <div className="relative">
          {/* Main Vertical Line (Background) */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-black/10 transform md:-translate-x-1/2"></div>

          <div className="flex flex-col gap-12 md:gap-24">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                
                {/* Center Node (Gold Dot) */}
                <div className="absolute left-[27px] md:left-1/2 top-0 transform -translate-x-1/2 w-14 h-14 bg-white border border-black flex items-center justify-center rounded-full z-10 group hover:border-[#D4AF37] transition-colors duration-300">
                  <span className="text-black font-black text-sm group-hover:text-[#D4AF37] transition-colors duration-300">
                    {step.id}
                  </span>
                </div>

                {/* Empty Half for Desktop Layout */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* Content Box */}
                <div className={`w-full pl-20 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                  <div className="bg-white border border-black p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow duration-300 group">
                    <h4 className="text-2xl font-black text-black tracking-tight mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                      {step.title}
                    </h4>
                    <p className="text-base text-black/70 font-medium leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}