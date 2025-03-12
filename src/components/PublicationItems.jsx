import React from 'react';
import PropTypes from 'prop-types';

const PublicationItem = ({ publication }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex items-center">
            <img src={publication.imagePath} alt={publication.title} className="w-30 h-20 mr-4 object-cover rounded" />
            <div>
                <h3 className="text-xl font-semibold text-[#001b5e]">{publication.title}</h3>
                <p className="text-gray-600">Journal: {publication.journal}</p>
                <p className="text-gray-600">Year: {publication.year}</p>
                <a href={publication.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    Read More
                </a>
            </div>
        </div>
    );
};

// Prop Types for validation
PublicationItem.propTypes = {
    publication: PropTypes.shape({
        title: PropTypes.string.isRequired,
        journal: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        link: PropTypes.string.isRequired,
        imagePath: PropTypes.string.isRequired
    }).isRequired
};

export default PublicationItem;
