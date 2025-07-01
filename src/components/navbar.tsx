import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-10 p-4 bg-opacity-80
    backdrop-filter backdrop-blur-lg"
    >
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <a
            href="https://parhamafshari.com/"
            className="text-accent-teal font-ringtail text-2xl"
          >
            Portfolio
          </a>
        </div>

        {/* Navigation Links and Resume Button */}
        <div className="items-center space-x-6 hidden md:flex">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#about"
                className="text-text-light hover:text-accent-teal transition-colors duration-400 font-bold"
              >
                <span className="text-accent-teal">1.</span> About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-text-light hover:text-accent-teal transition-colors duration-400 font-bold"
              >
                <span className="text-accent-teal">2.</span> Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-text-light hover:text-accent-teal transition-colors duration-400 font-bold"
              >
                <span className="text-accent-teal">3.</span> Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-text-light hover:text-accent-teal transition-colors duration-400 font-bold"
              >
                <span className="text-accent-teal">4.</span> Contact
              </a>
            </li>
          </ul>
          {/* Resume Button */}
          <a
            href="/Parham-Resume.pdf"
            download="Parham-Resume.pdf"
            className="btn-outline-accent"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};
