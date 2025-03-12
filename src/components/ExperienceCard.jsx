import React from 'react';

const ExperienceCard = ({ role, company, duration }) => {
    return (
        <div className="bg-gray-200 p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold">{role}</h3>
            <p className="text-sm text-gray-600">{company}</p>
            <span className="text-xs text-gray-500">{duration}</span>
        </div>
    );
};

export default ExperienceCard;
