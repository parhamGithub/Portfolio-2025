import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";


export const Footer: React.FC = () => {
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub
            className="text-2xl text-text-muted hover:text-accent-teal
          transition-colors duration-500"
          />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin
            className="text-2xl text-text-muted hover:text-accent-teal
          transition-colors duration-500"
          />
        </a>
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram
            className="text-2xl text-text-muted hover:text-accent-teal
          transition-colors duration-500"
          />
        </a>
      </div>
      <div className="text-center text-sm mb-2 text-text-muted">
        Designed & Built by Parham Afshari
      </div>
      <div className="text-center text-sm text-text-muted">
        &copy; 2025 All Rights Reserved
      </div>
      <div className="flex justify-center mt-6 pb-8">
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="p-3 rounded-full bg-background-card cursor-pointer
                     text-accent-teal transform hover:-translate-y-1
                     hover:bg-background-darker transition-all duration-300
                     flex items-center justify-center focus:outline-none
                     focus:ring-2"
        >
          <IoIosArrowUp className="text-xl" />
        </button>
      </div>
    </>
  );
};