import { INPUT_SIZE } from "./types";
import { PRIMITIVE_COLORS } from "../../shared";
import { BorderRadiusStyles } from "../../shared/styles/border";
import { expandProperty } from "inline-style-expand-shorthand";

const inputContainerBaseStyles = {
  ...BorderRadiusStyles,
};
export const inputContainerModifiedStyles = {
  [INPUT_SIZE.small]: {
    ...inputContainerBaseStyles,
    ...expandProperty("padding", "0 12px"),
  },
  [INPUT_SIZE.medium]: {
    ...inputContainerBaseStyles,
    ...expandProperty("padding", "0 14px"),
  },
  [INPUT_SIZE.large]: {
    ...inputContainerBaseStyles,
    ...expandProperty("padding", "0 16px"),
  },
};

export const inputModifiedStyles = {
  [INPUT_SIZE.small]: {
    fontSize: "14px",
    lineHeight: "20px",
    ...expandProperty("padding", "8px 0"),
  },
  [INPUT_SIZE.medium]: {
    fontSize: "16px",
    lineHeight: "24px",
    ...expandProperty("padding", "12px 0"),
  },
  [INPUT_SIZE.large]: {
    fontSize: "18px",
    lineHeight: "28px",
    ...expandProperty("padding", "14px 0"),
  },
};

export const inputDisabledStyles = {
  backgroundColor: "transparent",
  ...expandProperty("borderColor", PRIMITIVE_COLORS.primary600),
  color: PRIMITIVE_COLORS.primary500,
};

export const spinnerStyles = {
  marginLeft: "12px",
};
