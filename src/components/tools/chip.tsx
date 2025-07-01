import React from "react";

import { type ChipProps } from "../..";


const Chip: React.FC<ChipProps> = ({ title }) => {
  return (
    <span
      className="px-3 py-1 bg-background-card rounded-full text-sm
    border border-text-muter"
    >
      {title}
    </span>
  );
};

export default Chip;