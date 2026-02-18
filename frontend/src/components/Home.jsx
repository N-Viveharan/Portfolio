import "./Home.css";

const techBadges = ["MongoDB", "Express.js", "React.js", "Node.js"];

export default function Home() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="home-section">
      <div className="home-bg-grid"></div>
      <div className="home-orb home-orb-1"></div>
      <div className="home-orb home-orb-2"></div>
      <div className="home-orb home-orb-3"></div>

      <div className="container home-container">
        <div className="home-content">
          <div className="home-status">
            <span className="status-dot"></span>
            Available for opportunities
          </div>

          <h1 className="home-title">
            Hi, I'm <span className="gradient-text">Alex Johnson</span>
            <br />
            <span className="home-title-sub">Full Stack MERN Developer</span>
          </h1>

          <p className="home-desc">
            I craft high-performance web applications with MongoDB, Express, React & Node.
            From elegant UIs to robust APIs — I build digital experiences that <em>scale</em>.
          </p>

          <div className="home-badges">
            {techBadges.map((t) => (
              <span key={t} className="tech-badge">{t}</span>
            ))}
          </div>

          <div className="home-actions">
            <button className="btn-primary" onClick={() => scrollTo("projects")}>
              <span>View Projects</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <button className="btn-secondary" onClick={() => scrollTo("contact")}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
              Let's Talk
            </button>
          </div>

          <div className="home-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Exp</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">30+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Clients Served</span>
            </div>
          </div>
        </div>

        <div className="home-visual">
          <div className="avatar-wrapper">
            <div className="avatar-ring avatar-ring-1"></div>
            <div className="avatar-ring avatar-ring-2"></div>
            <div className="avatar-card">
              <div className="avatar-initials">AJ</div>
              <div className="avatar-glow"></div>
            </div>
            <div className="floating-chip chip-1">
              <span>⚡</span> React 18
            </div>
            <div className="floating-chip chip-2">
              <span>🍃</span> MongoDB
            </div>
            <div className="floating-chip chip-3">
              <span>🖧</span> Node.js
            </div>
            <div className="floating-chip chip-4">
              <span>🔥</span> Express
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={() => scrollTo("about")}>
        <span>Scroll</span>
        <div className="scroll-line">
          <div className="scroll-dot"></div>
        </div>
      </div>
    </section>
  );
}