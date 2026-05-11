import styles from './Contact.module.css'

const contactLinks = [
  {
    icon: 'email',
    label: 'Email',
    value: 'giovanni.vic@hotmail.com',
    href: 'mailto:giovanni.vic@hotmail.com',
    color: '#22c55e',
  },
  {
    icon: 'linkedin',
    label: 'LinkedIn',
    value: '/in/giovannivicario',
    href: 'https://www.linkedin.com/in/giovannivicario/',
    color: '#0077b5',
  },
  {
    icon: 'github',
    label: 'GitHub',
    value: 'github.com/giovannigv',
    href: 'https://github.com/giovannigv',
    color: '#333',
  },
  {
    icon: 'itch',
    label: 'itch.io (hobby)',
    value: 'giovannivic.itch.io',
    href: 'https://giovannivic.itch.io/',
    color: '#fa5c5c',
  },
]

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <p className="section-label">// contact</p>
        <h2 className="section-title">Let's talk</h2>
        <p className="section-subtitle">
          Open to fullstack and backend opportunities, collaborations, or just a
          chat about software (or game dev). Reach out on any of the platforms below.
        </p>

        <div className={styles.cards}>
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div
                className={styles.iconBox}
                style={{ background: `${item.color}20`, borderColor: `${item.color}40` }}
              >
                <ContactIcon type={item.icon} />
              </div>
              <div className={styles.info}>
                <span className={styles.cardLabel}>{item.label}</span>
                <span className={styles.cardValue}>{item.value}</span>
              </div>
              <span className={styles.arrow}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactIcon({ type }) {
  if (type === 'email') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    )
  }
  if (type === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    )
  }
  if (type === 'github') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    )
  }
  if (type === 'itch') {
    return (
      <svg viewBox="0 0 245.371 220.736" fill="currentColor" width="22" height="22">
        <path d="M31.99 1.365C21.287 7.72.2 31.945 0 38.298v10.516C0 62.58 12.794 74.099 24.498 74.099c13.194 0 24.487-11.3 24.487-24.494 0 13.194 10.807 24.494 24.005 24.494 13.19 0 23.988-11.3 23.988-24.494 0 13.194 11.298 24.494 24.5 24.494h.02c13.19 0 24.5-11.3 24.5-24.494 0 13.194 10.797 24.494 23.988 24.494 13.198 0 24.005-11.3 24.005-24.494 0 13.194 11.3 24.494 24.5 24.494 11.698 0 24.498-11.52 24.498-25.285V38.298c-.2-6.353-21.287-30.578-31.988-36.933C185.677.845 162.69 0 122.685 0 82.68 0 42.68.845 31.99 1.365zm66.7 135.074c-11.3 1.694-19.998 11.298-19.998 22.598v63.7h88.59v-63.7c0-11.3-8.698-20.904-19.998-22.598H98.69z" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.711L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0z" />
    </svg>
  )
}