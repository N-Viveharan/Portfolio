import { useState } from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    category: "fullstack",
    tags: ["Next.js", "Express.js", "MongoDB", "Stripe", "Clerk"],
    desc: "A full-featured e-commerce platform with admin and user dashboards, product management, shopping cart, order processing, secure authentication, and online payments. Includes cloud-based image storage and background tasks.",
    gradient: "linear-gradient(135deg, #6366f1, #22d3ee)",
    icon: "🛒",
    github: "https://github.com/N-Viveharan/myProject7",
    featured: true,
  },
  {
    id: 2,
    title: "Blogger Web Application",
    category: "frontend",
    tags: ["Next.js", "Tailwind CSS", "MongoDB"],
    desc: "A modern blog platform with dynamic routing, server-side rendering for SEO optimization, post creation, editing, and responsive UI design.",
    gradient: "linear-gradient(135deg, #f472b6, #6366f1)",
    icon: "📝",
    github: "https://github.com/N-Viveharan/myProject-4",
    featured: false,
  },
  {
    id: 3,
    title: "CodeFlowExtension",
    category: "ai-tool",
    tags: ["VS Code Extension API", "Chart.js", "TensorFlow Lite", "scikit-learn", "Git"],
    desc: "A developer productivity extension that tracks coding activity, analyzes behavior patterns, and generates visual reports with AI-based insights, dashboards, and team collaboration features.",
    gradient: "linear-gradient(135deg, #22c55e, #6366f1)",
    icon: "💻",
    github: "https://github.com/CodeFlow-SUSL/codeflow-ai-susl",
    featured: true,
  },
  {
    id: 4,
    title: "QuickBlog Web Application",
    category: "fullstack",
    tags: ["Next.js", "Express.js", "MongoDB", "Stripe", "Clerk"],
    desc: "A blog-based platform with user authentication, post creation, editing, and content management features with responsive UI and optimized performance.",
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
    icon: "📰",
    github: "https://github.com/N-Viveharan/myProject-3",
    featured: false,
  }
];

const filters = ["all", "fullstack", "frontend", "backend"];

export default function Projects() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of real-world applications built with modern full-stack technologies.
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
            <div
              key={project.id}
              className={`project-card ${project.featured ? "featured" : ""}`}
            >
              <div
                className="project-visual"
                style={{ background: project.gradient }}
              >
                <span className="project-emoji">{project.icon}</span>
                {project.featured && (
                  <span className="featured-badge">⭐ Featured</span>
                )}
              </div>

              <div className="project-body">
                <div className="project-tags">
                  {project.tags.map((t) => (
                    <span key={t} className="project-tag">
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>

                {/* ✅ GitHub Button with Icon */}
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{ marginRight: "6px", verticalAlign: "middle" }}
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}