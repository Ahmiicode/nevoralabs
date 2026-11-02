import ServicesCarousel from "@/components/ServicesCarousel";
import Process from "@/components/Process";
import TransformationSection from "@/components/TransformationSection";
import ReviewsAndCTA from "@/components/ReviewsAndCTA";

export const metadata = {
  title: "Services & Capabilities | NevoraLabs",
  description: "Explore our specialized web engineering, architecture, process, and client results.",
};

export default function ServicesPage() {
  return (
    <main className="relative w-full min-h-screen pt-28 pb-16 flex flex-col gap-20">
      {/* 1. Services Header & Carousel Showcase */}
<section className="w-full">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
    
    {/* Pill Badge */}
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#5483B3]/30 bg-white/70 dark:bg-[#052659]/60 backdrop-blur-md shadow-sm mb-4">
      <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-widest text-[#5483B3] dark:text-[#7DA0CA] uppercase">
        Core Engineering
      </span>
    </div>

    {/* Section Headline */}
    <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#021024] dark:text-[#C1E8FF] tracking-tight leading-[1.08] mb-5">
      Architectural Services & <br />
      <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#052659] via-[#5483B3] to-[#021024] dark:from-[#7DA0CA] dark:via-[#5483B3] dark:to-[#C1E8FF]">
        Autonomous Systems.
      </span>
    </h1>

    {/* Section Subtitle */}
    <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#052659]/80 dark:text-[#7DA0CA] font-normal leading-relaxed">
      Scalable Next.js architectures, low-latency database infrastructure, and resilient event-driven cloud automations engineered for high throughput.
    </p>
  </div>

  <ServicesCarousel />
</section>
      {/* 2. Transformation / Impact Section */}
      <section className="w-full">
        <TransformationSection />
      </section>

      {/* 3. Engineering Process & Delivery Timeline */}
      <section className="w-full">
        <Process />
      </section>

      {/* 4. Verified Client Reviews & Project Conversion CTA */}
      <section className="w-full">
        <ReviewsAndCTA />
      </section>
    </main>
  );
}