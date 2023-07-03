import { PRIMITIVE_COLORS } from "../../shared";
import { MarginStyles } from "../../shared/styles/margin";
import { expandProperty } from "inline-style-expand-shorthand";

export const tabBaseStyles = {
  ...MarginStyles,
  paddingLeft: "24px",
  paddingRight: "24px",
  color: PRIMITIVE_COLORS.white,

  ":hover": {
    borderColor: PRIMITIVE_COLORS.primary700,
    backgroundColor: PRIMITIVE_COLORS.primary800,
  },
};

export const tabStyles = {
  ...tabBaseStyles,
  borderBottom: `4px solid ${PRIMITIVE_COLORS.primary500}`,
};

export const tabVerticalStyles = {
  ...tabBaseStyles,
  borderRight: `4px solid ${PRIMITIVE_COLORS.primary500}`,
  borderBottom: "none",
};

export const tabActiveStyles = {
  borderColor: `${PRIMITIVE_COLORS.white} !important`,

  ":hover": {
    borderColor: `${PRIMITIVE_COLORS.white} !important`,
  },
};

export const tabDisabledStyles = {
  borderColor: PRIMITIVE_COLORS.primary500,
  color: PRIMITIVE_COLORS.primary600,

  ":hover": {
    borderColor: PRIMITIVE_COLORS.primary500,
    backgroundColor: "transparent",
  },
};

export const tabsBarStyles = {
  backgroundColor: "transparent",
};

export const tabContentStyles = {
  color: PRIMITIVE_COLORS.white,
  ...expandProperty("padding", "24px"),
};

export const contentWrapperStyles = {
  display: "flex",
  alignItems: "center",
  gridGap: "8px",
};
