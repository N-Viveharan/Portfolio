import "./HireMe.css";



const reasons = [
  { icon: "⚡", text: "Fast delivery without sacrificing quality" },
  { icon: "📱", text: "Mobile-first, responsive by default" },
  { icon: "🔒", text: "Security-first development practices" },
  { icon: "📦", text: "Clean, documented, maintainable code" },
  { icon: "🔄", text: "Agile process with regular updates" },
  { icon: "🛡️", text: "Post-launch support included" },
];

export default function HireMe() {
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hire" className="hire-section">
      <div className="hire-bg"></div>
      <div className="container">
        {/* HERO */}
        <div className="hire-hero">
          <span className="section-tag">Available Now</span>
          <h2 className="hire-title">
            Ready to Build<br />
            <span className="hire-title-accent">Something Great?</span>
          </h2>
          <p className="hire-desc">
            Whether you need a complete MERN application, a new feature, or a technical partner —
            I bring expertise, dedication, and a bias for shipping real value.
          </p>
          <div className="hire-hero-actions">
            <button className="btn-primary hire-cta-btn" onClick={scrollToContact}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/></svg>
              Get In Touch
            </button>
            <a href="/resume.pdf" download className="btn-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              Download Resume
            </a>
          </div>
        </div>

        

        {/* WHY ME */}
        <div className="why-me">
          <h3 className="why-me-title">Why Work With Me?</h3>
          <div className="reasons-grid">
            {reasons.map(({ icon, text }) => (
              <div key={text} className="reason-item">
                <span className="reason-icon">{icon}</span>
                <span className="reason-text">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="hire-final-cta">
          <div className="cta-card">
            <div className="cta-glow"></div>
            <span className="cta-badge">Let's Build Together</span>
            <h3 className="cta-title">Start a project today</h3>
            <p className="cta-text">
              Fill out the contact form or reach out directly. Let's turn your idea into a
              high-quality, production-ready application.
            </p>
            <div className="cta-actions">
              <button className="btn-primary" onClick={scrollToContact}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                Start a Conversation
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}