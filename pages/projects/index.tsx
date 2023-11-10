import {
  chakra,
  Center,
  SimpleGrid,
  Box,
  HStack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { generalPaddingX, maxi } from "../../utils/chakra";
import SingleProject from "../../containers/projects/SingleProject";
import { useRouter } from "next/router";
import { trpcHelpers } from "../../server/routers/_app";
import { getProjects } from "../../contentful/project/project";
import { InferGetStaticPropsType } from "next";

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

const Projects = ({
  allProjects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const selectedProjectType = (router.query.tab as string) || "All";

  const handleClick = (selected: string) => {
    router.push(`/projects?tab=${selected}`);
  };

  const filteredProjects = allProjects?.filter((project) => {
    return project.fields.tags.some((tag) => {
      return (
        tag.fields.name.toLowerCase() === selectedProjectType.toLowerCase()
      );
    });
  });

  const projectsList =
    selectedProjectType === "All" ? allProjects : filteredProjects;

  const tabsBgColor = useColorModeValue("brand.50", "gray.900");

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
              <br /> over the years 😫....
            </chakra.h2>
          </Center>

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
              return <SingleProject key={pd.sys.id} data={{ ...pd }} />;
            })}
          </SimpleGrid>
        </Box>
      </chakra.section>
    </>
  );
};

export default Projects;

export async function getStaticProps() {
  const allProjects = await getProjects();

  return {
    props: {
      trpcState: trpcHelpers.dehydrate(),
      allProjects,
    },
  };
}
