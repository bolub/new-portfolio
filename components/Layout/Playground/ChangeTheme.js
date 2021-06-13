import React, { useState } from "react";

import {
  Switch,
  FormControl,
  FormLabel,
  useColorMode,
  HStack,
  Box,
} from "@chakra-ui/react";
import { defaultBrandColor } from "../../../chakra/colors";

const ChangeTheme = () => {
  // toggle color mode
  const { colorMode, toggleColorMode } = useColorMode();

  // set theme
  const setTheme = (color) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("defaultColor", color);
    }
  };

  // set color
  const [colorChosen, setColorChosen] = useState(defaultBrandColor);

  return (
    <FormControl mb={2}>
      {/* dark mode */}
      <Box d="flex">
        <FormLabel htmlFor="email-alerts" mb="0">
          Dark mode
        </FormLabel>

        <Switch
          ml="auto"
          colorScheme="brand"
          value={colorMode}
          isChecked={colorMode === "dark"}
          onChange={(e) => {
            toggleColorMode();
          }}
        />
      </Box>

      {/* default color */}
      <Box mt={3} d="flex">
        <FormLabel htmlFor="email-alerts" mb="0">
          Default Color
        </FormLabel>

        <HStack ml="auto" spacing={1}>
          {/* red */}
          <Box
            w="30px"
            h="30px"
            borderRadius="full"
            p="1px"
            border={colorChosen === "red" && "1.5px solid #cb1a41"}
            cursor="pointer"
            onClick={() => {
              setTheme("red");
              setColorChosen("red");
            }}
          >
            <Box h="100%" w="100%" borderRadius="full" bg="#cb1a41"></Box>
          </Box>

          {/* blue */}
          <Box
            w="30px"
            h="30px"
            borderRadius="full"
            p="1px"
            border={colorChosen === "blue" && "1.5px solid #1b49ca"}
            cursor="pointer"
            onClick={() => {
              setTheme("blue");
              setColorChosen("blue");
            }}
          >
            <Box h="100%" w="100%" borderRadius="full" bg="#1b49ca"></Box>
          </Box>

          {/* yellow */}
          <Box
            w="30px"
            h="30px"
            borderRadius="full"
            p="1px"
            border={colorChosen === "yellow" && "1.5px solid #dc8e09"}
            cursor="pointer"
            onClick={() => {
              setTheme("yellow");
              setColorChosen("yellow");
            }}
          >
            <Box h="100%" w="100%" borderRadius="full" bg="#dc8e09"></Box>
          </Box>
        </HStack>
      </Box>
    </FormControl>
  );
};

export default ChangeTheme;
