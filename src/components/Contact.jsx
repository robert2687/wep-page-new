import { useState } from 'react'
import { Mail, Phone, MapPin, Send, DollarSign, ExternalLink, Lightbulb } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [aiSuggestions, setAiSuggestions] = useState([])
  const [showBudgetField, setShowBudgetField] = useState(false)
  const [budget, setBudget] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    
    // AI analysis for message field
    if (e.target.name === 'message') {
      analyzeMessage(e.target.value)
    }
  }

  const analyzeMessage = (message) => {
    const lowercaseMessage = message.toLowerCase()
    const suggestions = []
    
    // Budget-related keywords
    const budgetKeywords = ['price', 'cost', 'budget', 'how much', 'pricing', 'quote', 'estimate', 'fee']
    const hasBudgetKeywords = budgetKeywords.some(keyword => lowercaseMessage.includes(keyword))
    
    if (hasBudgetKeywords && !showBudgetField) {
      setShowBudgetField(true)
      suggestions.push({
        type: 'budget',
        icon: DollarSign,
        title: 'Budget Information',
        content: 'Our projects typically start from €5,000 for SME solutions and scale based on complexity and requirements. We offer flexible pricing models to ensure the highest quality within your budget.',
        action: null
      })
    }
    
    // Project-specific keywords
    const projectKeywords = {
      'synapsa x': ['ecommerce', 'e-commerce', 'eshop', 'e-shop', 'online store', 'customer retention', 'personalization'],
      'cargoswift': ['logistics', 'delivery', 'fleet', 'transportation', 'route optimization', 'shipping'],
      'xai finance': ['finance', 'financial', 'cash flow', 'budget planning', 'risk assessment', 'sme finance'],
      'cogniscribe': ['marketing', 'content', 'copywriting', 'social media', 'campaigns', 'content creation'],
      'aegis shield': ['security', 'cybersecurity', 'threat detection', 'cloud security', 'protection'],
      'utility mint': ['blockchain', 'nft', 'crypto', 'digital assets', 'loyalty program', 'tickets']
    }
    
    for (const [project, keywords] of Object.entries(projectKeywords)) {
      const hasProjectKeywords = keywords.some(keyword => lowercaseMessage.includes(keyword))
      if (hasProjectKeywords) {
        const projectInfo = getProjectInfo(project)
        suggestions.push({
          type: 'project',
          icon: ExternalLink,
          title: `Relevant Case Study: ${projectInfo.name}`,
          content: projectInfo.description,
          action: {
            text: `Learn more about ${projectInfo.name}`,
            onClick: () => scrollToProject(project.replace(' ', '').toLowerCase())
          }
        })
        break // Only show one project suggestion
      }
    }
    
    // Technology keywords
    const techKeywords = ['ai', 'artificial intelligence', 'machine learning', 'ml', 'automation', 'intelligent']
    const hasTechKeywords = techKeywords.some(keyword => lowercaseMessage.includes(keyword))
    
    if (hasTechKeywords && suggestions.length === 0) {
      suggestions.push({
        type: 'general',
        icon: Lightbulb,
        title: 'AI Solutions Expertise',
        content: 'We specialize in making cutting-edge AI/ML technologies accessible to SMEs. Our solutions include custom AI models, enterprise SaaS platforms, and full-stack engineering.',
        action: {
          text: 'Explore our AI capabilities',
          onClick: () => scrollToSection('services')
        }
      })
    }
    
    setAiSuggestions(suggestions)
  }
  
  const getProjectInfo = (project) => {
    const projects = {
      'synapsa x': {
        name: 'Synapsa X',
        description: 'Advanced e-commerce platform using AI agents for personalization, dynamic pricing, and proactive customer support. Achieved 15% increase in customer retention.'
      },
      'cargoswift': {
        name: 'CargoSwift',
        description: 'Intelligent logistics system for route optimization and fleet management. Reduced operational costs by 30% and improved delivery times by 25%.'
      },
      'xai finance': {
        name: 'XAI Finance for SMEs',
        description: 'Transparent financial analysis tool providing cash flow predictions and risk assessment with explainable AI for better decision-making.'
      },
      'cogniscribe': {
        name: 'CogniScribe',
        description: 'Generative AI tool for marketing teams creating high-quality content. Reduced content creation time by 70% while maintaining brand consistency.'
      },
      'aegis shield': {
        name: 'Aegis Shield',
        description: 'Advanced threat detection system for cloud infrastructure using anomaly detection. Achieved 95% accuracy in identifying security threats.'
      },
      'utility mint': {
        name: 'Utility Mint',
        description: 'Blockchain platform for practical NFT applications including tickets, loyalty cards, and certificates with real utility value.'
      }
    }
    return projects[project] || { name: 'Project', description: 'Innovative AI solution' }
  }
  
  const scrollToProject = (projectId) => {
    const element = document.querySelector(`[data-project="${projectId}"]`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    if (budget) {
      console.log('Budget:', budget)
    }
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', company: '', message: '' })
    setBudget('')
    setShowBudgetField(false)
    setAiSuggestions([])
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge AI and technology solutions? 
            Let's discuss your project and explore how we can help you innovate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">r.m.devmail26@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+421951324534</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Želovce, Slovakia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Why Choose RMD26?</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-600">Expert team with proven track record</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-600">Cutting-edge AI/ML technologies</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-600">Tailored solutions for SMEs</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-600">End-to-end project support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Your company name"
                />
              </div>

              {showBudgetField && (
                <div className="animate-fadeInUp">
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Budget Range
                  </label>
                  <select
                    id="budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select budget range</option>
                    <option value="5k-15k">€5,000 - €15,000</option>
                    <option value="15k-50k">€15,000 - €50,000</option>
                    <option value="50k-100k">€50,000 - €100,000</option>
                    <option value="100k+">€100,000+</option>
                    <option value="discuss">Let's discuss</option>
                  </select>
                </div>
              )}

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell us about your project and how we can help..."
                />
              </div>

              {/* AI Suggestions */}
              {aiSuggestions.length > 0 && (
                <div className="space-y-4 animate-fadeInUp">
                  {aiSuggestions.map((suggestion, index) => (
                    <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg">
                          <suggestion.icon className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-blue-900 mb-2">
                            {suggestion.title}
                          </h4>
                          <p className="text-sm text-blue-800 mb-3">
                            {suggestion.content}
                          </p>
                          {suggestion.action && (
                            <button
                              onClick={suggestion.action.onClick}
                              className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 flex items-center space-x-1"
                            >
                              <span>{suggestion.action.text}</span>
                              <ExternalLink className="h-3 w-3" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <Button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact