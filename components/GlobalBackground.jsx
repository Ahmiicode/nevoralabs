'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

export default function GlobalBackground() {
  const canvasRef = useRef(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    // Mobile par height sirf first screen (home section height) tak limit kar dein, desktop par full window
    let height = (canvas.height = window.innerWidth < 768 ? window.innerHeight : window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerWidth < 768 ? window.innerHeight : window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      active: false,
      radius: 260,
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // 1. Constellation Grid Nodes (Mobile par count kam rakha hai taake lag bilkul na ho)
    const isMobile = window.innerWidth < 768;
    const nodeCount = isMobile ? 20 : 42;
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 2.2 + 1.8,
        isGlowing: Math.random() > 0.65,
        pulseVal: Math.random() * Math.PI,
        pulseSpeed: Math.random() * 0.025 + 0.015,
      });
    }

    // 2. Real Floating 3D Glass Bubbles
    const bubbleCount = isMobile ? 6 : 18;
    const bubbles = [];
    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 32 + 18,
        wobble: Math.random() * Math.PI,
        wobbleSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    // 3. Deep Ambient Soft Bokeh Orbs
    const bokehCount = isMobile ? 4 : 10;
    const bokehs = [];
    for (let i = 0; i < bokehCount; i++) {
      bokehs.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        radius: Math.random() * 90 + 50,
        alpha: Math.random() * 0.16 + 0.08,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      const darkNow = document.documentElement.classList.contains('dark');

      // LAYER 1: Deep Soft Glow Bokeh
      for (let i = 0; i < bokehs.length; i++) {
        const b = bokehs[i];
        b.x += b.vx;
        b.y += b.vy;

        if (b.x < -120) b.x = width + 120;
        if (b.x > width + 120) b.x = -120;
        if (b.y < -120) b.y = height + 120;
        if (b.y > height + 120) b.y = -120;

        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.radius);
        if (darkNow) {
          grad.addColorStop(0, `rgba(14, 165, 233, ${b.alpha * 1.5})`);
          grad.addColorStop(1, 'rgba(2, 16, 36, 0)');
        } else {
          grad.addColorStop(0, `rgba(186, 230, 253, ${b.alpha * 2})`);
          grad.addColorStop(1, 'rgba(240, 249, 255, 0)');
        }

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // LAYER 2: Constellation Mesh Physics & Connecting Lines
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        n.pulseVal += n.pulseSpeed;

        if (n.x < 15 || n.x > width - 15) n.vx *= -1;
        if (n.y < 15 || n.y > height - 15) n.vy *= -1;

        if (mouse.active && !isMobile) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 0.08;
            n.x += dx * force * 0.2;
            n.y += dy * force * 0.2;
          }
        }
      }

      const maxDist = 180;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const ratio = 1 - dist / maxDist;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);

            if (darkNow) {
              const isHighlight = nodes[i].isGlowing || nodes[j].isGlowing;
              ctx.strokeStyle = isHighlight
                ? `rgba(56, 189, 248, ${0.35 * ratio})`
                : `rgba(14, 165, 233, ${0.16 * ratio})`;
              ctx.lineWidth = isHighlight ? 1.1 : 0.8;
            } else {
              ctx.strokeStyle = `rgba(125, 160, 202, ${0.28 * ratio})`;
              ctx.lineWidth = 0.9;
            }
            ctx.stroke();
          }
        }
      }

      // Nodes drawing
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = darkNow ? (n.isGlowing ? '#E0F2FE' : '#38BDF8') : '#FFFFFF';
        ctx.fill();
      }

      // LAYER 3: 3D Frosted Glass Bubbles
      for (let i = 0; i < bubbles.length; i++) {
        const bub = bubbles[i];
        bub.x += bub.vx;
        bub.y += bub.vy;
        bub.wobble += bub.wobbleSpeed;

        if (bub.x < -bub.radius * 2) bub.x = width + bub.radius * 2;
        if (bub.x > width + bub.radius * 2) bub.x = -bub.radius * 2;
        if (bub.y < -bub.radius * 2) bub.y = height + bub.radius * 2;
        if (bub.y > height + bub.radius * 2) bub.y = -bub.radius * 2;

        const currentR = bub.radius + Math.sin(bub.wobble) * 1.5;

        ctx.save();
        ctx.beginPath();
        ctx.arc(bub.x, bub.y, currentR, 0, Math.PI * 2);

        if (darkNow) {
          const orbGrad = ctx.createRadialGradient(
            bub.x - currentR * 0.3,
            bub.y - currentR * 0.3,
            currentR * 0.1,
            bub.x,
            bub.y,
            currentR
          );
          orbGrad.addColorStop(0, 'rgba(125, 211, 252, 0.55)');
          orbGrad.addColorStop(1, 'rgba(2, 16, 36, 0.05)');
          ctx.fillStyle = orbGrad;
          ctx.fill();
          ctx.lineWidth = 1;
          ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
          ctx.stroke();
        } else {
          const glassGrad = ctx.createRadialGradient(
            bub.x - currentR * 0.35,
            bub.y - currentR * 0.35,
            currentR * 0.15,
            bub.x,
            bub.y,
            currentR
          );
          glassGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
          glassGrad.addColorStop(0.5, 'rgba(215, 248, 255, 0.75)');
          glassGrad.addColorStop(1, 'rgba(147, 197, 253, 0.35)');

          ctx.fillStyle = glassGrad;
          ctx.fill();
          ctx.lineWidth = 1;
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
          ctx.stroke();
        }
        ctx.restore();
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
  }, [mounted, resolvedTheme]);

  return (
    <div className="absolute md:fixed inset-0 pointer-events-none -z-10 overflow-hidden transition-colors duration-700 bg-gradient-to-br from-[#EDF7FF] via-[#E2F2FD] to-[#D0EBFC] dark:from-[#010915] dark:via-[#021024] dark:to-[#031B3D]">
      
      {/* Soft Glow Vignettes */}
      <div className="dark:hidden absolute top-[-5%] left-[-5%] w-[60vw] h-[60vw] rounded-full bg-[#BEE5FF]/45 filter blur-[130px]" />
      <div className="hidden dark:block absolute top-[15%] left-[5%] w-[45vw] h-[45vw] rounded-full bg-[#032B69]/55 filter blur-[140px]" />

      {/* 
        Canvas Styling:
        - Mobile (`absolute h-screen`): Sirf home section tak restrict rahega.
        - Desktop (`md:fixed md:inset-0`): Poori website par fixed rahega jaisa pehle tha.
      */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-[100vh] md:h-full md:fixed md:inset-0" 
      />
    </div>
  );
}