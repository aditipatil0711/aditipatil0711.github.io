import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-background-light w-full shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Left: Logo / Name */}
        <h1 className="text-lg font-heading font-bold text-navbartext">ADITI PATIL</h1>

        {/* Right: Links */}
        <div className="space-x-6 text-navbartext text-md font-body">
          <a href="#projects" className="hover:text-primary">Projects</a>
          <a href="https://github.com/" target="_blank" className="hover:text-primary">Github</a>
          <a href="/public/resume.pdf" target="_blank" className="hover:text-primary">Resume</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
