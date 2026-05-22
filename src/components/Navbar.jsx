import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: 'hero', icon: '🏠' },
  { label: 'About', href: 'about', icon: '👤' },
  { label: 'Skills', href: 'skills', icon: '⚡' },
  { label: 'Projects', href: 'projects', icon: '🚀' },
  { label: 'Practice', href: 'practice-projects', icon: '💻' },
  { label: 'Contact', href: 'contact', icon: '📩' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress((scrollY / docHeight) * 100)
      setScrolled(scrollY > 50)

      navLinks.forEach(link => {
        const sec = document.getElementById(link.href)
        if (sec) {
          const top = sec.offsetTop - 120
          const bottom = top + sec.offsetHeight
          if (scrollY >= top && scrollY < bottom) setActive(link.href)
        }
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-0.5 z-[60]" style={{ background: 'rgba(255,255,255,0.05)' }}>
        <motion.div
          className="h-full"
          style={{
            width: `${scrollProgress}%`,
            background: 'linear-gradient(90deg, #0ea5e9, #8b5cf6, #ec4899)',
          }}
        />
      </div>

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-0.5 left-0 w-full z-50 transition-all duration-500"
      >
        <div className={`mx-auto transition-all duration-500 ${
          scrolled
            ? 'max-w-5xl mt-3 px-2'
            : 'max-w-7xl mt-0 px-0'
        }`}>
          <div className={`flex items-center justify-between px-6 py-3 transition-all duration-500 ${
            scrolled
              ? 'glass rounded-2xl shadow-2xl shadow-black/30 border border-white/10'
              : 'bg-transparent'
          }`}>

            {/* Logo */}
            <motion.button
              onClick={() => scrollTo('hero')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary-500/30">
                A
              </div>
              <span className="text-lg font-display font-bold">
                <span className="gradient-text">Ali</span>
                <span className="text-slate-400">.</span>
                <span className="text-white">dev</span>
              </span>
            </motion.button>

            {/* Desktop Links */}
            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <li key={link.href}>
                  <motion.button
                    onClick={() => scrollTo(link.href)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      active === link.href
                        ? 'text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {active === link.href && (
                      <motion.div
                        layoutId="activeNavBg"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                    {active === link.href && (
                      <motion.div
                        layoutId="activeNavDot"
                        className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-400"
                      />
                    )}
                  </motion.button>
                </li>
              ))}
            </ul>

            {/* Right Side Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <motion.a
                href="/newalicvpdf (1).pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white glass border border-white/10 hover:border-primary-500/40 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Resume
              </motion.a>
              <motion.button
                onClick={() => scrollTo('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 rounded-xl text-sm font-bold text-white relative overflow-hidden group"
                style={{ background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)' }}
              >
                <span className="relative z-10">Hire Me 🚀</span>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
              </motion.button>
            </div>

            {/* Mobile Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 glass rounded-xl border border-white/10"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <AnimatePresence mode="wait">
                {menuOpen
                  ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X className="w-5 h-5" /></motion.div>
                  : <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><Menu className="w-5 h-5" /></motion.div>
                }
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden mx-4 mt-2"
            >
              <div className="glass rounded-2xl border border-white/10 p-4 flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => scrollTo(link.href)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-left ${
                      active === link.href
                        ? 'bg-gradient-to-r from-primary-500/20 to-accent-500/20 text-white border border-primary-500/30'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.icon}</span>
                    {link.label}
                  </motion.button>
                ))}
                <div className="border-t border-white/10 pt-2 mt-1 flex gap-2">
                  <a
                    href="/newalicvpdf (1).pdf"
                    download
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium glass border border-white/10 text-slate-300"
                  >
                    <Download className="w-4 h-4" /> Resume
                  </a>
                  <button
                    onClick={() => scrollTo('contact')}
                    className="flex-1 px-4 py-2.5 rounded-xl text-sm font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)' }}
                  >
                    Hire Me 🚀
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
