// next
import Link from "next/link";

// chakra
import { Center, Text, chakra, Box } from "@chakra-ui/react";

// utils
import { generalPaddingX } from "../utils/chakra";

// components
import PageNotFoundIllustration from "../svg/PageNotFoundIllustration";
import CustomLink from "./../components//UI/CustomLink";

const Custom404 = () => {
  return (
    <Center
      height={{ base: "100%", md: "80vh" }}
      flexDir="column"
      py={{ base: 10, md: 6 }}
      textAlign="center"
      px={generalPaddingX}
    >
      <chakra.h1 mb={4} fontWeight={700} fontSize={{ base: "3xl", md: "4xl" }}>
        So you got lost, big whoop
      </chakra.h1>

      <PageNotFoundIllustration height={{ base: "200", md: "300" }} />

      <Text mt={10}>
        Don't worry, you'll be fine, just go back to home or something
      </Text>

      <Box mt={4}>
        <CustomLink active href="/">
          Back to Home
        </CustomLink>
      </Box>
    </Center>
  );
};

export default Custom404;
