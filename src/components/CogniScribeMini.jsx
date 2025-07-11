import { useState } from 'react'
import { Wand2, Copy, RefreshCw, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const CogniScribeMini = () => {
  const [formData, setFormData] = useState({
    productName: '',
    targetGroup: '',
    tone: 'professional'
  })
  const [generatedText, setGeneratedText] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)

  const toneOptions = [
    { value: 'professional', label: 'Professional' },
    { value: 'playful', label: 'Playful' },
    { value: 'friendly', label: 'Friendly' },
    { value: 'urgent', label: 'Urgent' },
    { value: 'luxury', label: 'Luxury' },
    { value: 'casual', label: 'Casual' }
  ]

  // Simulated content generation based on inputs
  const generateContent = (product, target, tone) => {
    const templates = {
      professional: [
        `Introducing ${product} - the solution ${target} have been waiting for. Our advanced technology delivers measurable results that drive your business forward. Experience the difference today.`,
        `${product} empowers ${target} with cutting-edge innovation and proven reliability. Transform your operations with our industry-leading solution. Get started now.`,
        `Discover how ${product} helps ${target} achieve exceptional results through intelligent automation and expert support. Your success is our priority.`
      ],
      playful: [
        `🚀 Ready to supercharge your business? ${product} is here to make ${target} absolutely love what you do! Fun, powerful, and ridiculously effective. Let's go!`,
        `Say hello to ${product}! 👋 The game-changing solution that makes ${target} go "WOW!" Easy to use, impossible to ignore. Try it now!`,
        `${product} + ${target} = Pure Magic! ✨ Transform the ordinary into extraordinary with our amazing solution. Your customers will thank you!`
      ],
      friendly: [
        `Hey there! Meet ${product} - your new best friend for connecting with ${target}. We've made it simple, effective, and genuinely helpful. You'll love it!`,
        `${product} is designed with ${target} in mind, bringing you closer to your goals with a warm, personal touch. Let's build something amazing together!`,
        `We created ${product} because we believe ${target} deserve something special. Friendly, reliable, and always there when you need it most.`
      ],
      urgent: [
        `Don't wait! ${product} is transforming how ${target} achieve success RIGHT NOW. Limited time to get ahead of the competition. Act today!`,
        `BREAKING: ${product} delivers instant results for ${target}. While others hesitate, smart businesses are already winning. Join them now!`,
        `Time is running out! ${product} gives ${target} the competitive edge they need. Every moment counts - secure your advantage today!`
      ],
      luxury: [
        `Experience the pinnacle of excellence with ${product}. Crafted exclusively for discerning ${target} who accept nothing less than perfection. Indulge in sophistication.`,
        `${product} represents the ultimate in premium solutions for ${target}. Meticulously designed, flawlessly executed, absolutely extraordinary. Elevate your standards.`,
        `For ${target} who demand the finest, ${product} delivers unparalleled luxury and performance. Because you deserve the very best.`
      ],
      casual: [
        `${product} is pretty awesome for ${target}. It just works, no fuss, no drama. Give it a shot and see what happens!`,
        `So we built this thing called ${product} for ${target}. Turns out it's really good at what it does. Worth checking out!`,
        `${product} makes life easier for ${target}. Simple as that. No big promises, just solid results you can count on.`
      ]
    }

    const toneTemplates = templates[tone] || templates.professional
    const randomTemplate = toneTemplates[Math.floor(Math.random() * toneTemplates.length)]
    return randomTemplate
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleGenerate = async () => {
    if (!formData.productName.trim() || !formData.targetGroup.trim()) {
      alert('Please fill in both Product/Service Name and Target Group')
      return
    }

    setIsGenerating(true)
    setGeneratedText('')

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000))

    const content = generateContent(formData.productName, formData.targetGroup, formData.tone)
    setGeneratedText(content)
    setIsGenerating(false)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const handleRegenerate = () => {
    if (formData.productName.trim() && formData.targetGroup.trim()) {
      handleGenerate()
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-purple-600 rounded-full">
              <Wand2 className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            CogniScribe Mini
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience our AI content generation capabilities. Create compelling marketing copy 
            in seconds with our simplified version of CogniScribe.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Input Form */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Generate Your Content</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product/Service Name *
                </label>
                <input
                  type="text"
                  name="productName"
                  value={formData.productName}
                  onChange={handleInputChange}
                  placeholder="e.g., EcoClean Pro, Digital Marketing Suite"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Target Group *
                </label>
                <input
                  type="text"
                  name="targetGroup"
                  value={formData.targetGroup}
                  onChange={handleInputChange}
                  placeholder="e.g., small business owners, tech startups, busy parents"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tone of Communication
                </label>
                <select
                  name="tone"
                  value={formData.tone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {toneOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <Button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                {isGenerating ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Generating...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Sparkles className="h-5 w-5" />
                    <span>Generate Content</span>
                  </div>
                )}
              </Button>
            </div>

            {/* Output */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Generated Content</h3>
              
              <div className="bg-gray-50 rounded-lg p-6 min-h-[200px] relative">
                {generatedText ? (
                  <>
                    <p className="text-gray-800 leading-relaxed text-lg">
                      {generatedText}
                    </p>
                    <div className="flex space-x-2 mt-4">
                      <Button
                        onClick={handleCopy}
                        variant="outline"
                        className="flex items-center space-x-2"
                      >
                        <Copy className="h-4 w-4" />
                        <span>{copied ? 'Copied!' : 'Copy'}</span>
                      </Button>
                      <Button
                        onClick={handleRegenerate}
                        variant="outline"
                        className="flex items-center space-x-2"
                      >
                        <RefreshCw className="h-4 w-4" />
                        <span>Regenerate</span>
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    <div className="text-center">
                      <Wand2 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Your generated content will appear here</p>
                    </div>
                  </div>
                )}
              </div>

              {generatedText && (
                <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                  <p className="text-sm text-purple-800">
                    <strong>💡 Pro Tip:</strong> This is just a taste of what CogniScribe can do! 
                    Our full platform generates comprehensive marketing campaigns, blog articles, 
                    and personalized content at scale.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready for the Full CogniScribe Experience?</h3>
            <p className="text-lg mb-6 opacity-90">
              Generate complete marketing campaigns, blog articles, and personalized content 
              that drives real business results.
            </p>
            <Button
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Learn More About CogniScribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CogniScribeMini