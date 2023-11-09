import { Box, Flex, chakra, SimpleGrid } from "@chakra-ui/react";
import { generalPaddingX, maxi } from "../../utils/chakra";
import useLayoutSwitch from "../../hooks/useLayoutSwitch";

// components
import GridCard from "../../components/blog/BlogCard/GridCard";
import ListCard from "../../components/blog/BlogCard/ListCard";
import CustomSeo from "../../components/Layout/Seo";
import PageHeader from "../../components/blog/PageHeader";
import { trpc } from "../../utils/trpc";
import { trpcHelpers } from "../../server/routers/_app";
import { getBlogEntries } from "../../contentful";
import { useQuery } from "@tanstack/react-query";

const Blog = () => {
  const { data: blogData } = useQuery({
    queryKey: ["blog"],
    queryFn: getBlogEntries,
  });

  const { data, status } = trpc.post.all.useQuery();
  // const { mutate } = trpc.post.search.useMutation({
  //   onSuccess(data) {
  //     setBlogData(data);
  //   },
  // });

  // useEffect(() => {
  //   if (status === "success") {
  //     setBlogData(data);
  //   }
  // }, [status]);

  const { layout, LayoutComponent } = useLayoutSwitch();
  // const [blogData, setBlogData] = useState<CustomPost[]>();
  // const [searchText, setSearchText] = useState("");
  // const [debouncedValue, setDebouncedValue] = React.useState("");

  // const [, cancel] = useDebounce(
  //   () => {
  //     setDebouncedValue(searchText);
  //   },
  //   100,
  //   [searchText]
  // );

  // const searchHandler = (e: any) => {
  //   setSearchText(e.target.value);

  //   mutate({
  //     query: debouncedValue,
  //   });
  // };

  return (
    <>
      <CustomSeo title="Blog" />

      <PageHeader />

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

          {/* <CustomSearch value={searchText} onChange={searchHandler} /> */}
        </Box>

        <Box display="posts">
          {layout === "grid" && (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
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

export default Blog;

export async function getStaticProps() {
  await trpcHelpers.post.all.prefetch();

  return {
    props: {
      trpcState: trpcHelpers.dehydrate(),
    },
  };
}
