
// File: src/components/Contact.js
'use client';

import { FaEnvelope, FaPhoneAlt, FaGithub, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-bl from-blue-900/50 to-purple-900 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwMDAwMDgiPjwvcmVjdD4KPHBhdGggZD0iTTAgNUw1IDBaTTYgNEw0IDZaTS0xIDFMMSAtMVoiIHN0cm9rZT0iIzRGRkZGRjA4IiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-10"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center text-white" data-aos="fade-down">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-filter backdrop-blur-lg transform hover:scale-105 transition-transform duration-300"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-300">Contact Information</h3>
            <div className="space-y-6">
              <a href="mailto:mohammedyazin4@gmail.com" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors group">
                <FaEnvelope className="mr-4 text-2xl text-blue-400 group-hover:animate-bounce" />
                <span>mohammedyazin4@gmail.com</span>
              </a>
              <a href="https://wa.me/917994857990" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors group">
                <FaWhatsapp className="mr-4 text-2xl text-blue-400 group-hover:animate-bounce" />
                <span>+91 799 485 7990</span>
              </a>
              <a href="https://github.com/yazin123" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors group">
                <FaGithub className="mr-4 text-2xl text-blue-400 group-hover:animate-bounce" />
                <span>github.com/yazin123</span>
              </a>
            </div>
          </div>
          <div 
            className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-filter backdrop-blur-lg transform hover:scale-105 transition-transform duration-300"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-300">Connect with Me</h3>
            <p className="text-gray-300 mb-6">I'm always open to new opportunities and collaborations. Feel free to reach out through any of these platforms:</p>
            <div className="flex justify-center space-x-6">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                <FaLinkedin className="text-4xl hover:animate-pulse" />
              </a>
              <a href="https://github.com/yazin123" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                <FaGithub className="text-4xl hover:animate-pulse" />
              </a>
              <a href="https://wa.me/917994857990" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                <FaWhatsapp className="text-4xl hover:animate-pulse" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center" data-aos="fade-up">
          <p className="text-gray-300">Prefer email? Feel free to drop me a message at any time.</p>
          <a 
            href="mailto:mohammedyazin4@gmail.com" 
            className="inline-block mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-colors duration-300"
          >
            Send an Email
          </a>
        </div>
      </div>
    </section>
  );
}