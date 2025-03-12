import React from 'react';
import PublicationItem from './PublicationItems';
import islPubImage from '../assets/images/isl-pub.png'; // Adjust the path as necessary
import nifePubImage from '../assets/images/nifepub.png'; // Adjust the path as necessary

const publicationsData = [
    {
        title: "Literature Survey: Sign Language Recognition Using Gesture Recognition and Natural Language Processing",
        journal: "Data Management, Analytics and Innovation",
        year: 2021,
        link: "https://link.springer.com/chapter/10.1007/978-981-16-2934-1_13",
        imagePath: islPubImage
    },
    {
        title: "Object Recognition and Classification for Robotics Using Virtualization and AI Acceleration on Cloud and Edge",
        journal: "Data Management, Analytics and Innovation",
        year: 2021,
        link: "https://link.springer.com/chapter/10.1007/978-981-16-2937-2_10",
        imagePath: nifePubImage
    }
];

const Publications = () => {
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
