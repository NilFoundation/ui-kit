import { StyleObject } from "styletron-react";
import { MENU_SIZE } from "./types";
import { PRIMITIVE_COLORS } from "../../shared";
import { BorderRadiusStyles } from "../../shared/styles/border";

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

const itemSelectedStyles: StyleObject = {
  backgroundColor: PRIMITIVE_COLORS.primary800,
};

const getItemDisabledStyles = (isLight: boolean) => {
  const color = isLight ? PRIMITIVE_COLORS.primary300 : PRIMITIVE_COLORS.primary600;

  return {
    backgroundColor: "transparent",
    color: PRIMITIVE_COLORS.primary600,
    cursor: "not-allowed",

    ":hover": {
      backgroundColor: "transparent",
      color,
    },

    ":hover > div": {
      color,
    },

    ":hover > svg": {
      fill: color,
    },
  };
};

const itemHighlightedStyles: StyleObject = {
  backgroundColor: PRIMITIVE_COLORS.primary800,
  color: PRIMITIVE_COLORS.white,
};

export const svgActiveStyles: StyleObject = {
  fill: PRIMITIVE_COLORS.white,
};

export const getItemContainerStyles = (
  size: MENU_SIZE,
  disabled: boolean,
  isHighlighted: boolean,
  ariaSelected: boolean,
  isLight: boolean
): StyleObject => {
  return {
    display: "flex",
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box",
    cursor: "pointer",
    gap: "16px",
    color: PRIMITIVE_COLORS.primary500,
    ...BorderRadiusStyles,

    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.primary800,
      color: PRIMITIVE_COLORS.white,
    },

    ":hover > div": {
      color: PRIMITIVE_COLORS.white,
    },

    ":hover > svg": {
      fill: PRIMITIVE_COLORS.white,
    },

    ...itemModifiedStyles[size],
    ...(ariaSelected ? itemSelectedStyles : {}),
    ...(isHighlighted ? itemHighlightedStyles : {}),
    ...(disabled ? getItemDisabledStyles(isLight) : {}),
  };
};

export const itemTypographyStyles = {
  textDecoration: "none",
  width: "100%",
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
