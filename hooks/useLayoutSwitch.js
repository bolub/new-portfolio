import { useState } from "react";

// chakra
import { HStack, IconButton } from "@chakra-ui/react";

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
      <IconButton
        colorScheme="brand"
        fontSize="18px"
        p={0}
        w="32px"
        h="40px"
        onClick={() => setLayout("grid")}
        variant={layout === "grid" ? "solid" : "ghost"}
        _focus={{
          boxShadow: "none",
        }}
      >
        <BsGrid />
      </IconButton>

      <IconButton
        colorScheme="brand"
        fontSize="18px"
        p={0}
        w="32px"
        h="40px"
        onClick={() => setLayout("list")}
        variant={layout === "list" ? "solid" : "ghost"}
        _focus={{
          boxShadow: "none",
        }}
      >
        <BsViewList />
      </IconButton>
    </HStack>
  );

  return { layout, setLayout, LayoutComponent };
};

export default useLayoutSwitch;
