
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-lightShadeBg py-4 px-6 flex justify-between items-center">
      {/* Left: Logo / Name */}
      <h1 className="text-lg font-heading font-bold">ADITI PATIL</h1>

      {/* Right: Links */}
      <div className="space-x-6 text-darkestText text-md font-body">
        <a href="#projects" className="hover:text-primaryAccent">Projects</a>
        <a href="https://github.com/" target="_blank" className="hover:text-primaryAccent">Github</a>
        <a href="/public/resume.pdf" target="_blank" className="hover:text-primaryAccent">Resume</a>
      </div>
    </nav>
  );
};

export default Navbar;
