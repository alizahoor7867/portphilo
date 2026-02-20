import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Lenis from 'lenis'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import AIAssistant from './components/AIAssistant'

function App() {
  // Initialize smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>Hafiz Ali Zahoor | Full Stack Developer - React, Node.js, .NET</title>
        <meta
          name="description"
          content="Portfolio of Hafiz Ali Zahoor, a Full Stack Developer specializing in React, Node.js, and .NET. View projects, skills, and get in touch."
        />
        <meta name="keywords" content="Full Stack Developer, React, Node.js, .NET, Portfolio, Web Development" />
      </Helmet>

      <div className="relative">
        {/* Main Content */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />

        {/* AI Assistant - Floating */}
        <AIAssistant />

        {/* Background decorations */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </>
  )
}

export default App
