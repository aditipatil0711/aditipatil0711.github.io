import React from 'react';

const ResumeSection = () => {
    return (
        <div className="flex items-center justify-between p-6">
            <h2 className="text-xl font-bold mb-4">Resume</h2>
            <a 
                href="src/assets/docs/resume.pdf" 
                download 
                className="bg-red-200 px-4 py-2 rounded-md text-sm font-semibold"
            >
                PDF Resume
            </a>
        </div>
    );
};

export default ResumeSection;
