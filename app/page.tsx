const services = [
  ["01", "Brand Strategy", "Positioning, direction and systems built around the idea."],
  ["02", "Branding", "Visual identities with clarity, character and longevity."],
  ["03", "Digital Design", "Digital experiences designed to feel considered at every level."],
  ["04", "Campaigns", "Creative concepts that turn a message into a memorable presence."],
];

const work = [
  { n: "01", title: "Identity / Digital", meta: "Selected project" },
  { n: "02", title: "Campaign / Direction", meta: "Selected project" },
  { n: "03", title: "Brand System / Print", meta: "Selected project" },
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="wordmark" href="#">RISE<span>®</span></a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
        </div>
        <a className="glass-button nav-cta" href="#start">Start a project <span>↗</span></a>
      </nav>

      <section className="hero">
        <div className="hero-orbit" aria-hidden="true" />
        <p className="eyebrow">Independent creative studio · Tunisia / Worldwide</p>
        <h1>Ideas<br /><em>with direction.</em></h1>
        <div className="hero-bottom">
          <p>Strategy, identity and digital experiences for brands ready to move forward.</p>
          <a className="circle-arrow" href="#work" aria-label="Explore work">↓</a>
        </div>
      </section>

      <section className="intro section">
        <div className="section-label">/ 00 — Studio</div>
        <div className="intro-copy">
          <p className="display">We turn ambitious ideas into <span>clear, distinctive</span> brand experiences.</p>
          <p className="muted">Rise Studio combines strategic thinking with precise visual design — creating identities, campaigns and digital experiences with purpose.</p>
        </div>
      </section>

      <section id="work" className="section">
        <div className="section-head">
          <div className="section-label">/ 01 — Selected work</div>
          <span className="muted">A growing archive</span>
        </div>
        <div className="work-grid">
          {work.map((item) => (
            <article className="work-card" key={item.n}>
              <div className="work-art">
                <span>{item.n}</span>
                <div className="art-glow" />
              </div>
              <div className="card-meta">
                <div><strong>{item.title}</strong><small>{item.meta}</small></div>
                <span>↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="section services">
        <div className="section-label">/ 02 — Services</div>
        <div className="service-list">
          {services.map(([n, title, desc]) => (
            <div className="service-row" key={n}>
              <span className="service-no">{n}</span>
              <h2>{title}</h2>
              <p>{desc}</p>
              <span className="service-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="manifesto section">
        <div className="section-label">/ 03 — Manifesto</div>
        <h2>Good design is not decoration.<br /><span>It is direction.</span></h2>
        <p>We believe the strongest creative work starts with a clear idea, a sharp point of view and the discipline to make every detail count.</p>
      </section>

      <section id="start" className="start section">
        <div className="start-glow" aria-hidden="true" />
        <p className="eyebrow">Have something worth building?</p>
        <h2>Let’s give it<br /><em>direction.</em></h2>
        <a className="glass-button large" href="mailto:hello@risestudio.tn">Start a project <span>↗</span></a>
      </section>

      <footer>
        <div className="wordmark">RISE<span>®</span></div>
        <p>Creative studio for brands with ambition.</p>
        <span>© {new Date().getFullYear()} Rise Studio</span>
      </footer>
    </main>
  );
}
