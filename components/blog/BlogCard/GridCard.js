// chakra
import { chakra, Flex, HStack, Image, Tag, Text, Box } from "@chakra-ui/react";

// components
import CustomLink from "../../UI/CustomLink";
import TagList from "../../UI/TagList";

// dayjs
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);

const GridCard = ({ data }) => {
  return (
    <Flex flexDir="column">
      <Image
        src={data?.cover_image?.name}
        fallbackSrc="https://res.cloudinary.com/bolub/image/upload/v1623525073/Group_1_1.png"
        height="280px"
        w="100%"
        objectFit="cover"
        borderWidth="1px"
        borderRadius="3px"
        mb={6}
      />

      <Box mb={2}>
        {/* tag list */}
        <Box>
          <TagList data={data?.tags} />
        </Box>

        <Flex>
          {/* number of mins to finish */}
          <Text my="auto" fontWeight={600} fontSize="14px">
            ⏱️ 5 mins read
          </Text>
          <Text fontSize="xl" mx={1} mt={1}>
            &bull;
          </Text>

          {/* date created */}
          <Text my="auto" fontSize="14px">
            {dayjs(data?.published_at).format("Do MMM YYYY")}
          </Text>
        </Flex>
      </Box>

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
