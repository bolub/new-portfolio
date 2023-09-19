import { useState } from "react";

// chakra
import { HStack, Button, Text } from "@chakra-ui/react";

// icons
import { BsGrid, BsViewList } from "react-icons/bs";

const useLayoutSwitch = () => {
  const [layout, setLayout] = useState("grid");

  const LayoutComponent = (
    <HStack
      ml="auto"
      my="auto"
      bg="brand.50"
      p={1}
      borderRadius="md"
      spacing={1}
    >
      <Button
        colorScheme="brand"
        borderRadius="md"
        w={{ base: "15px", md: "60px" }}
        h={{ base: "33px", md: "34px" }}
        fontWeight={600}
        onClick={() => setLayout("grid")}
        variant={layout === "grid" ? "solid" : "ghost"}
        _focus={{
          boxShadow: "none",
        }}
      >
        <Text
          fontSize="16px"
          display={{ base: "inline", md: "none" }}
          as="span"
        >
          <BsGrid />
        </Text>
        <Text fontSize="12px" display={{ base: "none", md: "inline" }}>
          Grid
        </Text>
      </Button>

      <Button
        colorScheme="brand"
        borderRadius="md"
        w={{ base: "15px", md: "60px" }}
        h={{ base: "33px", md: "34px" }}
        fontWeight={600}
        onClick={() => setLayout("list")}
        variant={layout === "list" ? "solid" : "ghost"}
        _focus={{
          boxShadow: "none",
        }}
      >
        <Text
          fontSize="16px"
          display={{ base: "inline", md: "none" }}
          as="span"
        >
          <BsViewList />
        </Text>
        <Text fontSize="12px" display={{ base: "none", md: "inline" }}>
          List
        </Text>
      </Button>
    </HStack>
  );

  return { layout, setLayout, LayoutComponent };
};

export default useLayoutSwitch;
