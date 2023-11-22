import React, { useState } from "react";

import {
  Switch,
  FormControl,
  FormLabel,
  useColorMode,
  HStack,
  Box,
} from "@chakra-ui/react";
// import { defaultColor } from "../../../chakra/colors";

const ChangeTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const setTheme = (color: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("defaultColor", color);
    }
  };

  //   const [colorChosen, setColorChosen] = useState(defaultColor);

  return (
    <FormControl mb={2}>
      <Box display="flex">
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

      {/* <Box mt={3} display="flex">
        <FormLabel htmlFor="email-alerts" mb="0">
          Default Color
        </FormLabel>

        <HStack ml="auto" spacing={1}>
          <Box
            w="30px"
            h="30px"
            borderRadius="full"
            p="3px"
            border={colorChosen === "red" ? "1.5px solid #cb1a41" : ""}
            cursor="pointer"
            onClick={() => {
              setTheme("red");
              setColorChosen("red");
            }}
          >
            <Box h="100%" w="100%" borderRadius="full" bg="#cb1a41"></Box>
          </Box>

          <Box
            w="30px"
            h="30px"
            borderRadius="full"
            p="3px"
            border={colorChosen === "blue" ? "1.5px solid #1b49ca" : ""}
            cursor="pointer"
            onClick={() => {
              setTheme("blue");
              setColorChosen("blue");
            }}
          >
            <Box h="100%" w="100%" borderRadius="full" bg="#1b49ca"></Box>
          </Box>

          <Box
            w="30px"
            h="30px"
            borderRadius="full"
            p="3px"
            border={colorChosen === "yellow" ? "1.5px solid #dc8e09" : ""}
            cursor="pointer"
            onClick={() => {
              setTheme("yellow");
              setColorChosen("yellow");
            }}
          >
            <Box h="100%" w="100%" borderRadius="full" bg="#dc8e09"></Box>
          </Box>
        </HStack>
      </Box> */}
    </FormControl>
  );
};

export default ChangeTheme;
