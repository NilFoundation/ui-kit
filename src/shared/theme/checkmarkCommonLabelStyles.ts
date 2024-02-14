import { expandProperty } from "inline-style-expand-shorthand";
import { StyleObject } from "styletron-standard";
import { PRIMITIVE_COLORS } from "./colors";

export const getCheckmarkLabelStyles = (disabled: boolean): StyleObject => {
  const transition = expandProperty("transition", "color 0.15sease-in");

  if (disabled) {
    return {
      color: PRIMITIVE_COLORS.gray500,
      ...transition,
    };
  }

  return {
    color: PRIMITIVE_COLORS.gray50,
    ...transition,
  };
};
