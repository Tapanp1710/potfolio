"use client";

import "../styles/Process.css";
import "../styles/ProcessMoon.css";  
import { motion } from "framer-motion"; 

const steps = [
  {
    title: "Tell Us Your Idea",
    desc: "Share your requirements and vision with us.",
  },
  {
    title: "We Plan & Design",
    desc: "We create a clean and modern design for your website.",
  },
  {
    title: "We Build It",
    desc: "Fast development with high-quality code and performance.",
  },
  {
    title: "Launch & Grow",
    desc: "Your website goes live and starts bringing results.",
  },
];

export default function Process() {
  return (
    <section className="process">
 
      <h2 className="process-title">How It Works</h2>

      <div className="process-grid">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="process-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="step-number">{i + 1}</div>

            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}