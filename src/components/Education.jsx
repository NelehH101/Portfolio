import React from 'react';
import { GraduationCap } from 'lucide-react';
import Animated from './Animated.jsx';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <Animated>
          <div className="education-header">
            <p className="education-pretitle">My background</p>
            <h2 className="education-title">Education</h2>
          </div>
        </Animated>

        <div className="education-grid">
          <Animated delay={200}>
            <div className="education-card">
              <div className="education-card-content">
                {/* Left Side: Icon */}
                <div className="education-icon-wrapper">
                  <GraduationCap size={32} />
                </div>

                {/* Right Side: Info */}
                <div className="education-info">
                  <h3 className="education-degree">Diploma / Certificate in Information Technology</h3>
                  <p className="education-specialization">Software Development</p>
                  
                  <p className="education-description">
                    Comprehensive program covering full-stack web development, database management, 
                    and software engineering principles. Focused on practical, hands-on projects 
                    to build real-world development skills.
                  </p>

                  <div className="education-coursework">
                    <span className="coursework-label">Key Coursework:</span>
                    <div className="course-tags">
                      <span>Database Design & Management</span>
                      <span>Backend Development with Node.js</span>
                      <span>Web Technologies & Frameworks</span>
                      <span>SQL & Data Modeling</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Animated>
        </div>
      </div>
    </section>
  );
};

export default Education;