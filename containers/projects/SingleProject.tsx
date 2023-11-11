import {
  Box,
  chakra,
  Wrap,
  Tag,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import CustomLink from "../../components/UI/CustomLink";
import { ProjectItem } from "../../contentful/project/project";
import { ProjectUrls } from "./ProjectUrls";
import { ProjectTags } from "./ProjectTags";

const SingleProject = ({ data }: { data: ProjectItem }) => {
  const boxBgColor = useColorModeValue("brand.100", "gray.700");

  const project = data.fields;

  return (
    <Box>
      {project.cover_image_url && (
        <Box px="20px" pt="20px" bgColor={boxBgColor} rounded="lg">
          <Box h={{ base: "300px", md: "500px" }} pos="relative" rounded="lg">
            <Image
              src={project.cover_image_url}
              objectFit={"contain"}
              layout="fill"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8lAYAAlABWjQf8LIAAAAASUVORK5CYII="
              alt={project.title}
            />
          </Box>
        </Box>
      )}

      <Box mt={5}>
        <ProjectTags tags={project.tags} />
      </Box>

      <Flex mt={5}>
        <chakra.h3
          mt={2}
          fontWeight={"medium"}
          fontSize={{ base: "xl", md: "2xl" }}
        >
          {project.title}
        </chakra.h3>

        <Box ml="auto">
          <ProjectUrls project={project} />
        </Box>
      </Flex>

      <chakra.p fontSize={"lg"} mt={3} mb={8}>
        {project?.subtitle || project?.description}
      </chakra.p>

      <CustomLink href={`/projects/${project.slug}`} active={false}>
        Read more
      </CustomLink>
    </Box>
  );
};

export default SingleProject;
