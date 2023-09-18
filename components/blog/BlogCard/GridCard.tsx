// chakra
import { chakra, Flex, Image, Text, Box } from "@chakra-ui/react";

// components
import CustomLink from "../../UI/CustomLink";
import TagList from "../../UI/TagList";

import { readingTime } from "../../../utils/functions";

// dayjs
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { CustomPost } from "../../../server/modules/post-service/interface";
dayjs.extend(advancedFormat);

const GridCard = ({ data }: { data?: CustomPost }) => {
  if (!data) return <></>;

  return (
    <Flex flexDir="column">
      <Image
        src={data?.image_url || ""}
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
            ⏱️ {readingTime(data?.content)} mins read
          </Text>
          <Text fontSize="xl" mx={1} mt={1}>
            &bull;
          </Text>

          {/* date created */}
          <Text my="auto" fontSize="14px">
            {dayjs(data.createdAt).format("Do MMM YYYY")}
          </Text>
        </Flex>
      </Box>

      <chakra.h2 fontWeight="bold" fontSize="lg" mb={5}>
        {data?.title}
      </chakra.h2>

      <Box fontWeight="bold">
        <CustomLink
          href={`/blog/${data?.id}`}
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
