import { Target, Users, Lightbulb } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About RMD26
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a cutting-edge technology company specializing in AI/ML solutions, 
            enterprise SaaS platforms, and full-stack engineering services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Technology Innovation" 
              className="rounded-2xl shadow-2xl w-full h-96 object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-2xl"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4 group">
              <div className="flex-shrink-0 p-3 bg-blue-100 rounded-xl transition-all duration-300 group-hover:bg-blue-200 group-hover:scale-110">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To make the latest and most powerful AI/ML technologies accessible to small and 
                  medium-sized enterprises, enabling them to compete and innovate in the digital age.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="flex-shrink-0 p-3 bg-blue-100 rounded-xl transition-all duration-300 group-hover:bg-blue-200 group-hover:scale-110">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Who We Serve</h3>
                <p className="text-gray-600 leading-relaxed">
                  We focus on small and medium-sized enterprises that want to leverage 
                  cutting-edge technology to transform their business operations and drive growth.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="flex-shrink-0 p-3 bg-blue-100 rounded-xl transition-all duration-300 group-hover:bg-blue-200 group-hover:scale-110">
                <Lightbulb className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  We deliver intelligent, data-driven solutions through elite AI models, 
                  enterprise-grade SaaS platforms, and comprehensive full-stack engineering.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">25+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">3</div>
            <div className="text-gray-600">Core Services</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </div>
  )
}