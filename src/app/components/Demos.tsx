"use client";

import "../styles/Demos.css";
import demos from "../data/demos.json";
import { motion } from "framer-motion";

export default function Demos() {
  return (
    <section id="demos" className="demos">
      <h2 className="demos-title">Our Work</h2>

      <div className="demos-grid">
        {demos.map((demo, index) => (
          <motion.div
            key={index}
            className="demo-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="image-container">
              <img src={demo.image} alt={demo.title} />
            </div>

            <div className="demo-info">
              <h3>{demo.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}