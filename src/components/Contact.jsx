import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-3xl mx-auto px-6 py-12 scroll-mt-24"
    >
      <h2 className="text-3xl font-bold text-purple-700 mb-8 border-b-4 border-pink-400 inline-block pb-1">
        Get In Touch
      </h2>
      <div className="bg-gradient-to-tr from-black via-purple-950 to-pink-900 text-white p-6 rounded-xl shadow-md space-y-6">
        <p className="text-lg leading-relaxed">
          Interested in collaborating on innovative software solutions or discussing opportunities in 
          Java development and cloud computing? I'm always open to new challenges, partnerships, 
          and meaningful conversations about technology and software engineering.
        </p>
        <div className="space-y-3 text-sm sm:text-base">
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-pink-400" />
            
              href="mailto:anjanarasadari21@gmail.com"
              className="hover:underline"
            >
              anjanarasadari21@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhone className="text-pink-400" />
            <span>+94 70203 21 64</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-pink-400" />
            <span>Matara, Sri Lanka</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaLinkedin className="text-pink-400" />
            
              href="https://www.linkedin.com/in/anjana-rasadari-73536a137/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-pink-500 border-opacity-30">
          <p className="text-sm text-gray-300 italic">
            Currently pursuing MSc. in Computer Science at University of Colombo School of Computing
          </p>
        </div>
      </div>
    </section>
  );
}
