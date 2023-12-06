import { SELECT_SIZE } from "./types";
import { expandProperty } from "inline-style-expand-shorthand";

export const controlContainerModifiedStyles = {
  [SELECT_SIZE.small]: {
    ...expandProperty("padding", "8px 12px"),
    ...expandProperty("borderRadius", "2px"),
  },
  [SELECT_SIZE.medium]: {
    ...expandProperty("padding", "12px 16px"),
    ...expandProperty("borderRadius", "2px"),
  },
};

export const typographyModifiedStyles = {
  [SELECT_SIZE.small]: {
    fontSize: "12px",
  },
  [SELECT_SIZE.medium]: {
    fontSize: "16px",
  },
};
