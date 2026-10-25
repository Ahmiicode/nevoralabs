'use client';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "CTO, Elevate Commerce",
    location: "New York, USA",
    verifiedScope: "MERN Stack & Next.js Architecture",
    metric: "+310% Peak Traffic Scaled",
    metricSub: "Zero downtime Black Friday deployment",
    text: "NevoraLabs rebuilt our core web infrastructure from the ground up. Their Next.js and custom database caching handled our highest traffic spike effortlessly. Pure engineering precision."
  },
  {
    id: 2,
    name: "James Carter",
    role: "Founder & CEO, FinEdge",
    location: "London, UK",
    verifiedScope: "Autonomous n8n & AI Pipelines",
    metric: "-42% Operational Overhead",
    metricSub: "14 hours saved weekly per broker",
    text: "We needed complex financial lead triage that legacy agencies couldn't figure out. NevoraLabs engineered an autonomous n8n pipeline with AI intent scoring that transformed our entire deal-flow."
  },
  {
    id: 3,
    name: "Sophie Laurent",
    role: "E-Comm Director, Maison Mode",
    location: "Paris, France",
    verifiedScope: "Headless Web & Micro-Interactions",
    metric: "99/100 Lighthouse Performance",
    metricSub: "Sub-second mobile checkout load",
    text: "Our brand requires an editorial luxury feel without sacrificing load times. The custom full-stack web build they delivered is fluid, conversion-optimized, and visually unmatched."
  },
  {
    id: 4,
    name: "Tariq Al-Fayed",
    role: "Managing Director, Desert Capital",
    location: "Riyadh, KSA",
    verifiedScope: "Full-Stack Portal & Security Systems",
    metric: "$2.4M Deal Volume Processed",
    metricSub: "Bank-grade auth & Supabase backend",
    text: "World-class Next.js execution. They delivered a secure institutional investment platform ahead of deadline, with clean documentation and responsive architecture."
  }
];

function ReviewCard({ review, index }) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-[2.2rem] p-7 sm:p-9 bg-white/75 dark:bg-[#052659]/35 backdrop-blur-md border border-[#5483B3]/25 dark:border-[#5483B3]/25 shadow-[0_10px_35px_rgba(5,38,89,0.06)] dark:shadow-[0_15px_45px_rgba(2,16,36,0.45)] hover:border-[#5483B3]/60 dark:hover:border-[#7DA0CA]/50 transition-all duration-500 flex flex-col justify-between"
    >
      {/* Interactive Cursor Spotlight Glow */}
      <span
        className="pointer-events-none absolute inset-0 rounded-[2.2rem] transition-opacity duration-300"
        style={{
          opacity: mousePos.opacity,
          background: `radial-gradient(circle 260px at ${mousePos.x}% ${mousePos.y}%, rgba(125, 160, 202, 0.18), transparent 75%)`,
        }}
      />

      <div className="relative z-10 flex flex-col">
        {/* Top Header: Metric & Stars */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-6 border-b border-[#5483B3]/20">
          <div>
            <div className="text-2xl sm:text-3xl font-serif text-[#021024] dark:text-[#C1E8FF] font-medium tracking-tight">
              {review.metric}
            </div>
            <div className="text-xs font-mono text-[#5483B3] dark:text-[#7DA0CA] mt-0.5">
              {review.metricSub}
            </div>
          </div>

          <div className="flex items-center gap-1 bg-[#052659]/5 dark:bg-white/5 px-3 py-1.5 rounded-full border border-black/5 dark:border-white/10 self-start sm:self-auto">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#052659] text-[#052659] dark:fill-[#C1E8FF] dark:text-[#C1E8FF]" />
            ))}
          </div>
        </div>

        {/* Scope Tag */}
        <div className="inline-flex items-center gap-1.5 text-[11px] font-mono tracking-wider text-[#5483B3] dark:text-[#7DA0CA] uppercase mb-4">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>{review.verifiedScope}</span>
        </div>

        {/* Review Quote Text */}
        <p className="text-[#052659]/85 dark:text-[#7DA0CA] text-[15px] sm:text-base font-normal leading-relaxed mb-8">
          "{review.text}"
        </p>
      </div>

      {/* Client Meta Info */}
      <div className="relative z-10 pt-5 border-t border-[#5483B3]/15 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-serif text-base sm:text-lg text-[#021024] dark:text-[#C1E8FF] tracking-tight">
            {review.name}
          </span>
          <span className="text-xs text-[#052659]/70 dark:text-[#7DA0CA]/70 font-normal">
            {review.role}
          </span>
        </div>

        <div className="text-right">
          <span className="text-[11px] font-mono text-[#5483B3] dark:text-[#7DA0CA] px-2.5 py-1 rounded-full bg-[#5483B3]/10 dark:bg-[#021024]/60 border border-[#5483B3]/25">
            {review.location}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ReviewsSection() {
  // SEO Schema Markup for Client Testimonials
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NevoraLabs",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": reviews.length.toString()
    },
    "review": reviews.map((r) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": r.name,
        "jobTitle": r.role
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": r.text
    }))
  };

  return (
    <section 
      id="reviews" 
      className="relative w-full bg-transparent py-24 sm:py-32 px-4 sm:px-6 lg:px-12 font-sans"
      aria-label="Client Testimonials and Impact Reviews"
    >
      {/* Injected SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#5483B3]/30 bg-white/70 dark:bg-[#052659]/60 backdrop-blur-md shadow-sm mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#5483B3] dark:text-[#C1E8FF]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#052659] dark:text-[#C1E8FF] uppercase">
              Client Impact
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#021024] dark:text-[#C1E8FF] tracking-tight leading-[1.08] mb-4">
            Engineered for brands <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#052659] via-[#5483B3] to-[#021024] dark:from-[#7DA0CA] dark:via-[#5483B3] dark:to-[#C1E8FF]">
              that refuse to compromise.
            </span>
          </h2>

          <p className="text-[#052659]/80 dark:text-[#7DA0CA] text-base sm:text-lg font-normal leading-relaxed">
            From London and Paris to New York and Riyadh, here is how our technical architectures deliver measurable leverage.
          </p>
        </div>

        {/* 2x2 Clean Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}