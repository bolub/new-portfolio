// chakra
import { chakra, Flex, HStack, Image, Tag, Text, Box } from "@chakra-ui/react";

// components
import CustomLink from "../UI/CustomLink";

const BlogCard = ({ data }) => {
  return (
    <Flex flexDir="column">
      <Image
        src={data?.cover_image?.name}
        height="280px"
        w="100%"
        objectFit="cover"
        borderWidth="1px"
        borderRadius="3px"
        mb={6}
      />

      <HStack mb={4}>
        <Text color="brand.500" fontSize="14px" fontWeight={600}>
          💻 Programming
        </Text>
      </HStack>

      <chakra.h2 fontWeight="bold" fontSize="lg" mb={5}>
        {data?.Title}
      </chakra.h2>

      <Box fontWeight="bold">
        <CustomLink href={`/blog/${data?.id}`} fontSize="15px">
          Read more
        </CustomLink>
      </Box>
    </Flex>
  );
};

export default BlogCard;
