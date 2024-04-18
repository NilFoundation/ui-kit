import { COLORS } from "../../shared";
import { withoutMarginStyles } from "../../shared/styles/withoutMarginStyles";
import { expandProperty } from "inline-style-expand-shorthand";

export const tabBaseStyles = {
  ...withoutMarginStyles,
  paddingLeft: "24px",
  paddingRight: "24px",
  color: COLORS.white,

  ":hover": {
    borderColor: COLORS.gray700,
    backgroundColor: COLORS.gray800,
  },
};

export const tabStyles = {
  ...tabBaseStyles,
  borderBottom: `4px solid ${COLORS.gray500}`,
};

export const tabVerticalStyles = {
  ...tabBaseStyles,
  borderRight: `4px solid ${COLORS.gray500}`,
  borderBottom: "none",
};

export const tabActiveStyles = {
  borderColor: `${COLORS.white} !important`,

  ":hover": {
    borderColor: `${COLORS.white} !important`,
  },
};

export const tabDisabledStyles = {
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
  color: COLORS.white,
  ...expandProperty("padding", "24px"),
};

export const contentWrapperStyles = {
  display: "flex",
  alignItems: "center",
  gridGap: "8px",
};
