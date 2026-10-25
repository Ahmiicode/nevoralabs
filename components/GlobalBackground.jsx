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

    // 1. Constellation Grid Nodes
    const nodeCount = 42;
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

    // 2. Real Floating 3D Glass Bubbles (Image 2 Replica)
    const bubbleCount = 18;
    const bubbles = [];
    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 32 + 18, // 18px to 50px bubbles
        wobble: Math.random() * Math.PI,
        wobbleSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    // 3. Deep Ambient Soft Bokeh Orbs (Image 1 Glows)
    const bokehCount = 10;
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

      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      const darkNow = document.documentElement.classList.contains('dark');

      // -------------------------------------------------------------
      // LAYER 1: Deep Soft Glow Bokeh (Out-of-focus background light)
      // -------------------------------------------------------------
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
          grad.addColorStop(0.5, `rgba(2, 132, 199, ${b.alpha * 0.6})`);
          grad.addColorStop(1, 'rgba(2, 16, 36, 0)');
        } else {
          grad.addColorStop(0, `rgba(186, 230, 253, ${b.alpha * 2})`);
          grad.addColorStop(0.6, `rgba(224, 242, 254, ${b.alpha})`);
          grad.addColorStop(1, 'rgba(240, 249, 255, 0)');
        }

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // -------------------------------------------------------------
      // LAYER 2: Constellation Mesh Physics & Connecting Lines
      // -------------------------------------------------------------
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        n.pulseVal += n.pulseSpeed;

        if (n.x < 15 || n.x > width - 15) n.vx *= -1;
        if (n.y < 15 || n.y > height - 15) n.vy *= -1;

        if (mouse.active) {
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

      // Connect constellation lines
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

      // Cursor connecting lines
      if (mouse.active) {
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * 0.38;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = darkNow
              ? `rgba(56, 189, 248, ${alpha})`
              : `rgba(84, 131, 179, ${alpha})`;
            ctx.lineWidth = 1.1;
            ctx.stroke();
          }
        }
      }

      // Nodes drawing
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const pulse = (Math.sin(n.pulseVal) + 1) / 2;

        if (darkNow) {
          if (n.isGlowing) {
            const glowR = n.radius * (4 + pulse * 2);
            const aura = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowR);
            aura.addColorStop(0, 'rgba(56, 189, 248, 0.7)');
            aura.addColorStop(1, 'rgba(2, 16, 36, 0)');
            ctx.fillStyle = aura;
            ctx.beginPath();
            ctx.arc(n.x, n.y, glowR, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
          ctx.fillStyle = n.isGlowing ? '#E0F2FE' : '#38BDF8';
          ctx.fill();
        } else {
          // Light Mode: 3D Porcelain Spheres
          if (n.isGlowing) {
            const glowR = n.radius * 3.5;
            const aura = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowR);
            aura.addColorStop(0, 'rgba(56, 189, 248, 0.45)');
            aura.addColorStop(1, 'rgba(215, 240, 255, 0)');
            ctx.fillStyle = aura;
            ctx.beginPath();
            ctx.arc(n.x, n.y, glowR, 0, Math.PI * 2);
            ctx.fill();
          }
          // Soft 3D bead shadow
          ctx.beginPath();
          ctx.arc(n.x + 0.8, n.y + 0.9, n.radius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(84, 131, 179, 0.16)';
          ctx.fill();

          // Bead Body
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
          ctx.fillStyle = n.isGlowing ? '#38BDF8' : '#FFFFFF';
          ctx.fill();
          ctx.lineWidth = 0.8;
          ctx.strokeStyle = n.isGlowing ? '#0284C7' : 'rgba(125, 160, 202, 0.5)';
          ctx.stroke();
        }
      }

      // -------------------------------------------------------------
      // LAYER 3: 3D Frosted Glass Bubbles (Floating Spheres from Image)
      // -------------------------------------------------------------
      for (let i = 0; i < bubbles.length; i++) {
        const bub = bubbles[i];
        bub.x += bub.vx;
        bub.y += bub.vy;
        bub.wobble += bub.wobbleSpeed;

        // Wrap around viewport edges smoothly
        if (bub.x < -bub.radius * 2) bub.x = width + bub.radius * 2;
        if (bub.x > width + bub.radius * 2) bub.x = -bub.radius * 2;
        if (bub.y < -bub.radius * 2) bub.y = height + bub.radius * 2;
        if (bub.y > height + bub.radius * 2) bub.y = -bub.radius * 2;

        // Gentle floating wobble
        const currentR = bub.radius + Math.sin(bub.wobble) * 1.5;

        // Mouse repelling physics for bubbles
        if (mouse.active) {
          const dx = bub.x - mouse.x;
          const dy = bub.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 0.05;
            bub.x += dx * force;
            bub.y += dy * force;
          }
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(bub.x, bub.y, currentR, 0, Math.PI * 2);

        if (darkNow) {
          // Dark Mode: Glowing Cyan Bubble / Energy Orb
          const orbGrad = ctx.createRadialGradient(
            bub.x - currentR * 0.3,
            bub.y - currentR * 0.3,
            currentR * 0.1,
            bub.x,
            bub.y,
            currentR
          );
          orbGrad.addColorStop(0, 'rgba(125, 211, 252, 0.55)');
          orbGrad.addColorStop(0.5, 'rgba(14, 165, 233, 0.25)');
          orbGrad.addColorStop(0.85, 'rgba(2, 132, 199, 0.15)');
          orbGrad.addColorStop(1, 'rgba(2, 16, 36, 0.05)');

          ctx.fillStyle = orbGrad;
          ctx.fill();

          ctx.lineWidth = 1;
          ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
          ctx.stroke();
        } else {
          // Light Mode: 3D Frosted Glass Bubble (Exact Image 2 Replica)
          // 1. Soft Ambient Drop Shadow under the bubble
          ctx.shadowColor = 'rgba(84, 131, 179, 0.22)';
          ctx.shadowBlur = 12;
          ctx.shadowOffsetX = 3;
          ctx.shadowOffsetY = 5;

          // 2. Glass Base Gradient
          const glassGrad = ctx.createRadialGradient(
            bub.x - currentR * 0.35,
            bub.y - currentR * 0.35,
            currentR * 0.15,
            bub.x,
            bub.y,
            currentR
          );
          glassGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
          glassGrad.addColorStop(0.35, 'rgba(235, 248, 255, 0.75)');
          glassGrad.addColorStop(0.7, 'rgba(186, 230, 253, 0.5)');
          glassGrad.addColorStop(1, 'rgba(147, 197, 253, 0.35)');

          ctx.fillStyle = glassGrad;
          ctx.fill();

          // Reset shadow for clean border
          ctx.shadowColor = 'transparent';

          // 3. Delicate Glass Rim Edge
          ctx.lineWidth = 1;
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
          ctx.stroke();

          // 4. Crescent Surface Highlight (Shine reflection on glass bubble)
          ctx.beginPath();
          ctx.arc(
            bub.x - currentR * 0.3,
            bub.y - currentR * 0.35,
            currentR * 0.3,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
          ctx.fill();
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
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden transition-colors duration-700 bg-gradient-to-br from-[#EDF7FF] via-[#E2F2FD] to-[#D0EBFC] dark:from-[#010915] dark:via-[#021024] dark:to-[#031B3D]">
      
      {/* Light Mode Soft Glow Vignettes */}
      <div className="dark:hidden absolute top-[-5%] left-[-5%] w-[60vw] h-[60vw] rounded-full bg-[#BEE5FF]/45 filter blur-[130px]" />
      <div className="dark:hidden absolute bottom-[5%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-[#A8DEFF]/35 filter blur-[150px]" />

      {/* Dark Mode Glowing Neon Auras */}
      <div className="hidden dark:block absolute top-[15%] left-[5%] w-[45vw] h-[45vw] rounded-full bg-[#032B69]/55 filter blur-[140px]" />
      <div className="hidden dark:block absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-[#00519E]/35 filter blur-[160px]" />
      <div className="hidden dark:block absolute top-[-10%] right-[20%] w-[35vw] h-[35vw] rounded-full bg-[#0284C7]/20 filter blur-[120px]" />

      {/* Single 3D Global Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}