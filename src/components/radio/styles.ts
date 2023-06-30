import { StyleObject } from "styletron-react";
import { PRIMITIVE_COLORS } from "../../shared";
import { expandProperty } from "inline-style-expand-shorthand";

export const getRadioMarkOuterStyles = (isChecked: boolean, isFocused: boolean): StyleObject => {
  const backgroundColor = isChecked ? PRIMITIVE_COLORS.white : PRIMITIVE_COLORS.primary500;
  const backgroundColorHover = isChecked ? PRIMITIVE_COLORS.primary50 : PRIMITIVE_COLORS.primary500;

  return {
    width: "19px",
    height: "19px",
    backgroundColor: isFocused ? PRIMITIVE_COLORS.primary100 : backgroundColor,
    ...expandProperty("margin", "1px"),

    ":hover": {
      backgroundColor: backgroundColorHover,
    },
  };
};

export const getRadioMarkOuterErrorStyles = (isChecked: boolean, isFocused: boolean): StyleObject => {
  const backgroundColor = isChecked ? PRIMITIVE_COLORS.error500 : PRIMITIVE_COLORS.error400;
  const backgroundColorHover = isChecked ? PRIMITIVE_COLORS.error600 : PRIMITIVE_COLORS.error400;

  return {
    backgroundColor: isFocused ? PRIMITIVE_COLORS.error700 : backgroundColor,

    ":hover": {
      backgroundColor: backgroundColorHover,
    },
  };
};

export const radioMarkOuterDisabledStyles = {
  backgroundColor: PRIMITIVE_COLORS.primary700,

  ":hover": {
    backgroundColor: PRIMITIVE_COLORS.primary700,
  },
};

export const getRadioMarkInnerStyles = (isChecked: boolean): StyleObject => {
  return {
    width: isChecked ? "6px" : "15px",
    height: isChecked ? "6px" : "15px",
    backgroundColor: PRIMITIVE_COLORS.black,
    ...expandProperty("borderRadius", isChecked ? "0" : "50%"),

    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.primary800,
    },
  };
};

export const getRadioMarkInnerErrorStyles = (isChecked: boolean): StyleObject => {
  return {
    backgroundColor: isChecked ? PRIMITIVE_COLORS.black : PRIMITIVE_COLORS.error700,

    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.error600,
    },
  };
};

export const radioMarkInnerDisabledStyles = {
  backgroundColor: PRIMITIVE_COLORS.black,

  ":hover": {
    backgroundColor: PRIMITIVE_COLORS.black,
  },
};
