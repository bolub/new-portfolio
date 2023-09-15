import {
  Box,
  chakra,
  Wrap,
  Tag,
  Flex,
  HStack,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import Image from "next/image";
import {
  BsCodeSlash,
  BsBezier,
  BsLayoutTextWindowReverse,
} from "react-icons/bs";
import CustomLink from "../UI/CustomLink";
import { CustomProject } from "../../server/modules/project-service/interface";

const SingleProject = ({ data }: { data: CustomProject }) => {
  return (
    <Box>
      {data.cover_image_url && (
        <Box h={{ base: "300px", md: "500px" }} pos="relative">
          <Image
            src={data.cover_image_url}
            objectFit={"cover"}
            layout="fill"
            // placeholder="blur"
            alt={data?.title}
          />
        </Box>
      )}

      {/* {data.videoUrl && (
        <AspectRatio height={{ base: "300px", md: "500px" }} ratio={1}>
          <VideoPlayer src={data.videoUrl} />
        </AspectRatio>
      )} */}

      <Wrap display={{ base: "flex", md: "flex" }} mt={5}>
        {data.tags?.map((tag) => {
          return (
            <Tag
              key={tag.id}
              cursor="pointer"
              colorScheme="brand"
              variant="subtle"
              borderRadius="full"
              size="md"
            >
              {tag?.name}
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
          {data.title}
        </chakra.h3>

        <HStack ml="auto">
          {data.design_url && (
            <Tooltip label="Design" aria-label="Design">
              <IconButton
                as="a"
                href={data.design_url}
                target="_blank"
                aria-label="Deign"
                colorScheme={"brand"}
                variant="ghost"
              >
                <BsBezier />
              </IconButton>
            </Tooltip>
          )}

          {data.source_code && (
            <Tooltip label="Source Code" aria-label="Source Code">
              <IconButton
                as="a"
                href={data.source_code}
                target="_blank"
                aria-label="Source Code"
                colorScheme={"brand"}
                variant="ghost"
              >
                <BsCodeSlash />
              </IconButton>
            </Tooltip>
          )}

          {data.live_url && (
            <Tooltip label="Live url" aria-label="Live url">
              <IconButton
                as="a"
                href={data.live_url}
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
        {data.subtitle || data.description}
      </chakra.p>

      <CustomLink href={`/projects/${data?.id}`} active>
        Read more
      </CustomLink>
    </Box>
  );
};

export default SingleProject;
