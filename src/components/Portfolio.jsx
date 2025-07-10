import ProjectCard from './ProjectCard'

const Portfolio = () => {
  const projects = [
    {
      name: "CargoSwift",
      description: "Intelligent SaaS logistics system for route optimization and real-time fleet management.",
      technologies: ["AI/ML", "IoT", "React", "Node.js"]
    },
    {
      name: "Synapsa X",
      description: "An advanced e-commerce platform using AI agents for personalization, dynamic pricing, and proactive support.",
      technologies: ["AI Agents", "NLP", "Python", "GCP"]
    },
    {
      name: "XAI Finance for SMEs",
      description: "A financial analysis tool for SMEs that provides cash flow predictions and identifies risks with an emphasis on model transparency.",
      technologies: ["XAI", "Python", "Vue.js"]
    },
    {
      name: "Utility Mint",
      description: "A platform for minting and managing NFT tokens with real utility value (tickets, loyalty cards).",
      technologies: ["Blockchain", "IPFS", "React"]
    },
    {
      name: "Aegis Shield",
      description: "A threat detection system for cloud infrastructure using anomaly detection to identify suspicious activity.",
      technologies: ["Anomaly Detection", "Cybersecurity", "AWS"]
    },
    {
      name: "CogniScribe",
      description: "A generative AI tool for marketing teams that creates high-quality copy for articles, social media, and campaigns.",
      technologies: ["Generative AI", "LLM", "FastAPI"]
    }
  ]

  const projectImages = [
    "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800"
  ]

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our innovative projects that showcase our expertise in AI/ML, 
            enterprise SaaS, and full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              image={projectImages[index]} 
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Interested in working with us on your next project?
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio