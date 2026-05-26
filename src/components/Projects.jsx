import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
 
  {
    title: 'Student Management System',
    description: 'A console-based CRUD application to manage student records with full database connectivity. Implemented Add, Update, Delete, and View operations using OOPS principles.',
    tech: ['Java', 'JDBC', 'MySQL'],
    gradient: 'linear-gradient(135deg,#ec4899,#f97316)',
    emoji: '🎓',
    github: 'https://github.com/Anup1094',
    live: null,
  },
  {
  title: 'Student Portal — Full Stack',
  description:
    'A Full Stack Student Management Portal with complete CRUD operations. React frontend connected with Spring Boot REST APIs and MySQL database.',
  tech: ['React', 'Spring Boot', 'MySQL', 'REST API'],
  gradient: 'linear-gradient(135deg,#06b6d4,#7c3aed)',
  emoji: '🎓',
  github: 'https://github.com/Anup1094/StudentPortal-ReactSpringBoot',
  live: null,
},
]

const Projects = () => {
  return (
    <section id="projects" style={{ padding: '96px 0', background: '#0f172a' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <h2 style={{ fontSize: 'clamp(36px,6vw,56px)', fontWeight: 900, marginBottom: 12 }}>
            <span style={{ background: 'linear-gradient(90deg,#a78bfa,#f472b6,#fb923c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              My Projects
            </span>
          </h2>
          <div style={{ width: 80, height: 4, background: 'linear-gradient(90deg,#a78bfa,#fb923c)', margin: '0 auto', borderRadius: 999 }}></div>
          <p style={{ color: '#6b7280', marginTop: 16, fontSize: 17 }}>Things I have built</p>
        </motion.div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              style={{ background: '#030712', borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexDirection: 'column' }}
            >
              {/* Top bar */}
              <div style={{ height: 4, background: project.gradient }}></div>

              <div style={{ padding: 32, display: 'flex', flexDirection: 'column', flex: 1 }}>
                {/* Emoji + Title */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 16 }}>
                  <span style={{ fontSize: 44 }}>{project.emoji}</span>
                  <h3 style={{ color: '#fff', fontWeight: 800, fontSize: 18, lineHeight: 1.3 }}>{project.title}</h3>
                </div>

                {/* Description */}
                <p style={{ color: '#9ca3af', lineHeight: 1.7, marginBottom: 24, fontSize: 15, flex: 1 }}>
                  {project.description}
                </p>

                {/* Tech badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      style={{ padding: '4px 14px', borderRadius: 999, fontSize: 13, fontWeight: 700, background: project.gradient, color: '#fff' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: 12 }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', background: 'rgba(255,255,255,0.07)', color: '#fff', borderRadius: 999, fontSize: 14, fontWeight: 600, textDecoration: 'none', transition: 'background 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#7c3aed'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}
                  >
                    <FaGithub /> GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', background: project.gradient, color: '#fff', borderRadius: 999, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects
