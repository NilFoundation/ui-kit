import { withoutBorderStyles } from "../../shared/styles/borderStyles";
import { expandProperty } from "inline-style-expand-shorthand";
import { BADGE_COLOR } from "./types";
import { COLORS } from "../../shared";

export const badgeBaseStyles = {
  ...withoutBorderStyles,
  ...expandProperty("border", "none"),
  ...expandProperty("padding", "0 4px"),
  lineHeight: "20px",
};

export const badgeColorModifiedStyles = {
  [BADGE_COLOR.accent]: {
    backgroundColor: COLORS.white,
    color: COLORS.black,
  },
  [BADGE_COLOR.positive]: {
    backgroundColor: COLORS.green500,
    color: COLORS.white,
  },
  [BADGE_COLOR.warning]: {
    backgroundColor: COLORS.yellow500,
    color: COLORS.black,
  },
  [BADGE_COLOR.negative]: {
    backgroundColor: COLORS.red500,
    color: COLORS.white,
  },
};

export const badgeLowStyles = {
  [BADGE_COLOR.accent]: {
    backgroundColor: COLORS.gray700,
    color: COLORS.gray200,
  },
  [BADGE_COLOR.positive]: {
    backgroundColor: COLORS.green700,
    color: COLORS.green300,
  },
  [BADGE_COLOR.warning]: {
    backgroundColor: COLORS.yellow700,
    color: COLORS.yellow300,
  },
  [BADGE_COLOR.negative]: {
    backgroundColor: COLORS.red700,
    color: COLORS.red300,
  },
};
