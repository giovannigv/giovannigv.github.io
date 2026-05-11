import styles from './Projects.module.css'

const certifications = [
  'IBM Cloud Essentials — V3',
  'Watson and Cloud Foundations',
  'Design Microservices Architecture with Patterns & Principles',
  'Cloud Core',
  'Profissão: Game Designer e Desenvolvedor Unreal (EBAC)',
]

const volunteering = [
  {
    role: 'Scout',
    org: 'Grupo Escoteiro 110 — São Paulo, Brasil',
    period: 'Jun 2011 — 2022',
  },
  {
    role: 'Scout',
    org: 'Grupo 7 — AEP, Lisboa, Portugal',
    period: '2022 — Present',
  },
]

export default function Highlights() {
  return (
    <section id="highlights" className={`section ${styles.projects}`}>
      <div className="container">
        <p className="section-label">// more about me</p>
        <h2 className="section-title">Beyond the Code</h2>
        <p className="section-subtitle">
          Certifications, a published novel and a long-standing involvement with
          scouting — things that shape how I work and learn.
        </p>

        <div className={styles.grid} style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.platformBadge} style={{ background: '#1f6feb' }}>
                <CertIcon />
                Certifications
              </div>
            </div>
            <h3 className={styles.title}>Courses & Credentials</h3>
            <p className={styles.description}>
              Formal training in cloud, microservices architecture and game development.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {certifications.map((c) => (
                <li key={c} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--accent)', flexShrink: 0 }}>▹</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.card} ${styles.highlighted}`}>
            <div className={styles.featuredBadge}>📖 Published</div>
            <div className={styles.cardTop}>
              <div className={styles.platformBadge} style={{ background: '#b45309' }}>
                <BookIcon />
                Book
              </div>
              <span className={styles.type}>Fantasy · Jul 2020</span>
            </div>
            <h3 className={styles.title}>As Crônicas do Universo: Em Busca das Essências</h3>
            <p className={styles.description}>
              Henry and his partner Saravedro chase an ancient myth — the Essences
              of Life and Death — on a perilous voyage that could decide the fate
              of all creation.
            </p>
            <div className={styles.tags}>
              {['Fantasy', 'Adventure', 'Portuguese', 'Published 2020'].map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
            <div className={styles.links}>
              <a
                href="https://www.amazon.com.br/As-Cr%C3%B4nicas-Universo-Giovanni-Vic%C3%A1rio/dp/6500058402"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkPrimary}
              >
                <BookIcon />
                View on Amazon
                <span className={styles.arrow}>↗</span>
              </a>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.platformBadge} style={{ background: '#15803d' }}>
                <ScoutIcon />
                Scouting
              </div>
              <span className={styles.type}>13+ years</span>
            </div>
            <h3 className={styles.title}>Scout member</h3>
            <p className={styles.description}>
              Active scout member since 2011 — first in Brazil, now with AEP in Portugal.
              Teamwork, leadership and outdoor problem-solving as a long-term commitment.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {volunteering.map((v) => (
                <li key={v.org} style={{ fontSize: '0.92rem' }}>
                  <div style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{v.org}</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{v.role} · {v.period}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function CertIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  )
}

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  )
}

function ScoutIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
      <path d="M12 2 4 7l8 5 8-5-8-5z" />
      <path d="M4 12l8 5 8-5" />
      <path d="M4 17l8 5 8-5" />
    </svg>
  )
}
