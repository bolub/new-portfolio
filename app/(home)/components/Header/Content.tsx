import { Box, chakra, Text, HStack, Button } from "@chakra-ui/react";

export const Content = () => {
  return (
    <Box w={{ base: "100%", md: "45%" }} my="auto">
      <chakra.h1
        fontWeight={"700"}
        lineHeight={"70px"}
        fontSize={{ base: "5xl", md: "7xl" }}
      >
        I design and <br />
        Build Stuff
      </chakra.h1>
      <Box mt={{ base: 6, md: 10 }} mb={16}>
        <Text fontSize={{ base: "lg", md: "xl" }}>
          Hi
          <Text as="span" fontWeight={"semibold"}>
            {" "}
            I&apos;m Boluwatife Abiola
          </Text>{" "}
          (My friends call me bolu).... That is all
        </Text>
      </Box>

      <HStack mb={10}>
        <Button
          as="a"
          href="https://www.linkedin.com/in/boluseyi"
          target="__blank"
          size="lg"
          h={"60px"}
          colorScheme="red"
        >
          <Text as="span" ml={2}>
            Checkout My Resume
          </Text>
        </Button>
      </HStack>
    </Box>
  );
};
