'use client';

import { useState } from 'react';
import { FaEnvelope, FaGithub, FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const contactMethods = [
  { icon: FaEnvelope, label: 'Email', value: 'mohammedyazin4@gmail.com', link: 'mailto:mohammedyazin4@gmail.com' },
  { icon: FaInstagram, label: 'Instagram', value: 'https://www.instagram.com/hmm.yazin/', link: 'https://www.instagram.com/hmm.yazin/' },
  { icon: FaGithub, label: 'GitHub', value: 'github.com/yazin123', link: 'https://github.com/yazin123' },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'https://www.linkedin.com/in/mohammed-yazin-131736218/', link: 'https://www.linkedin.com/in/mohammed-yazin-131736218/' },
];

export default function Contact() {
  const [activeMethod, setActiveMethod] = useState(null);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917994857990', '_blank');
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-bl from-blue-900/50 to-purple-900 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwMDAwMDgiPjwvcmVjdD4KPHBhdGggZD0iTTAgNUw1IDBaTTYgNEw0IDZaTS0xIDFMMSAtMVoiIHN0cm9rZT0iIzRGRkZGRjA4IiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-10"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center text-white" data-aos="fade-down">Let's Connect</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              className="relative"
              onHoverStart={() => setActiveMethod(method)}
              onHoverEnd={() => setActiveMethod(null)}
              whileHover={{ scale: 1.1 }}
            >
              <a href={method.link} target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-filter backdrop-blur-lg flex flex-col items-center justify-center aspect-square">
                <method.icon className="text-4xl text-white mb-2" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-filter backdrop-blur-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-blue-300">Let's Create Something Amazing</h3>
          <p className="text-gray-300 mb-6">
            I'm always excited to work on new projects and explore innovative ideas. Whether you have a specific project in mind or just want to chat about the latest in tech, I'm all ears!
          </p>
          <div className="text-center">
            <motion.button
              className="px-6 py-3 bg-green-500 text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center mx-auto"
              onClick={handleWhatsAppClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="mr-2" /> Chat with Me
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}