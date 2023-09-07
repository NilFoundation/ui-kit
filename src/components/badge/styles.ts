import { BorderRadiusStyles } from "../../shared/styles/border";
import { expandProperty } from "inline-style-expand-shorthand";
import { BADGE_COLOR } from "./types";
import { PRIMITIVE_COLORS } from "../../shared";

export const badgeBaseStyles = {
  ...BorderRadiusStyles,
  ...expandProperty("border", "none"),
  ...expandProperty("padding", "0 4px"),
  lineHeight: "20px",
};

export const badgeColorModifiedStyles = {
  [BADGE_COLOR.accent]: {
    backgroundColor: PRIMITIVE_COLORS.white,
    color: PRIMITIVE_COLORS.black,
  },
  [BADGE_COLOR.positive]: {
    backgroundColor: PRIMITIVE_COLORS.green500,
    color: PRIMITIVE_COLORS.white,
  },
  [BADGE_COLOR.warning]: {
    backgroundColor: PRIMITIVE_COLORS.yellow500,
    color: PRIMITIVE_COLORS.black,
  },
  [BADGE_COLOR.negative]: {
    backgroundColor: PRIMITIVE_COLORS.red500,
    color: PRIMITIVE_COLORS.white,
  },
};

export const badgeLowStyles = {
  [BADGE_COLOR.accent]: {
    backgroundColor: PRIMITIVE_COLORS.gray700,
    color: PRIMITIVE_COLORS.gray200,
  },
  [BADGE_COLOR.positive]: {
    backgroundColor: PRIMITIVE_COLORS.green700,
    color: PRIMITIVE_COLORS.green300,
  },
  [BADGE_COLOR.warning]: {
    backgroundColor: PRIMITIVE_COLORS.yellow700,
    color: PRIMITIVE_COLORS.yellow300,
  },
  [BADGE_COLOR.negative]: {
    backgroundColor: PRIMITIVE_COLORS.red700,
    color: PRIMITIVE_COLORS.red300,
  },
};
