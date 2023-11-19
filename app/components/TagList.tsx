import { Tag, Wrap } from "@chakra-ui/react";

import { ProjectItem } from "../../contentful/project/project";

export const TagList = ({ tags }: { tags: ProjectItem["fields"]["tags"] }) => {
  return (
    <Wrap display={{ base: "flex", md: "flex" }}>
      {tags?.map((tag) => {
        return (
          <Tag
            key={tag.sys.id}
            cursor="pointer"
            variant="subtle"
            borderRadius="full"
            size="md"
          >
            {tag.fields.name}
          </Tag>
        );
      })}
    </Wrap>
  );
};
