import "./Skills.css";

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    color: "#6366f1",
    skills: [
      { name: "React.js", level: 95 },
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "HTML5 / CSS3", level: 90 },
      { name: "Redux / Zustand", level: 85 },
      { name: "TypeScript", level: 78 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    color: "#22d3ee",
    skills: [
      { name: "Node.js", level: 93 },
      { name: "Express.js", level: 91 },
      { name: "REST API Design", level: 90 },
      { name: "GraphQL", level: 75 },
      { name: "JWT / Auth", level: 88 },
    ],
  },
  {
    title: "Database",
    icon: "🗄️",
    color: "#4ade80",
    skills: [
      { name: "MongoDB", level: 92 },
      { name: "Mongoose ODM", level: 90 },
      { name: "PostgreSQL", level: 72 },
      { name: "Redis", level: 68 },
      { name: "Firebase", level: 76 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "🛠️",
    color: "#f472b6",
    skills: [
      { name: "Git / GitHub", level: 94 },
      { name: "Docker", level: 73 },
      { name: "AWS (EC2, S3)", level: 70 },
      { name: "CI/CD (GitHub Actions)", level: 74 },
      { name: "Linux / Terminal", level: 82 },
    ],
  },
];

const mernStack = [
  {
    letter: "M",
    name: "MongoDB",
    desc: "NoSQL Database",
    color: "#4ade80",
    icon: "🍃",
  },
  {
    letter: "E",
    name: "Express.js",
    desc: "Backend Framework",
    color: "#6366f1",
    icon: "⚡",
  },
  {
    letter: "R",
    name: "React.js",
    desc: "Frontend Library",
    color: "#38bdf8",
    icon: "⚛️",
  },
  {
    letter: "N",
    name: "Node.js",
    desc: "Runtime Environment",
    color: "#22c55e",
    icon: "🟢",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="skills-header">
          <span className="section-tag">Skills</span>
          <h2 className="section-title">
            My Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="section-subtitle">
            Specialized in the MERN stack with a solid foundation across the full development lifecycle.
          </p>
        </div>

        {/* MERN Spotlight */}
        <div className="mern-spotlight">
          {mernStack.map(({ letter, name, desc, color, icon }) => (
            <div key={letter} className="mern-card" style={{ "--mern-color": color }}>
              <div className="mern-letter">{letter}</div>
              <span className="mern-icon">{icon}</span>
              <h3 className="mern-name">{name}</h3>
              <p className="mern-desc">{desc}</p>
              <div className="mern-bar"></div>
            </div>
          ))}
        </div>

        {/* Skill Categories */}
        <div className="skills-grid">
          {skillCategories.map(({ title, icon, color, skills }) => (
            <div key={title} className="skill-category" style={{ "--cat-color": color }}>
              <div className="category-header">
                <span className="category-icon">{icon}</span>
                <h3 className="category-title">{title}</h3>
              </div>
              <div className="skill-list">
                {skills.map(({ name, level }) => (
                  <div key={name} className="skill-item">
                    <div className="skill-meta">
                      <span className="skill-name">{name}</span>
                      <span className="skill-pct">{level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        style={{ "--fill-width": `${level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}