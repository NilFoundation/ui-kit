import { StyleObject } from "styletron-standard";
import { COLORS } from "../../shared";
import { expandProperty } from "inline-style-expand-shorthand";

export const getSwitchBackgroundStyles = (isChecked: boolean, $disabled: boolean): StyleObject => {
  const transition = expandProperty("transition", "background-color 0.15s ease-in");

  if ($disabled) {
    return {
      backgroundColor: COLORS.gray500,
      ...transition,
    };
  }

  if (isChecked) {
    return {
      backgroundColor: COLORS.green200,
      ...transition,
      ":hover": {
        backgroundColor: COLORS.green100,
      },
      ":active": {
        backgroundColor: COLORS.green50,
      },
    };
  }

  return {
    backgroundColor: COLORS.gray200,
    ...transition,
    ":hover": {
      backgroundColor: COLORS.gray100,
    },
    ":active": {
      backgroundColor: COLORS.gray50,
    },
  };
};
