'use client'

import { ChevronDown } from 'lucide-react'
import { personalInfo } from '@/data/personalInfo'
import { motion } from 'framer-motion'
import GalaxyBackground from './GalaxyBackground'
import FloatingLogos from './FloatingLogos'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated Galaxy Background */}
      <GalaxyBackground />
      
      {/* Floating Company/University Logos */}
      <FloatingLogos />

      <div className="section-container text-center relative z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi, I'm{' '}
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Backend Engineer
          </motion.p>

          <motion.p
            className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Building scalable systems, microservices, and AI-driven solutions
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a href="#contact" className="btn-primary inline-flex items-center justify-center">
              Get In Touch
            </a>
            <a
              href="#experience"
              className="btn-secondary inline-flex items-center justify-center"
            >
              View Experience
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 pointer-events-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <a
            href="#about"
            className="inline-flex flex-col items-center text-gray-400 hover:text-orange-500 transition-colors duration-200"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="animate-bounce" size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

