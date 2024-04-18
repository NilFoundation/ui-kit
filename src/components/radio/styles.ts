import { StyleObject } from "styletron-react";
import { COLORS } from "../../shared";
import { expandProperty } from "inline-style-expand-shorthand";

export const getRadioMarkOuterStyles = (isChecked: boolean, isFocused: boolean): StyleObject => {
  const backgroundColor = isChecked ? COLORS.white : COLORS.gray500;
  const backgroundColorHover = isChecked ? COLORS.gray50 : COLORS.gray500;

  return {
    width: "19px",
    height: "19px",
    backgroundColor: isFocused ? COLORS.gray100 : backgroundColor,
    ...expandProperty("margin", "1px"),

    ":hover": {
      backgroundColor: backgroundColorHover,
    },
  };
};

export const getRadioMarkOuterErrorStyles = (isChecked: boolean, isFocused: boolean): StyleObject => {
  const backgroundColor = isChecked ? COLORS.red500 : COLORS.red400;
  const backgroundColorHover = isChecked ? COLORS.red600 : COLORS.red400;

  return {
    backgroundColor: isFocused ? COLORS.red700 : backgroundColor,

    ":hover": {
      backgroundColor: backgroundColorHover,
    },
  };
};

export const radioMarkOuterDisabledStyles = {
  backgroundColor: COLORS.gray700,

  ":hover": {
    backgroundColor: COLORS.gray700,
  },
};

export const getRadioMarkInnerStyles = (isChecked: boolean): StyleObject => {
  return {
    width: isChecked ? "6px" : "15px",
    height: isChecked ? "6px" : "15px",
    backgroundColor: COLORS.black,
    ...expandProperty("borderRadius", isChecked ? "0" : "50%"),

    ":hover": {
      backgroundColor: COLORS.gray800,
    },
  };
};

export const getRadioMarkInnerErrorStyles = (isChecked: boolean): StyleObject => {
  return {
    backgroundColor: isChecked ? COLORS.black : COLORS.red700,

    ":hover": {
      backgroundColor: COLORS.red600,
    },
  };
};

export const radioMarkInnerDisabledStyles = {
  backgroundColor: COLORS.black,

  ":hover": {
    backgroundColor: COLORS.black,
  },
};
