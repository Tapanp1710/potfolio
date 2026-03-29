"use client";

import "../styles/Features.css";
import features from "../data/features.json";
import { motion } from "framer-motion"; 

export default function Features() {
  return (
    <section id="features" className="features">
   

      <h2 className="features-title">What We Offer</h2>

      <div className="features-grid">
        {features.map((f, index) => (
          <motion.div
            key={index}
            className="feature-box"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="icon">⚡</div>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}