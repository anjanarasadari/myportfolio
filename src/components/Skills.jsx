import React from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "SQL", "JavaScript"],
  },
  {
    title: "Web Development",
    skills: ["JavaScript", "Bootstrap", "Angular"],
  },
  {
    title: "Frameworks and Libraries",
    skills: ["Spring Boot", "Spring MVC", "Hibernate", "scikit-learn", "pandas", "seaborn", "Matplotlib"],
  },
  {
    title: "Database Management Systems",
    skills: ["MySQL", "MongoDB", "NoSQL"],
  },
  {
    title: "Cloud and DevOps",
    skills: ["AWS (EC2, Lambda, S3, RDS)", "Docker", "CI/CD", "GitHub"],
  },
  {
    title: "Tools and Environments",
    skills: ["IntelliJ IDEA", "Eclipse", "Visual Studio", "ANACONDA", "Postman", "Git", "Firebase"],
  },
  {
    title: "Build and Deployment",
    skills: ["Maven", "Docker"],
  },
  {
    title: "Testing",
    skills: ["JUnit", "Mockito", "Cucumber", "Unit Testing", "Integration Testing"],
  },
  {
    title: "Project Management",
    skills: ["Agile Methodologies", "Scrum", "Team Leadership", "Mentoring", "Code Reviews"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-5xl mx-auto px-6 py-12 scroll-mt-24"
    >
      <h2 className="text-3xl font-bold text-purple-700 mb-8 border-b-4 border-pink-400 inline-block pb-1">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-gradient-to-tr from-purple-100 to-pink-100 shadow-md rounded-xl p-5 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold text-purple-800 mb-3">
              {category.title}
            </h3>
            <ul className="list-disc list-inside text-gray-800 space-y-1">
              {category.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
