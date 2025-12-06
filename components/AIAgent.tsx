'use client'

import { Bot, Sparkles } from 'lucide-react'
import { useState } from 'react'

export default function AIAgent() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id="ai-agent" className="section-container bg-gradient-to-br from-orange-950/30 to-orange-900/20 relative z-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="text-orange-500 mr-3" size={32} />
          <h2 className="section-title mb-0">
            Ask Me <span className="gradient-text">Anything</span>
          </h2>
        </div>
        <p className="section-subtitle text-center mx-auto">
          Coming soon: Interactive AI assistant to learn about my tech stack and projects
        </p>

        <div className="card mt-8 bg-gray-900/90 backdrop-blur-sm border border-orange-800/30">
          <div className="flex items-start">
            <div className="p-3 bg-orange-900/30 rounded-lg mr-4 border border-orange-800/50">
              <Bot className="text-orange-500" size={32} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">AI Assistant</h3>
              <p className="text-gray-300 mb-4">
                This feature will allow visitors to interact with an AI agent that can answer
                questions about:
              </p>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">▸</span>
                  Technologies used in specific projects
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">▸</span>
                  Implementation details and architecture decisions
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">▸</span>
                  Experience with different tech stacks
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">▸</span>
                  Best practices and methodologies
                </li>
              </ul>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-orange-500 hover:text-orange-400 font-semibold text-sm flex items-center"
              >
                {isExpanded ? 'Show Less' : 'Learn More'} 
                <span className="ml-2">{isExpanded ? '↑' : '↓'}</span>
              </button>

              {isExpanded && (
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <h4 className="font-semibold text-white mb-2">Implementation Plan:</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>
                      <strong>1. Backend API:</strong> Create API endpoints using Next.js API routes
                      or a separate backend service to handle AI agent requests.
                    </p>
                    <p>
                      <strong>2. LLM Integration:</strong> Integrate with OpenAI, Anthropic Claude,
                      or similar services for natural language processing.
                    </p>
                    <p>
                      <strong>3. Context Management:</strong> Use project data, experience data, and
                      skills data as context for the AI agent to provide accurate responses.
                    </p>
                    <p>
                      <strong>4. UI Components:</strong> Build a chat interface with message history,
                      typing indicators, and smooth animations.
                    </p>
                    <p>
                      <strong>5. Vector Database (Optional):</strong> For advanced RAG capabilities,
                      store project descriptions and tech stack information in a vector database.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-400">
          <p>💡 Tip: This section is ready for AI agent integration. The component structure and data models are already in place.</p>
        </div>
      </div>
    </section>
  )
}
