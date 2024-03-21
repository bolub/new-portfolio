"use client";

import { chakra, Center, SimpleGrid, Button } from "@chakra-ui/react";
import Link from "next/link";
import { ProjectItem } from "@/contentful/project/project";
import { CustomContainer } from "@/app/components/CustomContainer";
import SingleProject from "@/app/components/project/SingleProject";
import { routes } from "@/utils/routes";

export const MyProjects = ({ projects }: { projects: ProjectItem[] }) => {
  return (
    <chakra.section
      id="projects"
      mt={{ base: 28, md: 48 }}
      pt={{ base: 6, md: 0 }}
      display="flex"
      flexDir={"column"}
    >
      <CustomContainer>
        <Center flexDir="column" textAlign={"center"} maxW="900px" mx="auto">
          <chakra.h2
            mt={5}
            fontWeight="bold"
            fontSize={{ base: "3xl", md: "4xl" }}
          >
            My Projects
          </chakra.h2>
        </Center>

        <SimpleGrid
          mt={{ base: 10, md: 20 }}
          spacing={16}
          columns={{ base: 1, md: 2 }}
        >
          {projects?.map((pd) => {
            return <SingleProject key={pd.sys.id} data={pd} />;
          })}
        </SimpleGrid>

        <Link href={routes.projects.home()}>
          <Button
            colorScheme="brand"
            mt={24}
            h="60px"
            mx="auto"
            size="lg"
            variant="outline"
          >
            View All Projects
          </Button>
        </Link>
      </CustomContainer>
    </chakra.section>
  );
};
