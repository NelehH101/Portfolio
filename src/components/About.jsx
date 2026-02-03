import React from "react";
import { Code2, Database, Palette, Server } from "lucide-react";
import "./About.css"; // We'll create this file

const highlights = [
  {
    icon: Code2,
    title: "Front-End",
    description: "Building responsive UIs with modern frameworks",
  },
  {
    icon: Server,
    title: "Back-End",
    description: "Creating secure APIs and server logic",
  },
  {
    icon: Database,
    title: "Databases",
    description: "Designing normalized relational schemas",
  },
  {
    icon: Palette,
    title: "UI/UX",
    description: "Crafting clean, user-friendly interfaces",
  },
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Section Header */}
        <div className="about-header fade-in">
          <p className="about-subtitle">Get to know me</p>
          <h2 className="about-title">About Me</h2>
        </div>

        <div className="about-content">
          {/* Text Content */}
          <div className="about-text fade-in-delay-100">
            <p>
              I am an aspiring software and web developer with experience in
              front-end development using HTML, CSS, JavaScript, Vue.js, and
              Bootstrap, as well as back-end development using Node.js, MySQL,
              and JWT authentication.
            </p>
            <p>
              I have worked on multiple academic and personal projects
              including HR systems, eCommerce platforms, and database-driven
              applications. I am comfortable working with APIs, databases, and
              user authentication.
            </p>
            <p>
              I am eager to grow in a professional development environment and
              contribute to meaningful projects while continuing to expand my
              technical expertise.
            </p>
          </div>

          {/* Highlights */}
          <div className="highlights-grid fade-in-delay-200">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="highlight-card">
                  <div className="highlight-icon">
                    <Icon size={24} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;