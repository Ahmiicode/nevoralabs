'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageCircleQuestion } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    question: "What web development tech stack does NevoraLabs specialize in?",
    answer: "We specialize in modern, high-performance web stacks primarily built on Next.js 15, React, Node.js, and Tailwind CSS. Depending on data requirements, we architect backends using MongoDB, Supabase PostgreSQL, and serverless edge functions for sub-second load times."
  },
  {
    question: "How do n8n workflow automations integrate with existing business tools?",
    answer: "n8n connects natively with over 400+ platforms via webhooks, REST APIs, and automated triggers. We integrate your current CRMs (HubSpot, Salesforce), communications (Slack, WhatsApp, Gmail), and payment systems (Stripe) into 24/7 autonomous data pipelines without vendor lock-in."
  },
  {
    question: "How long does a typical full-stack web or automation project take?",
    answer: "High-converting landing pages and focused automation pipelines typically deploy within 7 to 14 days. Complex full-stack platforms, SaaS MVPs, and multi-agent AI ecosystems usually take 3 to 6 weeks, structured across clear discovery, staging, and handover milestones."
  },
  {
    question: "Do I get full ownership of the source code and automation pipelines?",
    answer: "Yes, 100%. Upon project completion, all intellectual property, GitHub repositories, n8n workflow JSONs, database instances, and deployment access are transferred directly to your organization."
  },
  {
    question: "Can NevoraLabs build custom AI agents for customer service or lead scoring?",
    answer: "Yes. We engineer customized autonomous LLM agents that analyze inbound website leads in real time, score buying intent, handle initial customer inquiries via custom knowledge bases, and alert your sales team with enriched dossiers."
  },
  {
    question: "What maintenance and post-launch support do you provide?",
    answer: "Every build includes a complimentary post-launch warranty period for bug fixes and stability monitoring. We also provide ongoing monthly retainers for active pipeline scaling, security patches, and feature expansion."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  // Structured SEO Data (Google FAQPage Schema Markup)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section 
      id="faq" 
      className="relative w-full bg-transparent py-24 sm:py-32 px-4 sm:px-6 lg:px-8 font-sans"
      aria-label="Frequently Asked Questions"
    >
      {/* Google SEO Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#5483B3]/30 bg-white/70 dark:bg-[#052659]/60 backdrop-blur-md shadow-sm mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#5483B3] dark:text-[#C1E8FF]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#052659] dark:text-[#C1E8FF] uppercase">
              Common Questions
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-[#021024] dark:text-[#C1E8FF] tracking-tight leading-tight mb-4">
            Everything you need to know <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#052659] via-[#5483B3] to-[#021024] dark:from-[#7DA0CA] dark:via-[#5483B3] dark:to-[#C1E8FF]">
              before we build.
            </span>
          </h2>

          <p className="text-[#052659]/80 dark:text-[#7DA0CA] text-base sm:text-lg font-normal leading-relaxed">
            Clear answers about our development standards, automation pipelines, timelines, and technical architecture.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`rounded-[1.8rem] border transition-all duration-300 backdrop-blur-md overflow-hidden ${
                  isOpen
                    ? 'bg-white/80 dark:bg-[#052659]/60 border-[#5483B3] dark:border-[#7DA0CA]/60 shadow-[0_10px_35px_rgba(5,38,89,0.08)] dark:shadow-[0_12px_40px_rgba(2,16,36,0.5)]'
                    : 'bg-white/45 dark:bg-[#052659]/25 border-[#5483B3]/25 dark:border-[#5483B3]/20 hover:bg-white/60 dark:hover:bg-[#052659]/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-serif text-[#021024] dark:text-[#C1E8FF] tracking-tight pr-2">
                    {faq.question}
                  </span>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                    isOpen
                      ? 'bg-[#021024] text-[#C1E8FF] dark:bg-[#C1E8FF] dark:text-[#021024] border-transparent'
                      : 'bg-white/60 dark:bg-[#052659]/60 text-[#052659] dark:text-[#C1E8FF] border-[#5483B3]/30'
                  }`}>
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-[15px] text-[#052659]/80 dark:text-[#7DA0CA] leading-relaxed border-t border-[#5483B3]/15 font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Contact Box at the Bottom of FAQs */}
        <div className="mt-14 p-6 sm:p-8 rounded-[2rem] bg-white/50 dark:bg-[#052659]/30 backdrop-blur-md border border-[#5483B3]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#021024] text-[#C1E8FF] dark:bg-[#C1E8FF] dark:text-[#021024] flex items-center justify-center shrink-0">
              <MessageCircleQuestion className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-serif text-[#021024] dark:text-[#C1E8FF]">
                Have a specific question about your project?
              </h4>
              <p className="text-xs sm:text-sm text-[#052659]/70 dark:text-[#7DA0CA]">
                We can evaluate your operations and advise on technical architecture.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-full bg-[#021024] text-[#C1E8FF] dark:bg-[#C1E8FF] dark:text-[#021024] text-xs font-semibold whitespace-nowrap shadow-sm hover:scale-105 transition-all"
          >
            Ask Us Directly
          </Link>
        </div>

      </div>
    </section>
  );
}