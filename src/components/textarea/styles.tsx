import { PRIMITIVE_COLORS } from "../../shared";
import { TEXTAREA_SIZE } from "./types";
import { expandProperty } from "inline-style-expand-shorthand";

export const inputContainerModifiedStyles = {
  [TEXTAREA_SIZE.small]: {
    ...expandProperty("padding", "16px 12px"),
    minHeight: "72px",
    fontSize: "14px",
    lineHeight: "20px",
  },
  [TEXTAREA_SIZE.medium]: {
    ...expandProperty("padding", "16px"),
    minHeight: "80px",
    fontSize: "16px",
    lineHeight: "24px",
  },
  [TEXTAREA_SIZE.large]: {
    ...expandProperty("padding", "16px"),
    minHeight: "88px",
    fontSize: "18px",
    lineHeight: "28px",
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
  [TEXTAREA_SIZE.large]: {
    paddingTop: "6px",
    paddingRight: "6px",
  },
};

export const clearIconSize = {
  [TEXTAREA_SIZE.small]: "21px",
  [TEXTAREA_SIZE.medium]: "27px",
  [TEXTAREA_SIZE.large]: "31px",
};

export const rootDisabledStyles = {
  ...expandProperty("borderColor", PRIMITIVE_COLORS.gray600),
  backgroundColor: "transparent",
  color: PRIMITIVE_COLORS.gray500,
};

export const inputDisabledStyles = {
  backgroundColor: "transparent",
};
