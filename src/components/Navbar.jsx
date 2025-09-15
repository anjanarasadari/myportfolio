import React from "react";

function Navbar() {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" }, 
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-800 via-pink-700 to-purple-800 bg-opacity-90 rounded-full shadow-lg z-50">
      <ul className="flex space-x-6 py-3 px-8 text-white font-semibold text-lg cursor-pointer select-none">
        {navItems.map(({ name, href }) => (
          <li key={name}>
            <a
              href={href}
              className="hover:text-pink-400 transition"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({ behavior: "smooth" });
              }}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
