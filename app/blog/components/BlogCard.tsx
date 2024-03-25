import { chakra, Flex, Text, Box } from "@chakra-ui/react";

import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { BlogItem } from "../../../contentful/blog/blog";
import { TagList } from "@/app/components/TagList";
import Link from "next/link";
dayjs.extend(advancedFormat);

export const BlogCard = ({ data }: { data: BlogItem }) => {
  const tags = data.fields?.tags || [];

  return (
    <Flex
      as={Link}
      href={`/blog/${data.fields.slug}`}
      flexDir="column"
      w="full"
      px={{ md: "5" }}
      _hover={{
        bgColor: "brand.600",
        color: "white",
      }}
      transition="all .1s"
      rounded="lg"
    >
      {tags?.length > 0 && (
        <Box mt={5}>
          <TagList tags={tags} />
        </Box>
      )}

      <Box mt={6} mb={2}>
        <Flex>
          <Text my="auto" fontSize="14px">
            {dayjs(data.sys.createdAt).format("Do MMM YYYY")}
          </Text>
        </Flex>
      </Box>

      <chakra.h2 fontWeight={"medium"} fontSize="xl" mb={5}>
        {data.fields.title}
      </chakra.h2>
    </Flex>
  );
};
