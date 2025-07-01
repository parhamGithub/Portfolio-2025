import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import Chip from "./chip";

import { type ProjectProps } from "../..";


const Project: React.FC<ProjectProps> = ({ project, isReversed }) => {
  const {
    title,
    image,
    description,
    gitLink,
    techs,
    alt,
    imageExtraClasses,
    url,
  } = project;

  const imgPaddingClass = isReversed ? "pt-10 lg:pt-1" : "";
  const textAlignmentClass = isReversed ? "lg:text-left" : "lg:text-right";
  const justifyClass = isReversed ? "lg:justify-start" : "lg:justify-end";

  const imageContent = (
    <div
      key="project-image"
      className={`lg:w-1/2 mb-8 lg:mb-0 group ${imgPaddingClass}`}
    >
      <img
        src={image}
        alt={alt}
        className={`h-full object-cover rounded-md
            filter grayscale
            transition-all duration-300 ease-in-out
            group-hover:filter-none hover:scale-105
            ${imageExtraClasses || ""}`}
      />
    </div>
  );

  const detailsContent = (
    <div key="project-details" className={`lg:w-1/2 ${textAlignmentClass}`}>
      <p className="text-accent-teal text-sm mb-1">Featured Project</p>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="bg-background-card p-6 rounded-lg shadow-md mb-4">
        <p className="text-text-muted">{description}</p>{" "}
      </div>
      <div
        className={`flex flex-wrap gap-2 font-mono text-sm mb-4 ${justifyClass}`}
      >
        {techs.map((tech, index) => (
          <Chip key={index} title={tech} />
        ))}
      </div>
      {/* GitHub Link */}
      <div className={`flex gap-4 ${justifyClass}`}>
        <a
          href={gitLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GitHub link to ${title} project code`}
        >
          <FaGithub
            size={25}
            className="hover:text-accent-teal transition-colors duration-400"
          />
        </a>
        <Link
          to={url}
          aria-label={`Link to ${title} project`}
          className="hover:text-accent-teal transition-colors duration-400"
        >
          <FaExternalLinkAlt size={25} />
        </Link>
      </div>
    </div>
  );

  const contentOrder = isReversed
    ? [detailsContent, imageContent]
    : [imageContent, detailsContent];

  return (
    <div className="flex flex-col lg:flex-row items-center lg:space-x-8 my-20 md:my-40">
      {contentOrder}
    </div>
  );
};

export default Project;