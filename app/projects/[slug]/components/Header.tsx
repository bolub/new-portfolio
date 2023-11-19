import { CustomContainer } from "@/app/components/CustomContainer";
import { TagList } from "@/app/components/TagList";
import { ContentDisplay } from "@/app/components/content-display/ContentDisplay";
import { ProjectUrls } from "@/app/components/project/ProjectUrls";
import { ProjectItem } from "@/contentful/project/project";
import {
  Box,
  chakra,
  Text,
  HStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { HiChevronLeft } from "react-icons/hi";

export const Header = ({ project }: { project: ProjectItem["fields"] }) => {
  return (
    <chakra.header display="flex" pt={{ base: "10" }} w="100%">
      <CustomContainer display="flex" flexDir="column">
        <ChakraLink as={Link} w="fit-content" display="flex" href="/projects">
          <Text my="auto" mr={1} fontSize="md">
            <HiChevronLeft />
          </Text>

          <Text my="auto">Back</Text>
        </ChakraLink>

        <HStack mt="60px" flexWrap="wrap" justifyContent="space-between">
          <chakra.h1
            as="h1"
            fontWeight={700}
            fontSize={{ base: "3xl", md: "4xl" }}
          >
            {project.title}
          </chakra.h1>

          <ProjectUrls project={project} />
        </HStack>

        <Box mt={5}>
          <TagList tags={project.tags} />
        </Box>

        <Box w="full" maxWidth="800px" mt="20px">
          <ContentDisplay data={project.description} />
        </Box>
      </CustomContainer>
    </chakra.header>
  );
};
