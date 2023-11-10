import { chakra, Flex, Image, Text, Box } from "@chakra-ui/react";

import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { BlogItem } from "../../../contentful";
import CustomLink from "../../../components/UI/CustomLink";
dayjs.extend(advancedFormat);

const GridCard = ({ data }: { data?: BlogItem }) => {
  if (!data) return <></>;

  return (
    <Flex flexDir="column">
      <Image
        src={data?.fields.cover || ""}
        fallbackSrc="https://res.cloudinary.com/bolub/image/upload/v1623525073/Group_1_1.png"
        placeholder="blur"
        height="380px"
        w="100%"
        objectFit="cover"
        borderWidth="1px"
        borderRadius="3px"
        mb={6}
      />

      <Box mb={2}>
        {/* tag list */}
        <Box>{/* <TagList data={data?.tags} /> */}</Box>

        <Flex>
          {/* <Text fontSize="xl" mx={1} mt={1}>
            &bull;
          </Text> */}

          {/* date created */}
          <Text my="auto" fontSize="14px">
            {dayjs(data.sys.createdAt).format("Do MMM YYYY")}
          </Text>
        </Flex>
      </Box>

      <chakra.h2 fontWeight="bold" fontSize="lg" mb={5}>
        {data.fields.title}
      </chakra.h2>

      <Box fontWeight="bold">
        <CustomLink
          href={`/blog/${data.fields.slug}`}
          fontSize="15px"
          active={undefined}
          onClick={undefined}
          display={undefined}
          isExternal={undefined}
        >
          Read more
        </CustomLink>
      </Box>
    </Flex>
  );
};

export default GridCard;
