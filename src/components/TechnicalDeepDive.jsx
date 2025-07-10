import { useState } from 'react'
import { ChevronDown, ChevronUp, Code, Database, Cpu, Network, GitBranch, Zap } from 'lucide-react'

const TechnicalDeepDive = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const technicalDetails = {
    "CogniScribe": {
      architecture: {
        frontend: "React with TypeScript, Tailwind CSS",
        backend: "FastAPI with Python 3.9+",
        ai: "Fine-tuned GPT-3.5 with custom training data",
        database: "PostgreSQL with Redis caching",
        deployment: "Docker containers on AWS ECS"
      },
      challenges: [
        {
          problem: "Context-aware content generation",
          solution: "Implemented custom prompt engineering with industry-specific templates and fine-tuning on 50k+ marketing samples"
        },
        {
          problem: "Real-time performance at scale",
          solution: "Built async processing pipeline with Redis queue and response caching, reducing latency by 70%"
        },
        {
          problem: "Content quality consistency",
          solution: "Developed multi-layer validation system with sentiment analysis and brand voice matching algorithms"
        }
      ],
      algorithms: ["Transformer Architecture", "BERT for Sentiment Analysis", "Custom NLP Pipeline", "Reinforcement Learning from Human Feedback"],
      metrics: {
        "Response Time": "< 2 seconds",
        "Content Quality Score": "94% user satisfaction",
        "API Uptime": "99.9%",
        "Cost Reduction": "60% vs manual copywriting"
      }
    },
    "XAI Finance for SMEs": {
      architecture: {
        frontend: "Vue.js 3 with Composition API",
        backend: "Python with scikit-learn, pandas",
        ai: "Ensemble of LSTM + Random Forest + XGBoost",
        database: "TimescaleDB for time-series data",
        deployment: "Kubernetes on Google Cloud Platform"
      },
      challenges: [
        {
          problem: "Model interpretability for non-technical users",
          solution: "Implemented SHAP (SHapley Additive exPlanations) values with custom visualization components"
        },
        {
          problem: "Handling irregular financial data patterns",
          solution: "Built adaptive preprocessing pipeline with outlier detection and seasonal decomposition"
        },
        {
          problem: "Real-time risk assessment",
          solution: "Created streaming ML pipeline using Apache Kafka and real-time feature engineering"
        }
      ],
      algorithms: ["LSTM Neural Networks", "XGBoost", "SHAP Explainability", "Isolation Forest for Anomaly Detection"],
      metrics: {
        "Prediction Accuracy": "87% for 3-month forecasts",
        "Risk Detection Rate": "92% true positive rate",
        "Processing Speed": "< 500ms per analysis",
        "Model Interpretability": "95% user comprehension rate"
      }
    },
    "Aegis Shield": {
      architecture: {
        frontend: "React with D3.js for visualizations",
        backend: "Python with TensorFlow, Apache Kafka",
        ai: "Autoencoder + Isolation Forest hybrid model",
        database: "InfluxDB for time-series, Neo4j for network graphs",
        deployment: "Multi-region AWS deployment with Lambda functions"
      },
      challenges: [
        {
          problem: "Real-time anomaly detection at network scale",
          solution: "Implemented distributed streaming architecture processing 1M+ events/second with sub-second detection"
        },
        {
          problem: "Reducing false positive rates",
          solution: "Developed ensemble approach combining unsupervised learning with rule-based systems, achieving 95% precision"
        },
        {
          problem: "Scalable threat intelligence integration",
          solution: "Built microservices architecture with automated threat feed ingestion and correlation engine"
        }
      ],
      algorithms: ["Autoencoder Neural Networks", "Isolation Forest", "Graph Neural Networks", "Behavioral Analysis Algorithms"],
      metrics: {
        "Detection Speed": "< 100ms average",
        "False Positive Rate": "< 5%",
        "Threat Coverage": "99.2% of known attack patterns",
        "System Throughput": "1M+ events/second"
      }
    }
  }
  
  const details = technicalDetails[project.name]
  if (!details) return null
  
  return (
    <div className="mt-4 border-t border-gray-200 pt-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
      >
        <div className="flex items-center space-x-2">
          <Code className="h-5 w-5 text-blue-600" />
          <span className="font-semibold text-gray-900">Technical Deep Dive</span>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      
      {isExpanded && (
        <div className="mt-4 space-y-6 bg-white border border-gray-200 rounded-lg p-6">
          {/* Architecture Overview */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Network className="h-5 w-5 text-blue-600" />
              <h4 className="font-semibold text-gray-900">System Architecture</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(details.architecture).map(([key, value]) => (
                <div key={key} className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-sm font-medium text-gray-700 capitalize">{key}:</div>
                  <div className="text-sm text-gray-600 mt-1">{value}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Key Algorithms */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Cpu className="h-5 w-5 text-green-600" />
              <h4 className="font-semibold text-gray-900">AI/ML Algorithms</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {details.algorithms.map((algorithm, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium"
                >
                  {algorithm}
                </span>
              ))}
            </div>
          </div>
          
          {/* Technical Challenges */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <GitBranch className="h-5 w-5 text-orange-600" />
              <h4 className="font-semibold text-gray-900">Technical Challenges & Solutions</h4>
            </div>
            <div className="space-y-4">
              {details.challenges.map((challenge, index) => (
                <div key={index} className="border-l-4 border-orange-400 pl-4">
                  <div className="font-medium text-gray-900 mb-1">Challenge: {challenge.problem}</div>
                  <div className="text-sm text-gray-600">Solution: {challenge.solution}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Performance Metrics */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Zap className="h-5 w-5 text-purple-600" />
              <h4 className="font-semibold text-gray-900">Performance Metrics</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(details.metrics).map(([metric, value]) => (
                <div key={metric} className="text-center p-3 bg-purple-50 rounded-lg">
                  <div className="text-lg font-bold text-purple-600">{value}</div>
                  <div className="text-sm text-gray-600">{metric}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TechnicalDeepDive