import "./Footer.css";
import { Github, Linkedin } from "./BrandIcons";

const navLinks = ["Home", "About", "Skills", "Projects", "Contact", "Hire Me"];
const socials = [
  { label: "GitHub", href: "https://github.com/N-Viveharan", icon: <Github size={18} fill="currentColor" /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nagalingam-viveharan-56ba51320/", icon: <Linkedin size={18} fill="currentColor" /> },
];


export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase().replace(" me", "").replace(" ", ""));
    el?.scrollIntoView({ behavior: "smooth" });
  };


  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-bracket">&lt;</span>
              <span>Vive<span style={{ color: "var(--accent-2)" }}>.</span>Dev</span>
              <span className="logo-bracket">/&gt;</span>
            </div>
            <p className="footer-tagline">
              Building performant, scalable web applications<br />
             with modern full-stack technologies and best practices.
            </p>
            <div className="footer-socials">
              {socials.map(({ label, href, icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="social-link" aria-label={label}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-nav">
            <h4 className="footer-nav-title">Navigation</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link}>
                  <button onClick={() => scrollTo(link)} className="footer-link">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-stack">
            <h4 className="footer-nav-title">Tech Stack</h4>
            <div className="stack-list">
              {["MongoDB", "Express.js", "React.js", "Node.js", "Next.js", "TypeScript", "Docker", "Postman","JavaScript","Tailwind CSS","GitHub"].map((t) => (
                <span key={t} className="stack-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} N.Viveharan — All rights reserved.
          </p>
          <p className="footer-built">
            Built with <span style={{ color: "var(--accent-3)" }}>♥</span> Full Stack Developer
          </p>
        </div>
      </div>
    </footer>
  );
}