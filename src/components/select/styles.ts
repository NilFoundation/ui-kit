import { SELECT_SIZE } from "./types";
import { expandProperty } from "inline-style-expand-shorthand";

const containerCommonStyles = {
  ...expandProperty("borderRadius", "8px"),
  ...expandProperty("borderWidth", "1px"),
};

export const controlContainerModifiedStyles = {
  [SELECT_SIZE.small]: {
    ...expandProperty("padding", "3px 12px"),
    ...containerCommonStyles,
    height: "32px",
  },
  [SELECT_SIZE.medium]: {
    ...expandProperty("padding", "10px 16px"),
    ...containerCommonStyles,
    height: "46px",
  },
};

export const selectTypographyStyles = {
  [SELECT_SIZE.small]: {
    fontSize: "12px",
    lineHeight: "16px",
  },
  [SELECT_SIZE.medium]: {
    fontSize: "16px",
    lineHeight: "22px",
  },
};
