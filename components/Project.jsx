'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { projectsData } from '@/data/projectsData';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const canvasRef = useRef(null);

  const categories = ['All', 'AI & Automations', 'Web Development'];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  // Split projects into 2 rows for the two-line slider layout
  const midPoint = Math.ceil(filteredProjects.length / 2);
  const row1 = filteredProjects.slice(0, midPoint);
  const row2 = filteredProjects.slice(midPoint);

  // Background Canvas Animation
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

    const mouse = { x: width / 2, y: height / 2, active: false, radius: 260 };

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
    for (let i = 0; i < 28; i++) {
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

  const renderCard = (project, idx) => (
    <Link
      key={idx}
      href={`/work/${project.slug}`}
      className="group min-w-[300px] max-w-[300px] sm:min-w-[370px] sm:max-w-[370px] rounded-[2rem] p-4 sm:p-5 bg-white/85 dark:bg-[#052659]/35 border border-[#5483B3]/25 dark:border-[#5483B3]/20 backdrop-blur-xl hover:border-[#5483B3] dark:hover:border-[#C1E8FF] transition-all duration-300 flex flex-col justify-between shadow-xl shrink-0"
    >
      <div>
        {/* Sleek App Window Image Box */}
        {project.images?.[0] && (
          <div className="relative w-full h-40 sm:h-44 rounded-2xl overflow-hidden mb-4 bg-[#010915] border border-[#5483B3]/25 shadow-inner flex flex-col">
            {/* Mini Window Header */}
            <div className="px-3 py-1.5 bg-[#021024] border-b border-[#5483B3]/20 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500/80"></span>
                <span className="w-2 h-2 rounded-full bg-amber-500/80"></span>
                <span className="w-2 h-2 rounded-full bg-emerald-500/80"></span>
              </div>
              <span className="text-[9px] font-mono text-[#7DA0CA] uppercase tracking-wider">{project.category}</span>
            </div>
            
            {/* Image Preview Area */}
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#021024]/60 via-transparent to-transparent opacity-40" />
            </div>
          </div>
        )}

        <h3 className="text-base sm:text-lg font-serif font-bold text-[#021024] dark:text-white group-hover:text-[#5483B3] dark:group-hover:text-[#C1E8FF] transition-colors mb-1.5 line-clamp-1">
          {project.title}
        </h3>

        <p className="text-xs text-[#052659]/75 dark:text-[#7DA0CA] leading-relaxed mb-4 line-clamp-2">
          {project.tagline || project.description}
        </p>
      </div>

      <div>
        {/* Tech Tags */}
        <div className="pt-3 border-t border-[#5483B3]/15 flex flex-wrap gap-1.5 mb-3">
          {project.tech?.slice(0, 3).map((t, i) => (
            <span
              key={i}
              className="px-2.5 py-0.5 rounded-md bg-[#021024]/5 dark:bg-[#021024]/60 border border-[#5483B3]/20 text-[10px] font-mono text-[#021024] dark:text-[#C1E8FF]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Footer Link */}
        <div className="flex items-center justify-between text-xs font-semibold text-[#021024] dark:text-[#C1E8FF]">
          <span className="font-mono text-[9px] text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
            {project.status}
          </span>
          <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform font-medium text-xs">
            View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );

  return (
    <section 
      id="works" 
      className="min-h-screen bg-transparent relative overflow-hidden font-sans pt-28 pb-24 transition-colors duration-500 w-full"
    >
      {/* Glow Orbs */}
      <div className="absolute top-[10%] left-[-10%] w-[55%] h-[55%] rounded-full bg-[#7DA0CA]/35 dark:bg-[#052659]/50 filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#5483B3]/25 dark:bg-[#052659]/40 filter blur-[140px] pointer-events-none" />

      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 w-full h-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#5483B3]/30 bg-white/70 dark:bg-[#052659]/60 backdrop-blur-md shadow-sm mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#5483B3] dark:text-[#C1E8FF]" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-[#052659] dark:text-[#C1E8FF] uppercase">
            Selected Work & Deployments
          </span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#021024] dark:text-[#C1E8FF] tracking-tight max-w-3xl mx-auto leading-[1.1]">
          Recent <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#052659] via-[#5483B3] to-[#021024] dark:from-[#7DA0CA] dark:via-[#5483B3] dark:to-[#C1E8FF]">deployments.</span>
        </h2>

        <p className="mt-4 text-[#052659]/80 dark:text-[#7DA0CA] text-sm sm:text-base max-w-xl mx-auto font-normal leading-relaxed">
          AI automations and web platforms built for real operational scale. Explore our continuous deployment feed below.
        </p>

        {/* Category Filter Chips */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                filter === cat
                  ? 'bg-[#021024] text-[#C1E8FF] dark:bg-[#C1E8FF] dark:text-[#021024] shadow-lg'
                  : 'bg-white/60 dark:bg-[#052659]/30 text-[#052659] dark:text-[#7DA0CA] border border-[#5483B3]/25 hover:border-[#5483B3]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Auto-Moving Infinite Sliders (2 Lines) */}
      <div className="relative w-full overflow-hidden space-y-6 py-4">
        
        {/* ROW 1: Moves Left to Right / Continuous */}
        <div className="flex w-max animate-marquee space-x-6 hover:[animation-play-state:paused]">
          {[...row1, ...row1].map((project, idx) => renderCard(project, `r1-${idx}`))}
        </div>

        {/* ROW 2: Moves Right to Left / Continuous */}
        <div className="flex w-max animate-marquee-reverse space-x-6 hover:[animation-play-state:paused]">
          {[...row2, ...row2].map((project, idx) => renderCard(project, `r2-${idx}`))}
        </div>

      </div>
    </section>
  );
}