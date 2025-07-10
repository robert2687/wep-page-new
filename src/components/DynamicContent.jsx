import { useState, useEffect } from 'react'
import { Eye, TrendingUp, Zap } from 'lucide-react'

const DynamicContent = () => {
  const [userInterests, setUserInterests] = useState([])
  const [personalizedContent, setPersonalizedContent] = useState(null)
  const [viewHistory, setViewHistory] = useState([])

  useEffect(() => {
    // Load user preferences from localStorage
    const savedInterests = localStorage.getItem('rmd26_user_interests')
    const savedHistory = localStorage.getItem('rmd26_view_history')
    
    if (savedInterests) {
      setUserInterests(JSON.parse(savedInterests))
    }
    if (savedHistory) {
      setViewHistory(JSON.parse(savedHistory))
    }
  }, [])

  const trackInteraction = (category, item) => {
    const interaction = {
      category,
      item,
      timestamp: Date.now()
    }
    
    const newHistory = [...viewHistory, interaction].slice(-20) // Keep last 20 interactions
    setViewHistory(newHistory)
    localStorage.setItem('rmd26_view_history', JSON.stringify(newHistory))
    
    // Update interests based on interactions
    updateUserInterests(category)
  }

  const updateUserInterests = (category) => {
    const categoryMap = {
      'ai': ['AI/ML', 'Machine Learning', 'Neural Networks', 'Deep Learning'],
      'finance': ['FinTech', 'Financial Analytics', 'Risk Assessment', 'Predictive Modeling'],
      'cybersecurity': ['Security', 'Threat Detection', 'Anomaly Detection', 'Network Security'],
      'saas': ['Enterprise Software', 'Cloud Computing', 'Scalable Systems', 'SaaS Platforms'],
      'fullstack': ['Web Development', 'Frontend', 'Backend', 'Full-Stack Engineering']
    }
    
    const newInterests = categoryMap[category] || []
    const updatedInterests = [...new Set([...userInterests, ...newInterests])].slice(0, 10)
    
    setUserInterests(updatedInterests)
    localStorage.setItem('rmd26_user_interests', JSON.stringify(updatedInterests))
    
    generatePersonalizedContent(updatedInterests)
  }

  const generatePersonalizedContent = (interests) => {
    const contentDatabase = {
      'AI/ML': {
        title: 'Advanced AI/ML Solutions',
        description: 'Explore our cutting-edge artificial intelligence and machine learning implementations',
        projects: ['CogniScribe', 'XAI Finance for SMEs'],
        articles: ['Building Production AI Systems', 'Explainable AI in Practice'],
        icon: Zap,
        color: 'purple'
      },
      'FinTech': {
        title: 'Financial Technology Innovation',
        description: 'Discover how we\'re revolutionizing finance with transparent AI solutions',
        projects: ['XAI Finance for SMEs'],
        articles: ['Explainable AI in Finance', 'Building Trust in Financial AI'],
        icon: TrendingUp,
        color: 'green'
      },
      'Security': {
        title: 'Cybersecurity Excellence',
        description: 'Real-time threat detection and network security at enterprise scale',
        projects: ['Aegis Shield'],
        articles: ['Real-time Anomaly Detection', 'Scaling Cybersecurity Systems'],
        icon: Eye,
        color: 'red'
      },
      'Enterprise Software': {
        title: 'Enterprise SaaS Platforms',
        description: 'Scalable, cloud-native solutions for modern businesses',
        projects: ['CargoSwift', 'Synapsa X'],
        articles: ['Building Scalable SaaS', 'Enterprise Architecture Patterns'],
        icon: Zap,
        color: 'blue'
      }
    }

    // Find the most relevant content based on user interests
    const relevantContent = interests
      .map(interest => contentDatabase[interest])
      .filter(Boolean)
      .slice(0, 3)

    if (relevantContent.length > 0) {
      setPersonalizedContent(relevantContent)
    }
  }

  // Component to track project views
  const ProjectTracker = ({ projectName, category, children }) => {
    const handleClick = () => {
      trackInteraction(category, projectName)
    }

    return (
      <div onClick={handleClick}>
        {children}
      </div>
    )
  }

  // Personalized recommendations component
  const PersonalizedRecommendations = () => {
    if (!personalizedContent || personalizedContent.length === 0) return null

    return (
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-200 mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <Zap className="h-5 w-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Recommended for You</h3>
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">AI Personalized</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {personalizedContent.map((content, index) => {
            const IconComponent = content.icon
            return (
              <div key={index} className={`bg-white p-4 rounded-xl border border-${content.color}-200 hover:shadow-lg transition-all duration-300`}>
                <div className="flex items-center space-x-2 mb-2">
                  <IconComponent className={`h-5 w-5 text-${content.color}-600`} />
                  <h4 className="font-semibold text-gray-900 text-sm">{content.title}</h4>
                </div>
                <p className="text-xs text-gray-600 mb-3">{content.description}</p>
                
                <div className="space-y-2">
                  <div>
                    <p className="text-xs font-medium text-gray-700">Relevant Projects:</p>
                    <div className="flex flex-wrap gap-1">
                      {content.projects.map((project, idx) => (
                        <span key={idx} className={`text-xs bg-${content.color}-100 text-${content.color}-700 px-2 py-1 rounded-full`}>
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-xs font-medium text-gray-700">Suggested Reading:</p>
                    <div className="space-y-1">
                      {content.articles.slice(0, 2).map((article, idx) => (
                        <p key={idx} className="text-xs text-gray-600">• {article}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="mt-4 text-xs text-gray-500">
          💡 Content personalized based on your interests: {userInterests.slice(0, 3).join(', ')}
          {userInterests.length > 3 && ` +${userInterests.length - 3} more`}
        </div>
      </div>
    )
  }

  // Analytics dashboard for demonstration
  const UserAnalytics = () => {
    if (viewHistory.length === 0) return null

    const categoryStats = viewHistory.reduce((acc, interaction) => {
      acc[interaction.category] = (acc[interaction.category] || 0) + 1
      return acc
    }, {})

    return (
      <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-6">
        <h4 className="font-semibold text-gray-900 mb-3 text-sm">Your Interaction Analytics</h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {Object.entries(categoryStats).map(([category, count]) => (
            <div key={category} className="text-center p-2 bg-white rounded-lg">
              <div className="text-lg font-bold text-blue-600">{count}</div>
              <div className="text-xs text-gray-600 capitalize">{category}</div>
            </div>
          ))}
        </div>
        <div className="mt-2 text-xs text-gray-500">
          Total interactions: {viewHistory.length} | Last activity: {viewHistory.length > 0 ? new Date(viewHistory[viewHistory.length - 1].timestamp).toLocaleTimeString() : 'None'}
        </div>
      </div>
    )
  }

  return {
    PersonalizedRecommendations,
    ProjectTracker,
    UserAnalytics,
    trackInteraction
  }
}

export default DynamicContent