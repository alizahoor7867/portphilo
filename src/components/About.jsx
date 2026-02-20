import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { Code2, Rocket, Award, Coffee } from 'lucide-react'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { icon: Code2, value: 4, suffix: '+', label: 'Years Experience' },
    { icon: Rocket, value: 50, suffix: '+', label: 'Projects Completed' },
    { icon: Award, value: 15, suffix: '+', label: 'Certifications' },
    { icon: Coffee, value: 1000, suffix: '+', label: 'Cups of Coffee' },
  ]

  const techStack = [
    { category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', skills: ['Node.js', 'Express', '.NET', 'MongoDB'] },
    { category: 'Tools', skills: ['Git', 'Docker', 'AWS', 'VS Code'] },
    { category: 'AI/ML', skills: ['LangChain', 'OpenAI', 'TensorFlow', 'Python'] },
  ]

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-4"
      ref={ref}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6 gradient-text">
              Full Stack Developer & Tech Enthusiast
            </h3>
            <p className="text-slate-300 text-lg mb-6">
              I'm a passionate Full Stack Developer with expertise in building modern, scalable web
              applications. My journey in tech started with a curiosity about how things work, and
              it has evolved into a career of creating innovative solutions.
            </p>
            <p className="text-slate-300 text-lg mb-6">
              I specialize in the MERN stack, .NET, and modern frontend frameworks. Recently, I've
              been diving deep into AI and machine learning, integrating intelligent features into
              web applications using LangChain and OpenAI.
            </p>
            <p className="text-slate-300 text-lg">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="card text-center group hover:border-primary-500/50"
              >
                <stat.icon className="w-10 h-10 mx-auto mb-4 text-primary-400 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bold gradient-text mb-2">
                  {inView && (
                    <>
                      <CountUp end={stat.value} duration={2.5} />
                      {stat.suffix}
                    </>
                  )}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Tech Stack
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((category, index) => (
              <div key={index} className="card">
                <h4 className="text-xl font-semibold text-primary-400 mb-4">
                  {category.category}
                </h4>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-slate-300 flex items-center gap-2"
                    >
                      <span className="w-2 h-2 bg-accent-500 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
