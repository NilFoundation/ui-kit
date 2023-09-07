import { PRIMITIVE_COLORS } from "../../shared";
import { expandProperty } from "inline-style-expand-shorthand";

const getBorderColorProperties = (color: string) => ({
  ...expandProperty("borderColor", color),
});

export const getCheckmarkBaseStyles = (isIndeterminate: boolean) => ({
  width: "15px",
  height: "15px",
  boxSizing: "border-box",
  ...expandProperty("borderWidth", "1px"),
  ...expandProperty("margin", 0),
  backgroundSize: isIndeterminate ? "8px" : "9px",
  outline: "none",
  backgroundPositionY: isIndeterminate ? "center" : "2px",
  backgroundPositionX: isIndeterminate ? "center" : "2px",
});

export const getCheckmarkBaseModifiedStyles = (isFocused: boolean) => ({
  backgroundColor: isFocused ? PRIMITIVE_COLORS.mono600 : PRIMITIVE_COLORS.black,
  ...getBorderColorProperties(PRIMITIVE_COLORS.gray500),

  ":hover": {
    backgroundColor: PRIMITIVE_COLORS.gray800,
  },
});

export const getCheckmarkErrorModifiedStyles = (isFocused: boolean) => ({
  backgroundColor: isFocused ? PRIMITIVE_COLORS.red500 : PRIMITIVE_COLORS.red700,
  ...getBorderColorProperties(PRIMITIVE_COLORS.red400),

  ":hover": {
    backgroundColor: PRIMITIVE_COLORS.red600,
  },
});

export const getCheckmarkCheckedModifiedStyles = (isFocused: boolean, isError: boolean) => {
  const backgroundColor = isError ? PRIMITIVE_COLORS.red500 : PRIMITIVE_COLORS.white;
  const backgroundColorHover = isError ? PRIMITIVE_COLORS.red600 : PRIMITIVE_COLORS.gray50;
  const backgroundColorFocused = isError ? PRIMITIVE_COLORS.red700 : PRIMITIVE_COLORS.gray100;
  return {
    backgroundColor: isFocused ? backgroundColorFocused : backgroundColor,
    ...getBorderColorProperties("transparent"),

    ":hover": {
      backgroundColor: backgroundColorHover,
    },
  };
};

export const getCheckmarkDisabledModifiedStyles = (isChecked: boolean) => {
  const backgroundColor = isChecked ? PRIMITIVE_COLORS.gray600 : PRIMITIVE_COLORS.gray900;
  const borderColor = isChecked ? "transparent" : PRIMITIVE_COLORS.gray600;
  return {
    backgroundColor,
    ...getBorderColorProperties(borderColor),

    ":hover": {
      backgroundColor,
      ...getBorderColorProperties(borderColor),
    },
  };
};
