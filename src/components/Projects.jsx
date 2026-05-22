import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { ExternalLink, Github, X } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Iqras LMS',
      description: 'A live Learning Management System with student records, fee management, and academic tracking.',
      fullDescription: 'A fully functional live Learning Management System (LMS) built for real-world use. Features include student enrollment, fee management, attendance tracking, result management, and admin dashboard.',
      image: '/iqrass.png',
      tech: ['.NET Core', 'Angular', 'SQL Server', 'Bootstrap', 'C#'],
      github: 'https://github.com/alizahoor7867',
      live: 'https://iqrass.com/',
      aiSummary: 'This live project demonstrates real-world full stack development skills with .NET & Angular, handling complex school operations efficiently.',
    },
    {
      id: 2,
      title: 'StayNexus Agency',
      description: 'A live real estate & stay booking agency website with property listings and booking system.',
      fullDescription: 'A professional live agency website for StayNexus, featuring property listings, booking management, contact forms, and a modern responsive design tailored for real estate and hospitality.',
      image: '/staynexus.jpeg',
      tech: ['React', 'Node.js', 'Tailwind CSS', 'MongoDB'],
      github: 'https://github.com/alizahoor7867',
      live: 'https://staynexus.agency/',
      aiSummary: 'This live project showcases expertise in building professional agency websites with modern UI/UX and real booking functionality.',
    },
    {
      id: 3,
      title: 'CharityTrak',
      description: 'A live charity management platform for tracking donations, campaigns, and fundraising activities.',
      fullDescription: 'A fully functional live charity management system. Features include donation tracking, campaign management, donor records, fundraising analytics, and an admin dashboard for managing all charity operations.',
      image: '/cherity.png',
      tech: ['React', 'Node.js', 'SQL Server', 'Tailwind CSS'],
      github: 'https://github.com/alizahoor7867',
      live: 'https://charitytrak.com/',
      aiSummary: 'This live project demonstrates expertise in building impactful real-world platforms with React & Node.js, handling complex donation and campaign management workflows.',
    },
  ]

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 px-4"
      ref={ref}
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-4"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Real live projects running in production — built with passion and hard work
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div
                  className="card h-full flex flex-col group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                    <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      🟢 Live
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs rounded-full glass border border-primary-500/30 text-primary-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-300 hover:text-primary-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" /> Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-300 hover:text-accent-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 glass rounded-full hover:bg-red-500/20 transition-colors z-10"
                >
                  <X className="w-6 h-6" />
                </button>
                <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-2xl hover:opacity-80 transition-opacity cursor-pointer"
                />
                </a>
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4 gradient-text">{selectedProject.title}</h3>
                  <p className="text-slate-300 text-lg mb-6">{selectedProject.fullDescription}</p>
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3 text-primary-400">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, i) => (
                        <span key={i} className="px-4 py-2 rounded-lg glass border border-primary-500/30 text-primary-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-6 p-4 rounded-lg bg-accent-500/10 border border-accent-500/30">
                    <h4 className="text-lg font-semibold mb-2 text-accent-400">🤖 AI Analysis</h4>
                    <p className="text-slate-300">{selectedProject.aiSummary}</p>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary flex items-center gap-2"
                    >
                      <Github className="w-5 h-5" /> View Code
                    </a>
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary flex items-center gap-2"
                    >
                      <ExternalLink className="w-5 h-5" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}
