import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiDocker,
  SiGit,
  SiPython,
  SiFigma,
  SiPostgresql,
  SiRedis,
} from 'react-icons/si'

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    { name: 'React', icon: SiReact, level: 95, color: '#61DAFB' },
    { name: 'Node.js', icon: SiNodedotjs, level: 90, color: '#339933' },
    { name: 'TypeScript', icon: SiTypescript, level: 88, color: '#3178C6' },
    { name: 'MongoDB', icon: SiMongodb, level: 85, color: '#47A248' },
    { name: 'Express', icon: SiExpress, level: 90, color: '#000000' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 92, color: '#06B6D4' },
    { name: 'Docker', icon: SiDocker, level: 80, color: '#2496ED' },
    { name: 'Git', icon: SiGit, level: 93, color: '#F05032' },
    { name: 'Python', icon: SiPython, level: 82, color: '#3776AB' },
    { name: 'Figma', icon: SiFigma, level: 75, color: '#F24E1E' },
    { name: 'PostgreSQL', icon: SiPostgresql, level: 85, color: '#4169E1' },
    { name: 'Redis', icon: SiRedis, level: 78, color: '#DC382D' },
  ]

  return (
    <section
      id="skills"
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
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-4"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="card group"
            >
              {/* Icon */}
              <div className="flex items-center gap-4 mb-4">
                <skill.icon
                  className="w-12 h-12 group-hover:scale-110 transition-transform"
                  style={{ color: skill.color }}
                />
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>

              {/* Progress Bar */}
              <div className="relative">
                <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.5, delay: index * 0.05 + 0.3 }}
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)`,
                    }}
                  />
                </div>
                <div className="text-right mt-1 text-sm text-slate-400">
                  {skill.level}%
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Always Learning, Always Growing
            </h3>
            <p className="text-slate-300 text-lg">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks,
              tools, and best practices to deliver cutting-edge solutions. Currently diving deep
              into AI integration, microservices architecture, and cloud-native development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
