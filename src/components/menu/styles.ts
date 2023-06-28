import { StyleObject } from "styletron-react";
import { MENU_SIZE } from "./types";
import { PRIMITIVE_COLORS } from "../../shared";

export const headerBaseStyles: StyleObject = {
  display: "flex",
  alignItems: "center",
  paddingLeft: "8px",
  width: "100%",
  height: "36px",
  boxSizing: "border-box",
};

export const headerModifiedStyles = {
  [MENU_SIZE.small]: {
    ...headerBaseStyles,
    height: "36px",
  },
  [MENU_SIZE.medium]: {
    ...headerBaseStyles,
    height: "48px",
  },
  [MENU_SIZE.large]: {
    ...headerBaseStyles,
    height: "56px",
  },
};

const itemModifiedStyles = {
  [MENU_SIZE.small]: {
    padding: "0 16px",
    height: "36px",
  },
  [MENU_SIZE.medium]: {
    padding: "0 16px",
    height: "48px",
  },
  [MENU_SIZE.large]: {
    padding: "0 16px",
    height: "56px",
  },
};

const itemActiveStyles: StyleObject = {
  backgroundColor: PRIMITIVE_COLORS.primary800,
};

export const svgActiveStyles: StyleObject = {
  fill: PRIMITIVE_COLORS.white,
};

export const paragraphActiveStyles: StyleObject = {
  color: PRIMITIVE_COLORS.white,
};

export const getItemContainerStyles = (size: MENU_SIZE, disabled: boolean, ariaSelected: boolean): StyleObject => {
  const activeColor = disabled ? PRIMITIVE_COLORS.primary500 : PRIMITIVE_COLORS.white;

  return {
    display: "flex",
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box",
    cursor: disabled ? "not-allowed" : "pointer",
    borderRadius: "2px",
    gap: "16px",
    ...itemModifiedStyles[size],
    ...(ariaSelected && !disabled ? itemActiveStyles : {}),

    ":hover": {
      backgroundColor: disabled ? "inherit" : PRIMITIVE_COLORS.primary800,
      color: activeColor,
    },

    ":hover > div": {
      color: activeColor,
    },

    ":hover > svg": {
      fill: activeColor,
    },
  };
};

export const ItemEndWrapperStyles: StyleObject = {
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  gap: "16px",
};

export const EmptyStateContainerStyles: StyleObject = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  padding: "36px",
  textAlign: "center",
};

export const emptyStateTitleStyles = {
  margin: "0 0 12px",
  width: "304px",
  maxWidth: "100%",
};

export const emptyStateTextStyles = {
  margin: "0",
  width: "304px",
  maxWidth: "100%",
};
