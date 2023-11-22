"use client";

import SingleProject from "@/app/components/project/SingleProject";
import { ProjectItem } from "@/contentful/project/project";
import {
  SimpleGrid,
  HStack,
  useColorModeValue,
  Center,
  Text,
} from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { ProjectType } from "./ProjectType";

const projectTypes = [
  {
    label: "All",
  },
  {
    label: "Personal",
  },
  {
    label: "Contract",
  },
  {
    label: "Collaboration",
  },
];

export const Projects = ({ projects }: { projects: ProjectItem[] }) => {
  const searchParams = useSearchParams();

  const tabsBgColor = useColorModeValue("brand.50", "gray.900");
  const selectedProjectType = searchParams.get("tab") || "All";

  const filteredProjects = projects?.filter((project) => {
    return project.fields.tags.some((tag) => {
      return (
        tag.fields.name.toLowerCase() === selectedProjectType.toLowerCase()
      );
    });
  });

  const projectsList =
    selectedProjectType === "All" ? projects : filteredProjects;

  return (
    <>
      <HStack
        mx="auto"
        my={{ base: 10, md: 20 }}
        bg={tabsBgColor}
        p={1}
        borderRadius="md"
        spacing={2}
        w="fit-content"
      >
        {projectTypes.map((pj) => {
          return <ProjectType key={pj.label} projectType={pj} />;
        })}
      </HStack>

      <SimpleGrid spacing={16} columns={{ base: 1, md: 2 }}>
        {projectsList?.map((pd) => {
          return <SingleProject key={pd.sys.id} data={{ ...pd }} />;
        })}
      </SimpleGrid>

      {projectsList?.length === 0 && (
        <Center textAlign="center" minH="40vh">
          <Text>
            Hmmmm, server is probably going through maintenance, I definitely
            have projects
          </Text>
        </Center>
      )}
    </>
  );
};
