import CustomSeo from "../../components/Layout/Seo";
import { Box, Flex, SimpleGrid, chakra } from "@chakra-ui/react";
import useLayoutSwitch from "../../hooks/useLayoutSwitch";
import { generalPaddingX, maxi } from "../../utils/chakra";
import GridCard from "./BlogCard/GridCard";
import ListCard from "./BlogCard/ListCard";
import { BlogItems } from "../../contentful/blog/blog";

export const AllBlogPostsPage = ({ data: blogData }: { data: BlogItems }) => {
  const { layout, LayoutComponent } = useLayoutSwitch();

  return (
    <>
      <CustomSeo title="Blog" />

      <chakra.main
        mt={20}
        pt={{ base: "10" }}
        pb={20}
        px={generalPaddingX}
        maxW={maxi}
        mx="auto"
      >
        <Box mb={12}>
          <Flex mb={5}>
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

            {LayoutComponent}
          </Flex>
        </Box>

        <Box id="posts">
          {layout === "grid" && (
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              {blogData?.map((postData) => {
                return <GridCard key={postData.sys.id} data={postData} />;
              })}
            </SimpleGrid>
          )}

          {layout === "list" && (
            <>
              {blogData?.map((postData) => {
                return <ListCard key={postData.sys.id} data={postData} />;
              })}
            </>
          )}
        </Box>
      </chakra.main>
    </>
  );
};
