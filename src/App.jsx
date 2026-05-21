import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Lenis from 'lenis'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import PracticeProjects from './components/PracticeProjects'
import Contact from './components/Contact'
import { FaWhatsapp } from 'react-icons/fa'
import CustomCursor from './components/CustomCursor'
import ParticleBackground from './components/ParticleBackground'

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

      <CustomCursor />
      <ParticleBackground />
      <div className="relative" style={{ zIndex: 2 }}>
        {/* Main Content */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <PracticeProjects />
        <Contact />

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/923120279996"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform"
          style={{ backgroundColor: '#25D366' }}
        >
          <FaWhatsapp className="w-7 h-7 text-white" style={{ fontSize: '28px' }} />
        </a>

        {/* Background blobs */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay:'1s'}}></div>
        </div>
      </div>
    </>
  )
}

export default App
