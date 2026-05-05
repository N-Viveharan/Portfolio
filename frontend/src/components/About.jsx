import "./About.css";
import { GraduationCap, MapPin, Globe, Download } from "lucide-react";
import { Github } from "./BrandIcons";

const highlights = [
  { icon: <GraduationCap size={24} />, label: "Education", value: "BSc (Hons) Software Engineering – Undergraduate " },
  { icon: <MapPin size={24} />, label: "Location", value: "Main St, Cheddipalayam, South Batticaloa" },
  { icon: <Globe size={24} />, label: "Focus", value: "Full Stack Development " },
];

const timeline = [
  {
    year: "2026",
    role: "MERN Stack Developer (Student Projects)",
    company: "",
    desc: "Developing full-stack web applications using MongoDB, Express.js, React, and Node.js. Built responsive UIs and RESTful APIs while improving backend performance and scalability.",
  },
  {
    year: "2024-2025",
    role: "Full Stack Development Learning",
    company: "",
    desc: "Started learning the MERN stack, building multiple practice projects including CRUD applications, authentication systems, and API integrations.",
  },

  
  {
    year: "2023",
    role: "Programming Foundations",
    company: "",
    desc: "Began my journey in Software Engineering, learning core programming concepts, web development fundamentals, and database management at university. 🚀",
  },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <span className="section-tag">About Me</span>
            <h2 className="section-title">
              Building the Web,<br />
              <span className="gradient-text">One Stack at a Time</span>
            </h2>
            <p className="about-text">
              I’m a passionate Full-Stack Developer and undergraduate Software Engineering student who enjoys transforming complex problems into elegant, high-performance solutions — from building scalable backends to crafting clean, responsive user interfaces.
            </p>
            <p className="about-text">
              As a student developer, I focus on writing clean code, learning modern technologies, 
              and building real-world applications that improve my problem-solving skills and create meaningful user experiences. 🚀
            </p>

            <div className="highlights-grid">
              {highlights.map(({ icon, label, value }) => {
                const isLocation = label === "Location";
                const locationLink =
                  "https://www.google.com/maps?q=Main+Street+Cheddipalayam+South+Batticaloa";

                const card = (
                  <div className="highlight-card">
                    <span className="highlight-icon">{icon}</span>
                    <div>
                      <span className="highlight-label">{label}</span>
                      <span className="highlight-value">{value}</span>
                    </div>
                  </div>
                );

                return isLocation ? (
                  <a
                    key={label}
                    className="highlight-card highlight-link"
                    href={locationLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="highlight-icon">{icon}</span>
                    <div>
                      <span className="highlight-label">{label}</span>
                      <span className="highlight-value">{value}</span>
                    </div>
                  </a>
                ) : (
                  <div key={label} className="highlight-card">
                    <span className="highlight-icon">{icon}</span>
                    <div>
                      <span className="highlight-label">{label}</span>
                      <span className="highlight-value">{value}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="about-actions">
              <a href="/resume.pdf" className="btn-primary" download>
                <Download size={16} strokeWidth={2.5} />
                Download CV
              </a>
              <a href="https://github.com/N-Viveharan" target="_blank" rel="noreferrer" className="btn-secondary">
                <Github size={16} fill="currentColor" />
                GitHub
              </a>
            </div>
          </div>

          <div className="about-right">
            <span className="section-tag">Experience</span>
            <h3 className="timeline-heading">My Journey</h3>
            <div className="timeline">
              {timeline.map((item, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="timeline-dot"></div>
                    {i < timeline.length - 1 && <div className="timeline-line"></div>}
                  </div>
                  <div className="timeline-body">
                    <span className="timeline-year">{item.year}</span>
                    <h4 className="timeline-role">{item.role}</h4>
                    <span className="timeline-company">{item.company}</span>
                    <p className="timeline-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}