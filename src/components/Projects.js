// File: src/components/Projects.js
'use client';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'lucide-react';

const projects = [
  {
    title: 'Architecture Firm Website & CRM',
    description: 'Developed CMS website and CRM with lead management, task assignment, and detailed reporting.',
    technologies: ['Django', 'Bootstrap', 'FCM', 'WebSocket', 'AWS EC2'],
    link: 'https://anthillworld.com',
    image: '/img/projects/anthill.png',
  },
  {
    title: 'Real Estate Web Platform',
    description: 'Designed and developed a platform for property sale, buy, and rent with integrated CRM features.',
    technologies: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind'],
    link: 'https://frontend-omega-eight-34.vercel.app/',
    image: '/img/projects/realestate.png',
  },
  {
    title: 'Single Page Business Website',
    description: 'Designed and developed a single page website with social media integration and location awareness.',
    technologies: ['HTML', 'CSS', 'JS', 'Bootstrap'],
    link: 'https://spikeshoezo.in',
    image: '/img/projects/spike.png',
  },
  {
    title: 'Quick Quotation and Bill Generator',
    description: 'Built a responsive billing web app for wood and furniture providers with quotation and bill generation.',
    technologies: ['Python', 'Django', 'Bootstrap', 'AWS', 'Docker'],
    link: null,
    image: '/img/projects/billing.png',
  },
  {
    title: 'Business CMS Website',
    description: 'Built a responsive CMS website using Django with user authorization, SEO optimization, and Google Analytics integration.',
    technologies: ['Python', 'Django', 'HTML', 'CSS', 'JS', 'Bootstrap', 'DigitalOcean'],
    link: 'https://www.sydneygroundslandscaping.com.au/',
    image: '/img/projects/sgg.png',
  },
  {
    title: 'Gaming Accounts Platform',
    description: 'Designed and developed a responsive e-commerce application for gaming accounts with order management, OTP verification, and UPI integration.',
    technologies: ['Next.js', 'Django', 'REST', 'Tailwind'],
    link: null,
    image: '/img/projects/acesmurfer.png',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-white" data-aos="fade-down">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedProject(project)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <a href={project.link} className='text-xs flex align-center items-center gap-2 text-blue-500'><Link/> Visit Site</a>
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description.substring(0, 100)}...</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-500 text-xs text-white px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-blue-500 text-xs text-white px-2 py-1 rounded">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-800 rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white"
                >
                  <FaTimes size={24} />
                </button>
              </div>
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-56 object-cover rounded-lg mb-4" />
              <p className="text-gray-300 mb-4">{selectedProject.description}</p>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-white mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="bg-blue-500 text-white px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:underline"
                >
                  Visit Project <FaExternalLinkAlt className="ml-2" />
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
