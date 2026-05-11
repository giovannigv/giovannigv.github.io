import styles from './Projects.module.css'

export default function GameDev() {
  return (
    <section id="gamedev" className={`section ${styles.projects}`}>
      <div className="container">
        <p className="section-label">// hobby</p>
        <h2 className="section-title">Game Development</h2>
        <p className="section-subtitle">
          On the side, I make small indie games. I studied Game Design and Unreal
          Development at EBAC (2023–2024) and ship experimental projects to itch.io
          and Steam — purely for fun and creative practice.
        </p>

        <div className={styles.grid}>
          <div className={`${styles.card} ${styles.highlighted}`}>
            <div className={styles.featuredBadge}>⭐ Released</div>

            <div className={styles.cardTop}>
              <div className={styles.platformBadge} style={{ background: '#1b2838' }}>
                <SteamSmall />
                Steam
              </div>
              <span className={styles.type}>Horror / Survival</span>
            </div>

            <h3 className={styles.title}>ESCAPE: Orphanage</h3>
            <p className={styles.description}>
              Indie horror game built by a 3-person team in Unreal Engine 5.
              The player must escape a haunted orphanage, with psychological horror
              and survival elements in a tense, atmospheric environment.
            </p>

            <div className={styles.tags}>
              {['Unreal Engine 5', 'C++', 'Blueprint', '3-person team', 'Horror'].map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>

            <div className={styles.links}>
              <a
                href="https://store.steampowered.com/app/4461320/ESCAPE_Orphanage/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkPrimary}
              >
                <SteamSmall />
                View on Steam
                <span className={styles.arrow}>↗</span>
              </a>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.platformBadge} style={{ background: '#fa5c5c' }}>
                <ItchSmall />
                itch.io
              </div>
              <span className={styles.type}>Indie / Prototypes</span>
            </div>

            <h3 className={styles.title}>itch.io Projects</h3>
            <p className={styles.description}>
              A collection of small games and prototypes — a sandbox for experimenting
              with mechanics, visual styles and game-dev tooling.
            </p>

            <div className={styles.tags}>
              {['Indie', 'Game Jam', 'Prototypes'].map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>

            <div className={styles.links}>
              <a
                href="https://giovannivic.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkPrimary}
              >
                <ItchSmall />
                View on itch.io
                <span className={styles.arrow}>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SteamSmall() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" style={{ flexShrink: 0 }}>
      <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.711L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.252 0-2.265-1.014-2.265-2.265z" />
    </svg>
  )
}

function ItchSmall() {
  return (
    <svg viewBox="0 0 245.371 220.736" fill="currentColor" width="14" height="14" style={{ flexShrink: 0 }}>
      <path d="M31.99 1.365C21.287 7.72.2 31.945 0 38.298v10.516C0 62.58 12.794 74.099 24.498 74.099c13.194 0 24.487-11.3 24.487-24.494 0 13.194 10.807 24.494 24.005 24.494 13.19 0 23.988-11.3 23.988-24.494 0 13.194 11.298 24.494 24.5 24.494h.02c13.19 0 24.5-11.3 24.5-24.494 0 13.194 10.797 24.494 23.988 24.494 13.198 0 24.005-11.3 24.005-24.494 0 13.194 11.3 24.494 24.5 24.494 11.698 0 24.498-11.52 24.498-25.285V38.298c-.2-6.353-21.287-30.578-31.988-36.933C185.677.845 162.69 0 122.685 0 82.68 0 42.68.845 31.99 1.365zm66.7 135.074c-11.3 1.694-19.998 11.298-19.998 22.598v63.7h88.59v-63.7c0-11.3-8.698-20.904-19.998-22.598H98.69z" />
    </svg>
  )
}
