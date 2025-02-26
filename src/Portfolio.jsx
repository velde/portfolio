import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Machine Learning Project",
    description: "A classifier model built using Python and scikit-learn.",
    link: "#",
  },
  {
    title: "Cloud-Based Web App",
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
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">My Coding Portfolio</h1>
        <p className="text-gray-600 mt-2">Showcasing my projects and skills</p>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-md rounded-2xl p-4"
          >
            <Card>
              <CardContent>
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="text-gray-700 mt-2">{project.description}</p>
                <Button className="mt-4" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
