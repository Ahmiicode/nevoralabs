'use client';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Globe, Workflow, Bot, Server } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { servicesData } from '@/data/servicesData';

const iconMap = {
  Globe: Globe,
  Workflow: Workflow,
  Bot: Bot,
  Server: Server,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServicesSection() {
  const canvasRef = useRef(null);
  const router = useRouter();

  // Background 3D Cursor Constellation Canvas
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
    for (let i = 0; i < 25; i++) {
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
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
      }

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(84, 131, 179, ${0.15 * (1 - dist / 200)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
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
    <section id="services" className="relative py-28 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] rounded-full bg-[#7DA0CA]/30 dark:bg-[#052659]/45 filter blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[0%] right-[-5%] w-[50%] h-[50%] rounded-full bg-[#5483B3]/20 dark:bg-[#052659]/35 filter blur-[130px] pointer-events-none" />

      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 w-full h-full" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#5483B3]/30 bg-white/70 dark:bg-[#052659]/60 backdrop-blur-md shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#5483B3] dark:text-[#C1E8FF]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-[#052659] dark:text-[#C1E8FF] uppercase">
              Core Capabilities
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#021024] dark:text-[#C1E8FF] tracking-tight max-w-2xl leading-[1.1]">
            Engineering & <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#052659] via-[#5483B3] to-[#021024] dark:from-[#7DA0CA] dark:via-[#5483B3] dark:to-[#C1E8FF]">Automations.</span>
          </h2>

          <p className="mt-4 text-[#052659]/80 dark:text-[#7DA0CA] text-sm sm:text-base max-w-xl font-normal leading-relaxed">
            High-converting digital web systems and autonomous backend automations built for scale.
          </p>
        </div>

        {/* 3 Columns Grid for Desktop (lg:grid-cols-3) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesData.map((item, index) => {
            const Icon = iconMap[item.iconName] || Globe;
            const formattedNumber = String(index + 1).padStart(2, '0');

            return (
              <motion.div
                key={item.slug}
                variants={cardVariants}
                onClick={() => router.push(`/services/${item.slug}`)}
                className="group relative rounded-[2rem] p-6 sm:p-8 bg-white/75 dark:bg-[#052659]/25 border border-[#5483B3]/25 dark:border-[#5483B3]/20 backdrop-blur-xl hover:border-[#5483B3] dark:hover:border-[#C1E8FF] hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(5,38,89,0.15)] transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden"
              >
                {/* Top glow animation on hover */}
                <div className="pointer-events-none absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#5483B3]/25 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#5483B3] dark:text-[#7DA0CA]">
                      {formattedNumber}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-[#021024] text-[#C1E8FF] dark:bg-[#C1E8FF] dark:text-[#021024] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[10px] font-bold tracking-[0.25em] text-[#5483B3] dark:text-[#7DA0CA] uppercase">
                    {item.category}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-serif text-[#021024] dark:text-[#C1E8FF] tracking-tight mt-1 mb-3 group-hover:text-[#5483B3] dark:group-hover:text-white transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#052659]/80 dark:text-[#7DA0CA] font-normal leading-relaxed mb-6">
                    {item.shortDesc}
                  </p>
                </div>

                {/* Bottom Action Footer with Clear Click Cue */}
                <div className="pt-4 border-t border-[#5483B3]/15 dark:border-[#5483B3]/20 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#5483B3] dark:text-[#7DA0CA]">
                    {item.timeline}
                  </span>

                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#021024] dark:text-[#C1E8FF] group-hover:translate-x-1 transition-transform bg-[#5483B3]/10 dark:bg-[#021024]/60 px-3 py-1.5 rounded-full border border-[#5483B3]/30">
                    <span>Open</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}