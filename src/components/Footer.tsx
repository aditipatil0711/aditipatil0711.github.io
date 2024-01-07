// Footer.js
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white text-center py-6 ">
            <div className="container mx-auto px-4">
           
                <div className="flex justify-center space-x-4 mb-3">
                    <a href="https://github.com/aditipatil0711" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/addy-patil/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://www.instagram.com/anthropomorphic_diamond/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="patiladiti752@gmail.com"><FaEnvelope /></a>
                </div>
                <div>
                    <p>&copy; {new Date().getFullYear()} Aditi Patil. All rights reserved.</p>
                    <p>Made with ❤ and React</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
