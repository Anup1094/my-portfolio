import { motion } from 'framer-motion'

const About = () => {
  const cards = [
    { label: 'Location', value: 'Greater Noida, UP', color: '#a78bfa' },
    { label: 'Degree', value: 'B.Tech CSE (2023–2027)', color: '#f472b6' },
    { label: 'Email', value: 'anupchaurasia522@gmail.com', color: '#fb923c' },
    { label: 'Status', value: 'Open to Opportunities', color: '#34d399' },
  ]

  return (
    <section id="about" style={{ padding: '96px 0', background: '#0f172a' }}>
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
              About Me
            </span>
          </h2>
          <div style={{ width: 80, height: 4, background: 'linear-gradient(90deg,#a78bfa,#fb923c)', margin: '0 auto', borderRadius: 999 }}></div>
        </motion.div>

        <div style={{ display: 'flex', gap: 56, alignItems: 'center', flexWrap: 'wrap' }}>

          {/* PHOTO SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center', width: '100%', maxWidth: 320 }}
          >
            <div style={{ position: 'relative' }}>
              {/* Gradient border */}
              <div style={{ position: 'absolute', inset: -3, background: 'linear-gradient(135deg,#a78bfa,#f472b6,#fb923c)', borderRadius: 20, zIndex: 0 }}></div>

              {/*
                =====================================================
                📸 PHOTO ADD KARNE KI JAGAH — YAHAN HAI
                =====================================================
                STEP 1: Apni photo rename karo → profile.jpg
                STEP 2: Copy karo → my-portfolio/public/ folder mein
                STEP 3: Neeche img tag already ready hai ✅
                =====================================================
              */}
              <img
                src="/profile.jpg"
                alt="Anup Chaurasia"
                style={{ position: 'relative', zIndex: 1, width: 280, height: 320, objectFit: 'cover', borderRadius: 18, display: 'block' }}
                onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
              />
              {/* Fallback if no photo */}
              {/* <div style={{ position: 'relative', zIndex: 1, width: 280, height: 320, borderRadius: 18, background: 'linear-gradient(135deg,rgba(139,92,246,0.3),rgba(244,114,182,0.3))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 80 }}>
                👨‍💻
              </div> */}
              {/*
                =====================================================
                📸 PHOTO SECTION END
                =====================================================
              */}
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ flex: 1, minWidth: 280 }}
          >
            <h3 style={{ fontSize: 28, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              Full Stack Developer{' '}
              <span style={{ background: 'linear-gradient(90deg,#a78bfa,#f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                &amp; CS Student
              </span>
            </h3>

            <p style={{ color: '#9ca3af', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
              I am a motivated and detail-oriented Computer Science student from
              Dronacharya Group of Institutions, Greater Noida. Passionate about
              building efficient backend systems using Java and Spring Boot, and crafting
              modern frontends with React.
            </p>

            <p style={{ color: '#9ca3af', fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
              I love solving problems on LeetCode and continuously improving my
              development skills. My goal is to become a professional Full Stack
              Developer combining the power of React and Java.
            </p>

            {/* Info Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
              {cards.map((card) => (
                <div
                  key={card.label}
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '14px 16px' }}
                >
                  <p style={{ color: card.color, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 4 }}>{card.label}</p>
                  <p style={{ color: '#fff', fontWeight: 600, fontSize: 13 }}>{card.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
