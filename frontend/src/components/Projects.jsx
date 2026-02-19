import { useState } from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "ShopSphere — E-Commerce Platform",
    category: "fullstack",
    tags: ["React", "Node.js", "MongoDB", "Redux", "Stripe"],
    desc: "A full-featured e-commerce platform with real-time inventory, Stripe payments, admin dashboard, and JWT authentication. Supports 10k+ SKUs.",
    gradient: "linear-gradient(135deg, #6366f1, #22d3ee)",
    icon: "🛒",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 2,
    title: "TaskFlow — Project Management App",
    category: "fullstack",
    tags: ["React", "Express", "MongoDB", "Socket.io", "JWT"],
    desc: "Real-time Kanban board with team collaboration, drag-and-drop tasks, live notifications via WebSockets, and role-based access control.",
    gradient: "linear-gradient(135deg, #f472b6, #6366f1)",
    icon: "📋",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 3,
    title: "DevBlog — Full Stack CMS",
    category: "fullstack",
    tags: ["React", "Node.js", "MongoDB", "Cloudinary"],
    desc: "Developer blogging platform with rich-text editor, image uploads to Cloudinary, SEO optimization, comments, and social auth via OAuth 2.0.",
    gradient: "linear-gradient(135deg, #22d3ee, #4ade80)",
    icon: "✍️",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: 4,
    title: "ChatSphere — Real-Time Chat",
    category: "backend",
    tags: ["Node.js", "Socket.io", "MongoDB", "React"],
    desc: "End-to-end encrypted chat app with rooms, private messaging, file sharing, and message history. Supports 500+ concurrent connections.",
    gradient: "linear-gradient(135deg, #4ade80, #22d3ee)",
    icon: "💬",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: 5,
    title: "FinTrack — Budget Dashboard",
    category: "frontend",
    tags: ["React", "Chart.js", "Express", "MongoDB"],
    desc: "Personal finance tracker with interactive charts, budget categories, recurring expenses, CSV import/export, and financial insights.",
    gradient: "linear-gradient(135deg, #fb923c, #f472b6)",
    icon: "📊",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: 6,
    title: "AuthKit — REST API Boilerplate",
    category: "backend",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "Redis"],
    desc: "Production-ready API boilerplate with JWT auth, refresh tokens, Redis caching, rate limiting, Swagger docs, and Docker support.",
    gradient: "linear-gradient(135deg, #6366f1, #f472b6)",
    icon: "🔐",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
];

const filters = ["all", "fullstack", "frontend", "backend"];

export default function Projects() {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of real-world applications built with the MERN stack and modern best practices.
          </p>
        </div>

        <div className="project-filters">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${active === f ? "active" : ""}`}
              onClick={() => setActive(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project) => (
            <div key={project.id} className={`project-card ${project.featured ? "featured" : ""}`}>
              <div className="project-visual" style={{ background: project.gradient }}>
                <span className="project-emoji">{project.icon}</span>
                {project.featured && <span className="featured-badge">⭐ Featured</span>}
              </div>
              <div className="project-body">
                <div className="project-tags">
                  {project.tags.map((t) => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                    Code
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="project-link project-link-live">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}