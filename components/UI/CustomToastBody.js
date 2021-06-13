import React from "react";

// chakra
import { Flex, Text, Box, CloseButton } from "@chakra-ui/react";

const CustomToastBody = ({ message, toast }) => {
  return (
    <Flex
      borderRadius="5px"
      // alignItems="center"
      bg="brand.500"
      color="white"
    >
      <Text my="auto" px={6} py={3} mr={4}>
        {message}
      </Text>

      <Box onClick={toast.closeAll} py={3} mr={2} ml="auto" h="100%" d="flex">
        <CloseButton m="auto" boxShadow="none" borderRadius="none" />
      </Box>
    </Flex>
  );
};

export default CustomToastBody;
