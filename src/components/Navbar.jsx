import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'More', href: '#highlights' },
  { label: 'Game Dev', href: '#gamedev' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoAccent}>&lt;</span>GGV<span className={styles.logoAccent}>/&gt;</span>
        </a>
        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          {links.map(({ label, href }) => (
            <a key={href} href={href} className={styles.link} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a href="https://www.linkedin.com/in/giovannivicario/" target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>LinkedIn</a>
        </nav>
        <button className={styles.burger} onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
          <span className={menuOpen ? styles.line1Open : ''} />
          <span className={menuOpen ? styles.line2Open : ''} />
          <span className={menuOpen ? styles.line3Open : ''} />
        </button>
      </div>
    </header>
  )
}
