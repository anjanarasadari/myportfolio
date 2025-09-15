import React from "react";

const experiences = [
  {
    company: "PAYable | Colombo, Sri Lanka",
    role: "Senior Software Engineer",
    duration: "March 2025 - Present",
    domain: "FinTech, Payment Gateway",
    description:
      "Leading the design and development of SettleIn property management solution. Architecting REST-based Java applications using Spring Boot and managing AWS deployments. Mentoring team members and driving technological innovation.",
  },
  {
    company: "PAYable | Colombo, Sri Lanka",
    role: "Software Engineer | Associate Software Engineer",
    duration: "March 2021 - March 2025",
    domain: "FinTech, Payment Systems",
    description:
      "Developed critical payment gateway systems including IPG, bulk SMS services, and NFC payment applications. Managed end-to-end project delivery from database design to AWS deployment. Led agile ceremonies and implemented CI/CD pipelines.",
  },
  {
    company: "N-able Pvt Ltd | Colombo, Sri Lanka",
    role: "Associate Software Engineer | Software Engineer Intern",
    duration: "August 2019 - December 2020",
    domain: "Banking, Digital Solutions",
    description:
      "Designed specialized banking architecture for Sampath Bank's corporate users using Spring Boot RESTful services. Integrated KIOSK/ATM systems for digital banking solutions, facilitating high-volume transactions tailored to corporate needs.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative max-w-4xl mx-auto px-6 mb-20 scroll-mt-24"
    >
      <h2 className="text-3xl font-bold text-purple-700 mb-10 border-b-4 border-pink-400 inline-block pb-2">
        Professional Experience
      </h2>
      <div className="relative pl-10">
        {/* Vertical timeline line */}
        <div className="absolute top-0 left-5 w-1 bg-pink-400 h-full"></div>
        {experiences.map((exp, idx) => (
          <div key={idx} className="mb-12 last:mb-0 relative group">
            {/* Circle on timeline */}
            <span className="absolute -left-7 top-3 w-5 h-5 bg-pink-600 rounded-full border-2 border-white transition-transform group-hover:scale-110"></span>
            {/* Content box */}
            <div className="bg-pink-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-pink-700">{exp.company}</h3>
              <p className="text-purple-500 italic text-sm mb-1">
                {exp.role} | {exp.duration}
              </p>
              <p className="text-pink-600 font-semibold mb-2">{exp.domain}</p>
              <p className="text-gray-700 leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Education Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-purple-700 mb-6 border-b-2 border-pink-400 inline-block pb-1">
          Education
        </h3>
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl shadow-md">
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-purple-800">
              MSc. in Computer Science
            </h4>
            <p className="text-purple-600">University of Colombo School of Computing</p>
            <p className="text-gray-600 text-sm">2022 - Present</p>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-purple-800">
              Bachelor of Science in Computer Science
            </h4>
            <p className="text-purple-600">University of Colombo School of Computing</p>
            <p className="text-gray-600 text-sm">2016 - 2020</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-purple-800">Certification</h4>
            <p className="text-purple-600">Comprehensive Master Java Developer</p>
            <p className="text-gray-600 text-sm">Institute of Software Engineering (IJSE)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
