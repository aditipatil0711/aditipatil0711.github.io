import React, { useState } from 'react';

const Contact = () => {
    const [showForm, setShowForm] = useState(false);

    const toggleFormVisibility = () => {
        setShowForm(!showForm);
    };
    return (
        <div id='contact' className='max-w-[1040px] m-auto md:pl p-4 py-16'>
            <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>
                Contact
            </h1>
            <div className='bg-white shadow-lg rounded-lg p-4'>
                <h2 className='text-2xl font-semibold'>Get in Touch</h2>
                <p className='py-2'>Phone: +1234567890</p>
                <p className='py-2'>Email: your.email@example.com</p>
                <button 
                    onClick={toggleFormVisibility} 
                    className="bg-[#001b5e] text-white rounded-md px-4 py-2 mt-4 hover:bg-blue-700 transition duration-200 ease-in-out"
                >
                    Contact Me
                </button>

                {showForm && (
            <form action='https://getform.io/f/e6850f41-9acd-4896-8bc2-0897ca4e7a3e' method="POST" encType="multipart/form-data">
                <div className='grid md:grid-cols-1 gap-4 w-full py-2'>

                    {/* Name and Phone Number - Keeping them in the same row */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label className='uppercase text-sm py-2'>Name</label>
                            <input className='border-2 rounded-lg p-3 flex border-gray-300'
                                type="text" name="name" />
                        </div>
                        <div className="flex flex-col">
                            <label className='uppercase text-sm py-2'>Phone Number</label>
                            <input
                                className='border-2 rounded-lg p-3 flex border-gray-300'
                                type="text" name="phone" />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col py-2">
                        <label className='uppercase text-sm py-2'>Email</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300'
                            type="email" name="email" />
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col py-2">
                        <label htmlFor="subject" className='uppercase text-sm py-2'>Subject</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300'
                            type="text" name="subject" />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col py-2">
                        <label htmlFor="message" className='uppercase text-sm py-2'>Message</label>
                        <textarea className='border-2 rounded-md p-3 flex border-gray-300' name="message"></textarea>
                    </div>

                    {/* Button */}
                    <button className="bg-[#001b5e] text-white rounded-md p-3 flex justify-center items-center hover:bg-[#001b5e] hover:text-white transition duration-200 ease-in-out">Send Message</button>

                </div>
            </form>
            )}
        </div>
        </div>
    )
}

export default Contact;
