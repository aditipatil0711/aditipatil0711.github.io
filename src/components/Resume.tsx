import React from 'react';
import resumePdf from '../../public/resume.pdf'; // Ensure this path is correct

const Resume: React.FC = () => {
    return (
        <div id='resume' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-2xl font-bold text-center mb-4">Resume</h1>
            <div className="flex justify-center">
                <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-4">
                    <div className="flex flex-row justify-between items-center">
                        <div>
                            <h2 className="text-lg font-semibold">My Resume</h2>
                            <p>You can download my resume in PDF format.</p>
                        </div>
                        <a 
                            href={resumePdf} 
                            download="AditiPatilResume.pdf" 
                            className="bg-[#001b5e] hover:bg-[#001745] text-white font-bold py-2 px-4 rounded"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
