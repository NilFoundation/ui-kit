import { expandProperty } from "inline-style-expand-shorthand";
import { StyleObject } from "styletron-standard";
import { COLORS } from "./colors";

export const getCheckmarkLabelStyles = (disabled: boolean): StyleObject => {
  const transition = expandProperty("transition", "color 0.15sease-in");

  if (disabled) {
    return {
      color: COLORS.gray500,
      ...transition,
    };
  }

  return {
    color: COLORS.gray50,
    ...transition,
  };
};
