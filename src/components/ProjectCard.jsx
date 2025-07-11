import { ExternalLink } from 'lucide-react'

const ProjectCard = ({ project, image, onLearnMore }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={project.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{project.name}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
        
        {/* Technologies */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Learn More Button */}
        <button 
          onClick={() => onLearnMore(project)}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
        >
          onClick={() => onLearnMore(project)}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
        >
          <span>Learn More</span>
          <ExternalLink className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

export default ProjectCard