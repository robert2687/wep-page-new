import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hi! I'm RMD26's AI assistant. I can answer questions about our projects, technologies, and experience. Try asking me something like 'What technologies did you use in Aegis Shield?' or 'Tell me about your AI expertise.'"
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

  const knowledgeBase = {
    // Project-specific information
    'aegis shield': {
      technologies: ['Autoencoder Neural Networks', 'Isolation Forest', 'Apache Kafka', 'TensorFlow', 'InfluxDB', 'Neo4j', 'AWS Lambda'],
      description: 'A real-time cybersecurity threat detection system that processes 1M+ events per second with sub-100ms detection times.',
      challenges: 'Real-time anomaly detection at network scale, reducing false positive rates, scalable threat intelligence integration',
      metrics: 'Detection speed < 100ms, False positive rate < 5%, 99.2% threat coverage, 1M+ events/second throughput'
    },
    'cogniscribe': {
      technologies: ['GPT-3.5', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'AWS ECS'],
      description: 'An AI-powered content generation platform for marketing teams that creates high-quality copy for articles, social media, and campaigns.',
      challenges: 'Context-aware content generation, real-time performance at scale, content quality consistency',
      metrics: 'Response time < 2 seconds, 94% user satisfaction, 99.9% API uptime, 60% cost reduction vs manual copywriting'
    },
    'xai finance': {
      technologies: ['LSTM', 'XGBoost', 'SHAP', 'Vue.js', 'Python', 'TimescaleDB', 'Kubernetes', 'GCP'],
      description: 'A financial analysis tool for SMEs providing cash flow predictions and risk identification with model transparency.',
      challenges: 'Model interpretability for non-technical users, handling irregular financial data, real-time risk assessment',
      metrics: '87% prediction accuracy for 3-month forecasts, 92% risk detection rate, < 500ms processing speed'
    },
    'cargoswift': {
      technologies: ['AI/ML', 'IoT', 'React', 'Node.js'],
      description: 'Intelligent SaaS logistics system for route optimization and real-time fleet management.',
      challenges: 'Real-time route optimization, IoT device integration, scalable fleet management',
      metrics: 'Route optimization efficiency, real-time tracking accuracy, fleet management automation'
    },
    'synapsa x': {
      technologies: ['AI Agents', 'NLP', 'Python', 'GCP'],
      description: 'Advanced e-commerce platform using AI agents for personalization, dynamic pricing, and proactive support.',
      challenges: 'AI agent coordination, dynamic pricing algorithms, personalization at scale',
      metrics: 'Personalization accuracy, pricing optimization results, customer satisfaction scores'
    },
    'utility mint': {
      technologies: ['Blockchain', 'IPFS', 'React'],
      description: 'Platform for minting and managing NFT tokens with real utility value like tickets and loyalty cards.',
      challenges: 'Blockchain integration, utility token design, scalable NFT management',
      metrics: 'Transaction throughput, utility token adoption, platform scalability'
    }
  }

  const getAIResponse = async (userMessage) => {
    const message = userMessage.toLowerCase()
    
    // Project-specific queries
    for (const [project, info] of Object.entries(knowledgeBase)) {
      if (message.includes(project.replace(' ', ''))) {
        if (message.includes('technolog') || message.includes('tech stack') || message.includes('tools')) {
          return `For ${project.charAt(0).toUpperCase() + project.slice(1)}, we used: ${info.technologies.join(', ')}. ${info.description}`
        }
        if (message.includes('challenge') || message.includes('problem') || message.includes('difficult')) {
          return `The main challenges in ${project.charAt(0).toUpperCase() + project.slice(1)} were: ${info.challenges}. We solved these through innovative approaches and cutting-edge technology.`
        }
        if (message.includes('metric') || message.includes('performance') || message.includes('result')) {
          return `${project.charAt(0).toUpperCase() + project.slice(1)} achieved impressive results: ${info.metrics}.`
        }
        return `${project.charAt(0).toUpperCase() + project.slice(1)}: ${info.description} Key technologies: ${info.technologies.slice(0, 3).join(', ')}.`
      }
    }

    // Technology expertise queries
    if (message.includes('tensorflow') || message.includes('machine learning') || message.includes('ai experience')) {
      return "I have extensive experience with TensorFlow, particularly in building production AI systems. In Aegis Shield, I used TensorFlow for autoencoder neural networks achieving 99.2% threat detection accuracy. I've also worked with PyTorch, scikit-learn, and custom ML pipelines."
    }

    if (message.includes('react') || message.includes('frontend') || message.includes('javascript')) {
      return "I'm proficient in modern frontend technologies including React with TypeScript, Vue.js, and advanced CSS frameworks. I've built responsive, interactive UIs for all our projects, including real-time dashboards and AI-powered interfaces."
    }

    if (message.includes('python') || message.includes('backend') || message.includes('api')) {
      return "Python is one of my core strengths, especially for AI/ML and backend development. I've built production APIs using FastAPI, Flask, and Django, handling everything from real-time data processing to AI model serving at scale."
    }

    if (message.includes('cloud') || message.includes('aws') || message.includes('gcp') || message.includes('deployment')) {
      return "I have extensive cloud experience across AWS and GCP. I've deployed scalable systems using Docker, Kubernetes, and serverless architectures. Our projects handle millions of requests with 99.9% uptime through proper cloud architecture."
    }

    if (message.includes('database') || message.includes('data')) {
      return "I work with various databases depending on the use case: PostgreSQL for transactional data, TimescaleDB for time-series, InfluxDB for metrics, Neo4j for graph data, and Redis for caching. Each project uses the optimal data storage strategy."
    }

    // General queries
    if (message.includes('experience') || message.includes('background')) {
      return "I specialize in AI/ML, Enterprise SaaS, and Full-Stack Engineering. I've built 6 major projects including real-time cybersecurity systems, AI content generation platforms, and explainable finance tools. My expertise spans from neural networks to production deployment."
    }

    if (message.includes('generative ai') || message.includes('gpt') || message.includes('llm')) {
      return "CogniScribe showcases my generative AI expertise. I fine-tuned GPT-3.5 for marketing content generation, implemented custom prompt engineering, and built a production system serving thousands of users with 94% satisfaction rates."
    }

    if (message.includes('cybersecurity') || message.includes('security')) {
      return "Aegis Shield demonstrates my cybersecurity expertise. I built a real-time threat detection system processing 1M+ events/second using autoencoder neural networks and isolation forests, achieving 99.2% threat coverage with <5% false positives."
    }

    if (message.includes('finance') || message.includes('fintech')) {
      return "XAI Finance for SMEs shows my fintech experience. I built explainable AI models for financial predictions using LSTM and XGBoost, with SHAP integration for transparency. The system achieves 87% accuracy for 3-month cash flow forecasts."
    }

    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm here to help you learn about RMD26's projects and technical expertise. Feel free to ask about specific technologies, project challenges, or our AI/ML capabilities!"
    }

    // Default response with suggestions
    return "I'd be happy to help! You can ask me about:\n\n• Specific projects (Aegis Shield, CogniScribe, XAI Finance, etc.)\n• Technologies used (TensorFlow, React, Python, AWS, etc.)\n• Technical challenges and solutions\n• AI/ML expertise and experience\n• Performance metrics and results\n\nWhat would you like to know?"
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputValue
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(async () => {
      const response = await getAIResponse(inputValue)
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: response
      }
      setMessages(prev => [...prev, botMessage])
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
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className={`bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${isOpen ? 'hidden' : 'flex'}`}
        >
          <MessageCircle className="h-6 w-6" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/20 rounded-full">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">RMD26 AI Assistant</h3>
                <p className="text-sm opacity-90">Ask me about our projects & tech</p>
              </div>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              className="text-white hover:bg-white/20 p-2"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`p-2 rounded-full ${message.type === 'user' ? 'bg-blue-100' : 'bg-purple-100'}`}>
                    {message.type === 'user' ? (
                      <User className="h-4 w-4 text-blue-600" />
                    ) : (
                      <Bot className="h-4 w-4 text-purple-600" />
                    )}
                  </div>
                  <div className={`p-3 rounded-2xl ${
                    message.type === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <p className="text-sm leading-relaxed whitespace-pre-line">{message.content}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2 max-w-[80%]">
                  <div className="p-2 rounded-full bg-purple-100">
                    <Bot className="h-4 w-4 text-purple-600" />
                  </div>
                  <div className="p-3 rounded-2xl bg-gray-100">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
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
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about our projects, technologies, or experience..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows={2}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 self-end"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default AIAssistant