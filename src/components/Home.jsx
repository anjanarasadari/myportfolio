import React from "react";
import profileImg from "../images/profileImg.jpeg";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-white px-6 bg-gradient-to-b from-purple-900 via-pink-900 to-black"
    >
      <img
        src={profileImg}
        alt="Anjaana Rasadari"
        className="w-40 h-40 rounded-full border-4 border-pink-500 shadow-lg object-cover mb-6"
      />
      <h1 className="text-5xl font-extrabold mb-4">Hey, I'm Anjaana Rasadari</h1>
      <p className="max-w-3xl text-center text-lg mb-6">
        A highly motivated and professional Software Engineer with over 5 years of experience 
        specializing in Java frameworks and cloud computing. Recognized for leading high-impact 
        projects such as the PAYable IPG system and digital banking solutions. Expert in Spring Boot, 
        AWS, and end-to-end project delivery with a passion for building scalable fintech solutions.
      </p>
      <div className="flex space-x-8 text-pink-400 text-xl font-semibold">
        
          href="https://www.linkedin.com/in/anjana-rasadari-73536a137/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-600 transition"
        >
          LinkedIn
        </a>
        <a 
          href="mailto:anjanarasadari21@gmail.com" 
          className="hover:text-pink-600 transition"
        >
          Email
        </a>
        <span className="text-pink-400">+94 70203 21 64</span>
      </div>
    </section>
  );
}

export default Home;
