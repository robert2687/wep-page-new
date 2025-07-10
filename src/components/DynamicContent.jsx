import { useState, useEffect } from 'react'

const DynamicContent = ({ children, onInteraction }) => {
  const [userInterests, setUserInterests] = useState([])
  const [viewedProjects, setViewedProjects] = useState([])

  useEffect(() => {
    // Track user interactions and interests
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-project]')
      sections.forEach(section => {
        const rect = section.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0
        
        if (isVisible) {
          const projectType = section.getAttribute('data-project')
          if (!viewedProjects.includes(projectType)) {
            setViewedProjects(prev => [...prev, projectType])
            
            // Determine user interests based on viewed projects
            const interests = determineInterests(projectType)
            setUserInterests(prev => [...new Set([...prev, ...interests])])
            
            // Notify parent component
            if (onInteraction) {
              onInteraction({ type: 'project_view', project: projectType, interests })
            }
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [viewedProjects, onInteraction])

  const determineInterests = (projectType) => {
    const interestMap = {
      'cargoswift': ['logistics', 'iot', 'optimization', 'ai'],
      'synapsax': ['ecommerce', 'ai-agents', 'nlp', 'personalization'],
      'xaifinance': ['fintech', 'explainable-ai', 'sme-solutions', 'finance'],
      'utilitymint': ['blockchain', 'nft', 'web3', 'digital-assets'],
      'aegisshield': ['cybersecurity', 'anomaly-detection', 'cloud-security'],
      'cogniscribe': ['generative-ai', 'marketing', 'content-creation', 'llm']
    }
    return interestMap[projectType] || []
  }

  return (
    <div className="dynamic-content-wrapper">
      {children}
      
      {/* Dynamic Interest Indicators */}
      {userInterests.length > 0 && (
        <div className="fixed top-20 right-4 z-40 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-200 max-w-xs">
          <h4 className="text-sm font-semibold text-gray-800 mb-2">Your Interests</h4>
          <div className="flex flex-wrap gap-1">
            {userInterests.slice(0, 6).map(interest => (
              <span
                key={interest}
                className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
              >
                {interest.replace('-', ' ')}
              </span>
            ))}
          </div>
          <p className="text-xs text-gray-600 mt-2">
            Based on your browsing, we've highlighted relevant content
          </p>
        </div>
      )}
    </div>
  )
}

export default DynamicContent