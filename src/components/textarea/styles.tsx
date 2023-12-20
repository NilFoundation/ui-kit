import { TEXTAREA_SIZE } from "./types";
import { expandProperty } from "inline-style-expand-shorthand";

export const inputContainerStyles = {
  ...expandProperty("padding", "0"),
  ...expandProperty("borderRadius", "2px"),
  ...expandProperty("borderWidth", "1px"),
};

export const inputModifiedStyles = {
  [TEXTAREA_SIZE.small]: {
    ...expandProperty("padding", "8px 12px"),
    fontSize: "12px",
    lineHeight: "16px",
    height: "46px",
  },
  [TEXTAREA_SIZE.medium]: {
    ...expandProperty("padding", "12px 16px"),
    fontSize: "16px",
    lineHeight: "22px",
    height: "66px",
  },
};

export const clearIconContainerModifiedStyles = {
  [TEXTAREA_SIZE.small]: {
    paddingTop: "11px",
    paddingRight: "7px",
  },
  [TEXTAREA_SIZE.medium]: {
    paddingTop: "9px",
    paddingRight: "9px",
  },
};

export const clearIconSize = {
  [TEXTAREA_SIZE.small]: "21px",
  [TEXTAREA_SIZE.medium]: "27px",
};
