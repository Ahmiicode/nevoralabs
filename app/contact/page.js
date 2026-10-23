'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan aap apni form submission logic (EmailJS, API route, ya WhatsApp redirect) add kar sakte hain
    setSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen bg-[#FAFAF8] pt-32 pb-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="w-full max-w-4xl mx-auto">
        
        {/* Back to Home Link */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link href="/" className="text-xs font-semibold tracking-wider text-gray-400 hover:text-black transition-colors uppercase">
            ← Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h4 className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-black/40 uppercase mb-4">
            Start A Project
          </h4>
          <h1 className="text-4xl sm:text-6xl font-serif text-[#111111] tracking-tight leading-[1.1] mb-6">
            Let's build something <br />
            <span className="italic text-[#2C4A3B]">exceptional together.</span>
          </h1>
          <p className="text-gray-500 text-base sm:text-lg font-light max-w-xl leading-relaxed">
            Fill out the details below or reach out directly. We respond to all inquiries within 24 hours with a clear plan.
          </p>
        </motion.div>

        {/* Contact Container (Form + Direct Info) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left: Direct Contact Info (1 Col) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1 flex flex-col gap-8 bg-white rounded-3xl p-8 border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.02)] h-fit"
          >
            <div>
              <span className="text-[11px] font-semibold tracking-widest text-gray-400 uppercase block mb-1">Direct Email</span>
              <a href="mailto:hello@nevoralabs.com" className="text-base font-medium text-[#111111] hover:underline">
                hello@nevoralabs.com
              </a>
            </div>

            <div>
              <span className="text-[11px] font-semibold tracking-widest text-gray-400 uppercase block mb-1">Priority Line</span>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-[#111111] hover:underline flex items-center gap-1">
                WhatsApp Chat <ArrowUpRight className="w-4 h-4 text-gray-400" />
              </a>
            </div>

            <div>
              <span className="text-[11px] font-semibold tracking-widest text-gray-400 uppercase block mb-1">Global Base</span>
              <p className="text-sm text-gray-600 font-light">
                UK • US • Pakistan • Operating Worldwide
              </p>
            </div>
          </motion.div>

          {/* Right: The Minimal Form (2 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-white rounded-3xl p-8 sm:p-12 border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
          >
            {submitted ? (
              <div className="py-16 text-center flex flex-col items-center justify-center">
                <CheckCircle2 className="w-16 h-16 text-[#2C4A3B] mb-4" />
                <h3 className="text-2xl font-serif text-[#111111] mb-2">Message Received</h3>
                <p className="text-gray-500 font-light max-w-sm mb-8">
                  Thank you for reaching out. Our engineering team will review your requirements and get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 bg-[#111111] text-white text-xs font-medium rounded-full hover:bg-black/80 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">Your Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="John Doe" 
                      className="w-full bg-[#FAFAF8] border border-black/10 rounded-xl px-4 py-3.5 text-sm text-[#111111] placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors" 
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">Work Email *</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="john@company.com" 
                      className="w-full bg-[#FAFAF8] border border-black/10 rounded-xl px-4 py-3.5 text-sm text-[#111111] placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">Service Needed</label>
                    <select className="w-full bg-[#FAFAF8] border border-black/10 rounded-xl px-4 py-3.5 text-sm text-[#111111] focus:outline-none focus:border-black transition-colors cursor-pointer">
                      <option value="ai">AI Automations (n8n)</option>
                      <option value="web">Website Development (Next.js)</option>
                      <option value="ecommerce">E-Commerce / Shopify</option>
                      <option value="other">Custom Full-Stack Project</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">Estimated Budget</label>
                    <select className="w-full bg-[#FAFAF8] border border-black/10 rounded-xl px-4 py-3.5 text-sm text-[#111111] focus:outline-none focus:border-black transition-colors cursor-pointer">
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k+">$25,000+</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">Project Details *</label>
                  <textarea 
                    rows="4" 
                    required 
                    placeholder="Tell us about your goals, current bottlenecks, or project scope..." 
                    className="w-full bg-[#FAFAF8] border border-black/10 rounded-xl p-4 text-sm text-[#111111] placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="mt-2 w-full py-4 bg-[#111111] text-white text-[15px] font-medium rounded-full hover:bg-black/80 transition-all duration-300 shadow-sm flex items-center justify-center gap-2 group"
                >
                  <span>Submit Request</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

              </form>
            )}
          </motion.div>

        </div>

      </div>
    </div>
  );
}