import { chakra, Flex, Text, Box, Link as ChakraLink } from "@chakra-ui/react";

import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { BlogItem } from "../../../contentful/blog/blog";
import Link from "next/link";
import Image from "next/image";
dayjs.extend(advancedFormat);

const GridCard = ({ data }: { data: BlogItem }) => {
  return (
    <Flex flexDir="column">
      <Box
        pos="relative"
        borderWidth="1px"
        borderRadius="3px"
        mb={6}
        w="100%"
        height="380px"
      >
        <Image
          src={
            data.fields.cover ||
            "https://res.cloudinary.com/bolub/image/upload/v1623525073/Group_1_1.png"
          }
          alt={data.fields.title}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </Box>

      <Box mb={2}>
        <Flex>
          {/* date created */}
          <Text my="auto" fontSize="14px">
            {dayjs(data.sys.createdAt).format("Do MMM YYYY")}
          </Text>
        </Flex>
      </Box>

      <chakra.h2 fontWeight={"medium"} fontSize="xl" mb={5}>
        {data.fields.title}
      </chakra.h2>

      <Box fontWeight="bold">
        <ChakraLink as={Link} href={`/blog/${data.fields.slug}`}>
          Read more
        </ChakraLink>
      </Box>
    </Flex>
  );
};

export default GridCard;
