import { PRIMITIVE_COLORS } from "../../shared";
import { TEXTAREA_SIZE } from "./types";

export const inputContainerModifiedStyles = {
  [TEXTAREA_SIZE.small]: {
    paddingTop: "16px",
    paddingRight: "12px",
    paddingBottom: "16px",
    paddingLeft: "12px",
    minHeight: "72px",
    fontSize: "14px",
    lineHeight: "20px",
  },
  [TEXTAREA_SIZE.medium]: {
    paddingTop: "16px",
    paddingRight: "16px",
    paddingBottom: "16px",
    paddingLeft: "16px",
    minHeight: "80px",
    fontSize: "16px",
    lineHeight: "24px",
  },
  [TEXTAREA_SIZE.large]: {
    paddingTop: "16px",
    paddingRight: "16px",
    paddingBottom: "16px",
    paddingLeft: "16px",
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
  backgroundColor: "transparent",
  borderColor: PRIMITIVE_COLORS.primary600,
  color: PRIMITIVE_COLORS.primary500,
};

export const inputDisabledStyles = {
  backgroundColor: "transparent",
};
