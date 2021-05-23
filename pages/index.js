// Nextjs
import Head from "next/head";

// chakra
import { Box, Flex, chakra, Text } from "@chakra-ui/react";

// utils
import { generalPaddingX } from "../utils/chakra";

// components
import HomeIllustration from "./../svg/HomeIllustration";
import CustomLink from "../components/CustomLink";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bolub</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <chakra.header
        h={{ base: "100%", md: "75vh" }}
        alignItems="center"
        d="flex"
        py={{ base: "10", md: 0 }}
      >
        <Flex
          w="100%"
          flexDir={{ base: "column", md: "row" }}
          px={generalPaddingX}
        >
          <Box
            mb={{ base: 0, md: 0 }}
            w={{ base: "100%", md: "45%" }}
            my="auto"
          >
            <chakra.h1 fontWeight={700} fontSize={{ base: "3xl", md: "4xl" }}>
              Hello, I'm
              <Text as="span" color="brand.500">
                {" "}
                Bolu
              </Text>
            </chakra.h1>

            <Text mt={4} mb={6} fontSize="17px">
              Welcome to my ......., well you know.
            </Text>

            <Text mb={6} fontSize="17px">
              Honestly doing this was a pain, but still did it anyways, gotta
              have an online presence and all
            </Text>

            <Text mb={6} fontSize="17px">
              Gonna be doing a bit of{" "}
              <CustomLink active href="/blog">
                blogging
              </CustomLink>
              , probably{" "}
              <CustomLink active href="/cooking">
                cooking
              </CustomLink>
              , and also uploading my{" "}
              <CustomLink active href="/projects">
                portfolio.
              </CustomLink>
            </Text>

            <Text mb={6} fontSize="17px">
              Not sure about how i feel about a logo for now though, an emoji
              would suffice for now.
            </Text>
          </Box>

          {/* Illustration */}
          <Box w={{ base: "100%", md: "55%" }} my="auto" d="flex">
            <HomeIllustration
              m="auto"
              height="350"
              // borderTop="3px solid black"
              // borderLeft="3px solid black"
              // borderRight="3px solid black"
            />
          </Box>
        </Flex>
      </chakra.header>
    </>
  );
}
