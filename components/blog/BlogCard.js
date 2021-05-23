// chakra
import { chakra, Flex, HStack, Image, Tag, Text, Box } from "@chakra-ui/react";

// components
import CustomLink from "../UI/CustomLink";

const BlogCard = () => {
  return (
    <Flex flexDir="column">
      <Image
        src="https://images.unsplash.com/photo-1621624927461-58dece1cc511?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
        height="280px"
        w="100%"
        objectFit="cover"
        borderRadius="3px"
        mb={6}
      />

      <HStack mb={4}>
        <Text color="brand.500" fontSize="14px" fontWeight={600}>
          💻 Programming
        </Text>
      </HStack>

      <chakra.h2 fontWeight="bold" fontSize="lg" mb={5}>
        Starting up with a React app and Cypress Testing Library
      </chakra.h2>

      <Box fontWeight="bold">
        <CustomLink href="/post" fontSize="15px">
          Read more
        </CustomLink>
      </Box>
    </Flex>
  );
};

export default BlogCard;
