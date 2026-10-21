'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white pt-24 pb-8 px-6 md:px-12 border-t border-black selection:bg-[#D4AF37] selection:text-black">
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        
        {/* Top Section: Massive Email CTA */}
        <div className="mb-24 flex flex-col items-start">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-widest text-[11px] font-bold text-[#D4AF37] mb-6"
          >
            Start A Conversation
          </motion.p>
          <motion.a 
            href="mailto:hello@nevoralabs.online"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group flex items-center gap-4 text-4xl md:text-6xl lg:text-[5rem] font-black tracking-tighter hover:text-[#D4AF37] transition-colors duration-500 leading-none"
          >
            hello@nevoralabs.online
            <ArrowUpRight className="w-10 h-10 md:w-16 md:h-16 text-[#D4AF37] opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
          </motion.a>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24 pb-12 border-b border-white/20">
          
          {/* Brand Column */}
          <div className="md:col-span-1 flex flex-col">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="flex h-8 w-8 items-center justify-center bg-white text-black font-black text-lg group-hover:bg-[#D4AF37] transition-colors duration-300">
                N
              </div>
              <span className="text-xl font-black tracking-tighter text-white uppercase">
                Nevora <span className="text-white/60">Labs</span>
              </span>
            </Link>
            <p className="text-sm text-white/50 font-medium leading-relaxed max-w-xs mb-6">
              Engineering scalable, AI-driven digital architectures with a jeweler's obsession for precision.
            </p>
            <div className="flex flex-wrap gap-2">
              {['USA', 'UK', 'AU', 'UAE'].map((loc) => (
                <span key={loc} className="text-[10px] uppercase tracking-widest font-bold border border-white/20 px-3 py-1 rounded-full text-white/70">
                  {loc}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] uppercase tracking-widest font-bold text-[#D4AF37] mb-2">Navigation</h4>
            {['Expertise', 'Selected Works', 'Our Process', 'Agency'].map((link) => (
              <Link key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-sm font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors duration-300 w-fit">
                {link}
              </Link>
            ))}
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] uppercase tracking-widest font-bold text-[#D4AF37] mb-2">Social</h4>
            {['LinkedIn', 'Twitter / X', 'GitHub', 'Instagram'].map((social) => (
              <a key={social} href="#" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors duration-300 w-fit">
                {social}
                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-[#D4AF37]" />
              </a>
            ))}
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] uppercase tracking-widest font-bold text-[#D4AF37] mb-2">Legal</h4>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((legal) => (
              <Link key={legal} href="#" className="text-sm font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors duration-300 w-fit">
                {legal}
              </Link>
            ))}
          </div>

        </div>

        {/* Bottom Section: Copyright & Massive Text */}
        <div className="flex flex-col items-center overflow-hidden">
          <div className="w-full flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest font-bold text-white/40 mb-8">
            <span>© {currentYear} Nevora Labs. All Rights Reserved.</span>
            <span className="mt-4 md:mt-0">Built with Next.js & Precision</span>
          </div>
          
          {/* Giant Background Text for premium feel */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[15vw] leading-none font-black tracking-tighter text-white/5 uppercase select-none w-full text-center"
          >
            NEVORA
          </motion.div>
        </div>

      </div>
    </footer>
  );
}