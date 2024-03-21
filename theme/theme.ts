import { extendTheme } from "@chakra-ui/react";
import { withProse } from "@nikolovlazar/chakra-ui-prose";
import { colors } from "./colors";
import { LinkStyles, components } from "./components";

export const customTheme = extendTheme(
  {
    colors,
    components,
    fonts: {
      heading: "var(--font-outfit)",
      body: "var(--font-outfit)",
    },
  },
  withProse({
    baseStyle: {
      p: {
        fontSize: "lg",
        lineHeight: "28px",
      },
      a: LinkStyles.baseStyle,
      "li p": {
        margin: "0px",
      },
    },
  })
);
