'use client';

import { useState } from 'react';
import { FaEnvelope, FaGithub, FaWhatsapp, FaLinkedin, FaComments, FaTimes, FaInstagram } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const contactMethods = [
  { icon: FaEnvelope, label: 'Email', value: 'mohammedyazin4@gmail.com', link: 'mailto:mohammedyazin4@gmail.com' },
  { icon: FaInstagram, label: 'Instagram', value: 'https://www.instagram.com/hmm.yazin/', link: 'https://www.instagram.com/hmm.yazin/' },
  { icon: FaGithub, label: 'GitHub', value: 'github.com/yazin123', link: 'https://github.com/yazin123' },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/yourprofile', link: 'https://linkedin.com/in/yourprofile' },
];

export default function Contact() {
  const [activeMethod, setActiveMethod] = useState(null);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

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
              <a href={method.link} className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-filter backdrop-blur-lg flex flex-col items-center justify-center aspect-square">
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
            <motion.div
              className="inline-block relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.button
                className={`px-6 py-3 bg-green-500 text-white font-semibold rounded-full transition-all duration-300 ${isWhatsAppOpen ? 'w-12 h-12' : 'w-auto'}`}
                onClick={() => setIsWhatsAppOpen(!isWhatsAppOpen)}
              >
                <AnimatePresence mode="wait">
                  {isWhatsAppOpen ? (
                    <motion.span
                      key="whatsapp"
                      initial={{ opacity: 0, rotate: -180 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaTimes className="mx-auto" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="chat"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <FaWhatsapp className="inline-block mr-2" /> Chat with Me
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
              <AnimatePresence>
                {isWhatsAppOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-lg shadow-lg p-4"
                  >
                    <button
                      onClick={handleWhatsAppClick}
                      className="flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-300"
                    >
                      <FaWhatsapp className="mr-2" /> Chat on WhatsApp
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}