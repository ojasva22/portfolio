'use client'

import { ExternalLink, Github } from 'lucide-react'
import { projects } from '@/data/projects'

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="section-container bg-black relative z-20">
      <div>
        <h2 className="section-title text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle text-center mx-auto">
          A selection of my recent work and side projects
        </p>
      </div>

      {/* Featured Projects */}
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            className="card group hover:scale-105 transition-transform duration-300"
          >
            <div className="aspect-video bg-gradient-to-br from-orange-600 to-orange-800 rounded-lg mb-4 flex items-center justify-center">
              <div className="text-white text-4xl font-bold opacity-50">
                {project.title.charAt(0)}
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs font-medium border border-gray-700"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs font-medium border border-gray-700">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>

            <div className="flex gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-orange-500 transition-colors"
                >
                  <Github size={18} className="mr-2" />
                  Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-orange-500 transition-colors"
                >
                  <ExternalLink size={18} className="mr-2" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <>
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Other <span className="gradient-text">Projects</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="card group hover:scale-105 transition-transform duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-orange-700 to-orange-900 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-white text-3xl font-bold opacity-50">
                    {project.title.charAt(0)}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  )
}
