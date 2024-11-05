// File: src/components/Footer.js
'use client';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0" data-aos="fade-right">
            <h2 className="text-2xl font-bold mb-2">Mohammed Yazin</h2>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>
          <div className="flex space-x-4" data-aos="fade-right">
            <a href="https://github.com/yazin123" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/mohammedyazin/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="https://wa.me/917994857990" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <FaWhatsapp className="text-2xl" />
            </a>
            <a href="https://www.instagram.com/hmm.yazin/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="mailto:mohammedyazin4@gmail.com" className="hover:text-blue-400 transition-colors">
              <FaEnvelope className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Mohammed Yazin. All rights reserved.
          </p>
          <nav className="flex space-x-4" data-aos="fade-right">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </div>
      <div className="mt-8 text-center" >
        <p className="text-gray-400 text-sm">
          Designed and built by Mohammed Yazin   </p>
      </div>
    </footer>
  )
}
