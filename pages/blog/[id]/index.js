import React from "react";

// Nextjs
import Head from "next/head";

// chakra
import { Box, Flex, chakra, Text, HStack, Image } from "@chakra-ui/react";

// utils
import { generalPaddingX } from "../../../utils/chakra";

// DATA FETCHING
import axios from "axios";

// markdown
import ReactMarkdown from "react-markdown";

// icons
import { HiChevronLeft } from "react-icons/hi";

// components

// dayjs
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import CustomLink from "../../../components/UI/CustomLink";
dayjs.extend(advancedFormat);

const Blog = ({ data }) => {
  console.log(data);
  return (
    <>
      <Head>
        <title>Blog - Bolub</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <chakra.header d="flex" pt={{ base: "10" }}>
        {/* back button */}

        <Flex
          w="100%"
          flexDir={{ base: "column" }}
          justifyContent="center"
          textAlign="center"
          px={generalPaddingX}
          pos="relative"
        >
          <chakra.div d={{ base: "none", md: "flex" }} pos="absolute" top={0}>
            <CustomLink href="/blog">
              <Text my="auto" mr={1} fontSize="md">
                <HiChevronLeft />
              </Text>

              <Text my="auto">Back</Text>
            </CustomLink>
          </chakra.div>

          <Box
            mb={{ base: 0, md: 0 }}
            d="flex"
            flexDir="column"
            w={{ md: "60%" }}
            m="auto"
          >
            <HStack mb={1} mx="auto">
              <Text color="brand.500" fontSize="14px" fontWeight={600}>
                💻 Programming
              </Text>
            </HStack>

            <chakra.h1
              fontWeight={700}
              // color="brand.500"
              fontSize={{ base: "3xl", md: "4xl" }}
            >
              {data?.Title}
            </chakra.h1>

            <Text mt={2} fontWeight={600}>
              Bolu Abiola
            </Text>
            <Text>{dayjs(data?.published_at).format("Do MMM YYYY")}</Text>

            <Image
              mt={5}
              w="100%"
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${data?.cover_image?.url}`}
            />
          </Box>
        </Flex>
      </chakra.header>

      <chakra.main d="flex" mt={5} pb={20} px={generalPaddingX}>
        <Box w={{ md: "60%" }} m="auto">
          <chakra.p lineHeight={1.8} mb={1} fontSize="md">
            <ReactMarkdown>{data?.content}</ReactMarkdown>
          </chakra.p>
        </Box>
      </chakra.main>
    </>
  );
};

export default Blog;

export const getStaticPaths = async ({ params }) => {
  // Call an external API endpoint to get posts
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/blog-posts`
  );

  const posts = response.data;

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: JSON.stringify(post.id) },
  }));

  return { paths, fallback: false, revalidate: 1 };
};

export const getStaticProps = async ({ params }) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/blog-posts/${params?.id}`
    );

    return {
      props: {
        data: response.data,
        status: "success",
      },
      revalidate: 1,
    };
  } catch (error) {
    return {
      props: {
        status: "error",
      },
      revalidate: 1,
    };
  }
};
