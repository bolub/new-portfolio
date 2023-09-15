import React from "react";
import { ProjectsCarousel } from "./ProjectsCarousel";

export const ProjectImages = ({ images }: { images: string[] }) => {
  return <ProjectsCarousel images={images} />;
};
