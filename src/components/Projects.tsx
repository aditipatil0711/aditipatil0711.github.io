import ProjectItem from "./ProjectItem";
import isl from "../assets/isl.png";
import citi from "../assets/citi.jpeg";
import logo from "../assets/logo.png";
import unsdg from "../assets/unsdg.png";

const Projects = () => {
    return (
        <div id='projects' className="max-w-[1040px] mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
        <p className="text-center py-8">
          {/* Project description */}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        <ProjectItem img={logo} title='Ledger Alchemy' tech='React, Node, Python, Plaid etc' link='https://github.com/Fullstack-Alchemists-SJSU'/>
        <ProjectItem img={unsdg} title='Macroeconomic Copilot Chatbot for UN SDGs' tech='React, OpenAI, VectorDB, Redis' link='https://github.com/Fullstack-Alchemists-SJSU/hackathon-frontend'/>
        <ProjectItem img={isl} title='Indian Sign Language Recognition' tech='Python, Flask' link='https://github.com/aditipatil0711/IndianSignLanguage_Final-Project'/>
        <ProjectItem img={citi} title='Stock Recommender System' tech='Angular, SpringBoot, Rest API' link='https://github.com/aditipatil0711/CitiBridgeProject-FullStackProjectm'/>
        

       

        </div>
      </div>
                    
    );
};

export default Projects;