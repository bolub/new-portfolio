import React from "react";

// chakra
import {
  chakra,
  Text,
  Switch,
  FormControl,
  FormLabel,
  Box,
  Center,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

// recoil
import { useRecoilState } from "recoil";
import { fontState } from "../../../atoms/fonts";

const ChangeFont = () => {
  // font type
  const [fontType, setFontType] = useRecoilState(fontState);
  const setFont = (type, value) => {
    if (type === "heading") {
      setFontType({
        ...fontType,
        heading: value,
      });

      localStorage.setItem("fontHeading", value);
    }

    if (type === "body") {
      setFontType({
        ...fontType,
        body: value,
      });

      localStorage.setItem("fontBody", value);
    }
  };

  return (
    <>
      {/* Change header font */}
      <Box mb={10}>
        <chakra.h3
          fontFamily={fontType.heading}
          fontSize="sm"
          fontWeight={600}
          color="brand.500"
          mb={2}
        >
          Change Header Font
        </chakra.h3>
        <FormControl mb={2} display="flex" alignItems="center">
          <FormLabel fontFamily="Space Grotesk" htmlFor="email-alerts" mb="0">
            Space Grotesk
          </FormLabel>
          <Switch
            ml="auto"
            value={fontType.heading}
            isChecked={fontType.heading === "Space Grotesk"}
            colorScheme="brand"
            onChange={(e) => {
              setFont("heading", "Space Grotesk");
            }}
          />
        </FormControl>

        <FormControl mb={2} display="flex" alignItems="center">
          <FormLabel fontFamily="Nunito" htmlFor="email-alerts" mb="0">
            Nunito
          </FormLabel>
          <Switch
            value={fontType.heading}
            isChecked={fontType.heading === "Nunito"}
            ml="auto"
            colorScheme="brand"
            onChange={(e) => {
              setFont("heading", "Nunito");
            }}
          />
        </FormControl>
      </Box>

      {/* Change body font */}
      <Box>
        <chakra.h3
          fontFamily={fontType.heading}
          fontSize="sm"
          fontWeight={600}
          color="brand.500"
          mb={2}
        >
          Change Body Font
        </chakra.h3>
        <FormControl mb={2} display="flex" alignItems="center">
          <FormLabel htmlFor="email-alerts" mb="0">
            Jost
          </FormLabel>
          <Switch
            ml="auto"
            colorScheme="brand"
            value={fontType.body}
            isChecked={fontType.body === "Jost"}
            onChange={(e) => {
              setFont("body", "Jost");
            }}
          />
        </FormControl>

        <FormControl mb={2} display="flex" alignItems="center">
          <FormLabel fontFamily="Nunito" htmlFor="email-alerts" mb="0">
            Nunito
          </FormLabel>
          <Switch
            value={fontType.body}
            isChecked={fontType.body === "Nunito"}
            ml="auto"
            colorScheme="brand"
            onChange={(e) => {
              setFont("body", "Nunito");
            }}
          />
        </FormControl>
      </Box>

      {/* Preview */}
      <Box
        mt={10}
        borderWidth="1px"
        borderColor="#c4c4c4"
        borderStyle="dashed"
        borderRadius="sm"
      >
        <Box
          px={5}
          py={5}
          borderBottomWidth="1px"
          borderStyle="dashed"
          borderColor="#c4c4c4"
          fontFamily={fontType.heading}
        >
          <Text fontSize="sm">Header Text Preview</Text>
          <Text fontWeight={900} fontSize="xl" contentEditable>
            This is Header Text
          </Text>
        </Box>

        <Box px={5} py={5} fontFamily={fontType.body}>
          <Text fontSize="sm">Body Text Preview</Text>
          <Text fontWeight={900} fontSize="xl" contentEditable>
            This is body Text
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default ChangeFont;
