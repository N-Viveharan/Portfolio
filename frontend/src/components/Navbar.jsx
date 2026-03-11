import { useState, useEffect } from "react";
import "./Navbar.css";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
  { id: "hire", label: "Hire Me" },
];

export default function Navbar({ darkMode, setDarkMode, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollTo("home")}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">Vive<span className="logo-dot">.</span>Dev</span>
          <span className="logo-bracket">/&gt;</span>
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <button
                className={`nav-link ${activeSection === id ? "active" : ""}`}
                onClick={() => scrollTo(id)}
              >
                {label}
                {id === "hire" && <span className="hire-badge">✦</span>}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            <span className="toggle-track">
              <span className="toggle-thumb">
                {darkMode ? "🌙" : "☀️"}
              </span>
            </span>
          </button>

          <button
            className={`menu-btn ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}