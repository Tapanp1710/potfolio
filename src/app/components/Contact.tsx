"use client";

import "../styles/Contact.css";
import contact from "../data/contact.json";
import { motion } from "framer-motion"; 

export default function Contact() {

  // ✅ THIS MUST BE INSIDE COMPONENT
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const res = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Message sent!");
      e.target.reset(); // optional: clears form
    } else {
      alert("Failed to send");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Let’s Get In Touch</h1>

          <p>
            Have a project in mind or want to build something amazing?
            Reach out and let’s make it happen.
          </p>

          <div className="contact-cards">
            <div className="contact-card">
              <span>📧</span>
              <div>
                <h4>Email</h4>
                <p>{contact.email}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          className="contact-form"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* ✅ CONNECT FORM HERE */}
          <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Name" required />
            <input name="email" type="email" placeholder="Email" required />
            <textarea name="message" placeholder="Message" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}