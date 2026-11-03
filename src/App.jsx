import React from "react";
import "./App.css";
import profile from "./assets/profile.jpg";

const projects = [
  {
    name: "GroceryStore",
    description: "A full-stack grocery shopping web application.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    name: "FocusFlow",
    description: "A productivity dashboard built with React.",
    tech: ["React"],
  },
  {
    name: "PVC Woodworks",
    description: "A website project for a PVC woodworks business.",
    tech: ["React", "Node.js"],
  },
  {
    name: "Quiz Project",
    description: "An interactive quiz application.",
    tech: ["React", "Node.js"],
  },
];

const skillGroups = [
  { title: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React.js"] },
  { title: "Backend", skills: ["Node.js"] },
  { title: "Database", skills: ["SQL", "MongoDB"] },
  { title: "Programming", skills: ["Python", "C++"] },
  {
    title: "DSA & Problem Solving",
    skills: ["Data Structures", "Algorithms", "Problem Solving"],
  },
  { title: "AI Technologies", skills: ["AI", "LLMs"] },
];

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a className="brand" href="#home">AKHIL<span>.</span></a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="subtitle">HELLO, I'M</p>
            <h1>Akhil <span>Gajjela</span></h1>
            <h2>Full Stack Developer</h2>
            <p className="intro">
              I build modern web applications using React, Node.js and
              modern technologies. I am also passionate about DSA, AI
              and problem solving.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn">View Projects</a>
              <a href="mailto:gajjelaakhil39@gmail.com" className="btn outline">
                Contact Me
              </a>
            </div>
          </div>

          <div className="profile-container">
            <img src={profile} alt="Akhil Gajjela" className="profile-pic" />
          </div>
        </section>

        <section className="section" id="about">
          <p className="eyebrow">01 / INTRODUCTION</p>
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I am Akhil Gajjela, a Computer Science student at BITS and an
            aspiring Full Stack Developer from Hyderabad, Telangana. I enjoy
            developing web applications, solving coding problems and exploring
            AI technologies. I continuously work on improving my technical skills.
          </p>
        </section>

        <section className="section" id="projects">
          <p className="eyebrow">02 / SELECTED WORK</p>
          <h2 className="section-title">My Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-number">PROJECT / {String(projects.indexOf(project) + 1).padStart(2, "0")}</div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tech.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <p className="eyebrow">03 / TOOLKIT</p>
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="tags">
                  {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <p className="eyebrow">04 / EDUCATION</p>
          <h2 className="section-title">Education</h2>
          <div className="education-card">
            <div>
              <h3>BSc in Computer Science</h3>
              <p>BITS</p>
              <p className="muted">August 2024 – August 2028</p>
            </div>
            <strong className="cgpa">CGPA: 8.5</strong>
          </div>
        </section>

        <section className="section contact" id="contact">
          <p className="eyebrow">05 / GET IN TOUCH</p>
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-copy">Have an opportunity or project? Feel free to contact me.</p>
          <div className="contact-details">
            <a href="mailto:gajjelaakhil39@gmail.com">gajjelaakhil39@gmail.com</a>
            <a href="tel:+918919013589">+91 8919013589</a>
            <span>Hyderabad, Telangana</span>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Akhil Gajjela</span>
        <span>Designed & built with React</span>
      </footer>
    </div>
  );
}

export default App;
