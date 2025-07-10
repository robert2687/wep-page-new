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
      
    </div>
  )
}

export default DynamicContent