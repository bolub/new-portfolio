import {
  Box,
  chakra,
  Wrap,
  Tag,
  Flex,
  HStack,
  IconButton,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import {
  BsCodeSlash,
  BsBezier,
  BsLayoutTextWindowReverse,
} from "react-icons/bs";
import CustomLink from "../../components/UI/CustomLink";
import { ProjectItem } from "../../contentful/project/project";

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

      <Wrap display={{ base: "flex", md: "flex" }} mt={5}>
        {project.tags?.map((tag) => {
          return (
            <Tag
              key={tag.sys.id}
              cursor="pointer"
              variant="subtle"
              borderRadius="full"
              size="md"
            >
              {tag.fields.name}
            </Tag>
          );
        })}
      </Wrap>

      <Flex mt={5}>
        <chakra.h3
          mt={2}
          fontWeight={"medium"}
          fontSize={{ base: "xl", md: "2xl" }}
        >
          {project.title}
        </chakra.h3>

        <HStack ml="auto">
          {project?.design_url && (
            <Tooltip label="Design" aria-label="Design">
              <IconButton
                as="a"
                href={project?.design_url}
                target="_blank"
                aria-label="Deign"
                colorScheme={"brand"}
                variant="ghost"
              >
                <BsBezier />
              </IconButton>
            </Tooltip>
          )}

          {project?.source_code && (
            <Tooltip label="Source Code" aria-label="Source Code">
              <IconButton
                as="a"
                href={project?.source_code}
                target="_blank"
                aria-label="Source Code"
                colorScheme={"brand"}
                variant="ghost"
              >
                <BsCodeSlash />
              </IconButton>
            </Tooltip>
          )}

          {project?.live_url && (
            <Tooltip label="Live url" aria-label="Live url">
              <IconButton
                as="a"
                href={project?.live_url}
                target="_blank"
                aria-label="Live url"
                colorScheme={"brand"}
                variant="ghost"
              >
                <BsLayoutTextWindowReverse />
              </IconButton>
            </Tooltip>
          )}
        </HStack>
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
