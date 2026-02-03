import React from "react";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import Animated from "./Animated";
import "./Hero.css";
import 'animate.css';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* 🎥 Background Video */}
      <video
        className="hero-bg-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/Train Station.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="hero-video-overlay" />

      {/* Background decorations */}
      <div className="hero-bg">
        <div className="circle top-left" />
        <div className="circle bottom-right" />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <Animated>
            <p className="hero-greeting">Hello, I'm</p>
          </Animated>

          <Animated delay={100}>
            <h1 className="hero-name">Neleh Kelli Heunis</h1>
          </Animated>

          <Animated delay={200}>
            <h2 className="hero-title">Aspiring Software & Web Developer</h2>
          </Animated>

          <Animated delay={300}>
            <p className="hero-description">
              I am a motivated and detail-oriented junior developer with hands-on
              experience in front-end and back-end development, database design,
              and full-stack web applications. I enjoy building practical systems
              and continuously improving my technical skills.
            </p>
          </Animated>

          <Animated delay={400}>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-outline">Contact Me</a>
              <a
                href="/CV-Neleh-Heunis.pdf"
                download
                className="btn btn-ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={16} className="btn-icon" />
                Download CV
              </a>
            </div>
          </Animated>

          <Animated delay={500}>
            <div className="hero-social">
              <a href="https://github.com" className="social-link"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/neleh-heunis/" className="social-link"><Linkedin size={20} /></a>
              <a href="mailto:nelehheunis101@gmail.com" className="social-link"><Mail size={20} /></a>
            </div>
          </Animated>
        </div>

        <div className="hero-scroll-indicator animate__animated animate__pulse animate__infinite">
          <a href="#about" className="scroll-link">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;