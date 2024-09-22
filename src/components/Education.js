'use client';
import { FaGraduationCap } from 'react-icons/fa'

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8 text-center" data-aos="fade-down">Education</h2>
        <div className="space-y-8">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg" data-aos="fade-up">
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-3xl text-blue-400 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Bachelor of Vocation (B.Voc) in Software Development and System Administration</h3>
                <p className="text-gray-300">MG University, Kottayam</p>
              </div>
            </div>
            <p className="text-right text-gray-400">Graduation Year: 2023</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-3xl text-blue-400 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Higher Secondary Education (CBSE)</h3>
                <p className="text-gray-300">ST. Mary's Public School, Thamarachal</p>
              </div>
            </div>
            <p className="text-right text-gray-400">Completion Year: 2019</p>
          </div>
        </div>
      </div>
    </section>
  )
}
