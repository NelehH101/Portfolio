import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import "./Footer.css"; // CSS file for styling

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <a href="#" className="footer-logo">
          NK<span className="footer-accent">.</span>
        </a>

        {/* Copyright */}
        <p className="footer-copyright">
          © {currentYear} Neleh Kelli Heunis. Built with{" "}
          <Heart size={16} className="footer-heart" /> and React
        </p>

        {/* Social Links */}
        <div className="footer-social">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="footer-social-link"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="footer-social-link"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:nelehheunis101@gmail.com"
            aria-label="Email"
            className="footer-social-link"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;