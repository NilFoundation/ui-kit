import { INPUT_SIZE } from "./types";
import { PRIMITIVE_COLORS } from "../../shared";

export const inputContainerModifiedStyles = {
  [INPUT_SIZE.small]: {
    padding: "0 12px",
  },
  [INPUT_SIZE.medium]: {
    padding: "0 14px",
  },
  [INPUT_SIZE.large]: {
    padding: "0 16px",
  },
};

export const inputModifiedStyles = {
  [INPUT_SIZE.small]: {
    fontSize: "14px",
    lineHeight: "20px",
    padding: "8px 0",
  },
  [INPUT_SIZE.medium]: {
    fontSize: "16px",
    lineHeight: "24px",
    padding: "12px 0",
  },
  [INPUT_SIZE.large]: {
    fontSize: "18px",
    lineHeight: "28px",
    padding: "14px 0",
  },
};

export const inputDisabledStyles = {
  backgroundColor: "transparent",
  borderColor: PRIMITIVE_COLORS.primary600,
  color: PRIMITIVE_COLORS.primary500,
};

export const spinnerStyles = {
  marginLeft: "12px",
};
