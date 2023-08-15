import { StyleObject } from "styletron-react";
import { PRIMITIVE_COLORS } from "../../../../shared";

const getColor = (isSelected: boolean, isDisabled: boolean) => {
  return isDisabled
    ? PRIMITIVE_COLORS.primary300
    : isSelected
    ? PRIMITIVE_COLORS.primary500
    : PRIMITIVE_COLORS.primary800;
};

export const getListItemStyles = (isSelected: boolean, isDisabled: boolean): StyleObject => {
  const color = getColor(isSelected, isDisabled);

  return {
    color: `${color}`,
    cursor: isDisabled ? "not-allowed" : "pointer",
    textDecoration: "none",

    ":hover": {
      color: `${isDisabled ? PRIMITIVE_COLORS.primary300 : PRIMITIVE_COLORS.primary600} !important`,
    },

    ":focus": {
      color: `${PRIMITIVE_COLORS.primary500} !important`,
    },

    ":active": {
      color: `${PRIMITIVE_COLORS.primary500} !important`,
    },
  };
};

export const getButtonStyles = (isSelected: boolean, isDisabled: boolean) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "none",
  background: "none",
  cursor: isDisabled ? "not-allowed" : "pointer",
  color: getColor(isSelected, isDisabled),

  ":hover": {
    color: `${isDisabled ? PRIMITIVE_COLORS.primary300 : PRIMITIVE_COLORS.primary600} !important`,
  },

  ":focus": {
    color: `${PRIMITIVE_COLORS.primary500} !important`,
  },
});
