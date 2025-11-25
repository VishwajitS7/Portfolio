import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from "./components/Hero";
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import HomeBackground from './components/HomeBackground';


export default function App() {
  return (
    <div className="bg-[#0d1117] text-white leading-relaxed tracking-wide">
      <Navbar />

      {/* Sections */}
      <div id="about">
        <Hero />
      </div>  
        <Skills />
      
        <Certifications />

      {/* Placeholder components for upcoming sections */}
      <div id="certs" className="min-h-screen"></div>
      <div id="achievements" className="min-h-screen"></div>
      <div id="contact" className="min-h-screen"></div>
    </div>
  );
}


