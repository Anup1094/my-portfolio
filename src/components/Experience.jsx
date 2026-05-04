import { motion } from 'framer-motion'
import { FaGraduationCap, FaCertificate, FaCode } from 'react-icons/fa'

const sections = [
  {
    title: 'Experience',
    emoji: '💼',
    items: [
      {
        icon: FaCode,
        gradient: 'linear-gradient(135deg,#ec4899,#f97316)',
        title: 'Full Stack Developer (Learning)',
        institute: 'Self-Driven Projects & Practice',
        year: '2023 – Present',
        detail: 'Building projects with React (Frontend) + Java Spring Boot (Backend)',
      },
    ],
  },
  {
    title: 'Education',
    emoji: '🎓',
    items: [
      {
        icon: FaGraduationCap,
        gradient: 'linear-gradient(135deg,#7c3aed,#ec4899)',
        title: 'B.Tech — Computer Science & Engineering',
        institute: 'Dronacharya Group of Institutions, Greater Noida',
        year: '2023 – 2027',
        detail: 'SGPA: 7.5 (Till 5th Semester)',
      },
      {
        icon: FaGraduationCap,
        gradient: 'linear-gradient(135deg,#ec4899,#f97316)',
        title: '12th — Science (PCM)',
        institute: 'CBSE Board',
        year: '2022',
        detail: 'Percentage: 75%',
      },
      {
        icon: FaGraduationCap,
        gradient: 'linear-gradient(135deg,#f97316,#7c3aed)',
        title: '10th — High School',
        institute: 'CBSE Board',
        year: '2020',
        detail: 'Percentage: 83%',
      },
    ],
  },
  {
    title: 'Certifications',
    emoji: '📜',
    items: [
      {
        icon: FaCertificate,
        gradient: 'linear-gradient(135deg,#7c3aed,#f97316)',
        title: 'Java Programming Course For Beginners',
        institute: 'Online Certification',
        year: '2024',
        detail: 'Core Java, OOPS, Exception Handling, Collections',
      },
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" style={{ padding: '96px 0', background: '#030712' }}>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>

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
              Experience &amp; Education
            </span>
          </h2>
          <div style={{ width: 80, height: 4, background: 'linear-gradient(90deg,#a78bfa,#fb923c)', margin: '0 auto', borderRadius: 999 }}></div>
          <p style={{ color: '#6b7280', marginTop: 16, fontSize: 17 }}>My journey so far</p>
        </motion.div>

        {sections.map((section, si) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: si * 0.15 }}
            viewport={{ once: true }}
            style={{ marginBottom: 56 }}
          >
            {/* Section heading */}
            <h3 style={{ color: '#fff', fontSize: 20, fontWeight: 800, marginBottom: 28, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span>{section.emoji}</span> {section.title}
            </h3>

            {/* Timeline */}
            <div style={{ borderLeft: '2px solid rgba(255,255,255,0.08)', marginLeft: 16, display: 'flex', flexDirection: 'column', gap: 24 }}>
              {section.items.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.12 }}
                    viewport={{ once: true }}
                    style={{ position: 'relative', marginLeft: 28 }}
                  >
                    {/* Dot */}
                    <div style={{ position: 'absolute', left: -44, top: 12, width: 32, height: 32, borderRadius: '50%', background: item.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 14 }}>
                      <Icon />
                    </div>

                    {/* Card */}
                    <div style={{ background: '#0f172a', borderRadius: 16, padding: '20px 24px', border: '1px solid rgba(255,255,255,0.07)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
                        <h4 style={{ color: '#fff', fontWeight: 800, fontSize: 16, margin: 0 }}>{item.title}</h4>
                        <span style={{ fontSize: 13, fontWeight: 700, background: item.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', whiteSpace: 'nowrap' }}>
                          {item.year}
                        </span>
                      </div>
                      <p style={{ color: '#a78bfa', fontWeight: 600, fontSize: 13, marginBottom: 6 }}>{item.institute}</p>
                      <p style={{ color: '#6b7280', fontSize: 14 }}>{item.detail}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  )
}

export default Experience
