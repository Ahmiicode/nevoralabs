'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NevoraHero() {
  const [activeNode, setActiveNode] = useState(0);
  const [logIndex, setLogIndex] = useState(0);

  const nodes = [
    { id: 0, title: 'Client_Input_Stream', icon: '◬' },
    { id: 1, title: 'AI_Processing_Core', icon: '⎔' },
    { id: 2, title: 'Automated_Action', icon: '⚡' },
    { id: 3, title: 'Live_Deployment', icon: '✓' },
  ];

  // Simulated AI Logs
  const aiLogs = [
    `{\n  "agent": "Nexus-Alpha",\n  "status": "awaiting_payload",\n  "latency": "12ms"\n}`,
    `{\n  "action": "NLP_Parse",\n  "confidence": 0.98,\n  "threads": 64\n}`,
    `{\n  "module": "Auto_Trigger",\n  "target": "API_Gateway",\n  "status": "executing"\n}`,
    `{\n  "deployment": "SUCCESS",\n  "uptime": "99.99%",\n  "sync": "global"\n}`
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % nodes.length);
      setLogIndex((prev) => (prev + 1) % aiLogs.length);
    }, 3000); // Cycles every 3 seconds

    return () => clearInterval(interval);
  }, [nodes.length, aiLogs.length]);

  return (
    <div id="hero" className="min-h-screen relative selection:bg-[#D4AF37] selection:text-white flex items-center font-sans overflow-hidden">
      
      {/* ========================================= */}
      {/* 3D BACKGROUND DIRECTLY EMBEDDED HERE      */}
      {/* ========================================= */}
      <div className="absolute inset-0 z-0 bg-white pointer-events-none">
        
        {/* Subtle Gold Ambient Glow */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.07),transparent_70%)] blur-3xl"></div>

        {/* 3D Moving Perspective Grid Floor */}
        <div className="absolute inset-0 flex items-end justify-center" style={{ perspective: '1000px' }}>
          <motion.div
            animate={{ backgroundPositionY: ['0px', '100px'] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
            className="w-[200vw] h-[100vh] absolute bottom-[-20vh]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px',
              transform: 'rotateX(75deg) translateY(100px) translateZ(-200px)', 
              transformOrigin: 'top center',
            }}
          />
        </div>

        {/* Gradient Mask to fade grid smoothly into white at the top & edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_0%,#ffffff_40%,transparent_100%)]"></div>
        
        {/* Physical Grain Overlay (Noise Effect for Premium Feel) */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-multiply" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        ></div>
        
      </div>
      {/* ========================================= */}


      {/* MAIN HERO CONTENT (z-10 keeps it above the 3D background) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          
          {/* LEFT COLUMN: Pure Typography & CTAs */}
          <div className="w-full lg:w-[50%] flex flex-col items-start text-left">
            
            {/* Pill-shaped Badge (Gold text, Black border) */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black bg-white/80 backdrop-blur-sm mb-8 shadow-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#D4AF37]"></span>
              </span>
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.15em] text-[#D4AF37] uppercase">
                Nevora Labs • UK & US • AI Automation
              </span>
            </div>

            {/* Massive Bold Heading */}
            <h1 className="text-6xl sm:text-7xl lg:text-[5rem] font-black text-black tracking-tighter leading-[1.05]">
              The web & AI, <br />
              <span className="relative inline-block mt-1">
                engineered for scale.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-8 text-lg sm:text-xl text-black/80 max-w-xl font-medium leading-relaxed">
              Custom AI automations and Next.js web architectures built with precision for global brands that refuse to be ordinary.
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="px-8 py-4 bg-black text-white text-sm font-bold rounded-full hover:bg-black/80 transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.23)] hover:text-[#D4AF37]">
                Start a project
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
              
              <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-black border border-black text-sm font-bold rounded-full hover:bg-gray-50 transition-all duration-300 flex items-center justify-center">
                See the work
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Advanced AI Visual / Neural Flow */}
          <div className="w-full lg:w-[50%] flex justify-center lg:justify-end mt-10 lg:mt-0">
            
            {/* Dark High-Tech Container */}
            <div className="w-full max-w-lg bg-black rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-[#D4AF37]/20 relative overflow-hidden">
              
              {/* Subtle Gold Glow Effect in Background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] opacity-[0.05] blur-[100px] rounded-full pointer-events-none"></div>

              {/* Header */}
              <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                <div className="text-xs font-mono tracking-widest text-white/50 uppercase">
                  system_architecture
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></div>
                  <span className="text-[10px] font-mono text-[#D4AF37] tracking-widest uppercase">Active</span>
                </div>
              </div>

              {/* Neural Flow (Nodes) */}
              <div className="relative pl-4 border-l border-white/10 ml-2 mb-8 space-y-8">
                {/* Moving Gold Line (Framer Motion) */}
                <motion.div 
                  className="absolute top-0 left-[-1px] w-[2px] bg-[#D4AF37]"
                  initial={{ height: 0 }}
                  animate={{ height: `${(activeNode / (nodes.length - 1)) * 100}%` }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  style={{ boxShadow: '0 0 10px #D4AF37' }}
                />

                {nodes.map((node, index) => {
                  const isActive = activeNode === index;
                  const isPast = activeNode > index;

                  return (
                    <div key={node.id} className="relative flex items-center gap-6">
                      {/* Node Indicator */}
                      <div className="absolute -left-[21px]">
                        <motion.div 
                          className={`w-3 h-3 rounded-full border-2 bg-black ${isActive || isPast ? 'border-[#D4AF37]' : 'border-white/20'}`}
                          animate={{ 
                            scale: isActive ? [1, 1.5, 1] : 1,
                            boxShadow: isActive ? '0 0 15px #D4AF37' : 'none'
                          }}
                          transition={{ duration: 1, repeat: isActive ? Infinity : 0 }}
                        />
                      </div>
                      
                      {/* Node Content */}
                      <div className={`flex items-center gap-3 transition-all duration-500 ${isActive ? 'text-white' : 'text-white/40'}`}>
                        <div className={`w-8 h-8 rounded flex items-center justify-center font-mono text-sm ${isActive ? 'bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30' : 'bg-white/5 border border-white/10'}`}>
                          {node.icon}
                        </div>
                        <span className="font-mono text-xs tracking-wider uppercase">
                          {node.title}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Agent Logs Area (Raw JSON) */}
              <div className="bg-[#0a0a0a] rounded-lg border border-white/10 p-4 relative h-32 overflow-hidden">
                <div className="text-[10px] font-mono text-white/30 mb-2 uppercase tracking-widest border-b border-white/10 pb-2">
                  Live Terminal Output
                </div>
                <div className="font-mono text-[#D4AF37] text-xs opacity-80 whitespace-pre">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={logIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {aiLogs[logIndex]}
                    </motion.div>
                  </AnimatePresence>
                </div>
                {/* Scanner line effect */}
                <motion.div 
                  className="absolute top-0 left-0 w-full h-[1px] bg-[#D4AF37]/30 shadow-[0_0_8px_#D4AF37]"
                  animate={{ top: ['0%', '100%'] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}