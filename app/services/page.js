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
          <p className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase mb-3">
            Core Engineering
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tight mb-4">
            Our Architectural Services
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-black/70">
            Scalable Next.js systems, high-performance database infrastructures, aur automated cloud workflows.
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