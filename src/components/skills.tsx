import React from "react";
import { FaCode, FaMobileAlt } from "react-icons/fa";
import { GoGitBranch } from "react-icons/go";
import Chip from "./tools/chip";
import SectionHeadings from "./tools/sectionHeadings";

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 bg-background-darker">
      <div className="container mx-auto px-4">
        <SectionHeadings number="02" title="Skills & Experiences" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Front-end Card */}
          <div
            className="bg-background-dark px-6 py-12 rounded-lg shadow-lg
          flex flex-col"
          >
            <div className="flex items-center mb-4">
              <FaCode className="text-4xl text-blue-400 mr-4" />
              <h3 className="text-xl font-bold text-accent-teal">Front-end</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <Chip title="HTML" />
              <Chip title="CSS" />
              <Chip title="Bootstrap" />
              <Chip title="Javascript" />
              <Chip title="React.js" />
              <Chip title="Redux" />
              <Chip title="react-router" />
            </div>
          </div>

          {/* Mobile Development Card */}
          <div
            className="bg-background-dark px-6 py-12 rounded-lg shadow-lg
            flex flex-col"
          >
            <div className="flex items-center mb-4">
              <FaMobileAlt className="text-4xl text-green-400 mr-4" />
              <h3 className="text-xl font-bold text-accent-teal">
                Mobile Development
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <Chip title="Flutter" />
              <Chip title="Provider (State Management)" />
            </div>
          </div>

          {/* Other Technologies Card */}
          <div
            className="bg-background-dark px-6 py-12 rounded-lg shadow-lg
          flex flex-col"
          >
            <div className="flex items-center mb-4">
              <GoGitBranch className="text-4xl text-purple-400 mr-4" />
              <h3 className="text-xl font-bold text-accent-teal">
                Other Technologies
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <Chip title="Python" />
              <Chip title="python-telegram-bot" />
              <Chip title="Git" />
              <Chip title="Vite" />
              <Chip title="npm" />
              <Chip title="Linux" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
