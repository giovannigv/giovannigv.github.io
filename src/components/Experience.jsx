import styles from './Experience.module.css'

const experiences = [
  {
    type: 'work',
    title: 'Fullstack Node Developer',
    company: 'Hubexo — Lisbon, Portugal',
    period: 'Mar 2024 — Present',
    description:
      'Building a high-performance e-commerce platform for a British client using Angular, NestJS, .NET and GraphQL.',
    highlights: [
      'Developed front-end and back-end features ensuring a seamless and scalable architecture',
      'Designed and optimized search capabilities using OpenSearch — improving query speed and accuracy',
      'Implemented efficient indexing strategies for real-time updates',
      'Used PostgreSQL as the primary database for .NET services with optimized queries and strong API performance',
    ],
  },
  {
    type: 'work',
    title: 'Node.js Developer',
    company: 'Siemens — Lisbon, Portugal',
    period: 'Jun 2022 — Sep 2023',
    description:
      'Developed and maintained conversational automation solutions for an internal platform handling document workflows and translations.',
    highlights: [
      'Built Node.js / Express APIs supporting production-scale automation',
      'Integrated and optimized Dialogflow and Botfriends-driven chatbot processes',
      'Improved existing architecture and delivered new features end-to-end',
    ],
  },
  {
    type: 'work',
    title: 'Node.js Developer',
    company: 'IBM — São Paulo, Brazil',
    period: 'Jun 2019 — Jun 2022',
    description:
      'Built high-availability applications with Angular and Express, using Apache Kafka to handle high-volume data demand.',
    highlights: [
      'Developed services using SQL and NoSQL databases (MongoDB, CassandraDB, ExadataDB)',
      'Mentored interns through code reviews, promoting clean code principles and design patterns',
      'Guided improvements toward more reliable, maintainable solutions',
    ],
  },
  {
    type: 'work',
    title: 'Java and Oracle Developer',
    company: 'IBM — São Paulo, Brazil',
    period: 'Nov 2017 — May 2019',
    description:
      'Application development and support in PL/SQL (Oracle Forms) and SOAP APIs with Java 1.4.',
    highlights: [],
  },
  {
    type: 'work',
    title: 'Software Engineer Intern',
    company: 'Universidade Presbiteriana Mackenzie — São Paulo, Brazil',
    period: 'Mar 2017 — Oct 2017',
    description:
      'Helped build new internal systems for the University (Software Factory / Mackleaps).',
    highlights: [
      'Android application development in Java',
      'Maintenance of study materials using LaTeX',
      'Website development for weather data',
    ],
  },
  {
    type: 'education',
    title: "Bachelor's degree, Systems Engineering",
    company: 'Universidade Presbiteriana Mackenzie',
    period: '2018 — 2019',
    description: '',
    highlights: [],
  },
  {
    type: 'education',
    title: 'BTech, Game Design and Unreal Development',
    company: 'EBAC — Escola Britânica de Artes Criativas e Tecnologia',
    period: 'Jan 2023 — Aug 2024',
    description: '',
    highlights: [],
  },
  {
    type: 'education',
    title: 'BTech, Computer Systems Analysis',
    company: 'Universidade Presbiteriana Mackenzie',
    period: '2016 — 2018',
    description: '',
    highlights: [],
  },
]

export default function Experience() {
  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">
        <p className="section-label">// experience</p>
        <h2 className="section-title">Career & Education</h2>
        <p className="section-subtitle">
          Six+ years building production software across Brazil and Portugal.
        </p>

        <div className={styles.timeline}>
          {experiences.map((item, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.iconWrap}>
                <span className={styles.icon}>
                  {item.type === 'work' ? '💼' : '🎓'}
                </span>
                {i < experiences.length - 1 && <div className={styles.line} />}
              </div>
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.period}>{item.period}</span>
                  <span className={styles.typeBadge}>
                    {item.type === 'work' ? 'Work' : 'Education'}
                  </span>
                </div>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.company}>{item.company}</p>
                {item.description && <p className={styles.desc}>{item.description}</p>}
                {item.highlights.length > 0 && (
                  <ul className={styles.highlights}>
                    {item.highlights.map((h, j) => (
                      <li key={j} className={styles.highlight}>
                        <span className={styles.bullet}>▹</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.linkedinCta}>
          <p>For the full professional profile:</p>
          <a
            href="https://www.linkedin.com/in/giovannivicario/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedinBtn}
          >
            <LinkedInIcon />
            View full profile on LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
