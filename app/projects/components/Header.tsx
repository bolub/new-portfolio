"use client";

import { Center, chakra } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Center flexDir="column" textAlign={"center"} maxW="900px" mx="auto">
      <chakra.h2 mt={10} fontWeight={600} fontSize={{ base: "3xl", md: "4xl" }}>
        Some of the projects that has drained my energy
        <br /> over the years 😫...
      </chakra.h2>
    </Center>
  );
};
