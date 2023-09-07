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
  [TAG_KIND.gray]: {
    backgroundColor: PRIMITIVE_COLORS.white,
    color: PRIMITIVE_COLORS.black,

    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.gray100,
    },
  },
  [TAG_KIND.positive]: {
    backgroundColor: PRIMITIVE_COLORS.green500,
    color: PRIMITIVE_COLORS.white,

    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.green500,
    },
  },
  [TAG_KIND.warning]: {
    backgroundColor: PRIMITIVE_COLORS.yellow500,
    color: PRIMITIVE_COLORS.black,

    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.yellow400,
    },
  },
  [TAG_KIND.negative]: {
    backgroundColor: PRIMITIVE_COLORS.red500,
    color: PRIMITIVE_COLORS.white,

    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.red500,
    },
  },
};

export const tagRootDisabledStyles = {
  [TAG_KIND.gray]: {
    ...expandProperty("border", `1px solid ${PRIMITIVE_COLORS.gray500}`),
    backgroundColor: "transparent",
    color: PRIMITIVE_COLORS.gray500,

    ":hover": {
      backgroundColor: "transparent",
      color: PRIMITIVE_COLORS.gray500,
    },
  },
  [TAG_KIND.positive]: {
    ...expandProperty("border", `1px solid ${PRIMITIVE_COLORS.green500}`),
    backgroundColor: "transparent",
    color: PRIMITIVE_COLORS.green500,

    ":hover": {
      backgroundColor: "transparent",
      color: PRIMITIVE_COLORS.green500,
    },
  },
  [TAG_KIND.warning]: {
    ...expandProperty("border", `1px solid ${PRIMITIVE_COLORS.yellow500}`),
    backgroundColor: "transparent",
    color: PRIMITIVE_COLORS.yellow500,

    ":hover": {
      backgroundColor: "transparent",
      color: PRIMITIVE_COLORS.yellow500,
    },
  },
  [TAG_KIND.negative]: {
    ...expandProperty("border", `1px solid ${PRIMITIVE_COLORS.red500}`),
    backgroundColor: "transparent",
    color: PRIMITIVE_COLORS.red500,

    ":hover": {
      backgroundColor: "transparent",
      color: PRIMITIVE_COLORS.red500,
    },
  },
};

export const tagRootLightStyles = {
  [TAG_KIND.gray]: {
    backgroundColor: PRIMITIVE_COLORS.gray700,
    color: PRIMITIVE_COLORS.gray200,

    ":hover": {
      color: PRIMITIVE_COLORS.gray100,
    },
  },
  [TAG_KIND.positive]: {
    backgroundColor: PRIMITIVE_COLORS.green700,
    color: PRIMITIVE_COLORS.green300,

    ":hover": {
      color: PRIMITIVE_COLORS.green200,
    },
  },
  [TAG_KIND.warning]: {
    backgroundColor: PRIMITIVE_COLORS.yellow700,
    color: PRIMITIVE_COLORS.yellow300,

    ":hover": {
      color: PRIMITIVE_COLORS.yellow200,
    },
  },
  [TAG_KIND.negative]: {
    backgroundColor: PRIMITIVE_COLORS.red700,
    color: PRIMITIVE_COLORS.red300,

    ":hover": {
      color: PRIMITIVE_COLORS.red200,
    },
  },
};
