import { Brain, Cloud, Code } from 'lucide-react'
import techBg2 from '../assets/tech-bg-2.jpg'
import techBg3 from '../assets/tech-bg-3.jpg'
import techBg4 from '../assets/tech-bg-4.jpg'

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Elite AI Models",
      description: "Advanced artificial intelligence and machine learning solutions tailored for your business needs. From predictive analytics to natural language processing, we deliver cutting-edge AI capabilities.",
      image: techBg2,
      features: ["Custom AI Model Development", "Machine Learning Algorithms", "Predictive Analytics", "Natural Language Processing"]
    },
    {
      icon: Cloud,
      title: "Enterprise SaaS",
      description: "Scalable software-as-a-service platforms designed for enterprise-level operations. Cloud-native solutions that grow with your business and adapt to changing requirements.",
      image: techBg3,
      features: ["Cloud-Native Architecture", "Scalable Infrastructure", "Real-time Analytics", "Enterprise Security"]
    },
    {
      icon: Code,
      title: "Full-Stack Engineering",
      description: "Comprehensive development services covering frontend, backend, and everything in between. Modern web applications built with the latest technologies and best practices.",
      image: techBg4,
      features: ["Modern Web Applications", "API Development", "Database Design", "DevOps & Deployment"]
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive technology solutions across three core areas of expertise
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-gray-900">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

