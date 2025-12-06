import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { personalInfo } from '@/data/personalInfo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    ...(personalInfo.twitter ? [{ icon: Twitter as typeof Github, href: personalInfo.twitter, label: 'Twitter' }] : []),
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ].filter((link) => link.href) // Filter out any empty links

  return (
    <footer className="bg-gray-900 text-gray-300 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-white mb-2">{personalInfo.name}</p>
            <p className="text-sm">{personalInfo.title}</p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="mt-2 text-gray-500">Built with Next.js, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}

