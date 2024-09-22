
// File: src/components/Experience.js
'use client';
import React from 'react';
import { FaBriefcase, FaGraduationCap, FaAward } from 'react-icons/fa';

const experienceData = [
  {
    title: "Freelance Full Stack Developer and Trainer",
    date: "2020 - Present",
    location: "Remote",
    icon: FaBriefcase,
    details: [
      "Developed and maintained custom web applications, CRM and ERP systems",
      "Managed end-to-end project delivery",
      "Utilized cloud platforms for hosting and deployment",
      "Implemented and managed Meta Ads campaigns",
      "Developed projects for college students using various technologies"
    ]
  },
  {
    title: "Graduation in Software Development",
    date: "2021 - 2023",
    location: "MG University, Kottayam",
    icon: FaGraduationCap,
    details: [
      "Focused on practical software development skills",
      "Studied system administration",
      "Completed various projects as part of the curriculum"
    ]
  },
  {
    title: "Notable Project: Architecture Firm Website & CRM",
    date: "2023",
    location: "Client Project",
    icon: FaAward,
    details: [
      "Developed a comprehensive CMS and CRM system",
      "Utilized Django, AWS, and other technologies",
      "Implemented lead management and task assignment features"
    ]
  }
];

const ExperienceItem = ({ item, index }) => (
  <div className="mb-10 relative" data-aos="fade-up" data-aos-delay={index * 100}>
    <div className="absolute w-6 h-6 bg-white rounded-full -left-9 border-4 border-gray-800"></div>
    <div className=" backdrop-blur-lg bg-gray-900/20 p-6 rounded-lg shadow-lg transition duration-300 ease-in-out drop-shadow-2xl">
      <div className="flex items-center mb-4">
        <item.icon className="text-white mr-2 text-2xl" />
        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
      </div>
      <p className="text-gray-300 mb-2">{item.date}</p>
      <p className="text-gray-400 mb-4">{item.location}</p>
      <ul className="list-disc list-inside text-gray-300">
        {item.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default function Experience() {
  return (
    <section id="experience" className="py-20 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-white" data-aos="fade-down">Professional Journey</h2>
        <div className="relative border-l-4 border-white pl-6 ml-6">
          {experienceData.map((item, index) => (
            <ExperienceItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}