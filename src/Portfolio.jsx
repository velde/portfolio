import React from "react";
import { motion } from "framer-motion";
import "./Portfolio.css"; // Add this file for styles

const projects = [
  {
    title: "Machine Learning Project",
    description: "A classifier model built using Python and scikit-learn.",
    link: "#",
  },
  {
    title: "AWS Cloud-Based App",
    description: "A serverless web application deployed on AWS using Lambda and API Gateway.",
    link: "#",
  },
  {
    title: "Puzzle Solver",
    description: "An algorithmic approach to solving logic puzzles, implemented in Python.",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <header>
        <h1>My Coding Portfolio</h1>
        <p>Showcasing my projects and skills</p>
      </header>
      <section className="projects">
        {projects.map((project, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-button">
              View Project
            </a>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
