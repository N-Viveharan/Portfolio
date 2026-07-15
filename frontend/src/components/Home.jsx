import "./Home.css";
import profilePic from "../assets/profile_new.jpg";
import { ArrowRight, MessageSquare } from "lucide-react";
const techBadges = ["MERN Stack", "Next.js", "React Native", "TypeScript", "Tailwind CSS"];

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
            Hi, I'm <span className="gradient-text">Viveharan</span>
            <br />
            <span className="home-title-sub">Full Stack Developer</span>
          </h1>

          <p className="home-desc">
            Passionate Full-Stack Developer with hands-on experience in building scalable web applications using modern technologies. I focus on responsive design, secure APIs, and delivering efficient <em>full-stack solutions.</em>
          </p>

          <div className="home-badges">
            {techBadges.map((t) => (
              <span key={t} className="tech-badge">{t}</span>
            ))}
          </div>

          <div className="home-actions">
            <button className="btn-primary" onClick={() => scrollTo("projects")}>
              <span>View Projects</span>
              <ArrowRight size={16} strokeWidth={2.5} />
            </button>
            <button className="btn-secondary" onClick={() => scrollTo("contact")}>
              <MessageSquare size={16} strokeWidth={2} />
              Let's Talk
            </button>
          </div>

          <div className="home-stats">
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>

        <div className="home-visual">
          <div className="avatar-wrapper">
            <div className="avatar-ring avatar-ring-1"></div>
            <div className="avatar-ring avatar-ring-2"></div>
            
            <div className="avatar-image-container">
              <img src={profilePic} alt="Profile" className="avatar-img" />
              <div className="avatar-glow"></div>
            </div>
            
            <div className="floating-chip chip-1">
              <span>⚡</span> Next.js
            </div>
            <div className="floating-chip chip-2">
              <span>📱</span> React Native
            </div>
            <div className="floating-chip chip-4">
              <span>🚀</span> MERN Stack
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