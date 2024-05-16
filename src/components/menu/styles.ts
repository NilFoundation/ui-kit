import { StyleObject } from "styletron-react";
import { MENU_SIZE } from "./types";
import { COLORS } from "../../shared";
import { withoutBorderStyles } from "../../shared/styles/borderStyles";
import { expandProperty } from "inline-style-expand-shorthand";

export const listStyles = {
  ...withoutBorderStyles,
  ...expandProperty("borderRadius", "8px"),
  ...expandProperty("padding", "8px"),
  boxShadow: "none",
  outline: "none !important",
  backgroundColor: COLORS.gray800,
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

const linkComponentModifiedStyles = {
  [MENU_SIZE.small]: {
    ...expandProperty("margin", "-6px -12px"),
    ...expandProperty("padding", "6px 12px"),
  },
  [MENU_SIZE.medium]: {
    ...expandProperty("margin", "-6px -16px"),
    ...expandProperty("padding", "0 16px"),
  },
  [MENU_SIZE.large]: {
    ...expandProperty("margin", "-6px -16px"),
    ...expandProperty("padding", "0 16px"),
  },
};

const ativeItemStyles: StyleObject = {
  backgroundColor: COLORS.gray600,
  color: COLORS.gray50,
  fill: COLORS.gray50,
};

export const svgStyles: StyleObject = {
  fill: "inherit",
};

export const getItemContainerStyles = (
  size: MENU_SIZE,
  disabled: boolean,
  isHighlighted: boolean,
  selected: boolean,
  isActive: boolean
): StyleObject => {
  const constantStyles = {
    display: "flex",
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box",
    cursor: "pointer",
    gap: "8px",
    color: COLORS.gray200,
    backgroundColor: "transparent",
    fontWeight: 500,
    ...expandProperty("borderRadius", "4px"),
    ...expandProperty("transition", "background-color 0.15s, color 0.15s, fill 0.15s"),
    ...itemModifiedStyles[size],
  } as const;

  if (disabled) {
    return {
      ...constantStyles,
      backgroundColor: "transparent",
      color: COLORS.gray600,
      cursor: "not-allowed",
    };
  }

  if (selected || isHighlighted || isActive) {
    return {
      ...constantStyles,
      ...ativeItemStyles,
    };
  }

  return {
    ...constantStyles,
    ":hover": {
      backgroundColor: COLORS.gray700,
      color: COLORS.gray50,
      fill: COLORS.gray50,
    },
  };
};

export const getLinkComponentStyles = (size: MENU_SIZE): StyleObject => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "100%",
  gap: "8px",
  backgroundColor: "transparent",
  ...linkComponentModifiedStyles[size],
});

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
  ...expandProperty("margin", "8px 0"),
};
