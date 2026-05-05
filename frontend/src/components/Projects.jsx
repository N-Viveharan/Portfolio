import { useState } from "react";
import { ShoppingCart, FileText, Code, Newspaper } from "lucide-react";
import { Github } from "./BrandIcons";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    category: "fullstack",
    tags: ["Next.js", "Express.js", "MongoDB", "Stripe", "Clerk"],
    desc: "A full-featured e-commerce platform with admin and user dashboards, product management, shopping cart, order processing, secure authentication, and online payments. Includes cloud-based image storage and background tasks.",
    gradient: "linear-gradient(135deg, #6366f1, #22d3ee)",
    icon: <ShoppingCart size={24} />,
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
    icon: <FileText size={24} />,
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
    icon: <Code size={24} />,
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
    icon: <Newspaper size={24} />,
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
                    <Github size={16} style={{ marginRight: "6px", verticalAlign: "middle" }} />
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