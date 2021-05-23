import React from "react";

// Nextjs
import Head from "next/head";

// chakra
import { Box, Flex, chakra, Text, SimpleGrid } from "@chakra-ui/react";

// utils
import { generalPaddingX } from "../utils/chakra";

// icons
import { HiArrowRight } from "react-icons/hi";

// components
import BlogIllustration from "../svg/BlogIlustration";
import CustomButton from "../components/UI/CustomButton";
import BlogCard from "../components/blog/BlogCard";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog - Bolub</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <chakra.header d="flex" py={{ base: "10" }}>
        <Flex
          w="100%"
          flexDir={{ base: "column" }}
          justifyContent="center"
          textAlign="center"
          px={generalPaddingX}
        >
          <Box mb={{ base: 0, md: 0 }} w={{ md: "60%" }} m="auto">
            <chakra.h1
              fontWeight={700}
              // color="brand.500"
              fontSize={{ base: "3xl", md: "4xl" }}
            >
              My Blog...
            </chakra.h1>

            <Text mb={5} mt={4} fontSize="17px">
              Here, gonna be talking a bit about stuff that interests me I
              guess, but I'm sure I'll probably get tired and go nuts
            </Text>

            <CustomButton as="a" href="#posts" mb={10}>
              <Text as="span" mr={2}>
                Start Reading
              </Text>

              <Text as="span" fontSize="xl">
                🏁
              </Text>
            </CustomButton>

            <BlogIllustration m="auto" />
          </Box>
        </Flex>
      </chakra.header>

      <chakra.main mt={20} pt={{ base: "10" }} pb={20} px={generalPaddingX}>
        {/* Header */}
        <Flex>
          <chakra.h2 fontWeight={700} mb={5} fontSize={{ base: "3xl" }}>
            All Posts
          </chakra.h2>
        </Flex>

        {/* Blog list */}
        <SimpleGrid id="posts" columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </SimpleGrid>
      </chakra.main>
    </>
  );
};

export default Blog;
