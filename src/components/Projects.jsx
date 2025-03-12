import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const projectData = [
        { 
            title: "Project 1", 
            description: "Description of project 1", 
            tags: ["React", "Tailwind"],
            image: "https://source.unsplash.com/300x200/?technology"
        },
        { 
            title: "Project 2", 
            description: "Description of project 2", 
            tags: ["JavaScript", "API"],
            image: "https://source.unsplash.com/300x200/?coding"
        },
        { 
            title: "Project 3", 
            description: "Description of project 3", 
            tags: ["Machine Learning", "Python"],
            image: "https://source.unsplash.com/300x200/?ai"
        },
        { 
            title: "Project 4", 
            description: "Description of project 4", 
            tags: ["Cloud", "AWS"],
            image: "https://source.unsplash.com/300x200/?cloud"
        }
    ];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Projects</h1>
            <div className="grid grid-cols-2 gap-4">
                {projectData.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
