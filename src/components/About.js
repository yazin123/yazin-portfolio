'use client';
import { FaCode, FaServer, FaMobileAlt } from 'react-icons/fa'

export default function About() {
  return (
    <section id="about" className="py-20">
      <h2 className="text-4xl font-bold mb-8 text-center" data-aos="fade-down">About Me</h2>
      <div className="max-w-3xl mx-auto text-center">
        <p className="mb-6" data-aos="fade-up">
          Passionate and results-driven Full Stack Developer with extensive experience in backend development, 
          frontend technologies, and project management. Adept at building and maintaining web applications 
          using a diverse tech stack including PHP, Python, Django, Next.js, and Node.js.
        </p>
        <p className="mb-6" data-aos="fade-up" data-aos-delay="200">
          Proven track record in delivering high-quality solutions for various clients and projects. 
          Skilled in project management, client communication, and hands-on implementation of hosting 
          services on DigitalOcean, PythonAnywhere, and AWS.
        </p>
        <div className="flex justify-center space-x-8 mt-12">
          <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="400">
            <FaCode className="text-4xl text-blue-400 mb-2" />
            <h3 className="font-semibold">Frontend</h3>
          </div>
          <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="600">
            <FaServer className="text-4xl text-blue-400 mb-2" />
            <h3 className="font-semibold">Backend</h3>
          </div>
          <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="800">
            <FaMobileAlt className="text-4xl text-blue-400 mb-2" />
            <h3 className="font-semibold">Responsive</h3>
          </div>
        </div>
      </div>
    </section>
  )
}