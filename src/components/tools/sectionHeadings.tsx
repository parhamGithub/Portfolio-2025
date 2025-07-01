import React from "react";

import { type SectionHeadingsProps } from "../.."


const SectionHeadings: React.FC<SectionHeadingsProps> = ({ number, title }) => {
  return (
    <div className="flex items-center mb-8 gap-6">
      <h2 className="text-3xl font-bold text-text-light flex-shrink-0">
        <span className="text-accent-teal font-mono text-xl mr-2">
          {number}.
        </span>
        {title}
      </h2>
      <div className="flex-grow h-px bg-text-muter ml-4"></div>
    </div>
  );
};

export default SectionHeadings;