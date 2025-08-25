import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-purple-500">Souradip Saha</h2>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          <a href="https://github.com/Souradip2003" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-purple-500">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/souradip-saha-30b364279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-purple-500">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/_souradip_14/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-purple-500">
            <FaInstagram />
          </a>
        </div>

        <p className="text-sm text-gray-400 mt-6">
          © 2025 Souradip Saha. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
