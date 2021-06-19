import React from "react";

//
import { Wrap, Tag } from "@chakra-ui/react";

const TagList = ({ data }) => {
  return (
    <Wrap mb={5}>
      {data?.map((tag) => {
        return (
          <Tag
            key={tag?.id}
            cursor="pointer"
            colorScheme="brand"
            bg="brand.50"
            borderRadius="sm"
            fontSize="13px"
          >
            {tag?.name}
          </Tag>
        );
      })}
    </Wrap>
  );
};

export default TagList;
