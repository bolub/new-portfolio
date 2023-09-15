import { useRef } from "react";

import { Box, Flex, chakra, Text } from "@chakra-ui/react";
import { generalPaddingX, maxi } from "../../utils/chakra";
import CustomLink from "../../components/UI/CustomLink";
import { HiChevronLeft } from "react-icons/hi";
import { ProjectImages } from "./components/ProjectImages/ProjectImages";
import { TechnologiesUsed } from "./components/TechnologiesUsed";

export const SingleProjectPage = () => {
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
          <CustomLink href="/blog">
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
            Appliqa
          </chakra.h1>

          <Box w="full" maxWidth="800px" mt="20px">
            <Text fontSize="lg">
              Appliqa is a personal project that helps in tracking job
              application processes (Log interviews and tasks, make notes). It
              was built because I couldn’t keep track of some of the jobs/roles
              I interviewed with.
            </Text>
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
          <ProjectImages />
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
