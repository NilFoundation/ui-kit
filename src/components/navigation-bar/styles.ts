import { PRIMITIVE_COLORS } from "../../shared";
import { StyleObject } from "styletron-react";
import { expandProperty } from "inline-style-expand-shorthand";
import { MediaQuery } from "baseui/theme";

export const getNavigationContainerStyles = (fixed?: boolean): StyleObject => {
  return {
    position: fixed ? "fixed" : "relative",
    left: "0",
    top: "0",
    width: "100%",
    minHeight: "44px",
    boxSizing: "border-box",
    ...expandProperty("padding", "0 24px"),
  };
};

export const navigationWrapperStyles: StyleObject = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  width: "100%",
  height: "100%",
  minHeight: "44px",
  backgroundColor: PRIMITIVE_COLORS.white,
  boxSizing: "border-box",
  ...expandProperty("padding", "0 16px"),
};

export const navigationNavWrapperStyles: StyleObject = {};

export const getNavigationListStyles = (media: MediaQuery): StyleObject => ({
  display: "none",

  [media.medium]: {
    display: "flex",
    alignItems: "center",
    listStyle: "none",
    ...expandProperty("padding", "0"),
    ...expandProperty("margin", "0"),
    gridGap: "40px",
  },
});

export const getNavigationBurgerStyles = (media: MediaQuery): StyleObject => ({
  [media.medium]: {
    display: "none",
  },

  [media.small]: {
    display: "block",
  },

  button: {
    width: "24px",
    height: "24px",
  },
});

const treeLabelDisabledStyles: StyleObject = {
  cursor: "not-allowed",
  color: `${PRIMITIVE_COLORS.gray300} !important`,

  ":hover": {
    color: `${PRIMITIVE_COLORS.gray300} !important`,
  },
};

export const getTreeLabelStyles = (isSelected: boolean, disabled: boolean): StyleObject => {
  return {
    color: `${isSelected ? PRIMITIVE_COLORS.gray500 : PRIMITIVE_COLORS.gray800} !important`,
    textDecoration: "none !important",

    ":hover": {
      color: `${isSelected ? PRIMITIVE_COLORS.gray500 : PRIMITIVE_COLORS.gray600} !important`,
    },

    ...(disabled ? treeLabelDisabledStyles : {}),
  };
};
