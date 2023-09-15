import {
  chakra,
  Center,
  SimpleGrid,
  Box,
  HStack,
  Button,
} from "@chakra-ui/react";
import { generalPaddingX, maxi } from "../../utils/chakra";
import SingleProject from "../../components/projects/SingleProject";
import { useRouter } from "next/router";
import { trpcHelpers } from "../../server/routers/_app";
import { trpc } from "../../utils/trpc";
import { useEffect, useState } from "react";
import { CustomProject } from "../../server/modules/project-service/interface";

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

const Projects = () => {
  const { data } = trpc.project.all.useQuery();
  const [projectsData, setProjectsData] = useState<CustomProject[]>();

  useEffect(() => {
    setProjectsData(data);
  }, [data]);

  const router = useRouter();
  const selectedProjectType = (router.query.tab as string) || "All";

  const handleClick = (selected: string) => {
    router.push(`/projects?tab=${selected}`);
  };

  const filteredProjects = projectsData?.filter((project) => {
    return project.tags.some((tag) => {
      return tag.name.toLowerCase() === selectedProjectType.toLowerCase();
    });
  });

  const projectsList =
    selectedProjectType === "All" ? projectsData : filteredProjects;

  return (
    <>
      <chakra.section id="projects">
        <Box px={generalPaddingX} maxW={maxi} py={{ base: "10" }} mx="auto">
          <Center flexDir="column" textAlign={"center"} maxW="900px" mx="auto">
            <chakra.h2
              mt={10}
              fontWeight={600}
              fontSize={{ base: "3xl", md: "4xl" }}
            >
              Some of the projects that has drained my energy
              <br /> over the years 😫...
            </chakra.h2>
          </Center>

          <HStack
            mx="auto"
            my={{ base: 10, md: 20 }}
            bg="brand.50"
            p={1}
            borderRadius="md"
            spacing={2}
            w="fit-content"
          >
            {projectTypes.map((pj) => {
              const isActive = pj.label === selectedProjectType;

              return (
                <Box key={pj.label}>
                  <Button
                    display={{ md: "none" }}
                    size="sm"
                    onClick={() => {
                      handleClick(pj.label);
                    }}
                    colorScheme="brand"
                    variant={isActive ? "solid" : "ghost"}
                  >
                    {pj.label}
                  </Button>

                  <Button
                    display={{ base: "none", md: "inline-block" }}
                    onClick={() => {
                      handleClick(pj.label);
                    }}
                    colorScheme="brand"
                    variant={isActive ? "solid" : "ghost"}
                  >
                    {pj.label}
                  </Button>
                </Box>
              );
            })}
          </HStack>

          <SimpleGrid spacing={16} columns={{ base: 1, md: 2 }}>
            {projectsList?.map((pd) => {
              return <SingleProject key={pd.id} data={{ ...pd }} />;
            })}
          </SimpleGrid>
        </Box>
      </chakra.section>
    </>
  );
};

export default Projects;

export async function getStaticProps() {
  await trpcHelpers.project.all.prefetch();

  return {
    props: {
      trpcState: trpcHelpers.dehydrate(),
    },
  };
}
