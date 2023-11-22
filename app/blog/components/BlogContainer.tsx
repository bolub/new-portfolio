"use client";

import { CustomContainer } from "@/app/components/CustomContainer";
import { BlogItems } from "@/contentful/blog/blog";
import { Box, SimpleGrid, chakra } from "@chakra-ui/react";
import GridCard from "./GridCard";

export const BlogContainer = ({ data: blogData }: { data: BlogItems }) => {
  return (
    <>
      <chakra.main mt={20} pt={{ base: "10" }} pb={20}>
        <CustomContainer>
          <chakra.h2 mb="12" fontWeight={700} fontSize={{ base: "3xl" }}>
            All Posts
          </chakra.h2>

          <Box id="posts">
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              {blogData?.map((postData) => {
                return <GridCard key={postData.sys.id} data={postData} />;
              })}
            </SimpleGrid>
          </Box>
        </CustomContainer>
      </chakra.main>
    </>
  );
};
