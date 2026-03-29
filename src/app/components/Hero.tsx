"use client";

import { motion } from "framer-motion";
import "../styles/Hero.css";
import heroData from "../data/hero.json";
import Background from "./Background";

export default function Hero() {
    return (
        <section id="home" className="hero">
            <Background />

            <div className="hero-content">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Build Stunning Websites That Convert
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    {heroData.tagline}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    Premium websites for modern businesses
                </motion.p>
            </div>
        </section>
    );
}