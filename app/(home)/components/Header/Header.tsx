"use client";

import { CustomContainer } from "@/app/components/CustomContainer";
import { chakra, Flex } from "@chakra-ui/react";
import { Content } from "./Content";
import { ImageDisplay } from "./ImageDisplay";

const Header = () => {
  return (
    <chakra.header mt={{ md: 24 }} py={{ base: "10", md: 0 }} mb={16}>
      <CustomContainer>
        <Flex flexDir={{ base: "column", md: "row" }}>
          <Content />

          <ImageDisplay />
        </Flex>
      </CustomContainer>
    </chakra.header>
  );
};

export default Header;
