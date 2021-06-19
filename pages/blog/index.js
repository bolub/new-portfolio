import React, { useState } from "react";

// chakra
import { Box, Flex, chakra, SimpleGrid, Tag, HStack } from "@chakra-ui/react";

// utils
import { generalPaddingX } from "../../utils/chakra";

// DATA FETCHING
import axios from "axios";

// hooks
import useLayoutSwitch from "../../hooks/useLayoutSwitch";

// components
import GridCard from "../../components/blog/BlogCard/GridCard";
import ListCard from "../../components/blog/BlogCard/ListCard";
import CustomSeo from "../../components/Layout/Seo";
import CustomSearch from "../../components/UI/CustomSearch";
import PageHeader from "../../components/blog/PageHeader";

const Blog = ({ data, allTags }) => {
  //
  const { layout, LayoutComponent } = useLayoutSwitch();

  // blog data
  const [blogData, setBlogData] = useState(data);

  // search text
  const [searchText, setSearchText] = useState(null);

  // tag to search for
  const [tagName, setTagName] = useState(null);

  // ======== data fetching/manipulation starts here  ========
  // search all posts
  const searchAllPosts = async (value) => {
    const dataToUse = value || searchText;
    // return if searchText dose not exist
    // if (!searchText) return;

    // check for length of searchText
    // if (searchText.length <= 2) return;

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/blog-posts?Title_contains=${dataToUse}`
      );

      setBlogData(response.data);
    } catch (error) {}
  };

  //search blog via tag
  const searchTags = async (data) => {
    const dataToUse = data || tagName;

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/blog-posts?tags.name_contains=${dataToUse}`
      );

      setBlogData(response.data);
    } catch (error) {}
  };
  //========  data fetching/manipulation ends here ========

  const searchHandler = (e) => {
    setSearchText(e.target.value);
    searchAllPosts();
  };

  return (
    <>
      <CustomSeo title="Blog" />

      {/* header */}
      <PageHeader />

      {/* main */}
      <chakra.main mt={20} pt={{ base: "10" }} pb={20} px={generalPaddingX}>
        <Box mb={12}>
          <Flex mb={5}>
            {/* Header Text */}
            <Flex my="auto">
              <chakra.h2
                mr={2}
                my="auto"
                fontWeight={700}
                fontSize={{ base: "3xl" }}
              >
                All Posts
              </chakra.h2>
            </Flex>

            {/* Layout switch */}
            {LayoutComponent}
          </Flex>

          {/* Search Component */}
          <CustomSearch value={searchText} onChange={searchHandler} />

          {/* Tags */}
          <HStack mt={5}>
            {allTags?.map((tag) => {
              const tagChosen = tagName === tag?.name;

              return (
                <Tag
                  key={tag?.id}
                  cursor="pointer"
                  colorScheme="brand"
                  variant={tagChosen ? "subtle" : "outline"}
                  onClick={() => {
                    if (tagChosen) {
                      setTagName("");
                      searchAllPosts(" ");
                      return;
                    }

                    setTagName(tag?.name);
                    searchTags(tag?.name);
                  }}
                  fontSize="13px"
                  borderRadius="sm"
                >
                  {tag?.name}
                </Tag>
              );
            })}
          </HStack>
        </Box>

        {/* Blog list */}
        <Box id="posts">
          {layout === "grid" && (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {blogData?.map((postData) => {
                console.log(postData?.tags);
                return <GridCard key={data?.id} data={postData} />;
              })}
            </SimpleGrid>
          )}

          {layout === "list" && (
            <>
              {blogData?.map((postData) => {
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

    const allTagsResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/tags`
    );

    return {
      props: {
        data: response.data,
        allTags: allTagsResponse.data,
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
