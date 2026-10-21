'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Cpu, Code2, Rocket, TerminalSquare } from 'lucide-react';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  // Steps data with Icons and Terminal Code Logs
  const steps = [
    {
      id: "01",
      title: "Discovery & Architecture",
      icon: <Database className="w-5 h-5" />,
      description: "We analyze your business logic, design a scalable database architecture, and map out the exact tech stack.",
      codeLog: `{\n  "phase": "Discovery_&_Architecture",\n  "action": "Analyze_Business_Logic",\n  "stack_selected": ["Next.js", "Node.js", "Supabase"],\n  "database_schema": "Generated",\n  "status": "Awaiting_Approval"\n}`
    },
    {
      id: "02",
      title: "AI & Workflow Design",
      icon: <Cpu className="w-5 h-5" />,
      description: "We identify bottlenecks and integrate AI automation workflows to ensure your system does the heavy lifting.",
      codeLog: `{\n  "phase": "AI_Workflow_Design",\n  "agent": "Automation_Core",\n  "bottlenecks_resolved": 14,\n  "integration": "OpenAI_API_V4",\n  "latency_target": "< 50ms"\n}`
    },
    {
      id: "03",
      title: "Precision Development",
      icon: <Code2 className="w-5 h-5" />,
      description: "Our engineers build your solution with a jeweler's obsession for detail. Clean code, pixel-perfect UI, robust APIs.",
      codeLog: `// Executing Build Phase...\nimport { Precision } from '@nevora/core';\n\nconst buildUI = async () => {\n  await renderPixelPerfectUI();\n  await establishSecureAPI();\n  return "Zero_Bugs_Detected";\n};\n\nbuildUI();`
    },
    {
      id: "04",
      title: "Deployment & Scale",
      icon: <Rocket className="w-5 h-5" />,
      description: "We deploy on high-performance cloud infrastructure (Vercel/AWS), ensuring it's lightning-fast and globally scalable.",
      codeLog: `> init global_deployment\n[OK] Compiling assets...\n[OK] Pushing to Edge Network (Vercel)\n[OK] Database replicated across 3 regions\n\nSTATUS: 200 OK\nAPP_STATE: LIVE & SCALING 🚀`
    }
  ];

  // Auto-play the steps every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section id="process" className="w-full bg-white flex flex-col items-center py-24 border-t border-black selection:bg-[#D4AF37] selection:text-white overflow-hidden">
      <div className="w-full max-w-7xl px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16 text-center flex flex-col items-center">
          <h2 className="uppercase tracking-widest text-[11px] font-bold text-[#D4AF37] mb-4 border border-[#D4AF37]/30 px-5 py-1.5 rounded-full inline-block shadow-sm">
            The Pipeline
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-black tracking-tighter leading-tight">
            How we engineer <br/> 
            your success.
          </h3>
        </div>

        {/* 
          High-Tech Interactive Dashboard (Like Hero Section)
        */}
        <div className="w-full bg-[#050505] rounded-3xl border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)] relative overflow-hidden flex flex-col lg:flex-row">
          
          {/* Subtle Gold Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37] opacity-[0.04] blur-[100px] pointer-events-none"></div>

          {/* LEFT PANEL: The Steps (Neural Flow) */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/10 relative z-10">
            
            <div className="flex items-center gap-3 mb-10">
              <TerminalSquare className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase">
                Execution_Timeline
              </span>
            </div>

            <div className="relative pl-6 space-y-12 border-l border-white/10 ml-2">
              
              {/* Moving Gold Progress Line */}
              <motion.div 
                className="absolute top-0 left-[-1px] w-[2px] bg-[#D4AF37]"
                initial={{ height: 0 }}
                animate={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ boxShadow: '0 0 10px #D4AF37' }}
              />

              {steps.map((step, index) => {
                const isActive = activeStep === index;
                const isPast = activeStep > index;

                return (
                  <div 
                    key={step.id} 
                    className="relative cursor-pointer group"
                    onClick={() => setActiveStep(index)}
                    onMouseEnter={() => setActiveStep(index)}
                  >
                    {/* Glowing Node Dot */}
                    <div className="absolute -left-[31px] top-1">
                      <motion.div 
                        className={`w-3.5 h-3.5 rounded-full border-2 bg-[#050505] ${isActive || isPast ? 'border-[#D4AF37]' : 'border-white/20'}`}
                        animate={{ 
                          scale: isActive ? [1, 1.4, 1] : 1,
                          boxShadow: isActive ? '0 0 15px #D4AF37' : 'none'
                        }}
                        transition={{ duration: 1.5, repeat: isActive ? Infinity : 0 }}
                      />
                    </div>

                    <div className={`transition-all duration-500 ${isActive ? 'opacity-100 translate-x-2' : 'opacity-40 hover:opacity-70'}`}>
                      <div className="flex items-center gap-4 mb-3">
                        <div className={`w-10 h-10 rounded-md flex items-center justify-center transition-colors duration-500 ${isActive ? 'bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30' : 'bg-white/5 text-white/50 border border-white/10'}`}>
                          {step.icon}
                        </div>
                        <h4 className={`text-xl font-black tracking-tight ${isActive ? 'text-white' : 'text-white/70'}`}>
                          {step.id}. {step.title}
                        </h4>
                      </div>
                      
                      {/* Show description only if active for cleaner look */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.p 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-sm text-white/60 font-medium leading-relaxed pl-14"
                          >
                            {step.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT PANEL: Live Engineering Terminal Logs */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 bg-[#0a0a0a] relative z-10 flex flex-col">
            
            {/* Terminal Header */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping"></div>
                <span className="text-[10px] font-mono text-[#D4AF37] tracking-widest uppercase">System_Active</span>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="flex-grow relative rounded-lg border border-white/5 bg-[#000000] p-6 overflow-hidden">
              {/* Subtle grid line overlay inside terminal */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
              
              <div className="relative z-10 font-mono text-sm md:text-base text-[#D4AF37] opacity-90 whitespace-pre-wrap">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                    transition={{ duration: 0.4 }}
                  >
                    {steps[activeStep].codeLog}
                  </motion.div>
                </AnimatePresence>
                
                {/* Blinking Cursor */}
                <motion.span 
                  animate={{ opacity: [1, 0] }} 
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2.5 h-4 bg-[#D4AF37] ml-1 align-middle"
                />
              </div>

              {/* Scanning Laser Line Effect */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-[1px] bg-[#D4AF37]/40 shadow-[0_0_15px_#D4AF37]"
                animate={{ top: ['-10%', '110%'] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}