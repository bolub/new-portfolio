// next
import Link from "next/link";

// chakra
import { Center, Text, chakra, Button } from "@chakra-ui/react";

// utils
import { generalPaddingX } from "../../utils/chakra";

// components
import ConstructionIllustration from "../../svg/ConstructionIllustration";

const UnderConstruction = () => {
  return (
    <Center
      height={{ base: "100%", md: "80vh" }}
      flexDir="column"
      py={{ base: 10, md: 6 }}
      textAlign="center"
      px={generalPaddingX}
    >
      <chakra.h1 mb={4} fontWeight={700} fontSize={{ base: "3xl", md: "4xl" }}>
        Under Construction
      </chakra.h1>

      <ConstructionIllustration height={{ base: "200", md: "300" }} />

      <Text mt={10}>
        Hopefully I don't get tired and abandon the page, like really, for now,
        go to home
      </Text>

      <Link href="/">
        <Button mt={4} colorScheme="brand">
          Back to Home
        </Button>
      </Link>
    </Center>
  );
};

export default UnderConstruction;
