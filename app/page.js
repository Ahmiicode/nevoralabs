import Navbar from "@/components/Navbar";
import HeroSlider from "../components/HeroSlider";

import Capabilities from "@/components/Capabilities";
import Project from "@/components/Project";
import ServicesCarousel from "@/components/ServicesCarousel";
import Process from "@/components/Process";
import ReviewsAndCTA from "@/components/ReviewsAndCTA";

import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar/>
      <HeroSlider />
      <ServicesCarousel/>
      <Capabilities/>
      <Project/>
      <Process/>
      <ReviewsAndCTA
      />
      <Contact/>
      
    </main>
  );
}