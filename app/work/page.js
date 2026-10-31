import Project from "@/components/Project";
import ReviewsAndCTA from "@/components/ReviewsAndCTA";

export const metadata = {
  title: "Work & Case Studies | NevoraLabs",
  description: "Explore our recent full-stack applications, custom web architectures, and client projects.",
};

export default function WorkPage() {
  return (
    <main className="relative w-full min-h-screen pt-28 pb-16 flex flex-col gap-16">
      {/* 1. Header Section */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase mb-3">
            Selected Works
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tight mb-4">
            Recent Projects & Deployments
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-black/70">
            Engineered for performance, scalability, and seamless user experiences.
          </p>
        </div>
      </section>

      {/* 2. Projects Component */}
      <section className="w-full">
        <Project />
      </section>

      {/* 3. Bottom CTA & Reviews */}
      <section className="w-full">
        <ReviewsAndCTA />
      </section>
    </main>
  );
}