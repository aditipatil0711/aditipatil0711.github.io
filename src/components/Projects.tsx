import ProjectItem from "./ProjectItem";
import isl from "../assets/isl.png";
import citi from "../assets/citi.jpeg";

const Projects = () => {
    return (
        <div id='projects' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
            <p className="text-center py-8">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Autem itaque atque libero consequatur voluptatem deleniti. 
                Sapiente voluptatum ut neque blanditiis fugiat eum esse facilis. 
                Dicta non ut id recusandae modi?
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <ProjectItem img={citi} title='Stock Recommender System'/>
                <ProjectItem img={isl} title='Indian Sign Language Recognition'
                    
                />
            </div>
        </div>
                    
    );
};

export default Projects;