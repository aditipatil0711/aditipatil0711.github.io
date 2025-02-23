import React from 'react'
import './App.css'
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="bg-lightestBg min-h-screen">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App