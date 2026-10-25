'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Terminal } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    id: 'n8n-engine',
    title: 'Autonomous Lead Engine',
    category: 'N8N • AI ARCHITECTURE',
    summary: 'Automated multi-channel lead intake, AI scoring, and real-time CRM routing with zero human delay.',
    metrics: { primary: '< 0.4s', label: 'Processing Speed', sub: '72% manual hours saved' },
    stack: ['n8n Cloud', 'OpenAI API', 'Webhook Sync', 'Supabase'],
    status: 'ACTIVE PIPELINE',
    command: '$ nevora pipeline --exec intake-flow',
    output: [
      'Webhook payload parsed (200 OK)',
      'Intent vector calculated: High Priority',
      'Contact enriched & synced to HubSpot'
    ]
  },
  {
    id: 'nextjs-brand',
    title: 'Enterprise Studio Architecture',
    category: 'FULL-STACK WEB PLATFORM',
    summary: 'Next.js web platform engineered with ultra-fast page speeds, subtle fluid motion, and high conversion flow.',
    metrics: { primary: '99/100', label: 'Lighthouse Score', sub: 'Sub-second first paint' },
    stack: ['Next.js 15', 'Tailwind CSS', 'Framer Motion', 'Vercel Edge'],
    status: 'PRODUCTION DEPLOYED',
    command: '$ next build --turbo',
    output: [
      'Route chunks optimized (0.24 MB)',
      'Edge functions cached globally',
      'Core Web Vitals verified: All Green'
    ]
  },
  {
    id: 'ops-pipeline',
    title: 'Executive Intelligence Feed',
    category: 'AI DATA AUTOMATION',
    summary: 'Scheduled cross-database metrics extraction and LLM summaries delivered directly to private Slack feeds.',
    metrics: { primary: '100%', label: 'Hands-off Execution', sub: 'Daily 8:00 AM dispatch' },
    stack: ['Node.js', 'Cron Tasks', 'Slack API', 'PostgreSQL'],
    status: 'SCHEDULED DAEMON',
    command: '$ cron run daily-digest --channel #executive',
    output: [
      'Aggregated 4 client platforms',
      'LLM synthesis complete (248 tokens)',
      'Morning brief dispatched to Slack'
    ]
  }
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const canvasRef = useRef(null);

  // EXACT HERO SECTION 3D CURSOR CANVAS SETUP
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const mouse = {
      x: width / 2,
      y: height / 2,
      active: false,
      radius: 260,
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const dots = [];
    const totalDots = 28;

    for (let i = 0; i < totalDots; i++) {
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1.5,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Node Physics & Mouse Attraction
      for (let i = 0; i < dots.length; i++) {
        const n = dots[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 30 || n.x > width - 30) n.vx *= -1;
        if (n.y < 30 || n.y > height - 30) n.vy *= -1;

        if (mouse.active) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 0.08;
            n.x += dx * force * 0.25;
            n.y += dy * force * 0.25;
          }
        }
      }

      // Connecting Lines (Exact Hero Colors)
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 210) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(84, 131, 179, ${0.2 * (1 - dist / 210)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Cursor Interactive Lines (Exact Hero Colors)
      if (mouse.active) {
        for (let i = 0; i < dots.length; i++) {
          const n = dots[i];
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * 0.35;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(5, 38, 89, ${alpha})`;
            ctx.lineWidth = 1.1;
            ctx.stroke();
          }
        }
      }

      // Render Dots
      for (let i = 0; i < dots.length; i++) {
        const n = dots[i];
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = i % 3 === 0 ? 'rgba(84, 131, 179, 0.6)' : 'rgba(5, 38, 89, 0.35)';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      id="works" 
      className="min-h-screen bg-transaprent flex items-center justify-center px-4 sm:px-6 lg:px-12 relative overflow-hidden font-sans pt-24 pb-24 transition-colors duration-500"
    >
      {/* EXACT HERO GLOW ORBS */}
      <div className="absolute top-[-10%] left-[-10%] w-[55%] h-[55%] rounded-full bg-[#7DA0CA]/35 dark:bg-[#052659]/50 filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[0%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#5483B3]/25 dark:bg-[#052659]/40 filter blur-[140px] pointer-events-none" />

      {/* EXACT HERO 3D CANVAS */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none z-0 w-full h-full"
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#5483B3]/30 bg-white/70 dark:bg-[#052659]/60 backdrop-blur-md shadow-sm mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5483B3] dark:bg-[#7DA0CA] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#052659] dark:bg-[#C1E8FF]"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-[#052659] dark:text-[#C1E8FF] uppercase">
                Selected Work
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#021024] dark:text-[#C1E8FF] tracking-tight leading-[1.08]">
              Recent <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#052659] via-[#5483B3] to-[#021024] dark:from-[#7DA0CA] dark:via-[#5483B3] dark:to-[#C1E8FF]">deployments.</span>
            </h2>
          </div>

          <p className="text-[#052659]/80 dark:text-[#7DA0CA] text-sm sm:text-base max-w-xs font-normal leading-relaxed">
            Scalable Next.js architectures & automated n8n workflows built for real operations.
          </p>
        </div>

        {/* Compact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT: Project Navigation */}
          <div className="lg:col-span-5 flex flex-col gap-3.5 justify-center">
            {projects.map((item) => {
              const isSelected = activeProject.id === item.id;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveProject(item)}
                  onClick={() => setActiveProject(item)}
                  className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 relative overflow-hidden backdrop-blur-md ${
                    isSelected
                      ? 'bg-white/90 dark:bg-[#052659]/80 border-[#5483B3] dark:border-[#7DA0CA] shadow-[0_8px_25px_rgba(5,38,89,0.12)] dark:shadow-[0_10px_30px_rgba(2,16,36,0.6)] translate-x-1.5'
                      : 'bg-white/40 dark:bg-[#052659]/25 border-[#5483B3]/25 dark:border-[#5483B3]/20 hover:bg-white/60 dark:hover:bg-[#052659]/40'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-mono font-semibold tracking-widest text-[#5483B3] dark:text-[#7DA0CA] uppercase">
                      {item.category}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                      isSelected
                        ? 'border-emerald-500/40 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10'
                        : 'border-transparent text-[#5483B3]/60 dark:text-[#7DA0CA]/60'
                    }`}>
                      {item.metrics.primary}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-serif text-[#021024] dark:text-[#C1E8FF] tracking-tight mb-1">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#052659]/75 dark:text-[#7DA0CA] font-normal leading-relaxed line-clamp-2">
                    {item.summary}
                  </p>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Live Architectural Inspector View */}
          <div className="lg:col-span-7 bg-[#021024] dark:bg-[#021024]/90 rounded-[2rem] p-6 sm:p-8 border border-[#5483B3]/30 shadow-[0_20px_50px_rgba(5,38,89,0.3)] dark:shadow-2xl flex flex-col justify-between relative overflow-hidden text-white min-h-[380px]">
            
            {/* Window Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#5483B3]/25">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7DA0CA]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#5483B3]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#052659]"></span>
                <span className="text-xs font-mono text-[#7DA0CA] ml-2 tracking-wider">
                  deploy://{activeProject.id}
                </span>
              </div>

              <div className="flex items-center gap-2 text-[11px] font-mono text-[#C1E8FF]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C1E8FF] animate-ping"></span>
                <span>{activeProject.status}</span>
              </div>
            </div>

            {/* Dynamic Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="py-5 flex flex-col gap-4"
              >
                {/* Metric Box */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#052659]/40 border border-[#5483B3]/25">
                  <div>
                    <div className="text-3xl sm:text-4xl font-serif text-[#C1E8FF] font-medium tracking-tight">
                      {activeProject.metrics.primary}
                    </div>
                    <div className="text-xs text-[#7DA0CA] font-mono">
                      {activeProject.metrics.label}
                    </div>
                  </div>
                  <div className="text-xs text-[#C1E8FF]/90 font-mono bg-[#021024] px-3.5 py-1.5 rounded-full border border-[#5483B3]/30 self-start sm:self-auto">
                    {activeProject.metrics.sub}
                  </div>
                </div>

                {/* Simulated Terminal Steps */}
                <div className="space-y-2 font-mono text-xs text-[#7DA0CA] bg-black/40 p-4 rounded-2xl border border-white/5">
                  <div className="text-[#C1E8FF] flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-[#5483B3]" />
                    <span>{activeProject.command}</span>
                  </div>
                  {activeProject.output.map((line, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[#7DA0CA]/80 pl-5">
                      <span className="text-[#C1E8FF] font-semibold">✓</span> {line}
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {activeProject.stack.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-[#052659]/70 text-[#C1E8FF] border border-[#5483B3]/30"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* CTA Link */}
            <div className="pt-4 border-t border-[#5483B3]/20 flex items-center justify-between">
              <span className="text-xs text-[#7DA0CA] font-mono">
                Deploy similar architecture
              </span>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#C1E8FF] text-[#021024] font-semibold text-xs hover:bg-white transition-all shadow-sm group"
              >
                <span>Request Build</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}