import { HStack, IconButton, Tooltip } from "@chakra-ui/react";
import React from "react";
import {
  BsBezier,
  BsCodeSlash,
  BsLayoutTextWindowReverse,
} from "react-icons/bs";
import { ProjectItem } from "../../contentful/project/project";

export const ProjectUrls = ({
  project,
}: {
  project: ProjectItem["fields"];
}) => {
  return (
    <HStack>
      {project?.design_url && (
        <Tooltip label="Design" aria-label="Design">
          <IconButton
            as="a"
            href={project?.design_url}
            target="_blank"
            aria-label="Deign"
            colorScheme={"brand"}
            variant="ghost"
          >
            <BsBezier />
          </IconButton>
        </Tooltip>
      )}

      {project?.source_code && (
        <Tooltip label="Source Code" aria-label="Source Code">
          <IconButton
            as="a"
            href={project?.source_code}
            target="_blank"
            aria-label="Source Code"
            colorScheme={"brand"}
            variant="ghost"
          >
            <BsCodeSlash />
          </IconButton>
        </Tooltip>
      )}

      {project?.live_url && (
        <Tooltip label="Live url" aria-label="Live url">
          <IconButton
            as="a"
            href={project?.live_url}
            target="_blank"
            aria-label="Live url"
            colorScheme={"brand"}
            variant="ghost"
          >
            <BsLayoutTextWindowReverse />
          </IconButton>
        </Tooltip>
      )}
    </HStack>
  );
};
