import { motion } from 'framer-motion'
import { FaJava, FaReact, FaGithub, FaDatabase, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa'
import { SiSpringboot, SiMysql, SiTailwindcss } from 'react-icons/si'

const skillGroups = [
  {
    category: 'Frontend',
    gradient: 'linear-gradient(135deg,#7c3aed,#ec4899)',
    items: [
      { name: 'React', icon: FaReact, level: 70 },
      { name: 'HTML5', icon: FaHtml5, level: 85 },
      { name: 'CSS3', icon: FaCss3Alt, level: 80 },
      { name: 'JavaScript', icon: FaJs, level: 65 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 75 },
    ],
  },
  {
    category: 'Backend',
    gradient: 'linear-gradient(135deg,#ec4899,#f97316)',
    items: [
      { name: 'Java', icon: FaJava, level: 85 },
      { name: 'Spring Boot', icon: SiSpringboot, level: 60 },
      { name: 'REST API', icon: FaDatabase, level: 60 },
      { name: 'JDBC', icon: FaDatabase, level: 70 },
    ],
  },
  {
    category: 'Database & Tools',
    gradient: 'linear-gradient(135deg,#f97316,#7c3aed)',
    items: [
      { name: 'MySQL', icon: SiMysql, level: 75 },
      { name: 'MongoDb', icon: FaDatabase, level: 60 },
      { name: 'GitHub', icon: FaGithub, level: 75 },
    ],
  },
]

const Skills = () => {
  return (
    <section id="skills" style={{ padding: '96px 0', background: '#030712' }}>
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
              My Skills
            </span>
          </h2>
          <div style={{ width: 80, height: 4, background: 'linear-gradient(90deg,#a78bfa,#fb923c)', margin: '0 auto', borderRadius: 999 }}></div>
          <p style={{ color: '#6b7280', marginTop: 16, fontSize: 17 }}>Technologies I work with</p>
        </motion.div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: gi * 0.15 }}
              viewport={{ once: true }}
              style={{ background: '#0f172a', borderRadius: 20, padding: 28, border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {/* Category */}
              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 24, background: group.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {group.category}
              </h3>

              {/* Skills */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {group.items.map((skill, i) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      viewport={{ once: true }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                        <Icon style={{ color: '#a78bfa', fontSize: 18 }} />
                        <span style={{ color: '#e5e7eb', fontWeight: 600, fontSize: 14 }}>{skill.name}</span>
                        <span style={{ marginLeft: 'auto', color: '#4b5563', fontSize: 13 }}>{skill.level}%</span>
                      </div>
                      {/* Bar BG */}
                      <div style={{ width: '100%', height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 999 }}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.level + '%' }}
                          transition={{ duration: 1, delay: i * 0.08 }}
                          viewport={{ once: true }}
                          style={{ height: 6, borderRadius: 999, background: group.gradient }}
                        />
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
