// chakra
import { Box, chakra } from "@chakra-ui/react";

import { generalPaddingX, maxi } from "../../utils/chakra";
import { ContentDisplay } from "./ContentDisplay";
import { HeaderDisplay } from "./HeaderDisplay";
import Share from "../blog/Share";
import { BlogItem } from "../../contentful/blog/blog";

export const BlogPage = ({ blogData }: { blogData: BlogItem }) => {
  return (
    <>
      <chakra.header display="flex" pt={{ base: "10" }} w="100%">
        <HeaderDisplay blogData={blogData} />
      </chakra.header>

      <chakra.main
        minH={{ base: "100%", md: "75vh" }}
        display="flex"
        mt={5}
        pb={20}
        px={generalPaddingX}
        maxW={maxi}
        mx="auto"
        w="100%"
      >
        <Box w={{ base: "100%", md: "60%" }} mx="auto">
          <ContentDisplay data={blogData.fields.body} />

          <Share />
        </Box>
      </chakra.main>
    </>
  );
};
