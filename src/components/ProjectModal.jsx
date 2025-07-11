import { useState } from 'react'
import { X, ExternalLink, CheckCircle, TrendingUp, Users, Clock, Award } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null

  const projectDetails = {
    cargoswift: {
      fullName: "CargoSwift - Intelligent Logistics Platform",
      overview: "CargoSwift revolutionizes logistics operations through AI-powered route optimization and real-time fleet management. Our comprehensive solution reduces operational costs while improving delivery efficiency and customer satisfaction.",
      challenge: "Traditional logistics companies struggle with inefficient route planning, high fuel costs, unpredictable maintenance schedules, and lack of real-time visibility into fleet operations. Manual planning processes lead to suboptimal routes and increased operational expenses.",
      solution: "We developed an intelligent SaaS platform that combines machine learning algorithms with IoT sensors to optimize every aspect of fleet operations. The system analyzes traffic patterns, weather conditions, vehicle performance, and delivery constraints to generate optimal routes in real-time.",
      keyFeatures: [
        "AI-powered route optimization reducing travel time by 25%",
        "Real-time GPS tracking and fleet monitoring",
        "Predictive maintenance alerts preventing 90% of breakdowns",
        "Dynamic route adjustment based on traffic and weather",
        "Fuel consumption optimization algorithms",
        "Driver performance analytics and coaching",
        "Customer delivery notifications and tracking",
        "Integration with existing ERP and logistics systems"
      ],
      results: [
        { metric: "30%", description: "Reduction in fuel costs" },
        { metric: "25%", description: "Improvement in delivery times" },
        { metric: "40%", description: "Decrease in maintenance costs" },
        { metric: "95%", description: "On-time delivery rate" }
      ],
      technologies: ["Machine Learning", "IoT Sensors", "React", "Node.js", "MongoDB", "AWS", "Real-time Analytics"],
      timeline: "6 months development, 2 months deployment",
      clientType: "Mid-size logistics company with 150+ vehicles"
    },
    synapsax: {
      fullName: "Synapsa X - AI-Powered E-commerce Platform",
      overview: "Synapsa X transforms online retail through intelligent AI agents that provide personalized shopping experiences, dynamic pricing, and proactive customer support. The platform increases conversion rates and customer lifetime value through advanced personalization.",
      challenge: "E-commerce businesses face declining conversion rates, high customer acquisition costs, and difficulty in providing personalized experiences at scale. Traditional recommendation systems lack context awareness and fail to understand customer intent.",
      solution: "We created an advanced e-commerce platform powered by AI agents that understand customer behavior, preferences, and intent. The system provides real-time personalization, dynamic pricing optimization, and intelligent customer support.",
      keyFeatures: [
        "AI agents for personalized product recommendations",
        "Dynamic pricing based on demand and competition",
        "Natural language processing for customer support",
        "Behavioral analysis and intent prediction",
        "A/B testing automation for optimization",
        "Inventory management with demand forecasting",
        "Multi-channel customer journey tracking",
        "Real-time personalization engine"
      ],
      results: [
        { metric: "35%", description: "Increase in conversion rates" },
        { metric: "50%", description: "Improvement in customer retention" },
        { metric: "28%", description: "Higher average order value" },
        { metric: "60%", description: "Reduction in support tickets" }
      ],
      technologies: ["AI Agents", "Natural Language Processing", "Python", "TensorFlow", "React", "GCP", "BigQuery"],
      timeline: "8 months development, 3 months optimization",
      clientType: "Growing e-commerce retailer with 50K+ monthly visitors"
    },
    xaifinance: {
      fullName: "XAI Finance for SMEs - Transparent Financial AI",
      overview: "XAI Finance provides small and medium enterprises with explainable AI-driven financial insights. Unlike black-box solutions, our platform offers transparent predictions and clear explanations, helping business owners make informed financial decisions.",
      challenge: "SMEs struggle with financial planning due to lack of sophisticated tools and expertise. Traditional financial software provides basic reporting but lacks predictive capabilities and actionable insights. Business owners need transparent, understandable financial guidance.",
      solution: "We developed an explainable AI platform that analyzes financial data to provide clear, actionable insights. The system explains its reasoning behind every prediction, helping business owners understand the factors affecting their financial health.",
      keyFeatures: [
        "Explainable cash flow predictions with reasoning",
        "Risk assessment with transparent scoring",
        "Investment opportunity analysis",
        "Budget optimization recommendations",
        "Financial health monitoring dashboard",
        "Scenario planning and what-if analysis",
        "Regulatory compliance tracking",
        "Integration with accounting software"
      ],
      results: [
        { metric: "85%", description: "Accuracy in cash flow predictions" },
        { metric: "40%", description: "Improvement in financial planning" },
        { metric: "60%", description: "Faster decision-making process" },
        { metric: "25%", description: "Reduction in financial risks" }
      ],
      technologies: ["Explainable AI", "Python", "scikit-learn", "Vue.js", "PostgreSQL", "FastAPI"],
      timeline: "5 months development, 2 months testing",
      clientType: "SMEs with annual revenue between €500K - €5M"
    },
    utilitymint: {
      fullName: "Utility Mint - Practical NFT Platform",
      overview: "Utility Mint focuses on creating blockchain solutions with real-world value. Our platform enables businesses to mint NFTs for practical applications like event tickets, loyalty cards, and certificates, moving beyond speculation to genuine utility.",
      challenge: "Most NFT platforms focus on speculative trading rather than practical applications. Businesses need blockchain solutions that provide real value to customers while ensuring security, authenticity, and ease of use.",
      solution: "We built a comprehensive platform for creating and managing utility-focused NFTs. The system enables businesses to digitize their customer engagement programs using blockchain technology for security and authenticity.",
      keyFeatures: [
        "Easy NFT minting for non-technical users",
        "Smart contracts for various use cases",
        "Digital ticket validation system",
        "Loyalty program management",
        "Certificate authenticity verification",
        "Mobile-friendly wallet integration",
        "Analytics and engagement tracking",
        "White-label solutions for businesses"
      ],
      results: [
        { metric: "200+", description: "Businesses using the platform" },
        { metric: "50K+", description: "Utility NFTs minted" },
        { metric: "95%", description: "Customer satisfaction rate" },
        { metric: "80%", description: "Reduction in fraud cases" }
      ],
      technologies: ["Blockchain", "Solidity", "IPFS", "React", "Web3.js", "Ethereum", "Polygon"],
      timeline: "7 months development, 3 months security audits",
      clientType: "Event organizers, retail businesses, educational institutions"
    },
    aegisshield: {
      fullName: "Aegis Shield - Advanced Threat Detection",
      overview: "Aegis Shield provides comprehensive cybersecurity for cloud infrastructure using advanced machine learning algorithms. The system continuously monitors network traffic, user behavior, and system logs to identify potential threats before they become security breaches.",
      challenge: "Organizations face increasingly sophisticated cyber threats that traditional security tools fail to detect. Manual monitoring is inefficient and reactive, often identifying threats only after damage has occurred.",
      solution: "We developed an intelligent threat detection system that uses machine learning to identify anomalies and potential security threats in real-time. The system learns normal behavior patterns and alerts on deviations that could indicate security incidents.",
      keyFeatures: [
        "Real-time threat detection and alerting",
        "Behavioral analysis and anomaly detection",
        "Network traffic monitoring and analysis",
        "User activity tracking and scoring",
        "Automated incident response workflows",
        "Compliance reporting and documentation",
        "Integration with existing security tools",
        "24/7 monitoring and threat intelligence"
      ],
      results: [
        { metric: "95%", description: "Threat detection accuracy" },
        { metric: "75%", description: "Reduction in false positives" },
        { metric: "90%", description: "Faster threat response time" },
        { metric: "100%", description: "Prevented security breaches" }
      ],
      technologies: ["Machine Learning", "Anomaly Detection", "Python", "AWS", "Elasticsearch", "Kibana"],
      timeline: "9 months development, 6 months security testing",
      clientType: "Mid to large enterprises with cloud infrastructure"
    },
    cogniscribe: {
      fullName: "CogniScribe - AI Content Generation Platform",
      overview: "CogniScribe empowers marketing teams with intelligent content generation capabilities. Our generative AI understands brand voice, target audience, and campaign objectives to create compelling content that drives engagement and conversions.",
      challenge: "Marketing teams struggle with content creation bottlenecks, maintaining brand consistency across channels, and producing personalized content at scale. Manual content creation is time-consuming and often lacks optimization for different platforms.",
      solution: "We created an advanced AI platform that generates high-quality marketing content while maintaining brand voice and optimizing for specific channels. The system learns from existing content to replicate brand style and tone.",
      keyFeatures: [
        "Brand voice learning and replication",
        "Multi-platform content optimization",
        "Campaign-specific content generation",
        "A/B testing content variations",
        "SEO optimization and keyword integration",
        "Social media post scheduling",
        "Performance analytics and insights",
        "Content calendar management"
      ],
      results: [
        { metric: "70%", description: "Faster content creation" },
        { metric: "45%", description: "Increase in engagement rates" },
        { metric: "60%", description: "Improvement in brand consistency" },
        { metric: "35%", description: "Higher conversion rates" }
      ],
      technologies: ["Generative AI", "Large Language Models", "Python", "FastAPI", "React", "OpenAI GPT"],
      timeline: "6 months development, 4 months optimization",
      clientType: "Marketing agencies and in-house marketing teams"
    }
  }

  const details = projectDetails[project.name.toLowerCase().replace(/\s+/g, '')]

  if (!details) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">{details.fullName}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Overview */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Overview</h3>
            <p className="text-gray-600 leading-relaxed">{details.overview}</p>
          </section>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Challenge</h3>
              <p className="text-gray-600 leading-relaxed">{details.challenge}</p>
            </section>
            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Solution</h3>
              <p className="text-gray-600 leading-relaxed">{details.solution}</p>
            </section>
          </div>

          {/* Key Features */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {details.keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Results */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Results & Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {details.results.map((result, index) => (
                <div key={index} className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{result.metric}</div>
                  <div className="text-sm text-gray-600">{result.description}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Technologies */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {details.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                <Clock className="h-5 w-5 text-blue-600 mr-2" />
                Timeline
              </h3>
              <p className="text-gray-600">{details.timeline}</p>
            </section>
            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                <Users className="h-5 w-5 text-blue-600 mr-2" />
                Client Profile
              </h3>
              <p className="text-gray-600">{details.clientType}</p>
            </section>
          </div>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Interested in a Similar Solution?
            </h3>
            <p className="text-gray-600 mb-4">
              We can create a customized solution tailored to your specific business needs and requirements.
            </p>
            <Button
              onClick={() => {
                onClose()
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Discuss Your Project
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal