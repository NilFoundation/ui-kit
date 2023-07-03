import { BorderRadiusStyles } from "../../shared/styles/border";
import { expandProperty } from "inline-style-expand-shorthand";
import { TAG_KIND } from "./types";
import { PRIMITIVE_COLORS } from "../../shared";

export const tagRootBaseStyles = {
  ...BorderRadiusStyles,
  ...expandProperty("border", "none"),
  ...expandProperty("padding", "4px"),
  ...expandProperty("margin", "2px"),
};

export const tagRootKindModifiedStyles = {
  [TAG_KIND.primary]: {
    backgroundColor: PRIMITIVE_COLORS.white,
    color: PRIMITIVE_COLORS.black,

    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.primary100,
    },
  },
  [TAG_KIND.positive]: {
    backgroundColor: PRIMITIVE_COLORS.positive500,
    color: PRIMITIVE_COLORS.white,

    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.positive500,
    },
  },
  [TAG_KIND.warning]: {
    backgroundColor: PRIMITIVE_COLORS.warning500,
    color: PRIMITIVE_COLORS.black,

    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.warning400,
    },
  },
  [TAG_KIND.negative]: {
    backgroundColor: PRIMITIVE_COLORS.error500,
    color: PRIMITIVE_COLORS.white,

    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.error500,
    },
  },
};

export const tagRootDisabledStyles = {
  [TAG_KIND.primary]: {
    ...expandProperty("border", `1px solid ${PRIMITIVE_COLORS.primary500}`),
    backgroundColor: "transparent",
    color: PRIMITIVE_COLORS.primary500,

    ":hover": {
      backgroundColor: "transparent",
      color: PRIMITIVE_COLORS.primary500,
    },
  },
  [TAG_KIND.positive]: {
    ...expandProperty("border", `1px solid ${PRIMITIVE_COLORS.positive500}`),
    backgroundColor: "transparent",
    color: PRIMITIVE_COLORS.positive500,

    ":hover": {
      backgroundColor: "transparent",
      color: PRIMITIVE_COLORS.positive500,
    },
  },
  [TAG_KIND.warning]: {
    ...expandProperty("border", `1px solid ${PRIMITIVE_COLORS.warning500}`),
    backgroundColor: "transparent",
    color: PRIMITIVE_COLORS.warning500,

    ":hover": {
      backgroundColor: "transparent",
      color: PRIMITIVE_COLORS.warning500,
    },
  },
  [TAG_KIND.negative]: {
    ...expandProperty("border", `1px solid ${PRIMITIVE_COLORS.error500}`),
    backgroundColor: "transparent",
    color: PRIMITIVE_COLORS.error500,

    ":hover": {
      backgroundColor: "transparent",
      color: PRIMITIVE_COLORS.error500,
    },
  },
};

export const tagRootLightStyles = {
  [TAG_KIND.primary]: {
    backgroundColor: PRIMITIVE_COLORS.primary700,
    color: PRIMITIVE_COLORS.primary200,

    ":hover": {
      color: PRIMITIVE_COLORS.primary100,
    },
  },
  [TAG_KIND.positive]: {
    backgroundColor: PRIMITIVE_COLORS.positive700,
    color: PRIMITIVE_COLORS.positive300,

    ":hover": {
      color: PRIMITIVE_COLORS.positive200,
    },
  },
  [TAG_KIND.warning]: {
    backgroundColor: PRIMITIVE_COLORS.warning700,
    color: PRIMITIVE_COLORS.warning300,

    ":hover": {
      color: PRIMITIVE_COLORS.warning200,
    },
  },
  [TAG_KIND.negative]: {
    backgroundColor: PRIMITIVE_COLORS.error700,
    color: PRIMITIVE_COLORS.error300,

    ":hover": {
      color: PRIMITIVE_COLORS.error200,
    },
  },
};
