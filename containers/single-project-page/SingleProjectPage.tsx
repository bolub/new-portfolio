import { Box, Flex, chakra, Text, HStack } from "@chakra-ui/react";
import { generalPaddingX, maxi } from "../../utils/chakra";
import CustomLink from "../../components/UI/CustomLink";
import { HiChevronLeft } from "react-icons/hi";
import { ProjectImages } from "./components/ProjectImages/ProjectImages";
import { TechnologiesUsed } from "./components/TechnologiesUsed";
import CustomSeo from "../../components/Layout/Seo";
import { ProjectItem } from "../../contentful/project/project";
import { ContentDisplay } from "../blog-page/ContentDisplay";
import { ProjectUrls } from "../projects/ProjectUrls";
import { ProjectTags } from "../projects/ProjectTags";

export const SingleProjectPage = ({ project }: { project: ProjectItem }) => {
  if (!project) return <Text>Project data not available</Text>;

  const projectData = project.fields;

  return (
    <>
      <CustomSeo
        title={projectData.title}
        description={projectData.subtitle}
        imageUrl={projectData.cover_image_url}
      />

      <chakra.header display="flex" pt={{ base: "10" }} w="100%">
        <Flex
          w="100%"
          px={generalPaddingX}
          maxW={maxi}
          mx="auto"
          flexDir="column"
        >
          <CustomLink href="/projects">
            <Text my="auto" mr={1} fontSize="md">
              <HiChevronLeft />
            </Text>

            <Text my="auto">Back</Text>
          </CustomLink>

          <HStack mt="60px" flexWrap="wrap" justifyContent="space-between">
            <chakra.h1
              as="h1"
              fontWeight={700}
              fontSize={{ base: "3xl", md: "4xl" }}
            >
              {projectData.title}
            </chakra.h1>

            <ProjectUrls project={projectData} />
          </HStack>

          <Box mt={5}>
            <ProjectTags tags={projectData.tags} />
          </Box>

          <Box w="full" maxWidth="800px" mt="20px">
            <ContentDisplay data={projectData.description} />
          </Box>
        </Flex>
      </chakra.header>

      <chakra.main mb="300px">
        <chakra.section
          id="project-images"
          display="flex"
          flexDir="column"
          mt={20}
          px={generalPaddingX}
          maxW={maxi}
          mx="auto"
        >
          {projectData.images && projectData.images.length > 0 && (
            <ProjectImages images={projectData.images} />
          )}
        </chakra.section>

        <chakra.section
          id="project-images"
          display="flex"
          flexDir="column"
          mt={"120px"}
          px={generalPaddingX}
          maxW={maxi}
          mx="auto"
        >
          {projectData.technologies && projectData.technologies.length > 0 && (
            <TechnologiesUsed technologies={projectData.technologies} />
          )}
        </chakra.section>
      </chakra.main>
    </>
  );
};
