import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', background: '#030712' }}>

      {/* Background blobs */}
      <div style={{ position: 'absolute', top: 80, left: 40, width: 300, height: 300, background: 'rgba(139,92,246,0.15)', borderRadius: '50%', filter: 'blur(80px)' }}></div>
      <div style={{ position: 'absolute', bottom: 80, right: 40, width: 300, height: 300, background: 'rgba(244,114,182,0.15)', borderRadius: '50%', filter: 'blur(80px)' }}></div>
      <div style={{ position: 'absolute', top: '50%', left: '40%', width: 400, height: 400, background: 'rgba(251,146,60,0.08)', borderRadius: '50%', filter: 'blur(100px)' }}></div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 10 }}>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ color: '#a78bfa', fontWeight: 700, fontSize: 16, marginBottom: 16, letterSpacing: 4, textTransform: 'uppercase' }}
        >
          Hello, I am
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: 'clamp(56px, 10vw, 100px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 20, margin: '0 0 20px 0' }}
        >
          <span style={{ background: 'linear-gradient(90deg,#a78bfa,#f472b6,#fb923c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Anup
          </span>
          <br />
          <span style={{ color: '#ffffff' }}>Chaurasia</span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ fontSize: 'clamp(18px, 3vw, 28px)', fontWeight: 700, marginBottom: 20, marginTop: 16 }}
        >
          <span style={{ color: '#9ca3af' }}>Full Stack Developer — </span>
          <span style={{ background: 'linear-gradient(90deg,#f472b6,#fb923c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            React + Java
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ color: '#6b7280', fontSize: 18, maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.7 }}
        >
          Passionate about building efficient backend systems with Java and Spring Boot
          and crafting beautiful frontends with React. Currently pursuing B.Tech CSE
          at Dronacharya Group of Institutions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}
        >
          <a
            href="#projects"
            style={{ padding: '14px 36px', background: 'linear-gradient(90deg,#7c3aed,#ec4899,#f97316)', color: '#fff', fontWeight: 700, borderRadius: 9999, fontSize: 17, textDecoration: 'none', boxShadow: '0 8px 30px rgba(139,92,246,0.3)', transition: 'transform 0.2s', display: 'inline-block' }}
            onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.target.style.transform = 'scale(1)'}
          >
            View My Projects
          </a>
          <a
            href="#contact"
            style={{ padding: '14px 36px', border: '2px solid #a78bfa', color: '#a78bfa', fontWeight: 700, borderRadius: 9999, fontSize: 17, textDecoration: 'none', transition: 'all 0.2s', display: 'inline-block' }}
            onMouseEnter={e => { e.target.style.background = '#a78bfa'; e.target.style.color = '#fff' }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#a78bfa' }}
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          style={{ display: 'flex', justifyContent: 'center', gap: 32, marginBottom: 48 }}
        >
          {[
            { label: 'GitHub', href: 'https://github.com/Anup1094', hoverColor: '#a78bfa' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anup-chaurasia', hoverColor: '#f472b6' },
            { label: 'LeetCode', href: 'https://leetcode.com/u/AnupChaurasia', hoverColor: '#fb923c' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              style={{ color: '#6b7280', textDecoration: 'none', fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: 'uppercase', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = social.hoverColor}
              onMouseLeave={e => e.target.style.color = '#6b7280'}
            >
              {social.label}
            </a>
          ))}
        </motion.div>

        {/* Scroll Down */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ color: '#4b5563', fontSize: 13, letterSpacing: 2 }}
        >
          ↓ SCROLL DOWN
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
