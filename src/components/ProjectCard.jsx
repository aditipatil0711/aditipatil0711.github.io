import React from 'react';

const ProjectCard = ({ title, description, tags, image }) => {
    return (
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            {/* Image Section */}
            <div className="h-32 bg-white rounded-md mb-2 overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover rounded-md" />
            </div>
            
            {/* Project Details */}
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
            
            {/* Tags */}
            <div className="flex mt-2">
                {tags.map((tag, index) => (
                    <span key={index} className="bg-orange-500 text-white px-2 py-1 rounded-md text-xs mr-2">
                        {tag}
                    </span>
                ))}
            </div>
            
            {/* Button */}
            <button className="mt-3 bg-green-300 px-3 py-1 rounded-md">
                <span className="text-white">→</span>
            </button>
        </div>
    );
};

export default ProjectCard;
