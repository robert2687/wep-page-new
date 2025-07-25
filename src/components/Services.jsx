import { Brain, Cloud, Code } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Elite AI Models",
      description: "Advanced artificial intelligence and machine learning solutions tailored for your business needs. From predictive analytics to natural language processing, we deliver cutting-edge AI capabilities.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: ["Custom AI Model Development", "Machine Learning Algorithms", "Predictive Analytics", "Natural Language Processing"]
    },
    {
      icon: Cloud,
      title: "Enterprise SaaS",
      description: "Scalable software-as-a-service platforms designed for enterprise-level operations. Cloud-native solutions that grow with your business and adapt to changing requirements.",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: ["Cloud-Native Architecture", "Scalable Infrastructure", "Real-time Analytics", "Enterprise Security"]
    },
    {
      icon: Code,
      title: "Full-Stack Engineering",
      description: "Comprehensive development services covering frontend, backend, and everything in between. Modern web applications built with the latest technologies and best practices.",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
            <div key={index} data-project={service.title.toLowerCase().replace(/\s+/g, '')} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
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
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-2xl"></div>
                <div className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our services can help you achieve your goals
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="bg-white text-blue-600 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services