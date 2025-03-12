import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Education from "./components/Education";
import Experience from "./components/Experience";
import RecognitionsBanner from "./components/RecognitionsBanner";
import ResumeSection from "./components/ResumeSection";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-background-lightest">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Projects />
      <TechStack />
      <ResumeSection />
      <Education />
      <Experience />
      <Publications />
      <RecognitionsBanner /> 
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
