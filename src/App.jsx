import React from 'react'
import Navbar from "./Components/Navbar"
import HeroSection from "./Sections/HeroSection"
import gsap from "gsap"
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import MessageSection from "./Sections/MessageSection";
import FlavourSection from "./Sections/FlavourSection";
import { useGSAP } from "@gsap/react";
import NutritionSection from "./Sections/NutritionSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  })
  return (
    <main>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavourSection />
          <NutritionSection/>
          <div className="h-dvh border border-red-500"></div>
        </div>
      </div>
    </main>
  )
}

export default App
