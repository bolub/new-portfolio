"use client";

import { CustomContainer } from "@/app/components/CustomContainer";
import { ContentDisplay } from "@/app/components/content-display/ContentDisplay";
import { BlogItem } from "@/contentful/blog/blog";
import { Box, chakra } from "@chakra-ui/react";
import Share from "./Share";
import { useContentfulLiveUpdates } from "@contentful/live-preview/react";
import { ContentfulLivePreview } from "@contentful/live-preview";
import { DraftHeader } from "./DraftHeader";

export const DraftBlogPageContainer = ({
  blogData,
}: {
  blogData?: BlogItem;
}) => {
  const updatedEntries = useContentfulLiveUpdates(blogData);

  if (!updatedEntries) return <>data not available</>;

  return (
    <>
      <chakra.header display="flex" pt={{ base: "10" }} w="100%">
        <DraftHeader blogData={updatedEntries} />
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
          <Box
            {...ContentfulLivePreview.getProps({
              entryId: updatedEntries.sys.id,
              fieldId: "body",
            })}
            w={{ base: "100%", md: "60%" }}
            mx="auto"
          >
            <ContentDisplay data={updatedEntries.fields.body} />

            <Share />
          </Box>
        </CustomContainer>
      </chakra.main>
    </>
  );
};
