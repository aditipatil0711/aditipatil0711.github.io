import React from 'react';
import {SiGooglescholar} from 'react-icons/si';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Main = () => {
    return (
        <div id='main'>
        <img className= 'w-full h-screen object-cover object-left scale-x-[1]' src="/bckgrd2.jpg"  alt="background"/>
        <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-ceenter'>
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Hi! I'm Aditi Patil </h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'I am a MS SE Student at San Jose State University',
        1000, 
        'I am an ex-Technology Analyst at Citi',
        1000,
        'I am an IT undergraduate from CCoEW Pune',
        1000,
        'I am a Technology Enthusiast',
        1000,
        'I am a Learner',
        1000,
        'I am a Observer',
        1000

      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px'}}
      repeat={Infinity}
    />
            </h2>
            <div className='flex justify-between pt-6 max-w [100px] w-full'>
                <FaLinkedin className ='cursor-pointer' size={20} />
                <FaInstagram className ='cursor-pointer' size={20}/>
                <FaTwitter className ='cursor-pointer' size={20}/>
                <FaGithub className ='cursor-pointer' size={20}/>
                <SiGooglescholar className ='cursor-pointer' size={20}/>
                <FaYoutube className ='cursor-pointer' size={20}/>
            </div>
        </div>
        </div>
        </div>
    );
}
export default Main;