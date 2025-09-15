import React from "react";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 max-w-4xl mx-auto text-white bg-gradient-to-b from-black via-purple-900 to-pink-900 rounded-3xl shadow-lg"
    >
      <h2 className="text-4xl font-extrabold mb-8 text-pink-400 border-b-4 border-pink-600 inline-block pb-2">
        About Me
      </h2>
      <p className="text-gray-300 text-lg mb-4 leading-relaxed">
        Hey there! I'm <strong>Anjaana Rasadari Isurundi</strong> — a highly motivated 
        <strong> Senior Software Engineer</strong> with over 5 years of experience 
        specializing in Java frameworks and cloud computing.
      </p>
      <p className="text-gray-300 text-lg mb-4 leading-relaxed">
        I'm recognized for leading high-impact projects such as the <strong>PAYable IPG system</strong> 
        and <strong>digital banking solutions</strong>. I excel in collaborative problem-solving, 
        code quality optimization, and driving technological innovation.
      </p>
      <p className="text-gray-300 text-lg mb-6 leading-relaxed">
        My expertise spans across:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
        <li>Designing and developing <strong>REST-based Java applications</strong> using Spring Boot, Spring MVC, and Hibernate</li>
        <li>Architecting and deploying applications on <strong>AWS services</strong> (EC2, Lambda, S3, RDS)</li>
        <li>Leading <strong>end-to-end project delivery</strong> from database design to cloud deployment</li>
        <li>Implementing <strong>CI/CD pipelines</strong> and automated testing frameworks</li>
        <li>Managing high-volume transaction systems and <strong>payment gateway solutions</strong></li>
      </ul>
      <div className="bg-gradient-to-r from-purple-800 to-pink-800 bg-opacity-30 p-4 rounded-lg mb-6">
        <p className="font-semibold text-pink-300 mb-2">Education & Certification:</p>
        <p><strong>MSc. in Computer Science</strong> - University of Colombo School of Computing (2022-Present)</p>
        <p><strong>BSc. in Computer Science</strong> - University of Colombo School of Computing (2016-2020)</p>
        <p><strong>Certified:</strong> Comprehensive Master Java Developer (IJSE)</p>
      </div>
      <p className="text-gray-300 text-lg mb-6 leading-relaxed">
        What drives me? <strong>Building scalable, secure systems</strong> that solve real-world problems 
        and delivering high-quality software that makes a meaningful impact in the fintech and banking sectors.
      </p>
      <p className="text-gray-300 text-lg mb-6 italic leading-relaxed">
        I thrive in fast-paced environments and enjoy mentoring team members while staying at the forefront 
        of emerging technologies and development best practices.
      </p>
      <p className="text-gray-300 text-lg leading-relaxed">
        Ready to collaborate on innovative software solutions? Let's connect!
      </p>
    </section>
  );
}

export default About;
