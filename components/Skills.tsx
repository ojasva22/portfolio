'use client'

import { skills } from '@/data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section-container bg-gray-900 relative z-20">
      <div>
        <h2 className="section-title text-center">
          Skills & <span className="gradient-text">Technologies</span>
        </h2>
        <p className="section-subtitle text-center mx-auto">
          Technologies and tools I work with
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((category) => (
          <div
            key={category.category}
            className="card"
          >
            <h3 className="text-xl font-bold text-white mb-4 gradient-text">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-orange-900/30 text-orange-300 rounded-full text-sm font-medium hover:bg-orange-800/40 transition-colors cursor-default border border-orange-800/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
