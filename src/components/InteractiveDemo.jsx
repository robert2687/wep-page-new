import { useState } from 'react'
import { Sparkles, TrendingUp, Shield, Play, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const InteractiveDemo = ({ project }) => {
  const [isLoading, setIsLoading] = useState(false)
  
  if (project.name === "CogniScribe") {
    return <CogniScribeDemo isLoading={isLoading} setIsLoading={setIsLoading} />
  } else if (project.name === "XAI Finance for SMEs") {
    return <XAIFinanceDemo />
  } else if (project.name === "Aegis Shield") {
    return <AegisShieldDemo />
  }
  
  return null
}

const CogniScribeDemo = ({ isLoading, setIsLoading }) => {
  const [keyword, setKeyword] = useState('')
  const [generatedText, setGeneratedText] = useState('')
  
  const generateText = async () => {
    if (!keyword.trim()) return
    
    setIsLoading(true)
    
    // Simulate AI text generation with realistic delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const templates = {
      'sustainable fashion': "🌱 Discover eco-friendly fashion that doesn't compromise on style! Our sustainable collection features organic materials, ethical production, and timeless designs. Join the green fashion revolution and make a statement that matters. #SustainableFashion #EcoStyle",
      'ai technology': "🤖 Revolutionize your business with cutting-edge AI technology! From predictive analytics to automated workflows, our AI solutions boost efficiency by 40% while reducing costs. Experience the future of intelligent business operations. #AITechnology #Innovation",
      'digital marketing': "📈 Transform your digital presence with data-driven marketing strategies! Our proven approach increases engagement by 300% and drives qualified leads. Ready to dominate your market? Let's make your brand unforgettable! #DigitalMarketing #Growth",
      'default': `✨ Unlock the power of ${keyword}! Our innovative approach delivers exceptional results that drive growth and success. Experience the difference with our cutting-edge solutions designed for modern businesses. #${keyword.replace(/\s+/g, '')} #Innovation`
    }
    
    const text = templates[keyword.toLowerCase()] || templates.default
    setGeneratedText(text)
    setIsLoading(false)
  }
  
  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-200">
      <div className="flex items-center space-x-2 mb-4">
        <Sparkles className="h-5 w-5 text-purple-600" />
        <h4 className="font-semibold text-gray-900">Try CogniScribe Live</h4>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter a keyword or topic:
          </label>
          <div className="flex space-x-2">
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="e.g., sustainable fashion, ai technology"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              onKeyPress={(e) => e.key === 'Enter' && generateText()}
            />
            <Button
              onClick={generateText}
              disabled={isLoading || !keyword.trim()}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2"
            >
              {isLoading ? (
                <RefreshCw className="h-4 w-4 animate-spin" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
        
        {generatedText && (
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <p className="text-sm font-medium text-gray-700 mb-2">Generated Marketing Copy:</p>
            <p className="text-gray-900 leading-relaxed">{generatedText}</p>
          </div>
        )}
        
        <div className="text-xs text-gray-500">
          💡 Try keywords like: "sustainable fashion", "ai technology", "digital marketing"
        </div>
      </div>
    </div>
  )
}

const XAIFinanceDemo = () => {
  const [revenue, setRevenue] = useState(50000)
  const [costs, setCosts] = useState(30000)
  const [marketing, setMarketing] = useState(5000)
  
  const calculateCashFlow = () => {
    const netIncome = revenue - costs - marketing
    const growthRate = (marketing / revenue) * 100
    const prediction = netIncome * (1 + growthRate / 100)
    return { netIncome, prediction, growthRate }
  }
  
  const { netIncome, prediction, growthRate } = calculateCashFlow()
  
  const getExplanation = () => {
    if (growthRate > 15) {
      return "⚠️ High marketing spend ratio detected. While this may drive growth, monitor ROI carefully."
    } else if (growthRate < 5) {
      return "📈 Conservative marketing spend. Consider increasing investment for potential growth."
    } else {
      return "✅ Balanced marketing investment. Good ratio for sustainable growth."
    }
  }
  
  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
      <div className="flex items-center space-x-2 mb-4">
        <TrendingUp className="h-5 w-5 text-green-600" />
        <h4 className="font-semibold text-gray-900">XAI Finance Predictor</h4>
      </div>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Monthly Revenue: ${revenue.toLocaleString()}
            </label>
            <input
              type="range"
              min="10000"
              max="200000"
              step="5000"
              value={revenue}
              onChange={(e) => setRevenue(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Operating Costs: ${costs.toLocaleString()}
            </label>
            <input
              type="range"
              min="5000"
              max="150000"
              step="2500"
              value={costs}
              onChange={(e) => setCosts(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Marketing Spend: ${marketing.toLocaleString()}
            </label>
            <input
              type="range"
              min="1000"
              max="50000"
              step="1000"
              value={marketing}
              onChange={(e) => setMarketing(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="grid grid-cols-2 gap-4 mb-3">
            <div>
              <p className="text-sm text-gray-600">Current Net Income</p>
              <p className="text-xl font-bold text-gray-900">${netIncome.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Predicted Next Month</p>
              <p className="text-xl font-bold text-green-600">${prediction.toLocaleString()}</p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-sm font-medium text-blue-900 mb-1">AI Explanation:</p>
            <p className="text-sm text-blue-800">{getExplanation()}</p>
            <p className="text-xs text-blue-600 mt-1">
              Marketing ratio: {growthRate.toFixed(1)}% of revenue
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const AegisShieldDemo = () => {
  const [selectedAnomaly, setSelectedAnomaly] = useState(null)
  const [isScanning, setIsScanning] = useState(false)
  
  const networkData = [
    { id: 1, ip: '192.168.1.45', activity: 'Normal', risk: 'low', x: 20, y: 30 },
    { id: 2, ip: '10.0.0.23', activity: 'Suspicious Login', risk: 'high', x: 60, y: 20 },
    { id: 3, ip: '172.16.0.8', activity: 'Normal', risk: 'low', x: 40, y: 60 },
    { id: 4, ip: '192.168.1.67', activity: 'Data Exfiltration', risk: 'critical', x: 80, y: 40 },
    { id: 5, ip: '10.0.0.15', activity: 'Normal', risk: 'low', x: 30, y: 80 },
    { id: 6, ip: '172.16.0.99', activity: 'Port Scanning', risk: 'medium', x: 70, y: 70 }
  ]
  
  const getRiskColor = (risk) => {
    switch (risk) {
      case 'critical': return 'bg-red-500 animate-pulse'
      case 'high': return 'bg-orange-500'
      case 'medium': return 'bg-yellow-500'
      default: return 'bg-green-500'
    }
  }
  
  const getExplanation = (node) => {
    const explanations = {
      'Suspicious Login': 'Multiple failed login attempts from unusual location detected. Pattern matches known brute force attack signatures.',
      'Data Exfiltration': 'Unusual outbound data transfer volume detected. 500% above normal baseline for this user.',
      'Port Scanning': 'Sequential port access detected. Behavior consistent with reconnaissance activity.'
    }
    return explanations[node.activity] || 'Normal network activity within expected parameters.'
  }
  
  const startScan = () => {
    setIsScanning(true)
    setTimeout(() => setIsScanning(false), 3000)
  }
  
  return (
    <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border border-red-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Shield className="h-5 w-5 text-red-600" />
          <h4 className="font-semibold text-gray-900">Aegis Shield Monitor</h4>
        </div>
        <Button
          onClick={startScan}
          disabled={isScanning}
          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 text-sm"
        >
          {isScanning ? 'Scanning...' : 'Run Scan'}
        </Button>
      </div>
      
      <div className="space-y-4">
        <div className="bg-gray-900 p-4 rounded-lg relative h-48 overflow-hidden">
          <div className="text-green-400 text-xs font-mono mb-2">Network Activity Monitor</div>
          
          {networkData.map((node) => (
            <div
              key={node.id}
              className={`absolute w-3 h-3 rounded-full cursor-pointer transition-all duration-300 hover:scale-150 ${getRiskColor(node.risk)} ${isScanning ? 'animate-pulse' : ''}`}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              onClick={() => setSelectedAnomaly(node)}
              title={`${node.ip} - ${node.activity}`}
            />
          ))}
          
          {isScanning && (
            <div className="absolute inset-0 bg-blue-500 opacity-10 animate-pulse"></div>
          )}
        </div>
        
        <div className="flex space-x-4 text-xs">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Normal</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span>Medium Risk</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span>High Risk</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span>Critical</span>
          </div>
        </div>
        
        {selectedAnomaly && (
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="font-semibold text-gray-900">{selectedAnomaly.ip}</p>
                <p className="text-sm text-gray-600">{selectedAnomaly.activity}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                selectedAnomaly.risk === 'critical' ? 'bg-red-100 text-red-800' :
                selectedAnomaly.risk === 'high' ? 'bg-orange-100 text-orange-800' :
                selectedAnomaly.risk === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
              }`}>
                {selectedAnomaly.risk.toUpperCase()}
              </span>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm font-medium text-gray-700 mb-1">AI Analysis:</p>
              <p className="text-sm text-gray-600">{getExplanation(selectedAnomaly)}</p>
            </div>
          </div>
        )}
        
        <div className="text-xs text-gray-500">
          💡 Click on any node to see detailed threat analysis
        </div>
      </div>
    </div>
  )
}

export default InteractiveDemo