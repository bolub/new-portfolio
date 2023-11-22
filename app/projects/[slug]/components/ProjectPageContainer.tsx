"use client";

import { chakra, Text } from "@chakra-ui/react";
import { ProjectItem } from "@/contentful/project/project";
import { CustomContainer } from "@/app/components/CustomContainer";
import { TechnologiesUsed } from "./TechnologiesUsed";
import { ProjectsAssets } from "./ProjectAssets/ProjectsAssets";
import { Header } from "./Header";

export const ProjectPageContainer = ({ project }: { project: ProjectItem }) => {
  if (!project) return <Text>Project data not available</Text>;

  const projectData = project.fields;

  return (
    <>
      <Header project={projectData} />

      <chakra.main mb="300px">
        <chakra.section
          id="project-images"
          display="flex"
          flexDir="column"
          mt={20}
        >
          <CustomContainer>
            <>
              {projectData.images && projectData.images.length > 0 && (
                <ProjectsAssets images={projectData.images} />
              )}
            </>
          </CustomContainer>
        </chakra.section>

        <chakra.section
          id="project-images"
          display="flex"
          flexDir="column"
          mt={"120px"}
        >
          <CustomContainer>
            <>
              {projectData.technologies &&
                projectData.technologies.length > 0 && (
                  <TechnologiesUsed technologies={projectData.technologies} />
                )}
            </>
          </CustomContainer>
        </chakra.section>
      </chakra.main>
    </>
  );
};
