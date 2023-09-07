import { StyleObject } from "styletron-react";
import { PRIMITIVE_COLORS } from "../../shared";
import { expandProperty } from "inline-style-expand-shorthand";

export const getRadioMarkOuterStyles = (isChecked: boolean, isFocused: boolean): StyleObject => {
  const backgroundColor = isChecked ? PRIMITIVE_COLORS.white : PRIMITIVE_COLORS.gray500;
  const backgroundColorHover = isChecked ? PRIMITIVE_COLORS.gray50 : PRIMITIVE_COLORS.gray500;

  return {
    width: "19px",
    height: "19px",
    backgroundColor: isFocused ? PRIMITIVE_COLORS.gray100 : backgroundColor,
    ...expandProperty("margin", "1px"),

    ":hover": {
      backgroundColor: backgroundColorHover,
    },
  };
};

export const getRadioMarkOuterErrorStyles = (isChecked: boolean, isFocused: boolean): StyleObject => {
  const backgroundColor = isChecked ? PRIMITIVE_COLORS.red500 : PRIMITIVE_COLORS.red400;
  const backgroundColorHover = isChecked ? PRIMITIVE_COLORS.red600 : PRIMITIVE_COLORS.red400;

  return {
    backgroundColor: isFocused ? PRIMITIVE_COLORS.red700 : backgroundColor,

    ":hover": {
      backgroundColor: backgroundColorHover,
    },
  };
};

export const radioMarkOuterDisabledStyles = {
  backgroundColor: PRIMITIVE_COLORS.gray700,

  ":hover": {
    backgroundColor: PRIMITIVE_COLORS.gray700,
  },
};

export const getRadioMarkInnerStyles = (isChecked: boolean): StyleObject => {
  return {
    width: isChecked ? "6px" : "15px",
    height: isChecked ? "6px" : "15px",
    backgroundColor: PRIMITIVE_COLORS.black,
    ...expandProperty("borderRadius", isChecked ? "0" : "50%"),

    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.gray800,
    },
  };
};

export const getRadioMarkInnerErrorStyles = (isChecked: boolean): StyleObject => {
  return {
    backgroundColor: isChecked ? PRIMITIVE_COLORS.black : PRIMITIVE_COLORS.red700,

    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.red600,
    },
  };
};

export const radioMarkInnerDisabledStyles = {
  backgroundColor: PRIMITIVE_COLORS.black,

  ":hover": {
    backgroundColor: PRIMITIVE_COLORS.black,
  },
};
