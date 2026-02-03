import React from "react";
import Animated from "./Animated.jsx";
import "./Skills.css";

const skillCategories = [
  {
    title: "Front-End",
    skills: ["HTML", "CSS", "JavaScript", "Vue.js", "Bootstrap"],
  },
  {
    title: "Back-End",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "Database Normalization (3NF)"],
  },
  {
    title: "Auth & Security",
    skills: ["JWT Authentication", "Role-Based Access Control", "User Sessions"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "npm"],
  },
  {
    title: "Other Skills",
    skills: ["Basic UI/UX Design", "Responsive Design", "API Integration", "Problem Solving"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        {/* Section Header */}
        <Animated>
          <div className="skills-header">
            <p className="skills-pretitle">What I work with</p>
            <h2 className="skills-title">Skills & Technologies</h2>
          </div>
        </Animated>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <Animated key={category.title} delay={index * 100}>
              <div className="skill-card">
                <h3 className="skill-card-title">
                  <span className="skill-dot" />
                  {category.title}
                </h3>
                <div className="skill-tags">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;