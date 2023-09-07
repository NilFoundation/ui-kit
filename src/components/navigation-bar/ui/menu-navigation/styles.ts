import { StyleObject } from "styletron-react";
import { PRIMITIVE_COLORS } from "../../../../shared";

const getColor = (isSelected: boolean, isDisabled: boolean) => {
  return isDisabled ? PRIMITIVE_COLORS.gray300 : isSelected ? PRIMITIVE_COLORS.gray500 : PRIMITIVE_COLORS.gray800;
};

export const getListItemStyles = (isSelected: boolean, isDisabled: boolean): StyleObject => {
  const color = getColor(isSelected, isDisabled);

  return {
    color: `${color} !important`,
    cursor: isDisabled ? "not-allowed" : "pointer",
    textDecoration: "none !important",

    ":hover": {
      color: `${isDisabled ? PRIMITIVE_COLORS.gray300 : PRIMITIVE_COLORS.gray600} !important`,
    },

    ":focus": {
      color: `${isDisabled ? PRIMITIVE_COLORS.gray300 : PRIMITIVE_COLORS.gray500} !important`,
    },

    ":active": {
      color: `${isDisabled ? PRIMITIVE_COLORS.gray300 : PRIMITIVE_COLORS.gray500} !important`,
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
    color: `${isDisabled ? PRIMITIVE_COLORS.gray300 : PRIMITIVE_COLORS.gray600} !important`,
  },

  ":focus": {
    color: `${PRIMITIVE_COLORS.gray500} !important`,
  },
});
