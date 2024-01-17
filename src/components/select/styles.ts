import { SELECT_SIZE } from "./types";
import { expandProperty } from "inline-style-expand-shorthand";

const containerCommonStyles = {
  ...expandProperty("borderRadius", "8px"),
  ...expandProperty("borderWidth", "1px"),
};

export const controlContainerModifiedStyles = {
  [SELECT_SIZE.small]: {
    ...expandProperty("padding", "4px 12px"),
    ...containerCommonStyles,
    height: "32px",
  },
  [SELECT_SIZE.medium]: {
    ...expandProperty("padding", "12px 16px"),
    ...containerCommonStyles,
    height: "46px",
  },
};
