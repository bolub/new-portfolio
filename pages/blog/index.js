import React, { useState } from "react";

// chakra
import {
  Box,
  Flex,
  chakra,
  Text,
  SimpleGrid,
  HStack,
  IconButton,
} from "@chakra-ui/react";

// utils
import { generalPaddingX } from "../../utils/chakra";

// icons
import { BsGrid, BsViewList } from "react-icons/bs";

// DATA FETCHING
import axios from "axios";

// components
import BlogIllustration from "../../svg/BlogIlustration";
import CustomButton from "../../components/UI/CustomButton";
import GridCard from "../../components/blog/BlogCard/GridCard";
import ListCard from "../../components/blog/BlogCard/ListCard";
import CustomSeo from "../../components/Layout/Seo";

const Blog = ({ data }) => {
  const [layout, setLayout] = useState("grid");

  return (
    <>
      <CustomSeo title="Blog" />

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
        <Flex mb={5}>
          {/* Header Text */}
          <chakra.h2 my="auto" fontWeight={700} fontSize={{ base: "3xl" }}>
            All Posts
          </chakra.h2>

          {/* Layout switch */}
          <HStack ml="auto" my="auto">
            <IconButton
              colorScheme="red"
              fontSize="lg"
              onClick={() => setLayout("grid")}
              variant={layout === "grid" ? "solid" : "ghost"}
            >
              <BsGrid />
            </IconButton>

            <IconButton
              colorScheme="red"
              fontSize="lg"
              onClick={() => setLayout("list")}
              variant={layout === "list" ? "solid" : "ghost"}
            >
              <BsViewList />
            </IconButton>
          </HStack>
        </Flex>

        {/* Blog list */}
        <Box id="posts">
          {layout === "grid" && (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {data?.map((postData) => {
                return <GridCard key={data?.id} data={postData} />;
              })}
            </SimpleGrid>
          )}

          {layout === "list" && (
            <>
              {data?.map((postData) => {
                return <ListCard key={data?.id} data={postData} />;
              })}
            </>
          )}
        </Box>
      </chakra.main>
    </>
  );
};

export default Blog;

export async function getStaticProps(context) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/blog-posts`
    );

    return {
      props: {
        data: response.data,
      }, // will be passed to the page component as props
      revalidate: 1,
    };
  } catch (error) {
    return {
      props: {
        data: [],
        status: "error",
      }, // will be passed to the page component as props
      revalidate: 1,
    };
  }
}
