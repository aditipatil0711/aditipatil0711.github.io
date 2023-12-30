import React from 'react';

interface WorkItemProps {
    year: string;
    company: string;
    position: string;
    duration: string;
    description: string[];
}
const WorkItem: React.FC<WorkItemProps> = ({ year, company, position, duration, description }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
        <li className='mb-10 ml-4'>
            <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white'/>
            <div className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                <span className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md'>{year}</span>
                <span className='text-lg font-semibold text-[#001b5e]'>{company}</span>
            </div>
            <div className='text-sm md:text-base font-semibold text-stone-600 my-1'>
                {position} - <span className='font-normal text-stone-400'>{duration}</span>
            </div>
            <ul className='list-disc list-inside my-2 text-base font-normal text-stone-500'>
                {description.map((line, index) => (
                    <li key={index}>{line}</li>
                ))}
            </ul>
        </li>
    </ol>
  );
};

export default WorkItem;
