import { extendTheme } from "@chakra-ui/react";
import { components } from "./components";

const styles = {
  global: {
    "html, body": {
      fontFamily: "Jost",
    },

    "h1, h2, h3, h4, h5, h6": {
      fontFamily: "Space Grotesk",
    },
  },
};

const colors = {
  brand: {
    50: "#ffe4ed",
    100: "#fbb9c8",
    200: "#f28da4",
    300: "#ec607f",
    400: "#e5345b",
    500: "#cb1a41",
    600: "#9f1233",
    700: "#730b23",
    800: "#470415",
    900: "#1e0006",
  },
};

export const customTheme = extendTheme({ colors, styles, components });
