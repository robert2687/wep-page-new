import { useState } from 'react'
import { Brain, Send, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const AISolutionRecommender = () => {
  const [userInput, setUserInput] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [recommendation, setRecommendation] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const predefinedProblems = [
    {
      category: "E-commerce & Customer Retention",
      problems: [
        "We lose customers after their first purchase",
        "Our conversion rates are declining",
        "We need better product recommendations",
        "Customer support is overwhelmed with repetitive queries"
      ]
    },
    {
      category: "Logistics & Operations",
      problems: [
        "Our delivery routes are inefficient",
        "Fleet management costs are too high",
        "We need real-time tracking capabilities",
        "Inventory optimization is challenging"
      ]
    },
    {
      category: "Financial Management",
      problems: [
        "Cash flow prediction is unreliable",
        "We struggle with financial risk assessment",
        "Budget planning lacks transparency",
        "Investment decisions need better data support"
      ]
    },
    {
      category: "Marketing & Content",
      problems: [
        "Creating engaging content takes too much time",
        "Our marketing campaigns lack personalization",
        "Social media content generation is inefficient",
        "Brand voice consistency is difficult to maintain"
      ]
    },
    {
      category: "Security & Infrastructure",
      problems: [
        "We need better threat detection",
        "Cloud security monitoring is inadequate",
        "Anomaly detection in our systems is poor",
        "Cybersecurity incidents are hard to predict"
      ]
    },
    {
      category: "Digital Assets & Innovation",
      problems: [
        "We want to explore blockchain applications",
        "Customer loyalty programs need modernization",
        "Digital ticketing system is outdated",
        "We need practical NFT use cases"
      ]
    }
  ]

  const solutionDatabase = {
    // E-commerce & Customer Retention
    "customer retention": {
      project: "Synapsa X",
      solution: "AI-powered e-commerce platform with intelligent customer retention",
      description: "For your customer retention challenge, Synapsa X is the perfect solution. Our AI agents analyze customer behavior patterns to predict churn risk and automatically trigger personalized retention campaigns. The system uses advanced NLP to understand customer sentiment and provides proactive support before issues escalate.",
      benefits: ["15% increase in customer retention", "30% reduction in churn rate", "Automated personalized campaigns", "Real-time sentiment analysis"],
      technologies: ["AI Agents", "NLP", "Python", "GCP"],
      cta: "Our Synapsa X implementation helped an e-commerce client increase retention by 15% within 3 months. Would you like to discuss how we can customize this solution for your business?"
    },
    "conversion optimization": {
      project: "Synapsa X",
      solution: "Dynamic pricing and personalization engine",
      description: "Boost your conversion rates with our AI-driven personalization platform. Synapsa X uses machine learning to optimize product recommendations, pricing strategies, and user experience in real-time, adapting to each customer's behavior and preferences.",
      benefits: ["25% increase in conversion rates", "Dynamic pricing optimization", "Personalized user experiences", "A/B testing automation"],
      technologies: ["AI Agents", "NLP", "Python", "GCP"],
      cta: "We've helped e-commerce businesses achieve 25% higher conversion rates. Ready to transform your online store?"
    },

    // Logistics & Operations
    "logistics optimization": {
      project: "CargoSwift",
      solution: "Intelligent logistics and fleet management system",
      description: "CargoSwift revolutionizes your logistics operations with AI-powered route optimization and real-time fleet management. Our system reduces fuel costs by up to 30% while improving delivery times through intelligent route planning and predictive maintenance.",
      benefits: ["30% reduction in fuel costs", "Real-time fleet tracking", "Predictive maintenance", "Optimized delivery routes"],
      technologies: ["AI/ML", "IoT", "React", "Node.js"],
      cta: "CargoSwift helped a logistics company reduce operational costs by 30% and improve delivery times by 25%. Shall we discuss your specific logistics challenges?"
    },
    "fleet management": {
      project: "CargoSwift",
      solution: "IoT-enabled smart fleet management",
      description: "Transform your fleet operations with CargoSwift's IoT integration and AI analytics. Monitor vehicle health, optimize maintenance schedules, and track performance metrics in real-time to maximize efficiency and minimize downtime.",
      benefits: ["Real-time vehicle monitoring", "Predictive maintenance alerts", "Fuel efficiency optimization", "Driver performance analytics"],
      technologies: ["AI/ML", "IoT", "React", "Node.js"],
      cta: "Our smart fleet management solution has helped companies reduce maintenance costs by 40%. Would you like to see how it works for your fleet?"
    },

    // Financial Management
    "financial analysis": {
      project: "XAI Finance for SMEs",
      solution: "Transparent AI financial analysis and prediction",
      description: "XAI Finance provides SMEs with explainable AI-driven financial insights. Our system offers transparent cash flow predictions, risk assessments, and investment recommendations, helping you make informed decisions with clear explanations of how conclusions are reached.",
      benefits: ["Transparent AI predictions", "Cash flow forecasting", "Risk assessment", "Investment guidance"],
      technologies: ["XAI", "Python", "Vue.js"],
      cta: "XAI Finance has helped SMEs improve their financial decision-making accuracy by 40%. Would you like to explore how transparent AI can benefit your business?"
    },
    "cash flow prediction": {
      project: "XAI Finance for SMEs",
      solution: "Explainable cash flow forecasting system",
      description: "Our XAI Finance platform specializes in transparent cash flow predictions for SMEs. Unlike black-box solutions, our system explains every prediction, helping you understand the factors affecting your cash flow and make proactive adjustments.",
      benefits: ["Accurate cash flow forecasts", "Explainable predictions", "Risk factor identification", "Proactive planning tools"],
      technologies: ["XAI", "Python", "Vue.js"],
      cta: "We've helped SMEs achieve 85% accuracy in cash flow predictions with full transparency. Ready to gain better financial visibility?"
    },

    // Marketing & Content
    "content creation": {
      project: "CogniScribe",
      solution: "AI-powered content generation platform",
      description: "CogniScribe transforms your marketing workflow with intelligent content generation. Our generative AI understands your brand voice and creates high-quality copy for articles, social media, and campaigns, maintaining consistency while saving time and resources.",
      benefits: ["70% faster content creation", "Brand voice consistency", "Multi-platform optimization", "SEO-optimized content"],
      technologies: ["Generative AI", "LLM", "FastAPI"],
      cta: "Marketing teams using CogniScribe report 70% faster content creation with better engagement rates. Shall we demonstrate how it can transform your marketing?"
    },
    "marketing automation": {
      project: "CogniScribe",
      solution: "Intelligent marketing content automation",
      description: "Streamline your marketing operations with CogniScribe's AI-driven content automation. Generate personalized campaigns, social media posts, and email content that resonates with your target audience while maintaining your unique brand voice.",
      benefits: ["Automated campaign generation", "Personalized messaging", "Cross-platform consistency", "Performance optimization"],
      technologies: ["Generative AI", "LLM", "FastAPI"],
      cta: "Our AI marketing automation has helped companies increase engagement by 45% while reducing content creation time by 60%. Interested in learning more?"
    },

    // Security & Infrastructure
    "cybersecurity": {
      project: "Aegis Shield",
      solution: "Advanced threat detection and anomaly monitoring",
      description: "Aegis Shield provides comprehensive cybersecurity for your cloud infrastructure using advanced anomaly detection. Our system continuously monitors network traffic, user behavior, and system logs to identify potential threats before they become security breaches.",
      benefits: ["Real-time threat detection", "Anomaly monitoring", "Automated alerts", "Compliance reporting"],
      technologies: ["Anomaly Detection", "Cybersecurity", "AWS"],
      cta: "Aegis Shield has prevented security breaches for numerous clients by detecting threats 90% faster than traditional methods. Would you like to assess your current security posture?"
    },
    "threat detection": {
      project: "Aegis Shield",
      solution: "AI-powered security monitoring system",
      description: "Protect your digital assets with Aegis Shield's intelligent threat detection. Our machine learning algorithms analyze patterns in real-time to identify suspicious activities, potential intrusions, and security vulnerabilities before they impact your business.",
      benefits: ["24/7 automated monitoring", "Predictive threat analysis", "False positive reduction", "Incident response automation"],
      technologies: ["Anomaly Detection", "Cybersecurity", "AWS"],
      cta: "Our threat detection system has achieved 95% accuracy in identifying security threats. Ready to strengthen your cybersecurity defenses?"
    },

    // Digital Assets & Innovation
    "blockchain applications": {
      project: "Utility Mint",
      solution: "Practical NFT and digital asset platform",
      description: "Utility Mint focuses on creating blockchain solutions with real-world value. Our platform enables businesses to mint NFTs for tickets, loyalty cards, certificates, and other practical applications, moving beyond speculation to genuine utility.",
      benefits: ["Real utility NFTs", "Customer engagement", "Digital authenticity", "Loyalty program innovation"],
      technologies: ["Blockchain", "IPFS", "React"],
      cta: "Utility Mint has helped businesses create innovative customer engagement programs using practical NFTs. Would you like to explore blockchain applications for your industry?"
    },
    "digital innovation": {
      project: "Utility Mint",
      solution: "Blockchain-based customer engagement platform",
      description: "Transform customer relationships with Utility Mint's blockchain innovation. Create digital loyalty programs, event tickets, and certificates that provide real value while leveraging the security and authenticity of blockchain technology.",
      benefits: ["Enhanced customer loyalty", "Digital authenticity verification", "Innovative engagement tools", "Fraud prevention"],
      technologies: ["Blockchain", "IPFS", "React"],
      cta: "We've helped companies increase customer engagement by 35% through innovative blockchain applications. Shall we discuss your digital transformation goals?"
    }
  }

  const analyzeUserProblem = (input) => {
    const lowercaseInput = input.toLowerCase()
    
    // Keywords mapping to solutions
    const keywordMap = {
      "customer retention": ["retention", "churn", "lose customers", "first purchase", "repeat customers"],
      "conversion optimization": ["conversion", "sales", "purchase", "checkout", "cart abandonment"],
      "logistics optimization": ["logistics", "delivery", "shipping", "route", "transportation", "fleet"],
      "fleet management": ["fleet", "vehicles", "trucks", "drivers", "maintenance", "fuel"],
      "financial analysis": ["financial", "finance", "money", "budget", "investment", "profit"],
      "cash flow prediction": ["cash flow", "cash", "flow", "liquidity", "payments", "revenue"],
      "content creation": ["content", "marketing", "copy", "writing", "articles", "social media"],
      "marketing automation": ["marketing", "campaigns", "automation", "personalization", "engagement"],
      "cybersecurity": ["security", "cyber", "threats", "protection", "breach", "hack"],
      "threat detection": ["threat", "detection", "monitoring", "intrusion", "anomaly", "suspicious"],
      "blockchain applications": ["blockchain", "nft", "crypto", "digital assets", "web3"],
      "digital innovation": ["innovation", "digital", "loyalty", "tickets", "certificates", "modern"]
    }

    // Find the best matching solution
    let bestMatch = null
    let maxScore = 0

    for (const [solutionKey, keywords] of Object.entries(keywordMap)) {
      const score = keywords.reduce((acc, keyword) => {
        return acc + (lowercaseInput.includes(keyword) ? 1 : 0)
      }, 0)

      if (score > maxScore) {
        maxScore = score
        bestMatch = solutionKey
      }
    }

    return bestMatch && maxScore > 0 ? solutionDatabase[bestMatch] : null
  }

  const handleAnalyze = async () => {
    if (!userInput.trim()) return

    setIsAnalyzing(true)
    setRecommendation(null)

    // Simulate AI analysis delay
    await new Promise(resolve => setTimeout(resolve, 2000))

    const solution = analyzeUserProblem(userInput)
    
    if (solution) {
      setRecommendation(solution)
    } else {
      // Fallback recommendation
      setRecommendation({
        project: "Custom Solution",
        solution: "Tailored AI solution for your specific needs",
        description: "Based on your unique requirements, we recommend developing a custom AI solution. Our team specializes in creating bespoke AI/ML systems that address specific business challenges across various industries.",
        benefits: ["Custom-built for your needs", "Scalable architecture", "Expert consultation", "Ongoing support"],
        technologies: ["AI/ML", "Custom Development", "Cloud Infrastructure"],
        cta: "Every business is unique, and so are their challenges. Let's schedule a consultation to discuss how we can create the perfect AI solution for your specific needs."
      })
    }

    setIsAnalyzing(false)
  }

  const handlePredefinedProblem = (problem) => {
    setUserInput(problem)
    setSelectedCategory('')
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-blue-600 rounded-full">
              <Brain className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI Solution Recommender
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Describe your business challenge and get personalized AI solution recommendations 
            from our proven portfolio
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Input Section */}
          <div className="mb-8">
            <label className="block text-lg font-semibold text-gray-900 mb-4">
              What business challenge are you facing?
            </label>
            
            {/* Predefined Categories */}
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-3">Quick select from common challenges:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {predefinedProblems.map((category, index) => (
                  <div key={index}>
                    <button
                      onClick={() => setSelectedCategory(selectedCategory === category.category ? '' : category.category)}
                      className="w-full text-left p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors duration-200"
                    >
                      <span className="font-medium text-gray-900">{category.category}</span>
                      <ArrowRight className={`h-4 w-4 float-right mt-1 transition-transform duration-200 ${selectedCategory === category.category ? 'rotate-90' : ''}`} />
                    </button>
                    
                    {selectedCategory === category.category && (
                      <div className="mt-2 ml-4 space-y-2">
                        {category.problems.map((problem, problemIndex) => (
                          <button
                            key={problemIndex}
                            onClick={() => handlePredefinedProblem(problem)}
                            className="block w-full text-left text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded transition-colors duration-200"
                          >
                            • {problem}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Text Input */}
            <div className="relative">
              <textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Describe your business challenge in detail... (e.g., 'We have an e-shop and lose customers after their first order')"
                className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
              <Button
                onClick={handleAnalyze}
                disabled={!userInput.trim() || isAnalyzing}
                className="absolute bottom-3 right-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
              >
                {isAnalyzing ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Analyzing...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Send className="h-4 w-4" />
                    <span>Analyze</span>
                  </div>
                )}
              </Button>
            </div>
          </div>

          {/* Recommendation Results */}
          {recommendation && (
            <div className="border-t border-gray-200 pt-8">
              <div className="flex items-center mb-6">
                <Lightbulb className="h-6 w-6 text-yellow-500 mr-2" />
                <h3 className="text-2xl font-bold text-gray-900">Recommended Solution</h3>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-600 rounded-lg mr-3">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{recommendation.project}</h4>
                    <p className="text-blue-600 font-medium">{recommendation.solution}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  {recommendation.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Key Benefits:</h5>
                    <ul className="space-y-2">
                      {recommendation.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {recommendation.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                  <p className="text-gray-700 italic mb-4">
                    {recommendation.cta}
                  </p>
                  <Button
                    onClick={scrollToContact}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default AISolutionRecommender