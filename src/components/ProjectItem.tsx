


import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectItemProps {
    img: string;
    title: string;
    tech: string;
    link: string; // Add this line
}

const ProjectItem: React.FC<ProjectItemProps> = ({ img, title, tech, link }) => {
    return (
        <div className="relative flex flex-col overflow-hidden h-64 w-full shadow-xl shadow-gray-400 rounded-xl group transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl">
            <img src={img} alt={title} className="h-40 w-full object-cover transition duration-300 ease-in-out group-hover:opacity-80" />
            <div className="flex-grow flex flex-col justify-between p-4 bg-white">
                <h3 className="text-xl font-bold text-[#001b5e] mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{tech}</p>
                <Link to={link} className="text-lg font-semibold bg-[#001b5e] text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-[#000d6b]"></Link>
               <a href={link} target="_blank" rel="noopener noreferrer" className="self-start mt-4">
                    <button className="text-lg font-semibold bg-[#001b5e] text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-[#000d6b]">
                        More Info
                    </button>
                </a>
            </div>
        </div>
    );
};

  

export default ProjectItem;