import { atom } from "recoil";

let defaultHeading, defaultBody;

if (typeof window !== "undefined") {
  defaultHeading = localStorage.getItem("fontHeading") || "Space Grotesk";
  defaultBody = localStorage.getItem("fontBody") || "Jost";
}

const fontState = atom({
  key: "fontState",
  default: {
    heading: defaultHeading,
    body: defaultBody,
  },
});

export { fontState };
