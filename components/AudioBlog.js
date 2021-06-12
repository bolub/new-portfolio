import React from "react";

// chakra
import { Flex, Text } from "@chakra-ui/react";

// speech
import dynamic from "next/dynamic";
const Speech = dynamic(
  () => {
    return import("react-speech");
  },
  { ssr: false }
);

const AudioBlog = ({ content }) => {
  return (
    <Flex w="100%" flexDir="column" bg="#f2f2f2" py={4} px={3} mt={6} mb={10}>
      <Text mx="auto" mb={2}>
        Listen to this post
      </Text>
      <Speech
        // styles={styles}
        // stop={true}
        pause={true}
        resume={true}
        text={content}
      />
    </Flex>
  );
};

export default AudioBlog;
