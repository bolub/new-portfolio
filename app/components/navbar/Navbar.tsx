"use client";

import { chakra, Text, HStack, Box } from "@chakra-ui/react";

import Link from "next/link";
import NavItems from "../NavItems";
import { CustomContainer } from "../CustomContainer";
import { MobileView } from "./MobileView";

const Navbar = () => {
  return (
    <>
      <chakra.nav borderTop={`4px solid`} borderTopColor="brand.500">
        <CustomContainer
          display="flex"
          mx="auto"
          h="10vh"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box mr={5}>
            <Text
              as={Link}
              href="/"
              cursor="pointer"
              fontWeight={900}
              fontSize="2xl"
            >
              😎
            </Text>
          </Box>

          <HStack
            display={{ base: "none", md: "flex" }}
            overflowX="auto"
            spacing={10}
          >
            <NavItems />
          </HStack>

          <MobileView />
        </CustomContainer>
      </chakra.nav>
    </>
  );
};

export default Navbar;
