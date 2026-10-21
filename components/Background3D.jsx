'use client';
import { motion } from 'framer-motion';

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-white">
      
      {/* Subtle Gold Ambient Glow in the center/top */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.07),transparent_70%)] blur-3xl"></div>

      {/* 3D Perspective Container */}
      <div 
        className="absolute inset-0 flex items-end justify-center"
        style={{ perspective: '1000px' }}
      >
        {/* The Moving 3D Grid Floor */}
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
            // Ye rotateX isko 3D mein floor jaisa lita dega
            transform: 'rotateX(75deg) translateY(100px) translateZ(-200px)', 
            transformOrigin: 'top center',
          }}
        />
      </div>

      {/* Gradient Mask (Fades the grid smoothly into white at the top & edges) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_0%,#ffffff_40%,transparent_100%)]"></div>
      
      {/* Bottom fade so it doesn't look cut off */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}