import {
  chakra,
  Text,
  Switch,
  FormControl,
  FormLabel,
  Box,
} from "@chakra-ui/react";

import { useRecoilState } from "recoil";
import { fontState } from "../../../atoms/fonts";

const ChangeFont = () => {
  const [fontType, setFontType] = useRecoilState(fontState);

  const setFont = (type: "heading" | "body", value: string) => {
    switch (type) {
      case "heading":
        setFontType({
          ...fontType,
          heading: value,
        });

        localStorage.setItem("fontHeading", value);
        break;

      case "body":
        setFontType({
          ...fontType,
          body: value,
        });

        localStorage.setItem("fontBody", value);
        break;

      default:
    }
  };

  const allHeaderFonts = ["Outfit", "Nunito", "Prompt"];
  const allBodyFonts = ["Outfit", "Nunito", "Prompt"];

  return (
    <>
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

        {allHeaderFonts.map((font) => {
          return (
            <FormControl key={font} mb={2} display="flex" alignItems="center">
              <FormLabel
                fontSize={{ base: "sm", md: "md" }}
                fontFamily={font}
                htmlFor="email-alerts"
                mb="0"
              >
                {font}
              </FormLabel>
              <Switch
                ml="auto"
                value={fontType.heading}
                isChecked={fontType.heading === font}
                colorScheme="brand"
                onChange={(e) => {
                  setFont("heading", font);
                }}
              />
            </FormControl>
          );
        })}
      </Box>

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

        {allBodyFonts.map((font) => {
          return (
            <FormControl key={font} mb={2} display="flex" alignItems="center">
              <FormLabel
                fontSize={{ base: "sm", md: "md" }}
                htmlFor="email-alerts"
                mb="0"
              >
                {font}
              </FormLabel>
              <Switch
                ml="auto"
                colorScheme="brand"
                value={fontType.body}
                isChecked={fontType.body === font}
                onChange={(e) => {
                  setFont("body", font);
                }}
              />
            </FormControl>
          );
        })}
      </Box>

      <Box
        mt={10}
        mb={8}
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
          <Text fontSize={{ base: "xs", md: "sm" }}>Header Text Preview</Text>
          <Text
            fontWeight={900}
            fontSize={{ base: "md", md: "xl" }}
            contentEditable
          >
            This is Header Text
          </Text>
        </Box>

        <Box px={5} py={5} fontFamily={fontType.body}>
          <Text fontSize={{ base: "xs", md: "sm" }}>Body Text Preview</Text>
          <Text
            fontWeight={900}
            fontSize={{ base: "md", md: "xl" }}
            contentEditable
          >
            This is body Text
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default ChangeFont;
