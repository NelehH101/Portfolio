import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1sz6v6g",   // Replace with your EmailJS Service ID
        "template_b3aac3m",  // Replace with your EmailJS Template ID
        form.current,
        "gGwXri-2Z1achgU4M"    // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setStatus("Failed to send message. Try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="contact-form-card">
      <h3 className="contact-section-title">Send Me a Message</h3>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-row">
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="user_name" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" name="user_email" placeholder="Your Email" required />
          </div>
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea name="message" placeholder="Your Message" rows="5" required />
        </div>

        <button type="submit" className="submit-button">
          Send Message
        </button>

        {status && <p className="toast">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;