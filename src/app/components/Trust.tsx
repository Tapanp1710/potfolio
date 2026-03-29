"use client";

import "../styles/Trust.css";
import "../styles/TrustImage.css";  // new
import { motion } from "framer-motion";


const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "5 Days", label: "Average Delivery" },
];

const testimonials = [
  {
    text: "The website completely changed how we get clients. Clean, fast, and professional.",
    name: "Startup Founder",
  },
  {
    text: "Super smooth process and amazing design quality. Highly recommended.",
    name: "Business Owner",
  },
];

export default function Trust() {
  return (
    <section className="trust">

      {/* 🔢 STATS */}
      <div className="trust-stats">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            className="stat"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3>{item.number}</h3>
            <p>{item.label}</p>
          </motion.div>
        ))}
      </div>

      {/* 💬 TESTIMONIALS */}
      <div className="testimonials">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="testimonial"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <p>"{t.text}"</p>
            <span>- {t.name}</span>
          </motion.div>
        ))}
      </div>

    </section>
  );
}