import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AIAssistant from './components/AIAssistant'
import CogniScribeMini from './components/CogniScribeMini'
import AISolutionRecommender from './components/AISolutionRecommender'
import DynamicContent from './components/DynamicContent'
import PersonalizedRecommendations from './components/PersonalizedRecommendations'
import { useState } from 'react'

function App() {
  const [userInterests, setUserInterests] = useState([])

  const handleUserInteraction = (interaction) => {
    if (interaction.interests) {
      setUserInterests(prev => [...new Set([...prev, ...interaction.interests])])
    }
  }

  return (
    <DynamicContent onInteraction={handleUserInteraction}>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <AISolutionRecommender />
          <CogniScribeMini />
          <Contact />
        </main>
        <Footer />
        <AIAssistant />
        <PersonalizedRecommendations userInterests={userInterests} />
      </div>
    </DynamicContent>
  )
}

export default App