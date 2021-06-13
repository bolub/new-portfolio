import React from "react";

// chakra
import { Box, chakra, Text } from "@chakra-ui/react";

// nextjs
import Link from "next/link";
import { useRouter } from "next/router";

const Banner = () => {
  const { pathname } = useRouter();

  return (
    <Box
      // fontFamily="Space Grotesk"
      bg="brand.500"
      py={2}
      px={2}
      color="white"
      fontSize="15px"
      textAlign="center"
    >
      <Text as="span" fontSize="lg">
        🤾‍♂️
      </Text>{" "}
      Change fonts, theme and default colors in the Playground{" "}
      <Link href={`${pathname}?open=playground`} passHref>
        <chakra.a
          color={"white"}
          fontWeight={"700"}
          d="inline-flex"
          cursor="pointer"
        >
          here
        </chakra.a>
      </Link>
    </Box>
  );
};

export default Banner;
