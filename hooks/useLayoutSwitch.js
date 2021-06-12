import { useState } from "react";

// chakra
import { HStack, IconButton } from "@chakra-ui/react";

// icons
import { BsGrid, BsViewList } from "react-icons/bs";

const useLayoutSwitch = () => {
  const [layout, setLayout] = useState("grid");

  const LayoutComponent = (
    <HStack ml="auto" my="auto">
      <IconButton
        colorScheme="red"
        fontSize="lg"
        onClick={() => setLayout("grid")}
        variant={layout === "grid" ? "solid" : "ghost"}
      >
        <BsGrid />
      </IconButton>

      <IconButton
        colorScheme="red"
        fontSize="lg"
        onClick={() => setLayout("list")}
        variant={layout === "list" ? "solid" : "ghost"}
      >
        <BsViewList />
      </IconButton>
    </HStack>
  );

  return { layout, setLayout, LayoutComponent };
};

export default useLayoutSwitch;
