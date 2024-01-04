import {useState} from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import {FaUserCircle,FaGraduationCap,FaBriefcase, FaProjectDiagram, FaBookOpen, FaTrophy, FaFileAlt, FaEnvelope, FaHome} from 'react-icons/fa';


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
                        <a onClick = {handleNav}
                        href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <FaHome size = {20}/>
                            <span className='pl-4'>Home</span>
                        </a>
                        <a onClick = {handleNav} 
                        href="#introduction" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <FaUserCircle  size = {20}/>
                            <span className='pl-4'>Introduction</span>
                        </a>
                        <a onClick = {handleNav}  
                        href="#education" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <FaGraduationCap  size = {20}/>
                            <span className='pl-4'>Education</span>
                        </a>
                        <a onClick = {handleNav}  
                        href="#work" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <FaBriefcase  size = {20}/>
                            <span className='pl-4'>Experience</span>
                        </a>
                        <a onClick = {handleNav}  
                        href="#publications" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <FaBookOpen  size = {20}/>
                            <span className='pl-4'>Publications</span>
                        </a>
                        <a onClick = {handleNav}  
                        href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <FaTrophy  size = {20}/>
                            <span className='pl-4'>Achievements</span>
                        </a>
                        <a onClick = {handleNav}
                        href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <FaProjectDiagram  size = {20}/>
                            <span className='pl-4'>Projects</span>
                        </a>
                        <a onClick = {handleNav} 
                        href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <FaFileAlt    size = {20}/>
                            <span className='pl-4'>Resume</span>
                        </a>
                        <a onClick = {handleNav} 
                        href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <FaEnvelope  size = {20}/>
                            <span className='pl-4'>Contact</span>
                        </a>
                        
                        
                        
                    </div>
                ) : (
                    ''
                )
            }
            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    <a 
                    href='#main' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2  p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaHome size = {20}/>
                    </a>
                    <a 
                    href='#introduction' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2  p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaUserCircle size = {20}/>
                    </a>
                    <a 
                    href='#education' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2  p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGraduationCap size = {20}/>
                    </a>
                    <a  
                    href='#work' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2  p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaBriefcase size = {20}/>
                    </a>
                    <a 
                    href='#publications' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2  p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaBookOpen size = {20}/>
                    </a>
                    <a  
                    href='#main' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2  p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaTrophy size = {20}/>
                    </a>
                    <a 
                    href='#projects' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2  p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaProjectDiagram size = {20}/>
                    </a>
                    <a  
                    href='#main' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2  p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaFileAlt size = {20}/>
                    </a>
                    <a 
                    href='#contact' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2  p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaEnvelope size = {20}/>
                    </a>
                </div>
            </div>

        </div>
    );
}; 
export default Sidenav;
