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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'AI-Powered E-Commerce Platform',
      description:
        'A modern e-commerce platform with AI-powered product recommendations and chatbot assistance.',
      fullDescription:
        'Built a complete e-commerce solution with personalized shopping experiences using machine learning algorithms. Features include real-time inventory management, secure payment processing, and an AI chatbot that helps users find products.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'OpenAI', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com',
      aiSummary:
        'This project showcases expertise in full-stack development and AI integration, demonstrating the ability to build scalable applications with intelligent features.',
    },
    {
      id: 2,
      title: 'Real-Time Collaboration Tool',
      description:
        'Slack-like collaboration platform with real-time messaging and video conferencing.',
      fullDescription:
        'Developed a comprehensive team collaboration tool featuring real-time chat, file sharing, video calls, and project management capabilities. Implemented WebSocket communication for instant updates.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop',
      tech: ['React', 'Socket.io', 'WebRTC', 'PostgreSQL', 'Docker'],
      github: 'https://github.com',
      live: 'https://example.com',
      aiSummary:
        'Demonstrates advanced real-time communication implementation and scalable architecture design.',
    },
    {
      id: 3,
      title: 'Healthcare Management System',
      description:
        'Complete hospital management system with patient records and appointment scheduling.',
      fullDescription:
        'Created a HIPAA-compliant healthcare platform for managing patient information, appointments, prescriptions, and medical records. Includes role-based access control and audit logging.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop',
      tech: ['.NET Core', 'React', 'SQL Server', 'Azure', 'Redis'],
      github: 'https://github.com',
      live: 'https://example.com',
      aiSummary:
        'Shows proficiency in building secure, enterprise-level applications with complex business logic.',
    },
    {
      id: 4,
      title: 'Smart Home Dashboard',
      description: 'IoT dashboard for controlling and monitoring smart home devices.',
      fullDescription:
        'Built an intuitive dashboard for managing IoT devices with real-time data visualization, automation rules, and energy consumption tracking. Supports integration with multiple smart home protocols.',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop',
      tech: ['Next.js', 'TypeScript', 'MQTT', 'InfluxDB', 'Tailwind'],
      github: 'https://github.com',
      live: 'https://example.com',
      aiSummary:
        'Highlights expertise in IoT integration and real-time data processing.',
    },
  ]

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 px-4"
      ref={ref}
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
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
            A showcase of my recent work in web development and AI integration
          </p>
        </motion.div>

        {/* Projects Carousel */}
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
            {projects.map((project, index) => (
              <SwiperSlide key={project.id}>
                <div className="card h-full flex flex-col group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                  </div>

                  {/* Project Info */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 flex-grow">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs rounded-full glass border border-primary-500/30 text-primary-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-300 hover:text-primary-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-300 hover:text-primary-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Project Modal */}
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
                  className="absolute top-4 right-4 p-2 glass rounded-full hover:bg-red-500/20 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />

                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4 gradient-text">
                    {selectedProject.title}
                  </h3>
                  <p className="text-slate-300 text-lg mb-6">
                    {selectedProject.fullDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3 text-primary-400">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 rounded-lg glass border border-primary-500/30 text-primary-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6 p-4 rounded-lg bg-accent-500/10 border border-accent-500/30">
                    <h4 className="text-lg font-semibold mb-2 text-accent-400 flex items-center gap-2">
                      🤖 AI Analysis
                    </h4>
                    <p className="text-slate-300">{selectedProject.aiSummary}</p>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary flex items-center gap-2"
                    >
                      <Github className="w-5 h-5" />
                      View Code
                    </a>
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary flex items-center gap-2"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
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
