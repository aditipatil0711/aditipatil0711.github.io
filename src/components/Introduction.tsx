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
                <div>
                    <p className="text-lg text-justify md:text-justify">
                        Hello! I'm Aditi Patil, currently pursuing my Masters in Software Engineering at San Jose State University since August 2023. I recently worked as a Cloud Engineering Intern at Illumio. I will be graduating in May 2025 and I am actively looking for full-time opportunities in Software Engineering. 
                        {/* more text ... */}
                    </p>
                    {/* Interactive Highlights */}
                    <ul className="text-lg mt-4 list-disc list-inside">
                        <li>
                          <strong>Prior Experience:</strong>
                          <ul className="list-disc list-inside ml-5">
                              <li>Illumio Inc.</li>
                              <li>Citicorp Services India Pvt Ltd</li>
                              <li>Nife Labs Pte Ltd</li>
                              <li>Tata Communications Limited</li>
                          </ul>
                      </li>
                        <li><strong>Technical Skills:</strong> Python, Springboot, Java, Angular, React, AWS, Kubernetes </li>
                        <li><strong>Key Projects:</strong> NLP for Indian Sign Language, Financial Recommender System</li>
                    </ul>
                </div>
            </div>
        </div>
  );
};

export default Introduction;
