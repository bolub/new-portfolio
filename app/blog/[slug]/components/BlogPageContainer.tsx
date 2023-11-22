"use client";

import { CustomContainer } from "@/app/components/CustomContainer";
import { ContentDisplay } from "@/app/components/content-display/ContentDisplay";
import { BlogItem } from "@/contentful/blog/blog";
import { Box, chakra } from "@chakra-ui/react";
import { Header } from "./Header";
import Share from "./Share";

export const BlogPageContainer = ({ blogData }: { blogData: BlogItem }) => {
  return (
    <>
      <chakra.header display="flex" pt={{ base: "10" }} w="100%">
        <Header blogData={blogData} />
      </chakra.header>

      <chakra.main
        minH={{ base: "100%", md: "75vh" }}
        display="flex"
        mt={5}
        pb={20}
        mx="auto"
        w="100%"
      >
        <CustomContainer>
          <Box w={{ base: "100%", md: "60%" }} mx="auto">
            <ContentDisplay data={blogData.fields.body} />

            <Share />
          </Box>
        </CustomContainer>
      </chakra.main>
    </>
  );
};
