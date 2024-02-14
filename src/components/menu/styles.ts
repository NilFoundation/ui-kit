import { StyleObject } from "styletron-react";
import { MENU_SIZE } from "./types";
import { PRIMITIVE_COLORS } from "../../shared";
import { withoutBorderStyles } from "../../shared/styles/borderStyles";
import { expandProperty } from "inline-style-expand-shorthand";

export const listStyles = {
  ...withoutBorderStyles,
  ...expandProperty("borderRadius", "8px"),
  ...expandProperty("padding", "8px"),
  ...expandProperty("boxShadow", "none"),
  outline: "none !important",
  backgroundColor: PRIMITIVE_COLORS.gray900,
};

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
    padding: "6px 12px",
    height: "32px",
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
  backgroundColor: PRIMITIVE_COLORS.gray800,
};

const itemDisabledStyles = {
  backgroundColor: "transparent",
  color: PRIMITIVE_COLORS.gray600,
  cursor: "not-allowed",

  ":hover": {
    backgroundColor: "transparent",
    color: PRIMITIVE_COLORS.gray600,
  },

  ":hover > div": {
    color: PRIMITIVE_COLORS.gray600,
  },

  ":hover > svg": {
    fill: PRIMITIVE_COLORS.gray600,
  },
};

const itemHighlightedStyles: StyleObject = {
  backgroundColor: PRIMITIVE_COLORS.gray800,
  color: PRIMITIVE_COLORS.white,
};

export const svgActiveStyles: StyleObject = {
  fill: PRIMITIVE_COLORS.white,
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
    color: PRIMITIVE_COLORS.gray200,
    fontWeight: 500,
    ...expandProperty("borderRadius", "4px"),

    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.gray800,
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
    ...(disabled ? itemDisabledStyles : {}),
  };
};

export const getLinkComponentStyles = () => {
  return {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
    textDecoration: "none",
    color: "inherit",
    gap: "8px",
  };
}

export const getItemParagraphColor = (isActive: boolean, isDisabled: boolean) => {
  if (isDisabled) {
    return PRIMITIVE_COLORS.gray600;
  }
  if (isActive) {
    return PRIMITIVE_COLORS.white;
  }
  return PRIMITIVE_COLORS.gray500;
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
