import { atom } from "recoil";

let defaultHeading = "Space Grotesk",
  defaultBody = "Jost";

if (typeof window !== "undefined") {
  defaultHeading = localStorage.getItem("fontHeading");
  defaultBody = localStorage.getItem("fontBody");
}

const fontState = atom({
  key: "fontState",
  default: {
    heading: defaultHeading,
    body: defaultBody,
  },
});

export { fontState };
