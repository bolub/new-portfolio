import React from "react";

import { chakra, Flex, Image, Text, SimpleGrid } from "@chakra-ui/react";

const SectionTechnologies = ({ title, data }) => {
  return (
    <chakra.section id={title} mb={20}>
      {/* Frontend */}
      <chakra.h2 fontWeight="bold" fontSize="lg">
        {title}
      </chakra.h2>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} spacing={0} mt={5}>
        {data?.map((fd) => {
          return (
            <a key={fd?.id} href={fd?.url} target="__blank">
              <Flex
                flexDir="column"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                borderWidth="1px"
                // w="200px"
                h="200px"
                p={8}
                cursor="pointer"
                _hover={{
                  bg: "gray.100",
                }}
                bg="white"
              >
                <Image h="auto" maxW="80px" src={fd?.img_url} />
                <Text mt={2}>{fd?.name}</Text>
              </Flex>
            </a>
          );
        })}
      </SimpleGrid>
    </chakra.section>
  );
};

export default SectionTechnologies;
