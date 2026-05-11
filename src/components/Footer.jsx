import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.acc}>&lt;</span>GGV<span className={styles.acc}>/&gt;</span>
        </a>
        <p className={styles.copy}>© {new Date().getFullYear()} Giovanni Vicário — Built with React & Vite</p>
        <div className={styles.links}>
          <a href="https://github.com/giovannigv" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/giovannivicario/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://giovannivic.itch.io/" target="_blank" rel="noopener noreferrer">itch.io</a>
        </div>
      </div>
    </footer>
  )
}