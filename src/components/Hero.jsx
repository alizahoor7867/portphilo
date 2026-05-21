import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'

function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#8b5cf6"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
      />
    </Sphere>
  )
}

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"
    >
      {/* 3D Background */}
      <div className="absolute inset-0" style={{ zIndex: -1 }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 2, 1]} intensity={1} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="inline-block px-4 py-1.5 rounded-full glass text-primary-400 font-semibold text-xs tracking-wider">🚀 3+ Live Projects Running</span>
              <span className="inline-block px-4 py-1.5 rounded-full glass text-accent-400 font-semibold text-xs tracking-wider">💼 15+ Practice Projects</span>
              <span className="inline-block px-4 py-1.5 rounded-full glass text-green-400 font-semibold text-xs tracking-wider">🏆 3+ Certifications</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6"
          >
            Hi, I'm <span className="gradient-text">Hafiz Ali Zahoor</span> 👑
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-4xl font-semibold mb-8 h-20 flex items-center justify-center"
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'React Specialist',
                2000,
                'Node.js Expert',
                2000,
                '.NET Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="gradient-text"
            />
          </motion.div>

          {/* Value Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto"
          >
            Turning ideas into reality through clean code, sleepless nights, and sheer determination — because great web experiences don't build themselves.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={scrollToProjects}
              className="btn btn-primary group flex items-center gap-2"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToContact}
              className="btn btn-secondary flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Hire Me
            </button>
            <a
              href="/newalicvpdf (1).pdf"
              download
              className="btn btn-secondary flex items-center gap-2 border-green-500/50 text-green-400 hover:border-green-400"
            >
              <Download className="w-5 h-5" />
              Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 flex gap-6 justify-center"
          >
            <a
              href="https://github.com/alizahoor7867"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover-glow transition-all"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/hafiz-ali-zahoor-b4b88a25b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover-glow transition-all"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=az3269868@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover-glow transition-all"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  )
}
