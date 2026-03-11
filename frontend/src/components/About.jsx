import "./About.css";

const highlights = [
  { icon: "🎓", label: "Education", value: "B.Sc. Computer Science" },
  { icon: "📍", label: "Location", value: "Main St, Cheddipalayam, South Batticaloa" },
  { icon: "💼", label: "Experience", value: "3+ Years Full Stack" },
  { icon: "🌐", label: "Focus", value: "MERN Stack Development" },
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
              I'm a passionate Full Stack Developer and undergraduate Software Engineering student specializing in the MERN ecosystem. 
              I love transforming complex problems into elegant, performant solutions — whether it's building scalable Node.
              js backends or crafting clean, responsive React interfaces.
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
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                Download CV
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="btn-secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
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