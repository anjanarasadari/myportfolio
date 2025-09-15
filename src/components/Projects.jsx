import React from "react";

const project = {
  name: "Machine Learning-Based Algorithmic Approach to Detect Dormant Merchants",
  stack: "Python, scikit-learn, pandas, seaborn, Matplotlib, Machine Learning Algorithms",
  description:
    "Research aimed at developing an automated method to accurately identify dormant merchants in the PAYable system. This project involved algorithm development, data analysis, and system integration to improve merchant management and business intelligence.",
  role: "Lead Researcher & Developer",
  type: "Academic Research Project",
  githubLink: "https://github.com/anjanarasadari/Dormant-Merchants-Detection.git", // You can add actual GitHub link if available
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-3xl mx-auto px-6 py-10 scroll-mt-24"
    >
      <h2 className="text-3xl font-bold text-purple-700 mb-6 border-b-4 border-pink-400 inline-block pb-1">
        Featured Research Project
      </h2>
      <div className="bg-pink-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-semibold text-pink-700">
            {project.name}
          </h3>
          <span className="text-xs px-3 py-1 bg-purple-600 bg-opacity-20 text-purple-700 rounded-full">
            {project.type}
          </span>
        </div>
        <p className="text-purple-500 italic mb-2">
          <strong>Tech Stack:</strong> {project.stack}
        </p>
        <p className="text-purple-500 italic mb-3">
          <strong>Role:</strong> {project.role}
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex gap-4">
          
            href={project.githubLink}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
          >
            View Research
          </a>
        </div>
      </div>
    </section>
  );
}
