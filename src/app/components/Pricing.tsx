"use client";

import pricing from "../data/pricing.json";
import "../styles/Pricing.css";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <h2 className="pricing-title">Find the Perfect Plan</h2>

      <div className="pricing-grid">
        {pricing.map((plan, index) => (
          <motion.div
            key={index}
            className={`pricing-card ${index === 1 ? "highlight" : ""}`}
            whileHover={{ scale: 1.05 }}
          >
            {index === 1 && <div className="badge">Popular</div>}

            <h3>{plan.name}</h3>
            <h1>{plan.price}</h1>
            <p className="sub">per project</p>

            <ul>
              {plan.features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>

            <button>Get Started</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}