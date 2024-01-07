import React from 'react';
import PublicationItem from './PublicationItem';

const publicationsData = [
    {
        title: "Literature Survey: Sign Language Recognition Using Gesture Recognition and Natural Language Processing",
        journal: "Data Management, Analytics and Innovation",
        year: 2021,
        link: "http://link-to-publication-1.com",
        imagePath: "public/isl-pub.png" // Replace with actual path
    },
    {
        title: "Object Recognition and Classification for Robotics Using Virtualization and AI Acceleration on Cloud and Edge",
        journal: "Data Management, Analytics and Innovation",
        year: 2021,
        link: "http://link-to-publication-2.com",
        imagePath: "public/nifepub.png" // Replace with actual path
    }
];

const Publications: React.FC = () => {
    return (
        <div id='publications' className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">Publications</h1>
            <div>
                {publicationsData.map((publication, index) => (
                    <PublicationItem key={index} publication={publication} />
                ))}
            </div>
        </div>
    );
};

export default Publications;


