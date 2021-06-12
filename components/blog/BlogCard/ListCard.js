// chakra
import { chakra, Flex, HStack, Image, Tag, Text, Box } from "@chakra-ui/react";

// components
import CustomLink from "../../UI/CustomLink";

// dayjs
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);

const ListCard = ({ data }) => {
  return (
    <Flex
      mb={5}
      flexDir={{ base: "column", md: "row" }}
      borderTopWidth="1px"
      pt={10}
      pb={10}
    >
      <Box mb={{ base: 4, md: 0 }} mr={{ md: 32 }} fontSize="14px">
        <HStack color="brand.500" fontWeight={600}>
          <Text>💻</Text>
          <Text>Programming</Text>
        </HStack>

        <Text>{dayjs(data?.published_at).format("Do MMM YYYY")}</Text>
      </Box>

      <Box>
        <chakra.h2 fontWeight="bold" fontSize="lg" mb={3}>
          {data?.Title}
        </chakra.h2>

        <chakra.p
          mb={8}
          // color="gray.600"
        >
          {data?.summary}
        </chakra.p>

        <Box fontWeight="bold">
          <CustomLink href={`/blog/${data?.id}`} fontSize="15px">
            Read more
          </CustomLink>
        </Box>
      </Box>
    </Flex>
  );
};

export default ListCard;
