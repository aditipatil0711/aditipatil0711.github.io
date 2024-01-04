

import React, { useState } from 'react';

const Achievements: React.FC = () => {
    // Define the color for hover state
    const hoverColor = "#001b5e"; // This is just an example color (green), replace with your preferred hover color

    // State to track the hovered item
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);

    // List of achievements
    const achievements = [
        "Currently volunteering in Women In Machine Learning and Data Science’s (WiMLDS) Pune [Link]",
        "Recognition as a Special Mention project under the category of Social Impact in Natarajan Education Society's NES Innovation Award 2020-21 for our B.Tech Project “Vaani: Natural Language Processing for Indian Sign Language.”",
        "Received Global Recognition for our Practice Venture: “ToDoor Services,” as a Real Venture with high prospects of becoming a Real business by Wadhwani Foundation’s National Entrepreneurship Network (ToDoor Services was in action from August 2020 to February 2021 in Aurangabad, Maharashtra).",
        "Selected for Citi-Bridge Program under the 100 women -100 hours training and mentorship by Citi(2020).",
        "Selected for Regional Level AICTE Convention for Vishwakarma Awards (Western Region, 2019).",
        "Represented Cummins College in the National Level Competition of ABU Robocon for two years: (the Year 2019: Rank 17th and Year -2018: Rank 31st).",
        "Volunteering at Pune-WiMLDS (August 2020 to Present)",
        "Student Representative in SWE (Society of Women Engineers) Cummins(2019-2020)"

        // ... Add the rest of your achievements here
    ];

    return (
        <div id='achievements' className="max-w-[1040px] mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Achievements and Leaderships</h1>
            <div className="text-justify py-8">
                <ul className="list-disc ml-6">
                    {achievements.map((achievement, index) => (
                        <li 
                            key={index}
                            className="mb-2"
                            style={{ color: hoveredItem === index ? hoverColor : 'inherit' }}
                            onMouseEnter={() => setHoveredItem(index)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            {achievement}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Achievements;



