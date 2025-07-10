import { useState } from 'react'
import { BookOpen, Calendar, Clock, ArrowRight, ExternalLink } from 'lucide-react'

const BlogIntegration = ({ project }) => {
  const [selectedArticle, setSelectedArticle] = useState(null)
  
  const blogArticles = {
    "CogniScribe": [
      {
        id: 1,
        title: "Building an AI-Powered Content Generation Platform: Lessons from CogniScribe",
        excerpt: "Deep dive into the technical architecture and challenges of building a production-ready AI content generation system that serves thousands of marketing teams.",
        readTime: "12 min read",
        publishDate: "2024-01-15",
        tags: ["AI/ML", "NLP", "FastAPI", "Production"],
        content: `
# Building CogniScribe: From Concept to Production

## The Challenge
When we set out to build CogniScribe, we faced a fundamental question: How do you create an AI system that doesn't just generate text, but generates *good* marketing copy that actually converts?

## Technical Architecture Deep Dive

### 1. Model Selection and Fine-tuning
We started with GPT-3.5 as our base model, but quickly realized that out-of-the-box performance wasn't sufficient for marketing copy. Our solution:

- **Custom Training Dataset**: Curated 50,000+ high-performing marketing samples across 15 industries
- **Prompt Engineering**: Developed industry-specific prompt templates with context injection
- **Fine-tuning Pipeline**: Implemented automated retraining based on user feedback loops

### 2. Real-time Performance Optimization
Initial response times were 8-12 seconds - unacceptable for a production system. Our optimization strategy:

\`\`\`python
# Async processing pipeline
async def generate_content(prompt: str, context: dict):
    # Pre-process and cache common patterns
    cached_result = await redis_client.get(prompt_hash)
    if cached_result:
        return cached_result
    
    # Parallel processing for multiple variants
    tasks = [
        generate_variant(prompt, context, style='professional'),
        generate_variant(prompt, context, style='casual'),
        generate_variant(prompt, context, style='urgent')
    ]
    
    results = await asyncio.gather(*tasks)
    return select_best_variant(results, context)
\`\`\`

### 3. Quality Assurance System
We built a multi-layer validation system:

- **Sentiment Analysis**: Ensures brand voice consistency
- **Readability Scoring**: Maintains appropriate complexity levels
- **Plagiarism Detection**: Prevents content duplication
- **A/B Testing Framework**: Continuous performance optimization

## Key Learnings

1. **User Feedback is Gold**: Our RLHF implementation improved content quality by 40%
2. **Context is Everything**: Industry-specific fine-tuning outperformed general models by 60%
3. **Performance Matters**: Sub-2-second response times increased user engagement by 300%

## What's Next?
We're working on multimodal capabilities, integrating image generation with text for complete campaign creation.
        `
      },
      {
        id: 2,
        title: "Scaling AI Content Generation: Infrastructure and Performance Lessons",
        excerpt: "How we built a system that handles 10,000+ content generation requests per day with sub-2-second response times.",
        readTime: "8 min read",
        publishDate: "2024-02-20",
        tags: ["Scaling", "Infrastructure", "Performance"],
        content: "Detailed technical article about scaling challenges and solutions..."
      }
    ],
    "XAI Finance for SMEs": [
      {
        id: 3,
        title: "Explainable AI in Finance: Making Black Box Models Transparent",
        excerpt: "How we used SHAP values and custom visualization to make complex financial predictions understandable for SME owners.",
        readTime: "15 min read",
        publishDate: "2024-01-08",
        tags: ["XAI", "Finance", "SHAP", "Visualization"],
        content: `
# Making AI Transparent: XAI Finance for SMEs

## The Problem with Black Box Models
Traditional ML models in finance are often "black boxes" - they make predictions but don't explain why. For SME owners making critical business decisions, this lack of transparency is a deal-breaker.

## Our XAI Approach

### 1. SHAP Integration
We implemented SHAP (SHapley Additive exPlanations) to provide feature importance:

\`\`\`python
import shap
from sklearn.ensemble import RandomForestRegressor

# Train ensemble model
model = RandomForestRegressor(n_estimators=100)
model.fit(X_train, y_train)

# Generate SHAP explanations
explainer = shap.TreeExplainer(model)
shap_values = explainer.shap_values(X_test)

# Create visualization
shap.waterfall_plot(explainer.expected_value, shap_values[0], X_test.iloc[0])
\`\`\`

### 2. Custom Visualization Components
We built React components that translate SHAP values into business-friendly explanations:

- **Impact Bars**: Show which factors most influence predictions
- **Scenario Analysis**: Let users adjust variables and see real-time impact
- **Risk Indicators**: Color-coded warnings with actionable insights

### 3. Natural Language Explanations
Our system generates human-readable explanations:

"Your cash flow prediction decreased by $5,000 because marketing spend increased to 15% of revenue (optimal range: 8-12%). Consider reducing ad spend by $2,000 to improve profitability."

## Technical Challenges

### 1. Model Interpretability vs. Accuracy
We found that simpler models were more interpretable but less accurate. Our solution: ensemble approach combining interpretable models with complex ones, using SHAP to bridge the gap.

### 2. Real-time Explanation Generation
Computing SHAP values in real-time was too slow. We pre-computed explanations for common scenarios and used approximation algorithms for edge cases.

## Results
- 95% of users reported understanding the AI recommendations
- 40% improvement in decision-making confidence
- 25% increase in prediction accuracy through user feedback integration
        `
      }
    ],
    "Aegis Shield": [
      {
        id: 4,
        title: "Real-time Anomaly Detection at Scale: Building Aegis Shield",
        excerpt: "Technical deep dive into building a cybersecurity system that processes 1M+ events per second with sub-100ms detection times.",
        readTime: "18 min read",
        publishDate: "2024-03-10",
        tags: ["Cybersecurity", "Real-time", "Anomaly Detection", "Scaling"],
        content: `
# Building Aegis Shield: Real-time Threat Detection at Scale

## The Challenge
Modern networks generate millions of events per second. Traditional signature-based detection systems can't keep up with sophisticated attacks that use novel techniques.

## Our Approach: Hybrid AI Detection

### 1. Autoencoder for Baseline Learning
We use autoencoders to learn "normal" network behavior:

\`\`\`python
import tensorflow as tf

class NetworkAutoencoder(tf.keras.Model):
    def __init__(self, input_dim, encoding_dim):
        super().__init__()
        self.encoder = tf.keras.Sequential([
            tf.keras.layers.Dense(128, activation='relu'),
            tf.keras.layers.Dense(64, activation='relu'),
            tf.keras.layers.Dense(encoding_dim, activation='relu')
        ])
        
        self.decoder = tf.keras.Sequential([
            tf.keras.layers.Dense(64, activation='relu'),
            tf.keras.layers.Dense(128, activation='relu'),
            tf.keras.layers.Dense(input_dim, activation='sigmoid')
        ])
    
    def call(self, x):
        encoded = self.encoder(x)
        decoded = self.decoder(encoded)
        return decoded

# Anomaly detection based on reconstruction error
def detect_anomaly(model, data, threshold):
    reconstructed = model(data)
    mse = tf.keras.losses.MeanSquaredError()
    reconstruction_error = mse(data, reconstructed)
    return reconstruction_error > threshold
\`\`\`

### 2. Streaming Architecture
Built on Apache Kafka for real-time processing:

- **Event Ingestion**: 1M+ events/second from network devices
- **Feature Engineering**: Real-time extraction of behavioral patterns
- **Model Inference**: Distributed processing across GPU clusters
- **Alert Generation**: Sub-100ms from detection to alert

### 3. Graph Neural Networks for Network Analysis
We model network topology as graphs to detect lateral movement:

\`\`\`python
import torch
import torch.nn.functional as F
from torch_geometric.nn import GCNConv

class NetworkGNN(torch.nn.Module):
    def __init__(self, num_features, hidden_dim, num_classes):
        super().__init__()
        self.conv1 = GCNConv(num_features, hidden_dim)
        self.conv2 = GCNConv(hidden_dim, num_classes)
        
    def forward(self, x, edge_index):
        x = F.relu(self.conv1(x, edge_index))
        x = F.dropout(x, training=self.training)
        x = self.conv2(x, edge_index)
        return F.log_softmax(x, dim=1)
\`\`\`

## Performance Optimizations

### 1. Model Quantization
Reduced model size by 75% using INT8 quantization without accuracy loss.

### 2. Batch Processing
Optimized inference by batching similar events together.

### 3. Edge Computing
Deployed lightweight models at network edges for immediate response.

## Results
- **Detection Speed**: < 100ms average
- **Accuracy**: 99.2% detection rate with < 5% false positives
- **Scalability**: Handles 1M+ events/second
- **Cost Efficiency**: 60% reduction in infrastructure costs vs. traditional SIEM
        `
      }
    ]
  }
  
  const articles = blogArticles[project.name] || []
  
  if (articles.length === 0) return null
  
  return (
    <div className="mt-6 border-t border-gray-200 pt-6">
      <div className="flex items-center space-x-2 mb-4">
        <BookOpen className="h-5 w-5 text-indigo-600" />
        <h4 className="font-semibold text-gray-900">Related Technical Articles</h4>
      </div>
      
      <div className="space-y-4">
        {articles.map((article) => (
          <div key={article.id} className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg border border-indigo-200">
            <div className="flex justify-between items-start mb-2">
              <h5 className="font-semibold text-gray-900 text-sm leading-tight">{article.title}</h5>
              <button
                onClick={() => setSelectedArticle(selectedArticle === article.id ? null : article.id)}
                className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
              >
                <ExternalLink className="h-4 w-4" />
              </button>
            </div>
            
            <p className="text-sm text-gray-600 mb-3 leading-relaxed">{article.excerpt}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-3 w-3" />
                  <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{article.readTime}</span>
                </div>
              </div>
              
              <button
                onClick={() => setSelectedArticle(selectedArticle === article.id ? null : article.id)}
                className="flex items-center space-x-1 text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors duration-200"
              >
                <span>{selectedArticle === article.id ? 'Hide' : 'Read'} Article</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
            
            <div className="flex flex-wrap gap-1 mt-2">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {selectedArticle === article.id && (
              <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200 max-h-96 overflow-y-auto">
                <div className="prose prose-sm max-w-none">
                  <pre className="whitespace-pre-wrap text-sm text-gray-700 leading-relaxed">
                    {article.content}
                  </pre>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-800">
          💡 <strong>Want to read more?</strong> Visit our technical blog for in-depth articles about AI/ML implementation, system architecture, and engineering best practices.
        </p>
      </div>
    </div>
  )
}

export default BlogIntegration