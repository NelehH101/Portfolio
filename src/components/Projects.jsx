import React from "react";
import { Layers, ShoppingCart, Database } from "lucide-react";
import Animated from "./Animated";
import "./Projects.css";

const projects = [
  {
    icon: Layers,
    title: "HR Management System",
    subtitle: "Front-End Prototype",
    description:
      "Built a responsive HR system prototype using Vue.js and Bootstrap. Included employee records, role management, and UI components. Focused on usability, clean layouts, and component-based design.",
    technologies: ["Vue.js", "Bootstrap", "JavaScript", "CSS3"],
    gradient: "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(6,182,212,0.2))",
  },
  {
    icon: ShoppingCart,
    title: "Full eCommerce Website",
    subtitle: "Full Stack Application",
    description:
      "Developed a full-featured eCommerce platform with user and admin dashboards. Implemented login, registration, JWT authentication, user profiles, carts, wishlists, orders, product categories, reviews, discounts, and customer service features.",
    technologies: ["Node.js", "MySQL", "REST APIs", "JWT", "Express.js"],
    gradient: "linear-gradient(135deg, rgba(16,185,129,0.2), rgba(20,184,166,0.2))",
  },
  {
    icon: Database,
    title: "Database Design & SQL Projects",
    subtitle: "Database Development",
    description:
      "Designed relational databases following normalization rules up to Third Normal Form (3NF). Created and managed tables using DDL, performed CRUD using DML, and applied access control concepts using DCL.",
    technologies: ["MySQL", "SQL", "Database Design", "3NF", "mysql2"],
    gradient: "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(139,92,246,0.2))",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* Section Header */}
        <Animated>
          <div className="projects-header">
            <p className="projects-pretitle">My work</p>
            <h2 className="projects-title">Featured Projects</h2>
          </div>
        </Animated>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Animated key={project.title} delay={index * 150}>
                <div className="project-card">
                  <div
                    className="project-bg"
                    style={{ background: project.gradient }}
                  />
                  <div className="project-content">
                    <div className="project-inner">
                      <div className="project-icon">
                        <Icon size={28} />
                      </div>
                      <div className="project-info">
                        <div className="project-header">
                          <h3>{project.title}</h3>
                          <p>{project.subtitle}</p>
                        </div>
                        <p className="project-description">{project.description}</p>
                        <div className="project-tech">
                          {project.technologies.map((tech) => (
                            <span key={tech}>{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Animated>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;