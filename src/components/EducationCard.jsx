import React from 'react';

const EducationCard = ({ degree, institution, year }) => {
    return (
        <div className="bg-gray-200 p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold">{degree}</h3>
            <p className="text-sm text-gray-600">{institution}</p>
            <span className="text-xs text-gray-500">{year}</span>
        </div>
    );
};

export default EducationCard;
