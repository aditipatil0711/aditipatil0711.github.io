import {useState} from 'react';
import {AiOutlineHome, AiOutlineMenu} from 'react-icons/ai';
import {FaUserCircle,FaGraduationCap,FaBriefcase, FaProjectDiagram, FaBookOpen, FaTrophy, FaFileAlt, FaEnvelope} from 'react-icons/fa';


const Sidenav = () => {
    const [nav,setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        console.log('state changed');

    };
    return (
        <div>
            
            <AiOutlineMenu onClick= {handleNav} 
            className='absolute top-4 right-4 z-[99] block md:hidden' />
            {
                nav ? (
                    <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                        <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineHome size = {20}/>
                            <span className='pl-4'>Home</span>
                        </a>
                        <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <FaUserCircle  size = {20}/>
                            <span className='pl-4'>Introduction</span>
                        </a>
                        <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <FaGraduationCap  size = {20}/>
                            <span className='pl-4'>Education</span>
                        </a>
                        <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <FaBriefcase  size = {20}/>
                            <span className='pl-4'>Experience</span>
                        </a>
                        <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <FaProjectDiagram  size = {20}/>
                            <span className='pl-4'>Projects</span>
                        </a>
                        <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <FaBookOpen  size = {20}/>
                            <span className='pl-4'>Publications</span>
                        </a>
                        <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <FaTrophy  size = {20}/>
                            <span className='pl-4'>Achievements</span>
                        </a>
                        <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <FaFileAlt    size = {20}/>
                            <span className='pl-4'>Resume</span>
                        </a>
                        <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <FaEnvelope  size = {20}/>
                            <span className='pl-4'>Contact</span>
                        </a>
                        
                        
                        
                    </div>
                ) : (
                    <div></div>
                )
            }
        </div>
    );
}; 
export default Sidenav;
