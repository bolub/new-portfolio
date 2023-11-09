// chakra
import { Box, chakra } from "@chakra-ui/react";

import { generalPaddingX, maxi } from "../../utils/chakra";
import CustomSeo from "../../components/Layout/Seo";
import { BlogItem } from "../../contentful";
import Share from "../../components/blog/Share";
import { ContentDisplay } from "./ContentDisplay";
import { HeaderDisplay } from "./HeaderDisplay";

export const BlogPage = ({ blogData }: { blogData: BlogItem }) => {
  return (
    <>
      <CustomSeo
        title={blogData.fields.title || ""}
        description={blogData.fields?.description || ""}
        imageUrl={blogData.fields.cover || ""}
      />

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
