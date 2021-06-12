import { color, extendTheme } from "@chakra-ui/react";
import { components } from "./components";
import { config } from "./config";

let defaultHeading, defaultBody, styles, colors, colorMode;

if (typeof window !== "undefined") {
  defaultHeading = localStorage.getItem("fontHeading") || "Space Grotesk";
  defaultBody = localStorage.getItem("fontBody") || "Jost";
  colorMode = localStorage.getItem("chakra-ui-color-mode");

  styles = {
    global: {
      "html, body": {
        fontFamily: defaultBody,
        scrollBehavior: "smooth",
      },

      "h1, h2, h3, h4, h5, h6": {
        fontFamily: defaultHeading,
      },

      code: {
        width: "100%",
        display: "block",
        overflowWrap: "break-word",
        whiteSpace: "pre-wrap",
        background: "#f2f2f2",
        fontSize: "14px",
        color: colorMode === "dark" && "black",
        p: 3,
      },

      ".rs-container": {
        display: "flex",
        // bg: "red.500",
        justifyContent: "center",
      },

      ".rs-play, .rs-stop, .rs-pause, .rs-resume": {
        width: "40px",
        height: "40px",
        borderRadius: "100px !important",
        padding: "4px",
        marginRight: "10px",
        backgroundColor: "#f2f2f2 !important",
        color: "#cb1a41 !important",
        border: "1px solid #cb1a41 !important",
      },
    },
  };

  colors = {
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
    red: {
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
}

export const customTheme = extendTheme({ colors, styles, components, config });
