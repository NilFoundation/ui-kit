import { COLORS } from "../../shared";
import { withoutMarginStyles } from "../../shared/styles/withoutMarginStyles";
import { expandProperty } from "inline-style-expand-shorthand";

export const tabPrimaryBaseStyles = {
  ...withoutMarginStyles,
  fontSize: "12px",
  paddingLeft: "24px",
  paddingRight: "24px",
  color: COLORS.gray50,

  ":hover": {
    borderColor: COLORS.gray700,
    backgroundColor: COLORS.gray800,
  },
};

export const tabPrimaryStyles = {
  ...tabPrimaryBaseStyles,
  borderBottom: `4px solid ${COLORS.gray500}`,
};

export const tabPrimaryVerticalStyles = {
  ...tabPrimaryBaseStyles,
  borderRight: `4px solid ${COLORS.gray500}`,
  borderBottom: "none",
};

export const tabPrimaryActiveStyles = {
  borderColor: `${COLORS.gray50} !important`,

  ":hover": {
    borderColor: `${COLORS.gray50} !important`,
  },
};

export const tabPrimaryDisabledStyles = {
  borderColor: COLORS.gray500,
  color: COLORS.gray600,

  ":hover": {
    borderColor: COLORS.gray500,
    backgroundColor: "transparent",
  },
};

export const tabsBarStyles = {
  backgroundColor: "transparent",
};

export const tabContentStyles = {
  color: COLORS.gray50,
  ...expandProperty("padding", "24px"),
};

export const contentWrapperStyles = {
  display: "flex",
  alignItems: "center",
  gridGap: "8px",
  boxSizing: "border-box",
} as const;

export const contentWrapperSecondaryStyles = {
  ...contentWrapperStyles,
  height: "32px",
  ...expandProperty("padding", "8px 16px"),
};

export const tabSecondaryStyles = {
  color: COLORS.gray200,
  height: "32px",
  background: "transparent",
  ...expandProperty("borderRadius", "8px"),
  ...expandProperty("padding", "0"),
  ...expandProperty("margin", "4px"),
  borderBottom: "none",
  fontSize: "12px",
  lineHeight: "16px",
  transition: "background-color 0.15s, color 0.15s",

  ":hover": {
    backgroundColor: COLORS.gray800,
  },
};

export const tabSecondaryActiveStyles = {
  backgroundColor: COLORS.gray50,
  color: COLORS.gray900,

  ":hover": {
    backgroundColor: COLORS.gray50,
    color: COLORS.gray900,
  },
};

export const tabSecondaryDisabledStyles = {
  color: COLORS.gray500,
  backgroundColor: "transparent",

  ":hover": {
    backgroundColor: "transparent",
  },
};
