// next
import Link from "next/link";

// chakra
import { Center, Text, chakra, Button } from "@chakra-ui/react";

// utils
import { generalPaddingX } from "../utils/chakra";

// components
import PageNotFoundIllustration from "../svg/PageNotFoundIllustration";

const Custom404 = () => {
  return (
    <Center
      height={{ base: "100%", md: "75vh" }}
      flexDir="column"
      py={10}
      textAlign="center"
      px={generalPaddingX}
    >
      <chakra.h1 mb={4} fontWeight={700} fontSize={{ base: "3xl", md: "4xl" }}>
        So you got lost, big whoop
      </chakra.h1>

      <PageNotFoundIllustration />

      <Text mt={10}>
        Don't worry, you'll be fine, just go back to home or something
      </Text>

      <Link href="/">
        <Button mt={4} colorScheme="brand">
          Back to Home
        </Button>
      </Link>
    </Center>
  );
};

export default Custom404;
