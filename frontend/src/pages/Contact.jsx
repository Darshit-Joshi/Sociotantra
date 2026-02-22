import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-page">
      <div className="contact-container">
        {/* Left: Contact Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            We'd love to hear from you. Reach out for support, collaboration, or
            any general queries.
          </p>

          <div className="info-item">
            <span>📍</span>
            <p>
              Sociotantra Global Foundation <br />
              Your Address Here
            </p>
          </div>

          <div className="info-item">
            <span>📞</span>
            <p>+91 XXXXX XXXXX</p>
          </div>

          <div className="info-item">
            <span>✉️</span>
            <p>contact@sociotantra.org</p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="contact-form">
          <form>
            <h3>Contact Form</h3>

            <input type="text" placeholder="Your Name" required />

            <input type="email" placeholder="Your Email" required />

            <textarea rows="5" placeholder="Your Message" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
