'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-white flex flex-col items-center py-24 border-t border-black selection:bg-[#D4AF37] selection:text-white">
      <div className="w-full max-w-7xl px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Copy & VIP WhatsApp Connect */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="uppercase tracking-widest text-[11px] font-bold text-[#D4AF37] mb-6 border border-[#D4AF37]/30 px-5 py-1.5 rounded-full inline-block">
                Start A Project
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-black tracking-tighter leading-[1.05] mb-6">
                Let's engineer <br />
                <span className="text-black/30">your next</span> <br />
                advantage.
              </h2>
              <p className="text-base text-black/70 font-medium leading-relaxed max-w-md mb-12">
                Ready to automate your workflows or build a highly scalable web architecture? Fill out the form, or use our priority direct line below.
              </p>

              {/* THE AMAZING WHATSAPP UI (VIP Direct Line) */}
              <a 
                href="https://wa.me/YOUR_PHONE_NUMBER" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-full max-w-md flex flex-col p-6 bg-[#0a0a0a] border border-black/10 overflow-hidden hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-500 mb-6"
              >
                {/* Subtle Gold Hover Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 via-transparent to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {/* Custom Minimalist WhatsApp Icon */}
                    <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center border border-[#25D366]/20 group-hover:bg-[#25D366] transition-colors duration-500">
                      <svg className="w-5 h-5 text-[#25D366] group-hover:text-black transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm tracking-wide">Priority Direct Line</h4>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#25D366]"></span>
                        </span>
                        <span className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Engineers Online</span>
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-[#D4AF37] group-hover:rotate-45 transition-all duration-500" />
                </div>
                
                <p className="relative z-10 text-xs text-white/60 font-medium leading-relaxed">
                  Skip the form. Drop a voice note or message directly to our lead engineering team on WhatsApp for an instant technical consultation.
                </p>
                
                {/* Bottom Animated Gold Line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#D4AF37] group-hover:w-full transition-all duration-500 ease-out"></div>
              </a>

              {/* Alternative Email Option */}
              <a href="mailto:hello@nevoralabs.online" className="inline-flex items-center gap-2 text-[11px] font-bold text-black/50 uppercase tracking-widest hover:text-[#D4AF37] transition-colors">
                <Mail className="w-3.5 h-3.5" />
                Or send us an email directly
              </a>

            </motion.div>
          </div>

          {/* Right Column: Premium Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <form className="flex flex-col gap-6 bg-white p-8 md:p-12 border border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(212,175,55,1)] transition-shadow duration-300 relative z-10">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-black uppercase tracking-widest">Full Name *</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-transparent border-b border-black/20 pb-3 text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-[#D4AF37] transition-colors rounded-none" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-black uppercase tracking-widest">Work Email *</label>
                  <input type="email" placeholder="john@company.com" className="w-full bg-transparent border-b border-black/20 pb-3 text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-[#D4AF37] transition-colors rounded-none" required />
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-2">
                <label className="text-[10px] font-bold text-black uppercase tracking-widest">Company / Brand Name</label>
                <input type="text" placeholder="Elevate Commerce LLC" className="w-full bg-transparent border-b border-black/20 pb-3 text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-[#D4AF37] transition-colors rounded-none" />
              </div>

              <div className="flex flex-col gap-2 mt-2">
                <label className="text-[10px] font-bold text-black uppercase tracking-widest">Estimated Budget *</label>
                <select className="w-full bg-transparent border-b border-black/20 pb-3 text-sm text-black focus:outline-none focus:border-[#D4AF37] transition-colors cursor-pointer appearance-none rounded-none">
                  <option value="" disabled selected>Select a range</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 mt-2">
                <label className="text-[10px] font-bold text-black uppercase tracking-widest">Project Scope *</label>
                <textarea rows="4" placeholder="Tell us about your technical requirements, goals, and timeline..." className="w-full bg-transparent border-b border-black/20 pb-3 text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none rounded-none" required></textarea>
              </div>

              <button type="submit" className="group mt-6 w-full flex items-center justify-between px-8 py-5 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
                <span>Submit Request</span>
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}