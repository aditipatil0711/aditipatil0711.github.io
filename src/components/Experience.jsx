import React from 'react';
import ExperienceCard from './ExperienceCard';

const ExperienceTimeline = () => {
    const experienceData = [
        { role: "Software Engineer Intern", company: "Amazon", duration: "Summer 2023" },
        { role: "Research Assistant", company: "SJSU", duration: "2022 - 2023" }
    ];

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Professional Experience</h2>
            <div className="border-l-4 border-gray-400 pl-4">
                {experienceData.map((exp, index) => (
                    <ExperienceCard key={index} {...exp} />
                ))}
            </div>
        </div>
    );
};

export default ExperienceTimeline;
