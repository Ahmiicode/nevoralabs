'use client';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, Check, ArrowRight } from 'lucide-react';

const painPoints = [
  {
    title: "Bloated, Slow-Loading Websites",
    desc: "Heavy templates & plugins driving bounce rates through the roof"
  },
  {
    title: "Manual, Repetitive Operations",
    desc: "Hours wasted copying leads manually across sheets and CRMs"
  },
  {
    title: "Fragile Spaghetti Codebases",
    desc: "Sites that break on simple updates and fail to scale with traffic"
  },
  {
    title: "Low Visitor-to-Lead Conversion",
    desc: "Friction-heavy layouts that confuse and lose high-value prospects"
  },
  {
    title: "Disjointed Tech & Broken Pipelines",
    desc: "Siloed tools with zero automation or real-time notification flows"
  }
];

const solutions = [
  {
    title: "High-Speed Next.js Architectures",
    desc: "Sub-second load times engineered for peak conversions and SEO"
  },
  {
    title: "Automated n8n & AI Workflows",
    desc: "Autonomous lead scoring, webhook routing, and instant CRM sync"
  },
  {
    title: "Clean, Scalable Full-Stack Builds",
    desc: "Maintainable modern codebases built to scale smoothly as you grow"
  },
  {
    title: "Conversion-Focused Micro-UI",
    desc: "Frictionless interactive journeys that turn traffic into retained clients"
  },
  {
    title: "24/7 Autopilot Systems",
    desc: "Self-monitoring cloud pipelines that close deals while you sleep"
  }
];

export default function TransformationSection() {
  const canvasRef = useRef(null);

  // Hero Section wala exact 3D Cursor Constellation Background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || 900);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const mouse = { x: width / 2, y: height / 2, active: false, radius: 220 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const handleMouseLeave = () => { mouse.active = false; };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const dots = [];
    const dotCount = 24;
    for (let i = 0; i < dotCount; i++) {
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 2 + 1.2,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Node physics
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 15 || d.x > width - 15) d.vx *= -1;
        if (d.y < 15 || d.y > height - 15) d.vy *= -1;

        if (mouse.active) {
          const dx = mouse.x - d.x;
          const dy = mouse.y - d.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 0.08;
            d.x += dx * force * 0.2;
            d.y += dy * force * 0.2;
          }
        }
      }

      // Connecting lines
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(84, 131, 179, ${0.16 * (1 - dist / 180)})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      // Cursor lines
      if (mouse.active) {
        for (let i = 0; i < dots.length; i++) {
          const d = dots[i];
          const dx = mouse.x - d.x;
          const dy = mouse.y - d.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * 0.28;
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(5, 38, 89, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw dots
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
        ctx.fillStyle = i % 2 === 0 ? 'rgba(125, 160, 202, 0.45)' : 'rgba(84, 131, 179, 0.35)';
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
    <section className="w-full bg-transparent py-24 sm:py-32 px-4 sm:px-6 lg:px-12 font-sans relative overflow-hidden transition-colors duration-500">
      
      {/* Hero Atmosphere Glow Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[55%] h-[55%] rounded-full bg-[#7DA0CA]/35 dark:bg-[#052659]/50 filter blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[0%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#5483B3]/25 dark:bg-[#052659]/40 filter blur-[140px] pointer-events-none" />

      {/* 3D Interactive Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 w-full h-full" />

      {/* Watermark "ELEVATE" Background Header */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center pointer-events-none select-none z-0">
        <span className="text-7xl sm:text-9xl font-black tracking-[0.25em] text-[#5483B3]/10 dark:text-[#C1E8FF]/5 uppercase font-sans">
          ELEVATE
        </span>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#5483B3]/30 bg-white/70 dark:bg-[#052659]/60 backdrop-blur-md shadow-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#052659] dark:bg-[#C1E8FF] animate-pulse"></span>
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#052659] dark:text-[#C1E8FF] uppercase">
              Digital Perfection
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-[#021024] dark:text-[#C1E8FF] tracking-tight leading-tight mb-4">
            In a digital world, <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#052659] via-[#5483B3] to-[#021024] dark:from-[#7DA0CA] dark:via-[#5483B3] dark:to-[#C1E8FF]">average gets ignored.</span>
          </h2>

          <p className="text-[#052659]/80 dark:text-[#7DA0CA] text-base sm:text-lg font-normal leading-relaxed">
            We help ambitious businesses scale beyond manual bottlenecks with bespoke engineering, clean code, and automations that actually convert.
          </p>
        </motion.div>

        {/* 3-Column Bridge Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 items-center">
          
          {/* LEFT: Outdated Path (Slides slowly from Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 bg-white/75 dark:bg-[#052659]/30 backdrop-blur-md rounded-[2rem] p-6 sm:p-8 border border-red-500/20 shadow-[0_10px_35px_rgba(5,38,89,0.06)] dark:shadow-none flex flex-col gap-6"
          >
            <div className="flex items-center justify-between pb-2 border-b border-red-500/15">
              <span className="text-xs font-semibold uppercase tracking-wider text-red-500/80">
                The Legacy Path
              </span>
              <span className="text-[11px] font-mono text-red-400">High Friction</span>
            </div>

            {painPoints.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-3.5"
              >
                <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-950/40 border border-red-400/30 flex items-center justify-center shrink-0 mt-0.5 text-red-500">
                  <X className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-[15px] font-semibold text-[#021024] dark:text-[#C1E8FF]">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#052659]/75 dark:text-[#7DA0CA] font-normal leading-relaxed">
                    ({item.desc})
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CENTER: Animated Arrow & NevoraLabs Wordmark (Gently Pops In) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-1 flex lg:flex-col items-center justify-center gap-3 my-2 lg:my-0"
          >
            <span className="text-[#5483B3] dark:text-[#7DA0CA] animate-pulse">
              <ArrowRight className="w-5 h-5 rotate-90 lg:rotate-0" />
            </span>

            <div className="px-4 py-2.5 rounded-2xl bg-[#021024] text-[#C1E8FF] dark:bg-[#C1E8FF] dark:text-[#021024] font-medium tracking-wider shadow-[0_4px_20px_rgba(2,16,36,0.3)] dark:shadow-[0_0_20px_rgba(193,232,255,0.3)] text-center text-xs sm:text-sm whitespace-nowrap">
              Nevora<span className="font-light opacity-80">labs</span>
            </div>

            <span className="text-[#5483B3] dark:text-[#7DA0CA] animate-pulse">
              <ArrowRight className="w-5 h-5 rotate-90 lg:rotate-0" />
            </span>
          </motion.div>

          {/* RIGHT: The NevoraLabs Way (Slides slowly from Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 bg-white/90 dark:bg-[#052659]/60 backdrop-blur-md rounded-[2rem] p-6 sm:p-8 border border-emerald-500/30 shadow-[0_15px_40px_rgba(5,38,89,0.12)] dark:shadow-[0_15px_40px_rgba(2,16,36,0.6)] flex flex-col gap-6"
          >
            <div className="flex items-center justify-between pb-2 border-b border-emerald-500/20">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                The Nevoralabs Way
              </span>
              <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">Peak Performance</span>
            </div>

            {solutions.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-3.5"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950/40 border border-emerald-400/40 flex items-center justify-center shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-[15px] font-semibold text-[#021024] dark:text-[#C1E8FF]">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#052659]/80 dark:text-[#7DA0CA] font-normal leading-relaxed">
                    ({item.desc})
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}