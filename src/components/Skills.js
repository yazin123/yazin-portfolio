'use client'
import { useState } from 'react';
import { FaPython, FaPhp, FaNodeJs, FaReact, FaDatabase, FaDocker, FaAws, FaHtml5, FaCss3Alt, FaJs, FaUbuntu } from 'react-icons/fa';
import { SiDjango, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiTypescript, SiGraphql, SiRedux, SiPostman, SiVisualstudiocode, SiTwilio, SiWordpress, SiDigitalocean, SiSqlite, SiMeta } from 'react-icons/si';
import { RiLoginCircleLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Django', icon: SiDjango, category: 'Backend', color: 'white' },
  { name: 'Next.js', icon: SiNextdotjs, category: 'Frontend', color: 'white' },
  { name: 'JavaScript', icon: FaJs, category: 'Frontend', color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, category: 'Frontend', color: '#3178C6' },
  { name: 'React', icon: FaReact, category: 'Frontend', color: '#61DAFB' },
  { name: 'HTML5', icon: FaHtml5, category: 'Frontend', color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, category: 'Frontend', color: '#1572B6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Frontend', color: '#06B6D4' },
  { name: 'Redux', icon: SiRedux, category: 'Frontend', color: '#764ABC' },
  { name: 'Node.js', icon: FaNodeJs, category: 'Backend', color: '#339933' },
  { name: 'Python', icon: FaPython, category: 'Backend', color: '#3776AB' },
  { name: 'PHP', icon: FaPhp, category: 'Backend', color: '#777BB4' },
  { name: 'GraphQL', icon: SiGraphql, category: 'Backend', color: '#E10098' },
  { name: 'MongoDB', icon: SiMongodb, category: 'Database', color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'Database', color: '#336791' },
  { name: 'MySQL', icon: FaDatabase, category: 'Database', color: '#4479A1' },
  { name: 'Docker', icon: FaDocker, category: 'DevOps', color: '#2496ED' },
  { name: 'AWS', icon: FaAws, category: 'DevOps', color: '#FF9900' },
  { name: 'Postman', icon: SiPostman, category: 'Tools', color: '#FF6C37' },
  { name: 'VSCode', icon: SiVisualstudiocode, category: 'Tools', color: '#007ACC' },
  { name: 'Ubuntu', icon: FaUbuntu, category: 'OS', color: '#E95420' },
  { name: 'Twilio', icon: SiTwilio, category: 'API', color: 'red' },
  { name: 'Wordpress', icon: SiWordpress, category: 'WCMS', color: 'white' },
  { name: 'OTPless', icon: RiLoginCircleLine, category: 'Authentication', color: '#4CAF50' },
  { name: 'DigitalOcean', icon: SiDigitalocean, category: 'DevOps', color: '#4CAF50' },
  { name: 'Sqlite3', icon: SiSqlite, category: 'Database', color: 'blue' },
  { name: 'Meta Ads', icon: SiMeta, category: 'Marketing', color: 'white' },
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
                className="flex flex-col items-center justify-center p-10 bg-gray-900/20 border border-white backdrop-blur-md rounded-lg shadow-lg transition-all duration-300 h-full"
                whileHover={{ scale: 1.05 }}
              >
                <skill.icon className="text-4xl mb-3" style={{ color: skill.color }} />
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