import { useState, useEffect } from 'react';
import myPhoto from '../assets/aditi-profile.png'; 
import myPhotoToo from '../assets/happy-aditi.png'; // Make sure this path is correct


const Introduction = () => {

    const [currentImage, setCurrentImage] = useState(myPhoto);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Change the image every 500ms (twice per second)
      setCurrentImage(currentImage === myPhoto ? myPhotoToo : myPhoto);
    }, 500);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentImage]);

    return (
        <div id='introduction' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      {/* Header */}
      <div className="text-center">
        <h1 className='text-4xl font-bold text-[#001b5e]'>
          About Me
        </h1>
      </div>

      {/* Image and Text */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-8">
        <img src={currentImage} alt="Profile" className="w-48 h-48 mb-8 md:mb-0 md:mr-12" />
        <p className="text-lg text-justify md:text-justify">
          I'm Aditi Patil, a Masters student in Software Engineering at 
          San Jose State University with a foundation in Information Technology 
          from India. My professional experience includes a role as a Technology 
          Analyst, where I engaged in cloud technologies and feature development. 
          My skill set covers Python, Kotlin, and Java, with a growing interest in 
          machine learning and cloud services. I am dedicated to enhancing 
          my expertise in technology and exploring innovative solutions in the field.
        </p>
        {/* Add more paragraphs or content as needed */}
      </div>
    </div>
  );
};

export default Introduction;
