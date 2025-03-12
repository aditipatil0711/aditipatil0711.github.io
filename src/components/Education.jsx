import React from 'react';
import EducationCard from './EducationCard';

const Education = () => {
    const educationData = [
        { degree: "M.S. in Software Engineering", institution: "San Jose State University", year: "2023-2025" },
        { degree: "High School Diploma", institution: "ABC High School", year: "2018-2020" }
    ];

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Education</h2>
            <div className="border-l-4 border-gray-400 pl-4">
                {educationData.map((edu, index) => (
                    <EducationCard key={index} {...edu} />
                ))}
            </div>
        </div>
    );
};

export default Education;
