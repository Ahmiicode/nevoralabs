import Navbar from "@/components/Navbar";
import HeroSlider from "../components/HeroSlider";


import Project from "@/components/Project";
import ServicesCarousel from "@/components/ServicesCarousel";
import Process from "@/components/Process";
import ReviewsAndCTA from "@/components/ReviewsAndCTA";


import Contact from "@/components/Contact";

import TransformationSection from "@/components/TransformationSection";

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <HeroSlider />
       <ServicesCarousel/>
      
      <TransformationSection/>
     
 
      <Project/>
      <Process/>
      <ReviewsAndCTA
      />
      <Contact/>
      
    </main>
  );
}