import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 50,
        transition: 'all 0.3s',
        background: scrolled ? 'rgba(3,7,18,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 30px rgba(139,92,246,0.08)' : 'none',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 68 }}>
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{ fontSize: 24, fontWeight: 900, background: 'linear-gradient(90deg,#a78bfa,#f472b6,#fb923c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', cursor: 'pointer', letterSpacing: -1 }}
        >
          Anup.dev
        </motion.div>

        {/* Desktop Links */}
        <ul style={{ display: 'flex', gap: 32, listStyle: 'none', margin: 0, padding: 0 }} className="desktop-nav">
          {navLinks.map((link) => (
            <motion.li key={link} whileHover={{ scale: 1.1 }} style={{ cursor: 'pointer' }}>
              <a
                href={'#' + link.toLowerCase()}
                style={{ color: '#d1d5db', textDecoration: 'none', fontWeight: 600, fontSize: 15, letterSpacing: 0.5, transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#a78bfa'}
                onMouseLeave={e => e.target.style.color = '#d1d5db'}
              >
                {link}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ cursor: 'pointer', display: 'none', flexDirection: 'column', gap: 5 }}
          className="hamburger"
        >
          <span style={{ display: 'block', width: 24, height: 2, background: '#a78bfa', borderRadius: 2 }}></span>
          <span style={{ display: 'block', width: 24, height: 2, background: '#f472b6', borderRadius: 2 }}></span>
          <span style={{ display: 'block', width: 24, height: 2, background: '#fb923c', borderRadius: 2 }}></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: 'rgba(3,7,18,0.98)', padding: '12px 24px 20px' }}
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={'#' + link.toLowerCase()}
                onClick={() => setMenuOpen(false)}
                style={{ display: 'block', padding: '10px 0', color: '#d1d5db', textDecoration: 'none', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.05)' }}
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  )
}

export default Navbar
