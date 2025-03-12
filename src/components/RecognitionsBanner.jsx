import React from 'react';

const RecognitionsBanner = () => {
    const notableAchievements = [
        {
            title: "S&I 100",
            description: "Recognized in the S&I 100 list for impact.",
            image: "https://via.placeholder.com/80x50"
        },
        {
            title: "NYC Center for Economic Opportunity",
            description: "Semi-finalist among 50 organizations.",
            image: "https://via.placeholder.com/80x50"
        },
        {
            title: "CUFFH Award",
            description: "Honored with the CUFFH Father Jim O’Shea Award.",
            image: "https://via.placeholder.com/80x50"
        },
        {
            title: "New York State Recognition",
            description: "Proclamation from NY Secretary of State.",
            image: "https://via.placeholder.com/80x50"
        }
    ];

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-4">Notable Achievements</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center">
                {notableAchievements.map((achievement, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img src={achievement.image} alt={achievement.title} className="h-16 mb-2" />
                        <h3 className="text-sm font-semibold">{achievement.title}</h3>
                        <p className="text-xs text-gray-600">{achievement.description}</p>
                    </div>
                ))}
            </div>

            {/* Use <a> tag instead of useNavigate() */}
            <div className="mt-6 text-center">
                <a 
                    href="/recognitions" 
                    className="bg-blue-500 text-white px-6 py-2 rounded-md text-sm font-semibold shadow-md hover:bg-blue-600"
                >
                    View All Recognitions
                </a>
            </div>
        </div>
    );
};

export default RecognitionsBanner;
