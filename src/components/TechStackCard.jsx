import React from 'react';

const TechStackCard = ({ category, items }) => {
    return (
        <div className="bg-gray-200 p-4 rounded-lg shadow-md w-full">
            <h3 className="text-lg font-bold mb-2">{category}</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2 mb-1">
                        <img src={item.icon} alt={item.name} className="w-6 h-6" />
                        <span className="text-sm font-semibold">{item.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TechStackCard;
