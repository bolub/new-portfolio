// chakra
import { chakra, Flex, Text, Box } from "@chakra-ui/react";

// components
import CustomLink from "../../UI/CustomLink";

// dayjs
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { BlogItem } from "../../../contentful";
dayjs.extend(advancedFormat);

const ListCard = ({ data }: { data: BlogItem }) => {
  return (
    <Flex
      mb={5}
      flexDir={{ base: "column", md: "row" }}
      borderTopWidth="1px"
      pt={10}
      pb={10}
      w="100%"
    >
      <Box
        w={{ base: "auto", md: "15%" }}
        mb={{ base: 4, md: 0 }}
        mr={{ md: 32 }}
        fontSize="14px"
      >
        <Text>{dayjs(data.sys.createdAt).format("Do MMM YYYY")}</Text>
      </Box>

      <Box w={{ base: "auto", md: "85%" }}>
        <chakra.h2 fontWeight="bold" fontSize="lg" mb={2}>
          {data.fields.title}
        </chakra.h2>

        {/* tag list */}
        {/* <Box mb={5}>
          <TagList data={data?.tags} />
        </Box> */}

        {/* <chakra.p
          mb={8}
          // color="gray.600"
        >
          {data?.summary}
        </chakra.p> */}

        <Box fontWeight="bold">
          <CustomLink href={`/blog/${data.sys.id}`} fontSize="15px">
            Read more
          </CustomLink>
        </Box>
      </Box>
    </Flex>
  );
};

export default ListCard;
