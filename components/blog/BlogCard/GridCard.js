// chakra
import { chakra, Flex, HStack, Image, Tag, Text, Box } from "@chakra-ui/react";

// components
import CustomLink from "../../UI/CustomLink";

// dayjs
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);

const GridCard = ({ data }) => {
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

      <Flex mb={2}>
        <Text color="brand.500" fontSize="14px" fontWeight={600} my="auto">
          💻 Programming
        </Text>

        <Text fontSize="4xl" mx={1} mt={1}>
          &bull;
        </Text>

        <Text fontSize="14px" color="gray.600" my="auto">
          {dayjs(data?.published_at).format("Do MMM YYYY")}
        </Text>
      </Flex>

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

export default GridCard;
