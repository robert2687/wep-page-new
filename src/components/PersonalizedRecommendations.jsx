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
    null
  )
}

export default PersonalizedRecommendations