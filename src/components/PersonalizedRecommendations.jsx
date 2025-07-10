import { useState, useEffect } from 'react'
import { Lightbulb, TrendingUp, Zap } from 'lucide-react'

const PersonalizedRecommendations = ({ userInterests = [] }) => {
  const [recommendations, setRecommendations] = useState([])

  const allRecommendations = {
    'fintech': {
      icon: TrendingUp,
      title: "FinTech Solutions",
      description: "Explore our XAI Finance project - transparent AI for financial decision making",
      action: "Learn about XAI Finance",
      target: "xaifinance"
    },
    'ai': {
      icon: Zap,
      title: "AI & Machine Learning",
      description: "Discover how we implement cutting-edge AI across multiple industries",
      action: "View AI Projects",
      target: "services"
    },
    'blockchain': {
      icon: Lightbulb,
      title: "Blockchain Innovation",
      description: "See how Utility Mint creates practical value with NFT technology",
      action: "Explore Utility Mint",
      target: "utilitymint"
    },
    'cybersecurity': {
      icon: TrendingUp,
      title: "Cybersecurity Solutions",
      description: "Learn about Aegis Shield's advanced threat detection capabilities",
      action: "Discover Aegis Shield",
      target: "aegisshield"
    },
    'ecommerce': {
      icon: Zap,
      title: "E-commerce AI",
      description: "Synapsa X revolutionizes online shopping with AI agents",
      action: "See Synapsa X",
      target: "synapsax"
    },
    'logistics': {
      icon: TrendingUp,
      title: "Smart Logistics",
      description: "CargoSwift optimizes routes and fleet management with AI",
      action: "View CargoSwift",
      target: "cargoswift"
    }
  }

  useEffect(() => {
    if (userInterests.length > 0) {
      const relevant = userInterests
        .map(interest => allRecommendations[interest])
        .filter(Boolean)
        .slice(0, 3)
      
      setRecommendations(relevant)
    }
  }, [userInterests])

  const scrollToProject = (target) => {
    const element = document.querySelector(`[data-project="${target}"]`) || 
                   document.getElementById(target)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (recommendations.length === 0) return null

  return (
    <div className="fixed bottom-24 left-6 z-40 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200 max-w-sm">
      <div className="flex items-center space-x-2 mb-3">
        <Lightbulb className="h-5 w-5 text-blue-600" />
        <h3 className="font-semibold text-gray-800">Recommended for You</h3>
      </div>
      
      <div className="space-y-3">
        {recommendations.map((rec, index) => (
          <div key={index} className="group cursor-pointer" onClick={() => scrollToProject(rec.target)}>
            <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200">
              <div className="p-1 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-200">
                <rec.icon className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                  {rec.title}
                </h4>
                <p className="text-xs text-gray-600 mt-1">{rec.description}</p>
                <button className="text-xs text-blue-600 hover:text-blue-800 mt-1 font-medium">
                  {rec.action} →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-3 pt-3 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          Personalized based on your interests
        </p>
      </div>
    </div>
  )
}

export default PersonalizedRecommendations