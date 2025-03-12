import React from "react"



const HeroSection = () => {
  const profileImageUrl ="src/assets/images/profile1.jpeg";

  const openResume = () => {
    window.open('src/assets/docs/resume.pdf', '_blank');
  };

  
  return (
    <section className="bg-background-lightest w-full py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* Profile Image */}
        <div className="w-100 h-100 rounded-lg overflow-hidden">
          <img src={profileImageUrl} alt="Profile" className="w-full h-full object-cover" />
        </div>

        {/* Hero Text Content */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <h1 className="text-6xl font-heading font-bold text-text">
            Hi, I’m Aditi,
          </h1>
          <p className="text-lg text-text mt-4">
            A software engineer, striving to make a difference through technology.
          </p>

          {/* Work Experience */}
          <p className="mt-4 font-body text-md font-semibold text-text">Previously</p>
          <ul className="mt-1 space-y-1 text-text text-md">
            <li><span className="font-bold text-primary">Cloud Engineering Intern @Illumio</span></li>
            <li>Technology Analyst @Citi</li>
            <li>Machine Learning Intern @Nife.io</li>
            <li>Network Intern  @TataCommunications</li>
          </ul>

          {/* Resume Button */}
          <a href="/assets/docs/resume.pdf" target="_blank" rel="noopener noreferrer">
          <button
            onClick={openResume}
            className="bg-primary text-white px-4 py-2 mt-6 rounded-lg hover:bg-opacity-80 transition">
            Resume
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
