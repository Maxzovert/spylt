import React from 'react'
import Navbar from "./Components/Navbar"
import HeroSection from "./Sections/HeroSection"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar/>
      <HeroSection/>
      <div className="h-dvh border border-red-500"></div>
    </main>
  )
}

export default App
