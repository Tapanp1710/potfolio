"use client";

import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      {/* LEFT */}
      <div className="footer-left">
        <h3>Freelance Studio</h3>
        <p>Building premium websites that convert.</p>
      </div>

      {/* CENTER */}
      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </div>

      {/* RIGHT */}
      <div className="footer-contact">
        <p>Email</p>
        <span>sathwikareddygade3008@email.com</span>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Freelance Studio. All rights reserved.
      </div>

    </footer>
  );
}