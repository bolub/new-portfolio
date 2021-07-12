import { atom } from "recoil";

const linkToPreviewState = atom({
  key: "fontState",
  default: "",
});

export { linkToPreviewState };
