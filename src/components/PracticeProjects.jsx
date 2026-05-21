import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'

const practiceProjects = [
  {
    id: 1,
    title: 'Airport Management System',
    description: 'Complete airport operations management — flights, passengers, staff, and gate management.',
    tech: ['React', 'Node.js', 'MongoDB'],
    icon: '✈️',
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/30',
  },
  {
    id: 2,
    title: 'Online Quran Teaching Website',
    description: 'Platform for online Quran classes with teacher-student scheduling and session management.',
    tech: ['React', 'Node.js', 'MySQL'],
    icon: '📖',
    color: 'from-green-500/20 to-emerald-500/20',
    border: 'border-green-500/30',
  },
  {
    id: 3,
    title: 'Agriculture Marketplace',
    description: 'Website connecting farmers and buyers — product listings, orders, and direct communication.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    icon: '🌾',
    color: 'from-yellow-500/20 to-orange-500/20',
    border: 'border-yellow-500/30',
  },
  {
    id: 4,
    title: 'OLX Clone',
    description: 'Buy & sell platform with product listings, categories, search, and user authentication.',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    icon: '🛒',
    color: 'from-purple-500/20 to-pink-500/20',
    border: 'border-purple-500/30',
  },
  {
    id: 5,
    title: 'Facebook Clone (Basic)',
    description: 'Social media clone with posts, likes, comments, friend requests, and profile pages.',
    tech: ['React', 'Node.js', 'MongoDB'],
    icon: '👥',
    color: 'from-blue-600/20 to-indigo-500/20',
    border: 'border-indigo-500/30',
  },
  {
    id: 6,
    title: 'Fiverr Clone (Basic)',
    description: 'Freelance marketplace with gig listings, seller profiles, orders, and review system.',
    tech: ['React', 'Node.js', 'MongoDB'],
    icon: '💼',
    color: 'from-teal-500/20 to-green-500/20',
    border: 'border-teal-500/30',
  },
  {
    id: 7,
    title: 'Expense Management System',
    description: 'Track income and expenses with charts, categories, monthly reports, and budget alerts.',
    tech: ['React', 'Chart.js', 'LocalStorage'],
    icon: '💰',
    color: 'from-red-500/20 to-orange-500/20',
    border: 'border-red-500/30',
  },
  {
    id: 8,
    title: 'StayNexus — Hostel Management',
    description: 'Complete hostel management system with room booking, tenant records, and fee tracking.',
    tech: ['React', 'Node.js', 'MongoDB'],
    icon: '🏨',
    color: 'from-violet-500/20 to-purple-500/20',
    border: 'border-violet-500/30',
  },
  {
    id: 9,
    title: 'Chezious Restaurant Website',
    description: 'Restaurant website with menu, online ordering, and reservation system.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: '🍕',
    color: 'from-orange-500/20 to-red-500/20',
    border: 'border-orange-500/30',
  },
  {
    id: 10,
    title: 'KFC Clone',
    description: 'Fast food website clone with menu display, cart, and order placement.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: '🍗',
    color: 'from-red-600/20 to-yellow-500/20',
    border: 'border-red-600/30',
  },
  {
    id: 11,
    title: 'JavaScript Mini Projects',
    description: 'Collection of JS projects: clock, dice game, color picker, paint app, car animation, API fetch.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: '⚡',
    color: 'from-yellow-400/20 to-amber-500/20',
    border: 'border-yellow-400/30',
  },
  {
    id: 12,
    title: 'ZainX App',
    description: 'Full stack web app with PHP backend, user registration, login, and dynamic content.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    icon: '🔧',
    color: 'from-slate-500/20 to-gray-500/20',
    border: 'border-slate-500/30',
  },
]

export default function PracticeProjects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section
      id="practice-projects"
      ref={ref}
      style={{ minHeight: 'unset', display: 'block', padding: '5rem 1rem' }}
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Practice <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-4"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            15+ projects built while learning — every project taught me something new
          </p>

          {/* Toggle Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-primary flex items-center gap-3 mx-auto text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code2 className="w-5 h-5" />
            {isOpen ? 'Hide Projects' : `View All ${practiceProjects.length} Projects`}
            {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </motion.button>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pt-4">
                {practiceProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`glass rounded-xl p-5 border ${project.border} bg-gradient-to-br ${project.color} hover:scale-105 transition-all duration-300 group`}
                    style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
                  >
                    <div className="text-3xl mb-3">{project.icon}</div>
                    <h3 className="text-base font-bold mb-2 text-white group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-xs mb-3 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-xs rounded-full glass border border-white/10 text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-10 text-center"
              >
                <p className="text-slate-400 text-sm">
                  🚀 <span className="text-primary-400 font-semibold">{practiceProjects.length} projects</span> completed through consistent practice and dedication
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
