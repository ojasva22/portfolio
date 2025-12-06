'use client'

import { GraduationCap, MapPin, Calendar } from 'lucide-react'
import { education } from '@/data/education'

export default function Education() {
  return (
    <section id="education" className="section-container bg-gray-900 relative z-20">
      <div>
        <h2 className="section-title text-center">
          <span className="gradient-text">Education</span>
        </h2>
        <p className="section-subtitle text-center mx-auto">
          Academic background and qualifications
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto space-y-8">
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className="card relative pl-8 border-l-4 border-orange-500"
          >
            <div className="absolute -left-3 top-0 w-6 h-6 bg-orange-500 rounded-full border-4 border-gray-900" />

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
              <div>
                <div className="flex items-center text-orange-500 font-semibold mb-2">
                  <GraduationCap size={18} className="mr-2" />
                  {edu.institution}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
              </div>
              <div className="flex flex-col sm:items-end mt-2 sm:mt-0">
                {edu.duration && (
                  <div className="flex items-center text-gray-400 text-sm mb-1">
                    <Calendar size={16} className="mr-1" />
                    {edu.duration}
                  </div>
                )}
                <div className="flex items-center text-gray-400 text-sm">
                  <MapPin size={16} className="mr-1" />
                  {edu.location}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
