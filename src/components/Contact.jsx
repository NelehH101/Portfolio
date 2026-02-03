import React, { useState } from "react";
import { Github, Linkedin, Mail, Send, MapPin } from "lucide-react";
import Animated from "./Animated.jsx";
import "./Contact.css"; // We'll define the CSS

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
    username: "@neleh-heunis",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/neleh-heunis/",
    username: "Neleh Kelli Heunis",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:nelehheunis101@gmail.com",
    username: "hello@example.com",
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate async submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setToastMessage("Message sent! Thank you for reaching out.");
    setIsSubmitting(false);
    e.target.reset();

    // Hide toast after 3s
    setTimeout(() => setToastMessage(""), 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Header */}
        <Animated>
          <div className="contact-header">
            <p className="contact-subtitle">Get in touch</p>
            <h2 className="contact-title">Let's Work Together</h2>
            <p className="contact-description">
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, feel free to reach out!
            </p>
          </div>
        </Animated>

        <div className="contact-grid">
          {/* Contact Info */}
          <Animated delay={100}>
            <div>
              <h3 className="contact-section-title">Connect With Me</h3>
              <div className="social-links">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-card"
                    >
                      <div className="social-icon">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="social-label">{link.label}</p>
                        <p className="social-username">{link.username}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
              <div className="contact-availability">
                <MapPin size={20} />
                <span>Available for remote opportunities worldwide</span>
              </div>
            </div>
          </Animated>

          {/* Contact Form */}
          <Animated delay={200}>
            <div className="contact-form-card">
              <h3 className="contact-section-title">Send a Message</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="your@email.com" required />
                  </div>
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" name="subject" placeholder="What's this about?" required />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" rows="5" placeholder="Your message..." required />
                </div>

                <button type="submit" className="submit-button" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : <>Send Message <Send size={16} /></>}
                </button>
              </form>
              {toastMessage && <div className="toast">{toastMessage}</div>}
            </div>
          </Animated>
        </div>
      </div>
    </section>
  );
};

export default Contact;