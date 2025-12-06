'use client'

import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { experiences } from '@/data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section-container bg-gray-900 relative z-20">
      <div>
        <h2 className="section-title text-center">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <p className="section-subtitle text-center mx-auto">
          My professional journey and career milestones
        </p>
      </div>

      <div className="mt-12 space-y-16 max-w-5xl mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="relative"
          >
            {/* Timeline line */}
            {index < experiences.length - 1 && (
              <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-orange-500/50 to-transparent" />
            )}

            <div className="flex gap-6 items-start">
              {/* Company Logo */}
              <div className="flex-shrink-0 relative">
                <div className="w-20 h-20 rounded-full bg-white border-2 border-orange-500/30 p-2 flex items-center justify-center relative z-10 hover:border-orange-500/60 transition-colors overflow-hidden">
                  {exp.logoUrl ? (
                    <img
                      src={exp.logoUrl}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        if (target.nextSibling) {
                          (target.nextSibling as HTMLElement).style.display = 'flex'
                        }
                      }}
                    />
                  ) : null}
                  <div className={`w-full h-full items-center justify-center text-orange-600 font-bold text-xl ${exp.logoUrl ? 'hidden' : 'flex'}`}>
                    {exp.company.charAt(0)}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.position}</h3>
                    <div className="flex items-center text-orange-500 font-semibold mb-2 text-lg">
                      <Briefcase size={18} className="mr-2" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end mt-2 sm:mt-0">
                    <div className="flex items-center text-gray-400 text-sm mb-1">
                      <Calendar size={16} className="mr-1" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <MapPin size={16} className="mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start leading-relaxed">
                      <span className="text-orange-500 mr-3 mt-1.5 flex-shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-orange-900/30 text-orange-300 rounded-full text-sm font-medium border border-orange-800/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
