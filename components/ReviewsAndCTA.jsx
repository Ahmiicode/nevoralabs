'use client';
import { motion } from 'framer-motion';
import { Star, Globe } from 'lucide-react';

export default function ReviewsSection() {
  const reviews = [
    { id: 1, name: "Sarah Jenkins", role: "CTO, Elevate Commerce", location: "New York, USA", text: "Nevora Labs completely transformed our Shopify architecture. Their MERN stack integration handled our Black Friday traffic flawlessly. Pure precision." },
    { id: 2, name: "James Carter", role: "Founder, FinEdge", location: "London, UK", text: "We needed a custom Next.js portal with complex AI automation. The team delivered a scalable, pixel-perfect solution that reduced operational overhead by 40%." },
    { id: 3, name: "Liam O'Connor", role: "Director, Apex Reach", location: "Sydney, AU", text: "Working with them feels like having an elite in-house engineering team. The attention to detail and clean code structure is unmatched." },
    { id: 4, name: "Fatima Al-Sayed", role: "Operations Head, LuxeRetail", location: "Dubai, UAE", text: "The AI workflow automation they built saved us hundreds of hours a month. Brilliant engineers who truly understand business logic." },
    { id: 5, name: "Marcus Weber", role: "CEO, TechFlow", location: "Berlin, Germany", text: "Migrating to a headless Next.js setup was daunting, but Nevora Labs made it seamless. Our load times dropped from 4s to 0.8s." },
    { id: 6, name: "Elena Rostova", role: "Product Manager, SaaS Sync", location: "Toronto, Canada", text: "Their expertise in the MERN stack is top-tier. They rebuilt our entire dashboard, making it wildly faster and incredibly sleek." },
    { id: 7, name: "David Chen", role: "Founder, OmniLogistics", location: "Singapore", text: "We hired them to integrate OpenAI into our customer routing system. The execution was flawless and immediately improved our ROI." },
    { id: 8, name: "Sophie Laurent", role: "E-comm Director, Maison Mode", location: "Paris, France", text: "Our custom Shopify Plus build is stunning. The animations are buttery smooth, and the backend is rock solid. Highly recommended." },
    { id: 9, name: "Michael Harris", role: "VP Engineering, CloudScale", location: "Austin, USA", text: "They architected a highly complex Node.js/Express backend for us. It handles thousands of concurrent requests without breaking a sweat." },
    { id: 10, name: "Chloe Davies", role: "Head of Digital, Vibe Media", location: "Manchester, UK", text: "Nevora Labs doesn't just write code; they engineer solutions. The custom React application they built is the backbone of our agency." },
    { id: 11, name: "Anders Lindström", role: "Startup Founder, Nordic AI", location: "Stockholm, Sweden", text: "Incredible AI integration skills. They took our vague concept and turned it into a fully functional, automated web platform in weeks." },
    { id: 12, name: "Maria Garcia", role: "Lead Developer, FinTech Now", location: "Madrid, Spain", text: "As a developer myself, I was blown away by their clean architecture. Their Supabase and Next.js integration is textbook perfect." },
    { id: 13, name: "Tomáš Novák", role: "CEO, DataStream", location: "Prague, Czechia", text: "We needed a data-heavy MERN application. They delivered a responsive, fast, and extremely secure platform ahead of schedule." },
    { id: 14, name: "Isabella Rossi", role: "Marketing Dir., Vita Brands", location: "Milan, Italy", text: "The custom automation scripts they wrote for our CRM completely changed how we handle leads. True tech partners." },
    { id: 15, name: "William Wright", role: "Partner, Wright & Co.", location: "Chicago, USA", text: "High-ticket quality. They built a custom portal that looks like a million bucks and runs even better." },
    { id: 16, name: "Emma Wilson", role: "Founder, Organic Skincare", location: "Auckland, NZ", text: "Our Shopify conversion rate doubled after Nevora Labs optimized our site architecture. Absolute game-changers." },
    { id: 17, name: "Hassan Tariq", role: "Tech Lead, MenaCorp", location: "Abu Dhabi, UAE", text: "Their command over React and Node.js is exceptional. They untangled our legacy codebase and modernized our entire infrastructure." },
    { id: 18, name: "Julia Bauer", role: "Co-Founder, EdTech Innovate", location: "Zurich, Switzerland", text: "They integrated a custom LLM directly into our learning platform. The Next.js frontend is snappy, and the AI backend is brilliant." },
    { id: 19, name: "Kevin O'Brien", role: "Director, Celtic Web", location: "Dublin, Ireland", text: "We outsource our overflow enterprise work to Nevora Labs. Their MERN stack code quality is better than most local senior devs." },
    { id: 20, name: "Lucas Silva", role: "E-comm Manager, Sol", location: "Lisbon, Portugal", text: "Headless Shopify at finest. They gave us the speed of a custom React app with the reliability of the Shopify backend." },
    { id: 21, name: "Olivia Martinez", role: "Operations, BuildFast", location: "Miami, USA", text: "We automated our entire client onboarding process using the custom web hooks they built. Saved us massive amounts of time." },
    { id: 22, name: "Tariq Al-Fayed", role: "CEO, Desert Capital", location: "Riyadh, KSA", text: "Premium aesthetic combined with hardcore engineering. The investment portal they built for us using Next.js is world-class." },
    { id: 23, name: "Nils Petersen", role: "Founder, FlowState", location: "Copenhagen, Denmark", text: "A jeweler's precision indeed. Every animation, every API call, every database query was perfectly optimized." },
    { id: 24, name: "Rachel Kim", role: "VP Digital, K-Style", location: "Seoul, South Korea", text: "They handled our massive global traffic spike effortlessly thanks to their robust Next.js and MongoDB architecture." }
  ];

  // 24 reviews ko 2 hisson mein divide kar diya taake 2 lines (sliders) ban jayein
  const topRow = reviews.slice(0, 12);
  const bottomRow = reviews.slice(12, 24);

  // Review Card Component taake code clean rahay
  const ReviewCard = ({ review }) => (
    <div className="w-[350px] shrink-0 p-8 border border-black bg-white hover:border-[#D4AF37] transition-all duration-300 group relative flex flex-col justify-between min-h-[260px]">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
      
      <div>
        <div className="flex gap-1 mb-5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
          ))}
        </div>
        <p className="text-sm text-black/80 font-medium leading-relaxed mb-6">
          "{review.text}"
        </p>
      </div>
      
      <div className="flex flex-col pt-5 border-t border-black/10 mt-auto">
        <span className="font-bold text-black uppercase tracking-widest text-xs mb-1">
          {review.name}
        </span>
        <span className="text-[11px] text-black/60 font-medium mb-2">
          {review.role}
        </span>
        <span className="text-[9px] font-black text-[#D4AF37] uppercase tracking-widest">
          {review.location}
        </span>
      </div>
    </div>
  );

  return (
    <section className="w-full bg-white flex flex-col items-center py-24 border-t border-black overflow-hidden selection:bg-[#D4AF37] selection:text-white">
      <div className="w-full max-w-7xl px-6 md:px-12 mb-16">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 uppercase tracking-widest text-[11px] font-bold text-[#D4AF37] mb-6 border border-[#D4AF37]/30 px-5 py-1.5 rounded-full">
              <Globe className="w-3.5 h-3.5" />
              <span>Trusted Globally</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tighter leading-tight max-w-3xl mx-auto">
              Engineered for the world's <br />
              most demanding brands.
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Sliders Container with Edge Fading Effect */}
      <div className="w-full relative flex flex-col gap-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        
        {/* Top Row - Moves Left */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            className="flex gap-6 pr-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 50, repeat: Infinity }}
          >
            {[...topRow, ...topRow].map((review, index) => (
              <ReviewCard key={`top-${index}`} review={review} />
            ))}
          </motion.div>
        </div>

        {/* Bottom Row - Moves Right */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            className="flex gap-6 pr-6"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 50, repeat: Infinity }}
          >
            {[...bottomRow, ...bottomRow].map((review, index) => (
              <ReviewCard key={`bottom-${index}`} review={review} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}