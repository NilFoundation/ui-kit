import { BUTTON_SIZE } from "../button";
import { expandProperty } from "inline-style-expand-shorthand";

export const buttonIconPaddingStyles = {
  [BUTTON_SIZE.compact]: {
    ...expandProperty("padding", "4px"),
  },
  [BUTTON_SIZE.default]: {
    ...expandProperty("padding", "8px"),
  },
  [BUTTON_SIZE.large]: {
    ...expandProperty("padding", "12px"),
  },
};
