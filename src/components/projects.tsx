import React from "react";

import {
  stickerStoreData,
  articleHandlerData,
  mixYadakData,
} from "../data/projectsData";
import Project from "./tools/project";
import SectionHeadings from "./tools/sectionHeadings";

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeadings number="03" title="Some Things I've Built" />
        <Project project={stickerStoreData} isReversed={false} />
        <Project project={articleHandlerData} isReversed={true} />
        <Project project={mixYadakData} isReversed={false} />
      </div>
    </section>
  );
};
