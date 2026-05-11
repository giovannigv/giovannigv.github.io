import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <p className="section-label">// about me</p>
        <div className={styles.grid}>
          <div className={styles.text}>
            <h2 className="section-title">Fullstack engineer with a creative side</h2>
            <p className={styles.para}>
              I'm a Fullstack Node.js Developer at <strong>Hubexo</strong> (Lisbon),
              where I build a high-performance e-commerce platform for a British client
              using <strong>Angular</strong>, <strong>NestJS</strong>, <strong>.NET</strong>,
              and <strong>GraphQL</strong> for service communication.
            </p>
            <p className={styles.para}>
              I hold a Bachelor's degree in <strong>Systems Engineering</strong> from
              Universidade Presbiteriana Mackenzie. My career spans backend and frontend
              roles at <strong>Siemens</strong> and <strong>IBM</strong>, with strong
              experience in Node.js, Express, Apache Kafka, SQL and NoSQL databases,
              and microservices architecture.
            </p>
            <p className={styles.para}>
              On the side, I studied Game Design and Unreal Development at EBAC and
              ship small indie games as a hobby — see the{' '}
              <a href="#gamedev">Game Dev</a> section.
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}><span className={styles.statNumber}>+9</span><span className={styles.statLabel}>Years as a developer</span></div>
              <div className={styles.stat}><span className={styles.statNumber}>+7</span><span className={styles.statLabel}>Years working with Node.js</span></div>
              <div className={styles.stat}><span className={styles.statNumber}>EN/PT</span><span className={styles.statLabel}>Working languages</span></div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.dot} style={{ background: '#ff5f56' }} />
              <span className={styles.dot} style={{ background: '#ffbd2e' }} />
              <span className={styles.dot} style={{ background: '#27c93f' }} />
              <span className={styles.fileName}>giovanni.ts</span>
            </div>
            <pre className={styles.code}>{`const giovanni = {
  name: "Giovanni Vicário",
  role: "Fullstack Node.js Developer",
  company: "Hubexo",
  location: "Lisbon, Portugal",

  stack: {
    backend:  ["Node.js", "NestJS", "Express", ".NET"],
    frontend: ["Angular", "TypeScript"],
    data:     ["PostgreSQL", "MongoDB", "OpenSearch",
               "Apache Kafka"],
    api:      ["GraphQL", "REST", "SOAP"],
  },

  languages: ["Portuguese", "English", "Spanish (basic)"],
  hobby:     "Indie game dev with Unreal Engine 5",
  status:    "Open to opportunities",
};`}</pre>
          </div>
        </div>
      </div>
    </section>
  )
}
