import { Box, chakra, Flex, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import { ProjectItem } from "../../../contentful/project/project";
import Link from "next/link";
import { TagList } from "../TagList";
import { routes } from "@/utils/routes";
import dynamic from "next/dynamic";
import { LinkLookAlike } from "@/components/LinkLookAlike";

const NoSSRProjectUrls = dynamic(
  () => import("./ProjectUrls").then((parent) => parent.ProjectUrls),
  { ssr: false }
);

const SingleProject = ({ data }: { data: ProjectItem }) => {
  const boxBgColor = useColorModeValue("gray.400", "gray.700");

  const project = data.fields;
  const projectPageUrl = routes.projects.singleProject(project.slug);

  return (
    <Link href={projectPageUrl}>
      {project.cover_image_url && (
        <Box px="20px" pt="40px" bgColor={boxBgColor} rounded="lg">
          <Box h={{ base: "300px", md: "450px" }} pos="relative" rounded="lg">
            <Image
              src={project.cover_image_url}
              objectFit="contain"
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8lAYAAlABWjQf8LIAAAAASUVORK5CYII="
              alt={project.title}
            />
          </Box>
        </Box>
      )}

      <Box mt={5}>
        <TagList tags={project.tags} />
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
          <NoSSRProjectUrls project={project} />
        </Box>
      </Flex>

      <chakra.p fontSize={"lg"} mt={3} mb={8}>
        {project?.subtitle || project?.description}
      </chakra.p>

      <LinkLookAlike>Read more</LinkLookAlike>
    </Link>
  );
};

export default SingleProject;
