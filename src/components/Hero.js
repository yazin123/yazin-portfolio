// File: src/components/Hero.js
'use client';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const technologies = ['React', 'Node.js', 'Python', 'Django', 'Next.js', 'MongoDB', 'AWS'];

export default function Hero() {
  const [currentTech, setCurrentTech] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Mohammed Yazin
          </span>
          <motion.span
            className="absolute -top-4 -right-4 text-2xl text-blue-400"
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          >
            ✨
          </motion.span>
        </h1>
        <motion.h2 
          className="text-2xl md:text-3xl mb-6 text-gray-300"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          Full Stack Developer
        </motion.h2>
      </motion.div>

      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <p className="text-lg mb-4 text-gray-400 max-w-2xl">
          Passionate about creating robust and scalable web applications
          with a focus on user experience and cutting-edge technologies.
        </p>
        <div className="text-xl font-bold text-white">
          Specialized in{' '}
          <AnimatePresence mode="wait">
            <motion.span
              key={technologies[currentTech]}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-blue-400"
            >
              {technologies[currentTech]}
            </motion.span>
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.div
        className="flex justify-center space-x-6 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        {[
          { icon: FaGithub, href: "https://github.com/yourusername" },
          { icon: FaLinkedin, href: "https://linkedin.com/in/yourusername" },
          { icon: FaEnvelope, href: "mailto:your.email@example.com" }
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <item.icon size={30} />
          </motion.a>
        ))}
      </motion.div>

      <motion.a
        href="#about"
        className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <span className="mb-2">Explore My Work</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FaChevronDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}