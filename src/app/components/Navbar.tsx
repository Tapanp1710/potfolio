"use client";

import { useEffect, useState } from "react";
import "../styles/Navbar.css";

const sections = ["home", "features", "demos", "pricing", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 100;

          if (window.scrollY >= offsetTop) {
            current = section;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">DevStudio</div>

      <div className="nav-links">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={active === section ? "active" : ""}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
}