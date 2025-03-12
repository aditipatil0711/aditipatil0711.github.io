import React, { useState } from 'react';

const Contact = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold text-center mb-6">Contact</h2>

            {/* Contact Info Box */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
                <p className="text-md">📞 Phone: <a href="tel:+16692546518" className="text-blue-500">+1 669-254-6518</a></p>
                <p className="text-md">📧 Email: <a href="mailto:aditi.patil@sjsu.edu" className="text-blue-500">aditi.patil@sjsu.edu</a></p>

                {/* Toggle Contact Form */}
                <button 
                    onClick={() => setShowForm(!showForm)} 
                    className="mt-4 bg-blue-900 text-white px-6 py-2 rounded-md text-sm font-semibold shadow-md hover:bg-blue-700"
                >
                    {showForm ? "Close Form" : "Contact Me"}
                </button>
            </div>

            {/* Contact Form (Hidden Until Toggled) */}
            {showForm && (
                <div className="mt-6 bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input 
                                type="text" 
                                placeholder="Name" 
                                className="w-full border px-4 py-2 rounded-md"
                                required 
                            />
                            <input 
                                type="text" 
                                placeholder="Phone Number" 
                                className="w-full border px-4 py-2 rounded-md"
                            />
                        </div>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="w-full border px-4 py-2 rounded-md"
                            required 
                        />
                        <input 
                            type="text" 
                            placeholder="Subject" 
                            className="w-full border px-4 py-2 rounded-md"
                            required 
                        />
                        <textarea 
                            placeholder="Message" 
                            rows="4" 
                            className="w-full border px-4 py-2 rounded-md"
                            required 
                        ></textarea>
                        <button 
                            type="submit" 
                            className="w-full bg-blue-900 text-white px-6 py-2 rounded-md text-lg font-semibold shadow-md hover:bg-blue-700"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Contact;
