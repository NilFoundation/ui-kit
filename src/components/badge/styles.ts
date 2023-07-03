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
    backgroundColor: PRIMITIVE_COLORS.positive500,
    color: PRIMITIVE_COLORS.white,
  },
  [BADGE_COLOR.warning]: {
    backgroundColor: PRIMITIVE_COLORS.warning500,
    color: PRIMITIVE_COLORS.black,
  },
  [BADGE_COLOR.negative]: {
    backgroundColor: PRIMITIVE_COLORS.error500,
    color: PRIMITIVE_COLORS.white,
  },
};

export const badgeLowStyles = {
  [BADGE_COLOR.accent]: {
    backgroundColor: PRIMITIVE_COLORS.primary700,
    color: PRIMITIVE_COLORS.primary200,
  },
  [BADGE_COLOR.positive]: {
    backgroundColor: PRIMITIVE_COLORS.positive700,
    color: PRIMITIVE_COLORS.positive300,
  },
  [BADGE_COLOR.warning]: {
    backgroundColor: PRIMITIVE_COLORS.warning700,
    color: PRIMITIVE_COLORS.warning300,
  },
  [BADGE_COLOR.negative]: {
    backgroundColor: PRIMITIVE_COLORS.error700,
    color: PRIMITIVE_COLORS.error300,
  },
};
