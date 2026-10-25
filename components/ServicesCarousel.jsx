'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Globe, Workflow, Bot, Server } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 'web-engineering',
    number: '01',
    title: 'Full-Stack Web Engineering',
    shortLabel: 'WEB SYSTEMS',
    icon: Globe,
    desc: 'From high-converting landing pages and dynamic e-commerce stores to scalable MERN & Next.js platforms engineered for speed, clean architecture, and maximum conversions.',
    tag: 'Next.js, MERN & E-Com',
  },
  {
    id: 'n8n-automation',
    number: '02',
    title: 'n8n Workflow Automation',
    shortLabel: 'N8N PIPELINES',
    icon: Workflow,
    desc: 'Bespoke multi-step n8n flows interconnecting your CRMs, payment gateways, databases, and communication channels into unified 24/7 hands-off autopilot pipelines.',
    tag: 'n8n, Webhooks & Sync',
  },
  {
    id: 'ai-agents',
    number: '03',
    title: 'Autonomous AI Agents',
    shortLabel: 'AI AGENTS',
    icon: Bot,
    desc: 'Intelligent LLM-powered agents that qualify and score incoming client leads, synthesize business intelligence, and execute repetitive cognitive operations.',
    tag: 'LLMs, GPT & Scoring',
  },
  {
    id: 'backend-architecture',
    number: '04',
    title: 'Custom APIs & Cloud Architecture',
    shortLabel: 'BACKEND & CLOUD',
    icon: Server,
    desc: 'Robust REST/GraphQL API development, secure Supabase/MongoDB database modeling, authentication systems, and zero-downtime serverless deployments.',
    tag: 'APIs, Supabase & Mongo',
  },
];

export default function ServicesSection() {
  const [activeId, setActiveId] = useState(services[0].id);
  const canvasRef = useRef(null);

  // Exact Hero Section 3D Cursor Constellation Background
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

      // Connecting Ambient Lines
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

      // Cursor Interactive Lines
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
      id="services" 
      className="min-h-screen bg-transparent   flex items-center justify-center px-4 sm:px-6 lg:px-12 relative overflow-hidden font-sans pt-24 pb-24 transition-colors duration-500"
    >
      {/* Exact Hero Glow Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[55%] h-[55%] rounded-full bg-[#7DA0CA]/35 dark:bg-[#052659]/50 filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[0%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#5483B3]/25 dark:bg-[#052659]/40 filter blur-[140px] pointer-events-none" />

      {/* Exact Hero 3D Interactive Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 w-full h-full" />

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
                Core Capabilities
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#021024] dark:text-[#C1E8FF] tracking-tight leading-[1.08]">
              Engineering & <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#052659] via-[#5483B3] to-[#021024] dark:from-[#7DA0CA] dark:via-[#5483B3] dark:to-[#C1E8FF]">Automations.</span>
            </h2>
          </div>

          <p className="text-[#052659]/80 dark:text-[#7DA0CA] text-sm sm:text-base max-w-xs font-normal leading-relaxed">
            High-converting digital web systems paired with autonomous 24/7 backend automation.
          </p>
        </div>

        {/* Compact Pill Cards Container */}
        <div className="flex flex-col sm:flex-row gap-4 h-auto sm:h-[380px] w-full">
          {services.map((item) => {
            const isActive = activeId === item.id;
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                onMouseEnter={() => setActiveId(item.id)}
                onClick={() => setActiveId(item.id)}
                layout
                transition={{ type: "spring", stiffness: 280, damping: 28 }}
                className={`group relative rounded-[2rem] overflow-hidden cursor-pointer border transition-all duration-300 ${
                  isActive
                    ? 'border-[#5483B3] dark:border-[#7DA0CA]/60 bg-white/85 dark:bg-[#052659]/75 sm:flex-[2.6] shadow-[0_12px_35px_rgba(5,38,89,0.12)] dark:shadow-[0_15px_40px_rgba(2,16,36,0.6)]'
                    : 'border-[#5483B3]/25 dark:border-[#5483B3]/20 bg-white/40 dark:bg-[#052659]/25 hover:bg-white/60 dark:hover:bg-[#052659]/40 sm:flex-1'
                } backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between`}
              >
                {/* Top: Number & Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold tracking-widest text-[#5483B3] dark:text-[#7DA0CA]">
                    {item.number}
                  </span>

                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                    isActive 
                      ? 'bg-[#021024] text-[#C1E8FF] dark:bg-[#C1E8FF] dark:text-[#021024]' 
                      : 'bg-[#5483B3]/15 text-[#052659] dark:text-[#7DA0CA]'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Collapsed State: Vertical Text on Desktop */}
                {!isActive && (
                  <div className="hidden sm:flex flex-1 items-center justify-center my-4">
                    <span className="font-semibold text-xs tracking-[0.2em] text-[#052659]/80 dark:text-[#7DA0CA] uppercase whitespace-nowrap rotate-[-90deg]">
                      {item.shortLabel}
                    </span>
                  </div>
                )}

                {/* Inactive State on Mobile */}
                {!isActive && (
                  <div className="sm:hidden my-3">
                    <h3 className="font-serif text-lg text-[#021024] dark:text-[#C1E8FF]">
                      {item.title}
                    </h3>
                  </div>
                )}

                {/* Expanded State Content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="mt-4 flex flex-col justify-end"
                    >
                      <span className="text-[10px] font-bold tracking-[0.25em] text-[#5483B3] dark:text-[#7DA0CA] uppercase mb-1">
                        {item.tag}
                      </span>

                      <h3 className="text-2xl sm:text-3xl font-serif text-[#021024] dark:text-[#C1E8FF] tracking-tight mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#052659]/80 dark:text-[#7DA0CA] font-normal leading-relaxed mb-5 max-w-sm">
                        {item.desc}
                      </p>

                      <div>
                        <Link 
                          href="/contact"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#021024] text-[#C1E8FF] dark:bg-[#C1E8FF] dark:text-[#021024] text-xs font-semibold shadow-sm hover:scale-[1.03] transition-all"
                        >
                          <span>Start building</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}