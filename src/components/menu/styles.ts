import { StyleObject } from "styletron-react";
import { MENU_SIZE } from "./types";
import { COLORS } from "../../shared";
import { withoutBorderStyles } from "../../shared/styles/borderStyles";
import { expandProperty } from "inline-style-expand-shorthand";

export const listStyles = {
  ...withoutBorderStyles,
  ...expandProperty("borderRadius", "8px"),
  ...expandProperty("padding", "8px"),
  ...expandProperty("boxShadow", "none"),
  outline: "none !important",
  backgroundColor: COLORS.gray900,
};

export const headerBaseStyles: StyleObject = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  boxSizing: "border-box",
};

export const headerModifiedStyles = {
  [MENU_SIZE.small]: {
    ...headerBaseStyles,
    height: "24px",
    ...expandProperty("padding", "4px 12px"),
  },
  [MENU_SIZE.medium]: {
    ...headerBaseStyles,
    height: "32px",
    ...expandProperty("padding", "4px 16px"),
  },
  [MENU_SIZE.large]: {
    ...headerBaseStyles,
    height: "40px",
    ...expandProperty("padding", "4px 16px"),
  },
};

const itemModifiedStyles = {
  [MENU_SIZE.small]: {
    padding: "6px 12px",
    ...expandProperty("padding", "6px 12px"),
    height: "32px",
  },
  [MENU_SIZE.medium]: {
    ...expandProperty("padding", "0 16px"),
    height: "48px",
  },
  [MENU_SIZE.large]: {
    ...expandProperty("padding", "0 16px"),
    height: "56px",
  },
};

const itemSelectedStyles: StyleObject = {
  backgroundColor: COLORS.gray800,
};

const itemDisabledStyles = {
  backgroundColor: "transparent",
  color: COLORS.gray600,
  cursor: "not-allowed",

  ":hover": {
    backgroundColor: "transparent",
    color: COLORS.gray600,
  },

  ":hover > div": {
    color: COLORS.gray600,
  },

  ":hover > svg": {
    fill: COLORS.gray600,
  },
};

const itemHighlightedStyles: StyleObject = {
  backgroundColor: COLORS.gray800,
  color: COLORS.white,
};

export const svgActiveStyles: StyleObject = {
  fill: COLORS.white,
};

export const getItemContainerStyles = (
  size: MENU_SIZE,
  disabled: boolean,
  isHighlighted: boolean,
  ariaSelected: boolean
): StyleObject => {
  return {
    display: "flex",
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box",
    cursor: "pointer",
    gap: "8px",
    color: COLORS.gray200,
    fontWeight: 500,
    ...expandProperty("borderRadius", "4px"),
    ...expandProperty("transition", "color 0.15s"),

    ":hover": {
      backgroundColor: COLORS.gray800,
      color: COLORS.white,
    },

    ":hover > div": {
      color: COLORS.white,
    },

    ":hover > svg": {
      fill: COLORS.white,
    },

    ...itemModifiedStyles[size],
    ...(ariaSelected ? itemSelectedStyles : {}),
    ...(isHighlighted ? itemHighlightedStyles : {}),
    ...(disabled ? itemDisabledStyles : {}),
  };
};

export const LinkComponentStyles = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "100%",
  gap: "8px",
};

export const getItemParagraphColor = (isActive: boolean, isDisabled: boolean) => {
  if (isDisabled) {
    return COLORS.gray600;
  }
  if (isActive) {
    return COLORS.gray50;
  }
  return COLORS.gray200;
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

export const menuDividerStyles = {
  borderBottom: `1px solid ${COLORS.gray700}`,
  ...expandProperty("margin", "4px 0"),
};
