import { PRIMITIVE_COLORS } from "../../shared";
import { SPINNER_SIZE } from "../spinner";
import { BUTTON_SIZE } from "./types";

export const getSpinnerSize = (size: BUTTON_SIZE) => {
  switch (size) {
    case "mini":
      return SPINNER_SIZE.xSmall;
    case "compact":
      return SPINNER_SIZE.small;
    case "large":
      return SPINNER_SIZE.large;
    default:
      return SPINNER_SIZE.medium;
  }
};

export const getBackgroundColor = (kind = "primary") => {
  switch (kind) {
    case "primary":
      return PRIMITIVE_COLORS.primary200;
    case "secondary":
      return PRIMITIVE_COLORS.primary700;
    case "tertiary":
      return "transparent";
    default:
      return PRIMITIVE_COLORS.primary200;
  }
};

export const getHoverBackgroundColor = (kind = "primary", disabled = false) => {
  if (!disabled) {
    switch (kind) {
      case "primary":
        return PRIMITIVE_COLORS.primary100;
      case "secondary":
        return PRIMITIVE_COLORS.primary600;
      case "tertiary":
        return PRIMITIVE_COLORS.primary700;
      default:
        return PRIMITIVE_COLORS.primary100;
    }
  }
};

export const getSquareButtonPaddings = (size: BUTTON_SIZE) => {
  switch (size) {
    case "mini":
      return "8px";
    case "compact":
      return "12px";
    case "large":
      return "16px";
    default:
      return "14px";
  }
};

export const getSpinnerColor = (kind = "primary", disabled: boolean) => {
  if (!disabled) {
    return kind !== "primary" ? PRIMITIVE_COLORS.white : PRIMITIVE_COLORS.black;
  }
  return PRIMITIVE_COLORS.white;
};
