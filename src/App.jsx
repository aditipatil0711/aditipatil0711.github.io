import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Recognition from "./components/Recognition";
import ResumeSection from "./components/ResumeSection";

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
      <Recognition /> 
    </div>
  );
}

export default App;
