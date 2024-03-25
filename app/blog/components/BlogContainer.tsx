"use client";

import { CustomContainer } from "@/app/components/CustomContainer";
import { BlogItems } from "@/contentful/blog/blog";
import { Box, VStack, chakra } from "@chakra-ui/react";
import { BlogCard } from "./BlogCard";

export const BlogContainer = ({ data: blogData }: { data: BlogItems }) => {
  return (
    <>
      <chakra.main mt={20} pt={{ base: "10" }} pb={20}>
        <CustomContainer>
          <chakra.h2 mb="12" fontWeight={700} fontSize={{ base: "3xl" }}>
            Blog ( {blogData?.length} posts )
          </chakra.h2>

          <Box id="posts" mx="auto" maxW={{ md: "60%" }}>
            <VStack spacing={8} w="full" align="start">
              {blogData?.map((postData) => {
                return <BlogCard key={postData.sys.id} data={postData} />;
              })}
            </VStack>
          </Box>
        </CustomContainer>
      </chakra.main>
    </>
  );
};
