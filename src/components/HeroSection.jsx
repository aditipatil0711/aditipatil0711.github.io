import React from "react";

const HeroSection = () => {
  return (
    <section className="section flex flex-col md:flex-row items-center justify-between">
      
      {/* Profile Image Placeholder */}
      <div className="w-64 h-64 bg-gray-300 rounded-lg"></div>

      {/* Hero Text Content */}
      <div className="md:w-1/2 mt-6 md:mt-0">
        <p className="text-gray-500 text-sm mb-2">currently open to</p>

        {/* Heading */}
        <h1 className="text-3xl font-heading font-bold text-darkestText">
          Hi, I’m Aditi,
        </h1>
        <p className="text-lg text-darkestText mt-2">
          A software engineer, striving for in .....
        </p>

        {/* Work Experience */}
        <p className="mt-4 font-body text-md font-semibold text-darkestText">Previously</p>
        <ul className="mt-1 space-y-1 text-darkestText text-md">
          <li><span className="font-bold text-primaryAccent">@Illumio</span></li>
          <li>SWE at Citi for 3 years</li>
          <li>SWE at Citi for 3 years</li>
          <li>SWE at Citi for 3 years</li>
        </ul>

        {/* Resume Button */}
        <button className="btn-primary mt-6">Resume</button>
      </div>
    </section>
  );
};

export default HeroSection;