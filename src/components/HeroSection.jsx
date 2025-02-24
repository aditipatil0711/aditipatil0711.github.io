import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-background-lightest w-full py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* Profile Image Placeholder */}
        <div className="w-64 h-64 bg-background-light rounded-lg"></div>

        {/* Hero Text Content */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <h1 className="text-4xl font-heading font-bold text-text">
            Hi, I’m Aditi,
          </h1>
          <p className="text-lg text-text mt-2">
            A software engineer, striving for excellence in software development...
          </p>

          {/* Work Experience */}
          <p className="mt-4 font-body text-md font-semibold text-text">Previously</p>
          <ul className="mt-1 space-y-1 text-text text-md">
            <li><span className="font-bold text-primary">@Illumio</span></li>
            <li>SWE at Citi for 3 years</li>
            <li>SWE at Citi for 3 years</li>
            <li>SWE at Citi for 3 years</li>
          </ul>

          {/* Resume Button */}
          <button className="bg-primary text-white px-4 py-2 mt-6 rounded-lg hover:bg-opacity-80 transition">
            Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
