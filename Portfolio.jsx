import ProjectCard from './ProjectCard'
import techBg1 from '../assets/tech-bg-1.jpg'
import techBg2 from '../assets/tech-bg-2.jpg'
import techBg3 from '../assets/tech-bg-3.jpg'
import techBg4 from '../assets/tech-bg-4.jpg'
import techBg5 from '../assets/tech-bg-5.jpg'
import heroImage from '../assets/hero-image.jpg'

const Portfolio = () => {
  const projects = [
    {
      name: "CargoSwift",
      description: "Inteligentný SaaS systém pre logistiku na optimalizáciu trás a správu flotily v reálnom čase.",
      technologies: ["AI/ML", "IoT", "React", "Node.js"]
    },
    {
      name: "Synapsa X",
      description: "Pokročilá e-commerce platforma využívajúca AI agentov na personalizáciu, dynamickú cenotvorbu a proaktívnu podporu.",
      technologies: ["AI Agents", "NLP", "Python", "GCP"]
    },
    {
      name: "XAI Finance for SMEs",
      description: "Finančný analytický nástroj pre SME, ktorý poskytuje predikcie cash flow a identifikuje riziká s dôrazom na transparentnosť modelov.",
      technologies: ["XAI", "Python", "Vue.js"]
    },
    {
      name: "Utility Mint",
      description: "Platforma na mintovanie a správu NFT tokenov s reálnou úžitkovou hodnotou (vstupenky, vernostné karty).",
      technologies: ["Blockchain", "IPFS", "React"]
    },
    {
      name: "Aegis Shield",
      description: "Systém na detekciu hrozieb pre cloudovú infraštruktúru s využitím detekcie anomálií na identifikáciu podozrivej aktivity.",
      technologies: ["Anomaly Detection", "Cybersecurity", "AWS"]
    },
    {
      name: "CogniScribe",
      description: "Generatívny AI nástroj pre marketingové tímy, ktorý tvorí vysokokvalitné texty pre články, sociálne médiá a kampane.",
      technologies: ["Generative AI", "LLM", "FastAPI"]
    }
  ]

  const projectImages = [techBg1, techBg2, techBg3, techBg4, techBg5, heroImage]

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

