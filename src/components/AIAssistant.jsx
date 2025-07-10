import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hi! I'm RMD26's AI assistant. I can help you learn about our projects, technologies, and capabilities. Try asking me about specific projects like 'Tell me about Aegis Shield' or 'What technologies were used in Synapsa X'.",
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Knowledge base for the AI assistant
  const knowledgeBase = {
    projects: {
      cargoswift: {
        name: "CargoSwift",
        description: "Intelligent SaaS logistics system for route optimization and real-time fleet management.",
        technologies: ["AI/ML", "IoT", "React", "Node.js"],
        details: "CargoSwift uses machine learning algorithms to optimize delivery routes in real-time, reducing fuel costs by up to 30% and improving delivery times. The system integrates IoT sensors for vehicle tracking and predictive maintenance."
      },
      synapsax: {
        name: "Synapsa X",
        description: "Advanced e-commerce platform using AI agents for personalization, dynamic pricing, and proactive support.",
        technologies: ["AI Agents", "NLP", "Python", "GCP"],
        details: "Synapsa X employs sophisticated AI agents that analyze customer behavior patterns to provide personalized shopping experiences. The platform uses natural language processing for intelligent customer support and dynamic pricing algorithms that adjust in real-time based on market conditions."
      },
      xaifinance: {
        name: "XAI Finance for SMEs",
        description: "Financial analysis tool for SMEs providing cash flow predictions and risk identification with model transparency.",
        technologies: ["XAI", "Python", "Vue.js"],
        details: "This explainable AI system helps small and medium enterprises understand their financial health through transparent machine learning models. It provides clear explanations for predictions, helping business owners make informed decisions about cash flow management and risk mitigation."
      },
      utilitymint: {
        name: "Utility Mint",
        description: "Platform for minting and managing NFT tokens with real utility value like tickets and loyalty cards.",
        technologies: ["Blockchain", "IPFS", "React"],
        details: "Utility Mint focuses on creating NFTs with practical applications beyond speculation. The platform enables businesses to create digital tickets, loyalty cards, and certificates that provide real value to customers while leveraging blockchain technology for security and authenticity."
      },
      aegisshield: {
        name: "Aegis Shield",
        description: "Threat detection system for cloud infrastructure using anomaly detection to identify suspicious activity.",
        technologies: ["Anomaly Detection", "Cybersecurity", "AWS"],
        details: "Aegis Shield uses advanced machine learning algorithms to monitor cloud infrastructure and detect potential security threats. The system analyzes network traffic patterns, user behavior, and system logs to identify anomalies that could indicate cyber attacks or data breaches."
      },
      cogniscribe: {
        name: "CogniScribe",
        description: "Generative AI tool for marketing teams creating high-quality copy for articles, social media, and campaigns.",
        technologies: ["Generative AI", "LLM", "FastAPI"],
        details: "CogniScribe leverages large language models to generate compelling marketing content. The tool understands brand voice, target audience, and campaign objectives to create personalized content that resonates with specific demographics and drives engagement."
      }
    },
    technologies: {
      "ai/ml": "We specialize in artificial intelligence and machine learning, including deep learning, neural networks, computer vision, and natural language processing.",
      "react": "React is our frontend framework of choice for building modern, responsive user interfaces with excellent performance and developer experience.",
      "python": "Python is our primary language for AI/ML development, data science, and backend services due to its rich ecosystem of libraries and frameworks.",
      "node.js": "We use Node.js for scalable backend services, real-time applications, and API development.",
      "blockchain": "Our blockchain expertise includes smart contract development, DeFi protocols, and NFT platforms.",
      "aws": "We leverage AWS cloud services for scalable, secure, and cost-effective infrastructure solutions.",
      "vue.js": "Vue.js is another frontend framework we use for building interactive and performant web applications.",
      "tensorflow": "TensorFlow is one of our primary frameworks for developing and deploying machine learning models at scale.",
      "pytorch": "PyTorch is our preferred framework for research and development of cutting-edge AI models."
    },
    services: {
      "ai models": "We develop custom AI models including predictive analytics, natural language processing, computer vision, and recommendation systems tailored to your business needs.",
      "enterprise saas": "Our enterprise SaaS solutions are cloud-native, scalable platforms designed for business operations with real-time analytics and enterprise-grade security.",
      "full-stack engineering": "We provide comprehensive development services covering frontend, backend, databases, and DevOps for modern web applications."
    }
  }

  const generateResponse = (userMessage) => {
    const message = userMessage.toLowerCase()
    
    // Project-specific queries
    for (const [key, project] of Object.entries(knowledgeBase.projects)) {
      if (message.includes(project.name.toLowerCase()) || message.includes(key)) {
        return `${project.name}: ${project.details}\n\nTechnologies used: ${project.technologies.join(', ')}\n\nWould you like to know more about any specific aspect of this project?`
      }
    }

    // Technology queries
    for (const [tech, description] of Object.entries(knowledgeBase.technologies)) {
      if (message.includes(tech.toLowerCase()) || message.includes(tech.replace(/[./]/g, '').toLowerCase())) {
        return `${tech.toUpperCase()}: ${description}\n\nWe've used this technology in several of our projects. Would you like to know which specific projects utilized ${tech}?`
      }
    }

    // Service queries
    for (const [service, description] of Object.entries(knowledgeBase.services)) {
      if (message.includes(service.toLowerCase())) {
        return `${service.toUpperCase()}: ${description}\n\nWould you like to see examples of our work in this area?`
      }
    }

    // General queries
    if (message.includes('experience') || message.includes('background')) {
      return "RMD26 specializes in making cutting-edge AI/ML technologies accessible to SMEs. We have extensive experience in AI model development, enterprise SaaS platforms, and full-stack engineering. Our portfolio includes 6 major projects spanning logistics, e-commerce, finance, blockchain, cybersecurity, and marketing automation."
    }

    if (message.includes('contact') || message.includes('hire') || message.includes('work together')) {
      return "I'd love to help you get in touch with the RMD26 team! You can reach us at r.m.devmail26@gmail.com or +421951324534. We're based in Želovce, Slovakia, but work with clients globally. Feel free to scroll down to the contact section to send us a message directly!"
    }

    if (message.includes('projects') || message.includes('portfolio')) {
      return "We have 6 major projects in our portfolio:\n\n• CargoSwift - Logistics optimization\n• Synapsa X - AI-powered e-commerce\n• XAI Finance - Transparent financial AI\n• Utility Mint - Practical NFT platform\n• Aegis Shield - Cybersecurity system\n• CogniScribe - AI content generation\n\nWhich project would you like to learn more about?"
    }

    // Default response
    return "I can help you learn about RMD26's projects, technologies, and services. Try asking me about:\n\n• Specific projects (CargoSwift, Synapsa X, XAI Finance, etc.)\n• Technologies we use (AI/ML, React, Python, etc.)\n• Our services (AI Models, Enterprise SaaS, Full-Stack Engineering)\n• Our experience and background\n\nWhat would you like to know?"
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        type: 'bot',
        content: generateResponse(inputValue),
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          aria-label="Open AI Assistant"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-2xl flex items-center space-x-3">
            <div className="p-2 bg-blue-500 rounded-full">
              <Bot size={20} />
            </div>
            <div>
              <h3 className="font-semibold">RMD26 AI Assistant</h3>
              <p className="text-sm opacity-90">Ask me about our projects & tech</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.type === 'bot' && (
                      <Bot size={16} className="mt-1 flex-shrink-0" />
                    )}
                    {message.type === 'user' && (
                      <User size={16} className="mt-1 flex-shrink-0" />
                    )}
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-lg max-w-xs">
                  <div className="flex items-center space-x-2">
                    <Bot size={16} />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about our projects..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-colors duration-200"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default AIAssistant