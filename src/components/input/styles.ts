import { INPUT_SIZE } from "./types";
import { expandProperty } from "inline-style-expand-shorthand";

export const inputContainerModifiedStyles = {
  [INPUT_SIZE.small]: {
    height: "32px",
    ...expandProperty("borderRadius", "2px"),
    ...expandProperty("padding", "0 12px"),
  },
  [INPUT_SIZE.medium]: {
    height: "46px",
    ...expandProperty("borderRadius", "2px"),
    ...expandProperty("padding", "0 16px"),
  },
};

export const inputModifiedStyles = {
  [INPUT_SIZE.small]: {
    fontSize: "12px",
    lineHeight: "16px",
    ...expandProperty("padding", "8px 0"),
  },
  [INPUT_SIZE.medium]: {
    fontSize: "16px",
    lineHeight: "22px",
    ...expandProperty("padding", "12px 0"),
  },
};

export const spinnerStyles = {
  marginLeft: "12px",
};
