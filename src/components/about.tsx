import React from "react";

import Avatar from "/Parham.jpg";
import SectionHeadings from "./tools/sectionHeadings";


export const About: React.FC = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="pr-10">
            <SectionHeadings number="01" title="About Me" />

            {/* About Me Paragraphs */}
            <p className="text-text-muted text-base mb-4 leading-relaxed">
              Hello! I&apos;m Parham, a developer with a passion for creating
              interactive and responsive web and mobile applications. I&apos;m
              on a journey to master modern development technologies and
              frameworks.
            </p>
            <p className="text-text-muted text-lg mb-4 leading-relaxed">
              My interest in programming began with web development, learning
              the fundamentals of HTML, CSS, and JavaScript. As I progressed, I
              became particularly interested in React.js for its component-based
              architecture and efficiency in building user interfaces.
            </p>
            <p className="text-text-muted text-lg mb-4 leading-relaxed">
              Besides web development, I&apos;ve explored mobile app development
              using Flutter and backend development with Python. I enjoy working
              on personal projects that challenge me and help me grow as a
              developer.
            </p>
            <p className="text-text-muted text-lg leading-relaxed">
              Currently, I&apos;m focusing on building my portfolio with
              personal projects while looking for opportunities to collaborate
              on real-world applications that solve meaningful problems.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            {/* Image */}
            <div className="relative w-64 h-64 group mt-10 md:mt-0">
              <div
                className="absolute w-full h-full rounded border-2 border-accent-teal
                          top-0 left-0 transform -translate-x-4 translate-y-4
                          group-hover:-translate-x-2 group-hover:translate-y-2
                          transition-transform duration-300 ease-in-out"
              ></div>
              <img
                src={Avatar}
                alt="Picture of Parham Afshari"
                className="relative z-2 w-full h-full object-cover rounded-md
                       filter grayscale sepia-70 hue-rotate-90
                       transition-all duration-300 ease-in-out
                       group-hover:filter-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
