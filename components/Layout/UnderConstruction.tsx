import { Center, Text, chakra, Box } from "@chakra-ui/react";

import { generalPaddingX } from "../../utils/chakra";

import ConstructionIllustration from "../../svg/ConstructionIllustration";
import CustomLink from "../UI/CustomLink";

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

      <Box mt={4}>
        <CustomLink active href="/">
          Back to Home
        </CustomLink>
      </Box>
    </Center>
  );
};

export default UnderConstruction;
