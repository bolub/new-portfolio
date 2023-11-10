import React from "react";

//
import { Wrap, Tag } from "@chakra-ui/react";
import { Tag as TagType } from "@prisma/client";

const TagList = ({ data }: { data: TagType[] }) => {
  return (
    <Wrap mb={5}>
      {data?.map((tag) => {
        return (
          <Tag
            key={tag?.id}
            cursor="pointer"
            colorScheme="brand"
            variant="subtle"
            // bg="brand.50"
            borderRadius="full"
          >
            {tag?.name}
          </Tag>
        );
      })}
    </Wrap>
  );
};

export default TagList;
