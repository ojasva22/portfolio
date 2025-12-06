'use client'

import { personalInfo } from '@/data/personalInfo'
import { User, MapPin, Mail, Phone } from 'lucide-react'

export default function About() {
  const infoItems = [
    { icon: MapPin, label: 'Location', value: personalInfo.location },
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  ]

  return (
    <section id="about" className="section-container bg-black relative z-20">
      <div>
        <h2 className="section-title text-center">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="section-subtitle text-center mx-auto">
          Get to know more about my background and interests
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
        <div>
          <div className="card">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary-900/30 rounded-lg mr-4 border border-primary-800/50">
                <User className="text-primary-500" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{personalInfo.name}</h3>
                <p className="text-gray-300">{personalInfo.title}</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">{personalInfo.bio}</p>

            <div className="space-y-4">
              {infoItems.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <div className="flex items-center">
                    <Icon className="text-primary-500 mr-3" size={20} />
                    <span className="text-gray-400 font-medium mr-2">{label}:</span>
                    {href ? (
                      <a href={href} className="text-primary-500 hover:text-primary-400 hover:underline">
                        {value}
                      </a>
                    ) : (
                      <span className="text-gray-200">{value}</span>
                    )}
                  </div>
                )

                return <div key={label}>{content}</div>
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Years of Experience', value: '5+' },
            { label: 'Companies', value: '4' },
            { label: 'Technologies', value: '30+' },
            { label: 'Uptime Achieved', value: '99.99%' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="card text-center"
            >
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
