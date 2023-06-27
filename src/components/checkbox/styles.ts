import { PRIMITIVE_COLORS } from "../../shared";

const getBorderColorProperties = (color: string) => ({
  borderLeftColor: color,
  borderRightColor: color,
  borderTopColor: color,
  borderBottomColor: color,
});

export const getCheckmarkBaseStyles = (isIndeterminate: boolean) => ({
  width: "15px",
  height: "15px",
  boxSizing: "border-box",
  borderLeftWidth: "1px",
  borderRightWidth: "1px",
  borderTopWidth: "1px",
  borderBottomWidth: "1px",
  marginTop: "",
  marginBottom: "",
  marginRight: "",
  marginLeft: "",
  backgroundSize: isIndeterminate ? "8px" : "9px",
  outline: "none",
  backgroundPositionY: isIndeterminate ? "center" : "2px",
  backgroundPositionX: isIndeterminate ? "center" : "2px",
});

export const getCheckmarkBaseModifiedStyles = (isFocused: boolean) => ({
  backgroundColor: isFocused ? PRIMITIVE_COLORS.mono600 : PRIMITIVE_COLORS.black,
  ...getBorderColorProperties(PRIMITIVE_COLORS.primary500),

  ":hover": {
    backgroundColor: PRIMITIVE_COLORS.primary800,
  },
});

export const getCheckmarkErrorModifiedStyles = (isFocused: boolean) => ({
  backgroundColor: isFocused ? PRIMITIVE_COLORS.error500 : PRIMITIVE_COLORS.error700,
  ...getBorderColorProperties(PRIMITIVE_COLORS.error400),

  ":hover": {
    backgroundColor: PRIMITIVE_COLORS.error600,
  },
});

export const getCheckmarkCheckedModifiedStyles = (isFocused: boolean, isError: boolean) => {
  const backgroundColor = isError ? PRIMITIVE_COLORS.error500 : PRIMITIVE_COLORS.white;
  const backgroundColorHover = isError ? PRIMITIVE_COLORS.error600 : PRIMITIVE_COLORS.primary50;
  const backgroundColorFocused = isError ? PRIMITIVE_COLORS.error700 : PRIMITIVE_COLORS.primary100;
  return {
    backgroundColor: isFocused ? backgroundColorFocused : backgroundColor,
    ...getBorderColorProperties("transparent"),

    ":hover": {
      backgroundColor: backgroundColorHover,
    },
  };
};

export const getCheckmarkDisabledModifiedStyles = (isChecked: boolean) => {
  const backgroundColor = isChecked ? PRIMITIVE_COLORS.primary600 : PRIMITIVE_COLORS.primary900;
  const borderColor = isChecked ? "transparent" : PRIMITIVE_COLORS.primary600;
  return {
    backgroundColor,
    ...getBorderColorProperties(borderColor),

    ":hover": {
      backgroundColor,
      ...getBorderColorProperties(borderColor),
    },
  };
};
