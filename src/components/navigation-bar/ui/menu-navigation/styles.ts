import { StyleObject } from "styletron-react";
import { COLORS } from "../../../../shared";

const getColor = (isSelected: boolean, isDisabled: boolean) => {
  return isDisabled ? COLORS.gray300 : isSelected ? COLORS.gray500 : COLORS.gray800;
};

export const getListItemStyles = (isSelected: boolean, isDisabled: boolean): StyleObject => {
  const color = getColor(isSelected, isDisabled);

  return {
    color: `${color} !important`,
    cursor: isDisabled ? "not-allowed" : "pointer",
    textDecoration: "none !important",

    ":hover": {
      color: `${isDisabled ? COLORS.gray300 : COLORS.gray600} !important`,
    },

    ":focus": {
      color: `${isDisabled ? COLORS.gray300 : COLORS.gray500} !important`,
    },

    ":active": {
      color: `${isDisabled ? COLORS.gray300 : COLORS.gray500} !important`,
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
    color: `${isDisabled ? COLORS.gray300 : COLORS.gray600} !important`,
  },

  ":focus": {
    color: `${COLORS.gray500} !important`,
  },
});
