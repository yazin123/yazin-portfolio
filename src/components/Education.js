'use client';
import { FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const educationData = [
  {
    year: 2023,
    degree: "B.Voc in Software Development and System Administration",
    institution: "MG University, Kottayam",
    details: "Specialized in full-stack development and system administration. Completed multiple real-world projects."
  },
  {
    year: 2019,
    degree: "Higher Secondary Education (CBSE)",
    institution: "ST. Mary's Public School, Thamarachal",
    details: "Focused on Computer Science and Mathematics. Developed a passion for web development."
  },
  // You can easily add more education entries here
];

const EducationItem = ({ education }) => (
  <motion.div 
    className="mb-8 bg-gray-900/20 rounded-lg p-6 shadow-lg "
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center mb-4">
      <FaGraduationCap className="text-3xl text-blue-400 mr-4" />
      <div>
        <h3 className="text-xl font-semibold text-white">{education.degree}</h3>
        <p className="text-gray-400">{education.institution}</p>
      </div>
    </div>
    <p className="text-gray-300 mb-2">{education.details}</p>
    <p className="text-right text-blue-400 font-semibold">{education.year}</p>
  </motion.div>
);

export default function Education() {
  return (
    <section id="education" className="py-20 ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-white" data-aos="fade-down">Education</h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <EducationItem key={index} education={edu} />
          ))}
        </div>
      </div>
    </section>
  );
}