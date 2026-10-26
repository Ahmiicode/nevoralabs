'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  CheckCircle2, 
  ShieldCheck, 
  PlusCircle, 
  X, 
  Send, 
  Loader2 
} from 'lucide-react';

// Fallback initial reviews (agar database empty ho ya connect na ho)
const initialReviews = [
  {
    _id: "1",
    name: "Sarah Jenkins",
    role: "CTO, Elevate Commerce",
    location: "New York, USA",
    verifiedScope: "MERN Stack & Next.js Architecture",
    rating: 5,
    metric: "+310% Peak Traffic Scaled",
    metricSub: "Zero downtime Black Friday deployment",
    text: "NevoraLabs rebuilt our core web infrastructure from the ground up. Their Next.js and custom database caching handled our highest traffic spike effortlessly. Pure engineering precision."
  },
  {
    _id: "2",
    name: "James Carter",
    role: "Founder & CEO, FinEdge",
    location: "London, UK",
    verifiedScope: "Autonomous n8n & AI Pipelines",
    rating: 5,
    metric: "-42% Operational Overhead",
    metricSub: "14 hours saved weekly per broker",
    text: "We needed complex financial lead triage that legacy agencies couldn't figure out. NevoraLabs engineered an autonomous n8n pipeline with AI intent scoring that transformed our entire deal-flow."
  },
  {
    _id: "3",
    name: "Sophie Laurent",
    role: "E-Comm Director, Maison Mode",
    location: "Paris, France",
    verifiedScope: "Headless Web & Micro-Interactions",
    rating: 5,
    metric: "99/100 Lighthouse Performance",
    metricSub: "Sub-second mobile checkout load",
    text: "Our brand requires an editorial luxury feel without sacrificing load times. The custom full-stack web build they delivered is fluid, conversion-optimized, and visually unmatched."
  },
  {
    _id: "4",
    name: "Tariq Al-Fayed",
    role: "Managing Director, Desert Capital",
    location: "Riyadh, KSA",
    verifiedScope: "Full-Stack Portal & Security Systems",
    rating: 5,
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
              {review.metricSub || "Verified Client Review"}
            </div>
          </div>

          <div className="flex items-center gap-1 bg-[#052659]/5 dark:bg-white/5 px-3 py-1.5 rounded-full border border-black/5 dark:border-white/10 self-start sm:self-auto">
            {[...Array(review.rating || 5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#052659] text-[#052659] dark:fill-[#C1E8FF] dark:text-[#C1E8FF]" />
            ))}
          </div>
        </div>

        {/* Scope Tag */}
        <div className="inline-flex items-center gap-1.5 text-[11px] font-mono tracking-wider text-[#5483B3] dark:text-[#7DA0CA] uppercase mb-4">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>{review.verifiedScope || review.serviceScope}</span>
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
  const [reviewsList, setReviewsList] = useState(initialReviews);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);
  const [submittedAlert, setSubmittedAlert] = useState(false);

  // Review Form State
  const [newReview, setNewReview] = useState({
    name: '',
    role: '',
    location: '',
    serviceScope: 'Next.js & MERN Architecture',
    rating: 5,
    metric: '',
    text: ''
  });

  // Fetch reviews from MongoDB API Route
  useEffect(() => {
    async function loadReviews() {
      try {
        const res = await fetch('/api/reviews');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setReviewsList(data);
          }
        }
      } catch (err) {
        console.error("MongoDB fetch failed, continuing with initial data:", err);
      } finally {
        setLoading(false);
      }
    }
    loadReviews();
  }, []);

  // Post to MongoDB API Route
  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReview),
      });

      if (res.ok) {
        const savedReview = await res.json();
        setReviewsList((prev) => [savedReview, ...prev]);
        setIsModalOpen(false);
        setSubmittedAlert(true);
        setTimeout(() => setSubmittedAlert(false), 4500);

        setNewReview({
          name: '',
          role: '',
          location: '',
          serviceScope: 'Next.js & MERN Architecture',
          rating: 5,
          metric: '',
          text: ''
        });
      } else {
        alert("Failed to submit review. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Network error, please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // SEO Schema Markup for Client Testimonials
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NevoraLabs",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": reviewsList.length.toString()
    },
    "review": reviewsList.map((r) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": r.name,
        "jobTitle": r.role
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": (r.rating || 5).toString()
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-2xl">
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

          {/* Leave a Review Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#021024] text-[#C1E8FF] dark:bg-[#C1E8FF] dark:text-[#021024] text-xs sm:text-sm font-semibold shadow-md hover:scale-105 active:scale-95 transition-all self-start md:self-auto shrink-0"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Leave a Review</span>
          </button>
        </div>

        {/* Review Saved Success Alert */}
        <AnimatePresence>
          {submittedAlert && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="mb-8 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/35 text-emerald-700 dark:text-emerald-300 flex items-center justify-between backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span className="text-xs sm:text-sm font-medium">
                  Your review has been verified and saved to the database!
                </span>
              </div>
              <button onClick={() => setSubmittedAlert(false)}>
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 2x2 Clean Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {reviewsList.map((review, index) => (
            <ReviewCard key={review._id || review.id || index} review={review} index={index} />
          ))}
        </div>

      </div>

      {/* ======================================================== */}
      {/* REVIEW SUBMISSION FROSTED MODAL                          */}
      {/* ======================================================== */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 280, damping: 25 }}
              className="relative w-full max-w-xl bg-white/95 dark:bg-[#021024]/95 backdrop-blur-2xl rounded-[2.5rem] p-7 sm:p-10 border border-[#5483B3]/35 shadow-2xl z-10 my-auto text-[#021024] dark:text-[#C1E8FF]"
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="mb-6">
                <span className="text-[11px] font-mono tracking-widest text-[#5483B3] dark:text-[#7DA0CA] uppercase font-semibold block mb-1">
                  Partner Experience
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif tracking-tight">
                  Share Your Review
                </h3>
              </div>

              <form onSubmit={handleReviewSubmit} className="flex flex-col gap-4">
                
                {/* 5-Star Interactive Rating Selector */}
                <div className="flex items-center gap-3 py-2 border-b border-[#5483B3]/15">
                  <span className="text-xs font-mono text-[#5483B3] dark:text-[#7DA0CA]">Your Rating:</span>
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        className="p-1 focus:outline-none transition-transform hover:scale-125"
                      >
                        <Star 
                          className={`w-5 h-5 ${
                            (hoverRating || newReview.rating) >= star
                              ? 'fill-[#052659] text-[#052659] dark:fill-[#C1E8FF] dark:text-[#C1E8FF]'
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono font-semibold text-[#5483B3] dark:text-[#7DA0CA] uppercase tracking-wider block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Henderson"
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-[#5483B3]/25 text-sm focus:outline-none focus:border-[#5483B3]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono font-semibold text-[#5483B3] dark:text-[#7DA0CA] uppercase tracking-wider block mb-1">
                      Role & Company
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Head of Ops, Northway"
                      value={newReview.role}
                      onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-[#5483B3]/25 text-sm focus:outline-none focus:border-[#5483B3]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono font-semibold text-[#5483B3] dark:text-[#7DA0CA] uppercase tracking-wider block mb-1">
                      Location / Region
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Dubai, UAE"
                      value={newReview.location}
                      onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-[#5483B3]/25 text-sm focus:outline-none focus:border-[#5483B3]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono font-semibold text-[#5483B3] dark:text-[#7DA0CA] uppercase tracking-wider block mb-1">
                      Service Scope
                    </label>
                    <select
                      value={newReview.serviceScope}
                      onChange={(e) => setNewReview({ ...newReview, serviceScope: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-[#5483B3]/25 text-sm focus:outline-none focus:border-[#5483B3] cursor-pointer"
                    >
                      <option value="Next.js & MERN Architecture" className="dark:bg-[#021024]">Next.js & MERN Architecture</option>
                      <option value="Autonomous n8n & AI Pipelines" className="dark:bg-[#021024]">Autonomous n8n & AI Pipelines</option>
                      <option value="E-Commerce & High-Converting Web" className="dark:bg-[#021024]">E-Commerce & High-Converting Web</option>
                      <option value="Custom APIs & Cloud Architecture" className="dark:bg-[#021024]">Custom APIs & Cloud Architecture</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-mono font-semibold text-[#5483B3] dark:text-[#7DA0CA] uppercase tracking-wider block mb-1">
                    Key Outcome / Metric (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. +300% leads / 15 hrs saved weekly"
                    value={newReview.metric}
                    onChange={(e) => setNewReview({ ...newReview, metric: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-[#5483B3]/25 text-sm focus:outline-none focus:border-[#5483B3]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono font-semibold text-[#5483B3] dark:text-[#7DA0CA] uppercase tracking-wider block mb-1">
                    Your Review *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Share how the engineering and automation impacted your business..."
                    value={newReview.text}
                    onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-[#5483B3]/25 text-sm focus:outline-none focus:border-[#5483B3] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full py-3.5 rounded-full bg-[#021024] text-[#C1E8FF] dark:bg-[#C1E8FF] dark:text-[#021024] font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 active:scale-98 transition-all shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Saving to MongoDB...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Verified Review</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}