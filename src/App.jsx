import { useState } from "react";
import "./App.css";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="logo">
          <span>&lt;</span>Mayank<span>/&gt;</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

      <a className="nav-button" href="#contact">
        Let's Talk
      </a>

        <button
          className="menu-button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

{menuOpen && (
  <div className="mobile-menu">
    <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
    <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
    <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
  </div>
)}

      <main id="home" className="hero">
        <div className="hero-content">
          <div className="status">
            <span className="status-dot"></span>
            Available for opportunities
          </div>

          <p className="intro">Hi, I'm Mayank Chouhan 👋</p>

          <h1>
            Building the
            <span> Future </span>
            with AI.
          </h1>

          <p className="hero-description">
            AI-focused developer building intelligent applications,
            automation tools and modern web experiences with Python,
            FastAPI, React and AI technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Work
              <span>↗</span>
            </a>

            <a href="#contact" className="secondary-button">
              Let's Connect
            </a>
          </div>

          <div className="social-proof">
            <div>
              <strong>03+</strong>
              <span>Projects</span>
            </div>

            <div>
              <strong>AI</strong>
              <span>Focused</span>
            </div>

            <div>
              <strong>∞</strong>
              <span>Learning</span>
            </div>
          </div>
        

          <div className="social-links"><a
           href="https://www.linkedin.com/in/mayank-chouhan-2b318b365/"
           target="_blank"
           rel="noreferrer"
           aria-label="LinkedIn"
           >
             LinkedIn
           </a>

           <a
          href="https://github.com/mayankk-28"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
           >
          GitHub
          </a>

            <a
            href="https://www.instagram.com/pvt.mayank.25/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            >
            Instagram
             </a>
           </div>
        </div>

        <div className="hero-visual">
          <div className="glow glow-one"></div>
          <div className="glow glow-two"></div>

          <div className="orb">
            <div className="orb-core"></div>

            <div className="orbit orbit-one">
              <span className="orbit-dot dot-one"></span>
            </div>

            <div className="orbit orbit-two">
              <span className="orbit-dot dot-two"></span>
            </div>

            <div className="orbit orbit-three">
              <span className="orbit-dot dot-three"></span>
            </div>

            <div className="code-card">
              <span className="code-purple">const</span> developer ={" "}
              <span className="code-blue">"Mayank"</span>;
              <br />
              <br />
              <span className="code-purple">developer</span>.
              <span className="code-green">build</span>(
              <span className="code-blue">"AI"</span>);
            </div>
          </div>
        </div>
      </main>

    <section id="about" className="about-section">
  <div className="about-content">
    <p className="section-label">ABOUT ME</p>

    <h2>
      Building with <span>curiosity.</span>
    </h2>

    <p className="about-text">
      I'm Mayank Chouhan, a CSE student and AI-focused developer
      interested in building intelligent applications, automation
      tools and modern web experiences.
    </p>

    <p className="about-text">
      I enjoy learning by building real projects — from Agentic AI
      systems and Python automation to responsive web applications.
      My current focus is strengthening my skills in AI, Python,
      FastAPI and modern web development.
    </p>

    <div className="about-highlights">
      <div>
        <strong>AI</strong>
        <span>Focused Development</span>
      </div>

      <div>
        <strong>Python</strong>
        <span>Automation & Backend</span>
      </div>

      <div>
        <strong>React</strong>
        <span>Modern Web Apps</span>
      </div>
    </div>
  </div>

  <div className="about-card">
    <div className="about-card-top">
      <span>01</span>
      <span>ABOUT</span>
    </div>

    <div className="about-code">
      <span className="code-purple">const</span>{" "}
      <span className="code-blue">developer</span> = {"{"}
      <br />
      &nbsp;&nbsp;name: <span className="code-green">"Mayank"</span>,
      <br />
      &nbsp;&nbsp;focus: <span className="code-green">"AI"</span>,
      <br />
      &nbsp;&nbsp;learning: <span className="code-green">true</span>,
      <br />
      &nbsp;&nbsp;building: <span className="code-green">"always"</span>
      <br />
      {"}"};
    </div>
  </div>
</section>

<section id="skills" className="skills-section">
  <div className="section-heading">
    <p className="section-label">SKILLS</p>

    <h2>
      Tools I <span>build with.</span>
    </h2>

    <p>
      Technologies and tools I'm currently using to build AI systems,
      backend services and modern web applications.
    </p>
  </div>

  <div className="skills-grid">

    <div className="skill-card">
      <div className="skill-number">01</div>
      <h3>AI & Automation</h3>
      <p>
        Building intelligent workflows, AI agents and automation systems
        using APIs and modern AI tools.
      </p>

      <div className="skill-tags">
        <span>AI Agents</span>
        <span>LLM APIs</span>
        <span>Automation</span>
      </div>
    </div>

    <div className="skill-card">
      <div className="skill-number">02</div>
      <h3>Python & Backend</h3>
      <p>
        Developing backend services, APIs and automation tools with Python
        and FastAPI.
      </p>

      <div className="skill-tags">
        <span>Python</span>
        <span>FastAPI</span>
        <span>REST APIs</span>
      </div>
    </div>

    <div className="skill-card">
      <div className="skill-number">03</div>
      <h3>Frontend</h3>
      <p>
        Creating responsive and modern interfaces with React, HTML and CSS.
      </p>

      <div className="skill-tags">
        <span>React</span>
        <span>HTML</span>
        <span>CSS</span>
      </div>
    </div>

    <div className="skill-card">
      <div className="skill-number">04</div>
      <h3>Developer Tools</h3>
      <p>
        Using Git, GitHub and developer workflows to manage and improve
        projects.
      </p>

      <div className="skill-tags">
        <span>Git</span>
        <span>GitHub</span>
        <span>VS Code</span>
      </div>
    </div>

  </div>
</section>

  <section id="projects" className="projects-section">
  <div className="section-heading">
    <p className="section-label">PROJECTS</p>

    <h2>
      Things I've <span>built.</span>
    </h2>

    <p>
      A collection of projects where I experiment, learn and turn ideas
      into working products.
    </p>
  </div>

  <div className="projects-grid">

    <div className="project-card">
      <div className="project-top">
        <span className="project-number">01</span>
        <span className="project-status live">LIVE</span>
      </div>

      <div className="project-icon">⌘</div>

      <h3>Agentic AI</h3>

      <p>
        An AI-powered agent system that understands user requests,
        selects the right tools and performs tasks automatically.
      </p>

      <div className="project-tags">
        <span>Python</span>
        <span>FastAPI</span>
        <span>AI</span>
        <span>REST API</span>
      </div>

          <div className="project-links">
        <a
          href="https://github.com/mayankk-28/agentic-ai-learning"
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          GitHub <span>↗</span>
        </a>

        <a
          href="https://agentic-ai-learning.onrender.com/docs"
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          Live Demo <span>↗</span>
        </a>
      </div>
      
    </div>


    <div className="project-card">
      <div className="project-top">
        <span className="project-number">02</span>
        <span className="project-status live">LIVE</span>
      </div>

      <div className="project-icon">◈</div>

      <h3>Capacity Connect</h3>

      <p>
        A platform connecting trainees and trainers with dashboards,
        progress tracking and digital certificates.
      </p>

      <div className="project-tags">
        <span>React</span>
        <span>Firebase</span>
        <span>JavaScript</span>
        <span>jsPDF</span>
      </div>

      <a href="https://github.com/mayankk-28/capacity-connect.git" className="project-link">
        View Project <span>↗</span>
      </a>
    </div>


    <div className="project-card">
      <div className="project-top">
        <span className="project-number">03</span>
        <span className="project-status live">LIVE</span>
      </div>

      <div className="project-icon">⌁</div>

      <h3>Python Automation Toolkit</h3>

      <p>
        A collection of practical Python automation tools designed to
        simplify repetitive tasks and improve everyday workflows.
      </p>

      <div className="project-tags">
        <span>Python</span>
        <span>Automation</span>
        <span>CLI</span>
        <span>Git</span>
      </div>

    <a
      href="https://github.com/mayankk-28/python-automation-toolkit"
      target="_blank"
      rel="noreferrer"
      className="project-link"
      >
      View Project <span>↗</span>
    </a>
  </div>


    <div className="project-card upcoming-project">
      <div className="project-top">
        <span className="project-number">04</span>
        <span className="project-status">BUILDING</span>
      </div>

      <div className="project-icon">＋</div>

      <h3>Next AI Project</h3>

      <p>
        Currently exploring a new project combining AI, automation and
        real-world problem solving.
      </p>

      <div className="project-tags">
        <span>AI</span>
        <span>Python</span>
        <span>Automation</span>
      </div>

      <div className="project-status-text">
        Coming soon
      </div>
     </div>

  </div>
</section>

<section id="contact" className="contact-section">
  <div className="contact-content">
    <p className="section-label">CONTACT</p>

    <h2>
      Let's build something <span>great.</span>
    </h2>

    <p>
      Have an idea, project or opportunity? I'd love to hear about it
      and explore what we can build together.
    </p>

    <a
      href="mayankchouhan9000@gmail.com"
      className="contact-button"
    >
      Get in touch <span>↗</span>
    </a>
  </div>

  <div className="contact-card">
    <span className="contact-card-label">CURRENTLY</span>

    <h3>Open to opportunities</h3>

    <p>
      AI • Python • Backend • Web Development
    </p>

    <div className="contact-line"></div>

    <span className="contact-location">
      India · Available for remote work
    </span>
  </div>
</section>

      <section className="tech-strip">
        <span>PYTHON</span>
        <span>FASTAPI</span>
        <span>REACT</span>
        <span>JAVASCRIPT</span>
        <span>AI / LLM</span>
        <span>GIT</span>
      </section>

    <footer className="footer">
      <div className="footer-left">
       <span className="footer-logo">&lt;Mayank/&gt;</span>
       <p>Building with curiosity, one project at a time.</p>
      </div>

      <div className="footer-right">
       <a href="#home">Back to top ↑</a>
       <span>© 2026 Mayank Chouhan</span>
      </div>
     </footer>

   </div>
   
  );
}

export default App;