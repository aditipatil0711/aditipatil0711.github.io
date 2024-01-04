import React from 'react';

interface Publication {
    title: string;
    journal: string;
    year: number;
    link: string;
}

interface PublicationItemProps {
    publication: Publication;
}

const publicationsData = [
    {
        title: "Literature Survey: Sign Language Recognition Using Gesture Recognition and Natural Language Processing",
        journal: "Data Management, Analytics and Innovation",
        year: 2021,
        link: "http://link-to-publication-1.com" // Replace with actual link
    },
    {
        title: "Object Recognition and Classification for Robotics Using Virtualization and AI Acceleration on Cloud and Edge",
        journal: "Data Management, Analytics and Innovation",
        year: 2021,
        link: "http://link-to-publication-2.com" // Replace with actual link
    }
];
const PublicationItem: React.FC<PublicationItemProps> = ({ publication }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-semibold text-[#001b5e]">{publication.title}</h3>
            <p className="text-gray-600">Journal: {publication.journal}</p>
            <p className="text-gray-600">Year: {publication.year}</p>
            <a href={publication.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Read More</a>
        </div>
    );
};

export default PublicationItem;
