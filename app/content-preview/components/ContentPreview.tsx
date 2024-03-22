"use client";

import { CustomContainer } from "@/app/components/CustomContainer";
import { Text, chakra } from "@chakra-ui/react";

export const ContentPreviewContainer = () => {
  return (
    <>
      <chakra.main mt={20} pt={{ base: "10" }} pb={20}>
        <CustomContainer>
          <chakra.h2 mb="12" fontWeight={700} fontSize={{ base: "3xl" }}>
            Content Preview
          </chakra.h2>

          <Text>content preview text</Text>
        </CustomContainer>
      </chakra.main>
    </>
  );
};
