import { useState } from "react";
import "./Contact.css";

const contactInfo = [
  {
    icon: "✉️",
    label: "Email",
    value: "nagalingamviveharan2001@gmail.com",
    href: "nagalingamviveharan2001@gmail.com",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "Nagalingam Viveharan",
    href: "https://www.linkedin.com/in/nagalingam-viveharan-56ba51320/",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/N-Viveharan",
    href: "https://github.com/N-Viveharan",
  },
  
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header">
          <span className="section-tag">Contact</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or want to discuss a role? I'm always open to new opportunities.
          </p>
        </div>

        <div className="contact-grid">
          {/* LEFT INFO */}
          <div className="contact-info">
            <div className="contact-blurb">
              <h3 className="contact-blurb-title">Open to work 🚀</h3>
              <p className="contact-blurb-text">
                Currently available for freelance projects, full-time roles, and consulting.
                Response time is typically within 24 hours.
              </p>
            </div>

            <div className="contact-cards">
              {contactInfo.map(({ icon, label, value, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="contact-card">
                  <span className="contact-card-icon">{icon}</span>
                  <div>
                    <span className="contact-card-label">{label}</span>
                    <span className="contact-card-value">{value}</span>
                  </div>
                  <svg className="contact-card-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="contact-form-wrapper">
            {status === "success" && (
              <div className="form-success">
                <span className="success-icon">✅</span>
                <div>
                  <strong>Message sent!</strong>
                  <p>Thanks for reaching out. I'll get back to you shortly.</p>
                </div>
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry / Job Opportunity"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  rows={5}
                  className="form-input form-textarea"
                />
              </div>

              <button type="submit" className="btn-primary form-submit" disabled={loading}>
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/></svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}