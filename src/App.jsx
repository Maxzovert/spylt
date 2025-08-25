import React from 'react'
import Navbar from "./Components/Navbar"
import HeroSection from "./Sections/HeroSection"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";
import MessageSection from "./Sections/MessageSection";
import FlavourSection from "./Sections/FlavourSection";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar/>
      <HeroSection/>
      <MessageSection/>
      <FlavourSection/>
      <div className="h-dvh border border-red-500"></div>
    </main>
  )
}

export default App
