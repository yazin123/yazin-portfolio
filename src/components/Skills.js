// File: src/components/Skills.js
'use client'
import { useState } from 'react';
import { FaPython, FaPhp, FaNodeJs, FaReact, FaDatabase, FaDocker, FaAws, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiDjango, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiTypescript, SiGraphql, SiRedux } from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', icon: FaReact, category: 'Frontend' },
  { name: 'Next.js', icon: SiNextdotjs, category: 'Frontend' },
  { name: 'JavaScript', icon: FaJs, category: 'Frontend' },
  { name: 'TypeScript', icon: SiTypescript, category: 'Frontend' },
  { name: 'HTML5', icon: FaHtml5, category: 'Frontend' },
  { name: 'CSS3', icon: FaCss3Alt, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Frontend' },
  { name: 'Redux', icon: SiRedux, category: 'Frontend' },
  { name: 'Node.js', icon: FaNodeJs, category: 'Backend' },
  { name: 'Python', icon: FaPython, category: 'Backend' },
  { name: 'Django', icon: SiDjango, category: 'Backend' },
  { name: 'PHP', icon: FaPhp, category: 'Backend' },
  { name: 'GraphQL', icon: SiGraphql, category: 'Backend' },
  { name: 'MongoDB', icon: SiMongodb, category: 'Database' },
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'Database' },
  { name: 'MySQL', icon: FaDatabase, category: 'Database' },
  { name: 'Docker', icon: FaDocker, category: 'DevOps' },
  { name: 'AWS', icon: FaAws, category: 'DevOps' },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-16 text-center text-white" data-aos="fade-down">Skills & Technologies</h2>
        
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onHoverStart={() => setHoveredSkill(skill)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              <motion.div
                className="flex flex-col items-center justify-center p-10 bg-gray-900/50 backdrop-blur-md rounded-lg shadow-lg transition-all duration-300 group-hover:bg-gray-700 h-full"
                whileHover={{ scale: 1.05 }}
              >
                <skill.icon className="text-4xl mb-3 text-white group-hover:text-blue-300" />
                <span className="text-sm text-center text-gray-300 group-hover:text-white">{skill.name}</span>
              </motion.div>
              {hoveredSkill === skill && (
                <motion.div
                  className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded shadow-lg text-sm whitespace-nowrap"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {skill.category}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

     
      </div>
    </section>
  );
}