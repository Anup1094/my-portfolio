import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaCode } from 'react-icons/fa'

const contactLinks = [
  { icon: FaEnvelope, label: 'Email', value: 'anupchaurasia522@gmail.com', href: 'mailto:anupchaurasia522@gmail.com', gradient: 'linear-gradient(135deg,#7c3aed,#ec4899)' },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/anup-chaurasia', href: 'https://www.linkedin.com/in/anup-chaurasia-b30782304', gradient: 'linear-gradient(135deg,#ec4899,#f97316)' },
  { icon: FaGithub, label: 'GitHub', value: 'github.com/Anup1094', href: 'https://github.com/Anup1094', gradient: 'linear-gradient(135deg,#f97316,#7c3aed)' },
  { icon: FaCode, label: 'LeetCode', value: 'leetcode.com/u/AnupChaurasia', href: 'https://leetcode.com/u/AnupChaurasia', gradient: 'linear-gradient(135deg,#7c3aed,#f97316)' },
]

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '96px 0', background: '#0f172a' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>

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
              Contact Me
            </span>
          </h2>
          <div style={{ width: 80, height: 4, background: 'linear-gradient(90deg,#a78bfa,#fb923c)', margin: '0 auto', borderRadius: 999 }}></div>
          <p style={{ color: '#6b7280', marginTop: 16, fontSize: 17 }}>
            Feel free to reach out — I am always open to new opportunities!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 48 }}>
          {contactLinks.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                style={{ display: 'flex', alignItems: 'center', gap: 20, background: '#030712', borderRadius: 16, padding: '20px 24px', border: '1px solid rgba(255,255,255,0.07)', textDecoration: 'none', transition: 'border-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(167,139,250,0.4)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
              >
                <div style={{ width: 52, height: 52, borderRadius: 14, background: item.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 22, flexShrink: 0 }}>
                  <Icon />
                </div>
                <div>
                  <p style={{ color: '#6b7280', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 4 }}>{item.label}</p>
                  <p style={{ color: '#e5e7eb', fontWeight: 600, fontSize: 13 }}>{item.value}</p>
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ background: '#030712', borderRadius: 24, padding: '56px 40px', border: '1px solid rgba(255,255,255,0.07)', textAlign: 'center' }}
        >
          <h3 style={{ color: '#fff', fontSize: 30, fontWeight: 900, marginBottom: 16 }}>
            Let us Build Something{' '}
            <span style={{ background: 'linear-gradient(90deg,#a78bfa,#fb923c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Amazing Together!
            </span>
          </h3>
          <p style={{ color: '#9ca3af', fontSize: 17, marginBottom: 36, maxWidth: 520, margin: '0 auto 36px' }}>
            I am currently looking for internship and entry-level opportunities
            as a Full Stack Developer. Let us connect!
          </p>
          <motion.a
            href="mailto:anupchaurasia522@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ display: 'inline-block', padding: '16px 48px', background: 'linear-gradient(90deg,#7c3aed,#ec4899,#f97316)', color: '#fff', fontWeight: 800, borderRadius: 999, fontSize: 17, textDecoration: 'none', boxShadow: '0 8px 30px rgba(139,92,246,0.3)' }}
          >
            Say Hello
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: 48, color: '#374151', fontSize: 14 }}
        >
          Designed and Built by{' '}
          <span style={{ color: '#a78bfa', fontWeight: 700 }}>Anup Chaurasia</span>{' '}
          © 2025
        </motion.p>

      </div>
    </section>
  )
}

export default Contact
