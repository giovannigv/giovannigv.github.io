import styles from './Skills.module.css'

const skillGroups = [
  {
    category: 'Backend & Architecture', icon: '⚙️',
    skills: [
      { name: 'REST APIs', level: 100 },
      { name: 'Node.js', level: 95 },
      { name: 'NestJS', level: 90 },
      { name: 'Express.js', level: 90 },
      { name: 'Microservices', level: 90 },
      { name: 'System Architecture', level: 85 },
      { name: 'GraphQL', level: 80 },
      { name: '.NET Framework', level: 40 },
      { name: 'Apache Kafka', level: 35 },
    ],
  },
  {
    category: 'Frontend', icon: '🖥️',
    skills: [
      { name: 'Angular', level: 95 },
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 95 },
      { name: 'HTML5', level: 90 },
      { name: 'Ionic Framework', level: 55 },
    ],
  },
  {
    category: 'Data', icon: '🗄️',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'SQL', level: 80 },
      { name: 'CassandraDB', level: 70 },
      { name: 'Microsoft SQL Server', level: 65 },
      { name: 'PL/SQL', level: 65 },
      { name: 'Elasticsearch / OpenSearch', level: 50 },
    ],
  },
  {
    category: 'Cloud & Tooling', icon: '☁️',
    skills: [
      { name: 'Agile Development', level: 100 },
      { name: 'Atlassian Suite', level: 75 },
      { name: 'AWS', level: 60 },
      { name: 'Google Cloud Platform', level: 60 },
      { name: 'Chatbot Development (Dialogflow)', level: 50 },
    ],
  },
  {
    category: 'Languages', icon: '🧩',
    skills: [
      { name: 'JavaScript / TypeScript', level: 100 },
      { name: 'Java / Android', level: 55 },
      { name: 'C#', level: 50 },
      { name: 'C++', level: 40 },
      { name: 'Python', level: 40 },
    ],
  },
  {
    category: 'Game Development (Hobby)', icon: '🎮',
    skills: [
      { name: 'Unreal Engine 5', level: 75 },
      { name: 'Game Design', level: 65 },
      { name: 'GameMaker', level: 60 },
      { name: 'Unity3D', level: 50 },
      { name: 'Godot', level: 45 },
    ],
  },
  {
    category: 'Leadership', icon: '🤝',
    skills: [
      { name: 'Team Management', level: 75 },
      { name: 'Project Management', level: 70 },
      { name: 'Business Analysis', level: 65 },
    ],
  },
]

const tags = [
  'Node.js', 'Angular', 'NestJS', 'Express.js', 'System Architecture', 'AWS',
  'Team Management', 'GraphQL', 'PostgreSQL', 'Unreal Engine', 'Chatbot Development',
  '.NET Framework', 'Elasticsearch', 'Godot', 'C++', 'Game Engines',
  'Agile Development', 'Full-Stack Development', 'Microservices', 'Google Cloud Platform',
  'REST APIs', 'MongoDB', 'Game Design', 'Game Development', 'Atlassian Suite',
  'Unreal Engine 4', 'CassandraDB', 'Back-End Web Development', 'JavaScript', 'C#',
  'Unity3D', 'GameMaker', 'LaTeX', 'Android Studio', 'PL/SQL', 'Apache Kafka', 'Android Development',
  'Python', 'SQL', 'HTML5', 'Project Management', 'Microsoft Office',
  'Microsoft SQL Server', 'Business Analysis', 'Android SDK', 'Ionic Framework',
  'RESTful Services',
]

export default function Skills() {
  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <p className="section-label">// skills</p>
        <h2 className="section-title">Stack & Technologies</h2>
        <p className="section-subtitle">
          Fullstack development with a Node.js core, paired with strong frontend
          experience in Angular and a solid foundation in distributed systems,
          data and cloud platforms.
        </p>
        <div className={styles.groups}>
          {skillGroups.map((group) => (
            <div key={group.category} className={styles.group}>
              <div className={styles.groupHeader}>
                <span className={styles.groupIcon}>{group.icon}</span>
                <h3 className={styles.groupTitle}>{group.category}</h3>
              </div>
              <div className={styles.skillList}>
                {group.skills.map((skill) => (
                  <div key={skill.name} className={styles.skill}>
                    <div className={styles.skillMeta}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPct}>{skill.level}%</span>
                    </div>
                    <div className={styles.bar}>
                      <div className={styles.barFill} style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className={styles.tagsLabel}>Full stack list (ordered by proficiency):</p>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
