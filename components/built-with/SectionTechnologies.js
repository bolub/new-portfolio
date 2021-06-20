import React from "react";

import { chakra, Flex, Image, Text, Wrap } from "@chakra-ui/react";

const SectionTechnologies = ({ title, data }) => {
  return (
    <chakra.section id={title} mb={20}>
      {/* Frontend */}
      <chakra.h2 fontWeight="bold" fontSize="lg">
        {title}
      </chakra.h2>

      <Wrap spacing={8} mt={5}>
        {data?.map((fd) => {
          return (
            <Flex
              flexDir="column"
              justifyContent="center"
              textAlign="center"
              key={fd.id}
            >
              <Image w="60px" h="60px" src={fd?.img_url} />
              <Text>{fd?.name}</Text>
            </Flex>
          );
        })}
      </Wrap>
    </chakra.section>
  );
};

export default SectionTechnologies;
