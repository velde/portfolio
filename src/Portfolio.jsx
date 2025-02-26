import React from "react";
import { motion } from "framer-motion";

// Creating the missing Card and Button components
const Card = ({ children }) => (
  <div className="bg-gray-900 border-none shadow-md rounded-lg p-4">{children}</div>
);

const CardContent = ({ children }) => <div className="p-2">{children}</div>;

const Button = ({ children, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
  >
    {children}
  </a>
);

const projects = [
  {
    title: "Machine Learning Project",
    description: "A classifier model built using Python and scikit-learn.",
    link: "#", // Update with actual project link
  },
  {
    title: "AWS Cloud-Based App",
    description: "A serverless web application deployed on AWS using Lambda and API Gateway.",
    link: "#", // Update with actual project link
  },
  {
    title: "Puzzle Solver",
    description: "An algorithmic approach to solving logic puzzles, implemented in Python.",
    link: "#", // Update with actual project link
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 flex flex-col items-center">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-100">My Coding Portfolio</h1>
        <p className="text-gray-400 mt-3 text-lg">Showcasing my projects and skills</p>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all"
          >
            <Card>
              <CardContent>
                <h2 className="text-2xl font-semibold text-gray-100">{project.title}</h2>
                <p className="text-gray-400 mt-3">{project.description}</p>
                <Button href={project.link}>View Project</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
