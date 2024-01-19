import { StyleObject } from "styletron-standard";
import { PRIMITIVE_COLORS } from "../../shared";
import { expandProperty } from "inline-style-expand-shorthand";

export const getSwitchBackgroundStyles = (isChecked: boolean, $disabled: boolean): StyleObject => {
  const transition = expandProperty("transition", "background-color 0.15s ease-in");

  if ($disabled) {
    return {
      backgroundColor: PRIMITIVE_COLORS.gray500,
      ...transition,
    };
  }

  if (isChecked) {
    return {
      backgroundColor: PRIMITIVE_COLORS.green200,
      ...transition,
      ":hover": {
        backgroundColor: PRIMITIVE_COLORS.green100,
      },
      ":active": {
        backgroundColor: PRIMITIVE_COLORS.green50,
      },
    };
  }

  return {
    backgroundColor: PRIMITIVE_COLORS.gray200,
    ...transition,
    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.gray100,
    },
    ":active": {
      backgroundColor: PRIMITIVE_COLORS.gray50,
    },
  };
};
