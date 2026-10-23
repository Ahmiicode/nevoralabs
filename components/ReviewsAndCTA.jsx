'use client';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function ReviewsSection() {
  // Sirf 4 top-tier, high-impact reviews jo clients ko attract karein
  const reviews = [
    { 
      id: 1, 
      name: "Sarah Jenkins", 
      role: "CTO, Elevate Commerce", 
      location: "New York, USA", 
      text: "Nevora Labs completely transformed our Shopify architecture. Their MERN stack integration handled our traffic flawlessly. Pure precision." 
    },
    { 
      id: 2, 
      name: "James Carter", 
      role: "Founder, FinEdge", 
      location: "London, UK", 
      text: "We needed a custom Next.js portal with complex AI automation. The team delivered a scalable, pixel-perfect solution that reduced operational overhead by 40%." 
    },
    { 
      id: 3, 
      name: "Sophie Laurent", 
      role: "E-comm Director, Maison Mode", 
      location: "Paris, France", 
      text: "Our custom Shopify Plus build is stunning. The animations are buttery smooth, and the backend is rock solid. Highly recommended." 
    },
    { 
      id: 4, 
      name: "Tariq Al-Fayed", 
      role: "CEO, Desert Capital", 
      location: "Riyadh, KSA", 
      text: "Premium aesthetic combined with hardcore engineering. The investment portal they built for us using Next.js is world-class." 
    }
  ];

  return (
    <section className="w-full bg-[#FAFAF8] flex flex-col items-center py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="w-full max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-black/40 uppercase mb-4">
              Trusted Globally
            </h4>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#111111] tracking-tight leading-[1.1]">
              Engineered for the world's <br />
              <span className="italic text-[#2C4A3B]">most demanding brands.</span>
            </h2>
          </motion.div>
        </div>

        {/* 4 Clean, Premium Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#111111] text-[#111111]" />
                  ))}
                </div>
                
                {/* Review Text */}
                <p className="text-gray-600 text-base sm:text-lg font-light leading-relaxed mb-8">
                  "{review.text}"
                </p>
              </div>
              
              {/* Client Info */}
              <div className="flex flex-col pt-6 border-t border-black/[0.06]">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-[#111111] text-base">
                    {review.name}
                  </span>
                  <span className="text-xs font-medium text-gray-400 tracking-wider">
                    {review.location}
                  </span>
                </div>
                <span className="text-xs text-gray-500 font-light mt-0.5">
                  {review.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}