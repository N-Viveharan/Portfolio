import "./HireMe.css";
import { Zap, Smartphone, Lock, Package, RefreshCw, Shield, Send, Download, MessageSquare } from "lucide-react";

const reasons = [
  { icon: <Zap size={24} />, text: "Fast delivery without sacrificing quality" },
  { icon: <Smartphone size={24} />, text: "Mobile-first, responsive by default" },
  { icon: <Lock size={24} />, text: "Security-first development practices" },
  { icon: <Package size={24} />, text: "Clean, documented, maintainable code" },
  { icon: <RefreshCw size={24} />, text: "Agile process with regular updates" },
  { icon: <Shield size={24} />, text: "Post-launch support included" },
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
              <Send size={18} strokeWidth={2.5} />
              Get In Touch
            </button>
            <a href="/resume.pdf" download className="btn-secondary">
              <Download size={16} strokeWidth={2.5} />
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
                <MessageSquare size={16} strokeWidth={2.5} />
                Start a Conversation
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}