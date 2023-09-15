import { useRef } from "react";

import { Box, Flex, chakra, Text } from "@chakra-ui/react";
import { generalPaddingX, maxi } from "../../utils/chakra";
import CustomLink from "../../components/UI/CustomLink";
import { HiChevronLeft } from "react-icons/hi";
import { ProjectImages } from "./components/ProjectImages/ProjectImages";
import { TechnologiesUsed } from "./components/TechnologiesUsed";
import { trpc } from "../../utils/trpc";

export const SingleProjectPage = ({ projectId }: { projectId: string }) => {
  const { data: project } = trpc.project.view.useQuery(
    {
      id: projectId,
    },
    {
      enabled: !!projectId,
    }
  );

  if (!project) return <Text>Project data not available</Text>;

  return (
    <>
      {/* <CustomSeo
        title={ ''}
        description={blogData?.summary || ''}
        imageUrl={blogData?.image_url || ''}
      /> */}

      <chakra.header display="flex" pt={{ base: "10" }} w="100%">
        {/* @ts-ignore */}
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

          <chakra.h1
            mt="60px"
            as="h1"
            fontWeight={700}
            fontSize={{ base: "3xl", md: "4xl" }}
          >
            {project.title}
          </chakra.h1>

          <Box w="full" maxWidth="800px" mt="20px">
            <Text fontSize="lg">{project.description}</Text>
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
          <ProjectImages images={project.images} />
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
          <TechnologiesUsed />
        </chakra.section>
      </chakra.main>
    </>
  );
};
