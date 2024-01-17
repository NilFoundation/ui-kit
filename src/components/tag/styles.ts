import { expandProperty } from "inline-style-expand-shorthand";
import { TAG_KIND } from "./types";
import { PRIMITIVE_COLORS } from "../../shared";
import { WithoutBorderStyles } from "../../shared/styles/border";

export const tagRootBaseStyles = {
  ...WithoutBorderStyles,
  fontWeight: 500,
  color: PRIMITIVE_COLORS.gray50,
  fontSize: "12px",
  lineHeight: "16px",
  cursor: "text",
};

export const smallStyles = {
  ...expandProperty("padding", "2px 8px"),
  ...expandProperty("borderRadius", "16px"),
  height: "auto",
};

export const mediumStyles = {
  ...expandProperty("padding", "4px 16px"),
  ...expandProperty("borderRadius", "32px"),
};

export const tagRootFillKindModifiedStyles = {
  [TAG_KIND.gray]: {
    backgroundColor: PRIMITIVE_COLORS.gray600,
  },
  [TAG_KIND.blue]: {
    backgroundColor: PRIMITIVE_COLORS.blue500,
  },
  [TAG_KIND.green]: {
    backgroundColor: PRIMITIVE_COLORS.green500,
  },
  [TAG_KIND.yellow]: {
    backgroundColor: PRIMITIVE_COLORS.yellow500,
  },
  [TAG_KIND.purple]: {
    backgroundColor: PRIMITIVE_COLORS.purple500,
  },
  [TAG_KIND.red]: {
    backgroundColor: PRIMITIVE_COLORS.red500,
  },
  [TAG_KIND.white]: {
    backgroundColor: PRIMITIVE_COLORS.gray50,
    color: PRIMITIVE_COLORS.gray900,
  },
};

export const tagRootFillBaseStyles = {
  backgroundColor: "transparent",
};

export const tagRootKindModifiedStyles = {
  [TAG_KIND.gray]: {
    color: PRIMITIVE_COLORS.gray300,
    ...expandProperty("border", `1px solid ${PRIMITIVE_COLORS.gray300}`),
  },
  [TAG_KIND.blue]: {
    color: PRIMITIVE_COLORS.blue300,
    ...expandProperty("border", `1px solid ${PRIMITIVE_COLORS.blue300}`),
  },
  [TAG_KIND.green]: {
    color: PRIMITIVE_COLORS.green300,
    ...expandProperty("border", `1px solid ${PRIMITIVE_COLORS.green300}`),
  },
  [TAG_KIND.yellow]: {
    color: PRIMITIVE_COLORS.yellow300,
    ...expandProperty("border", `1px solid ${PRIMITIVE_COLORS.yellow300}`),
  },
  [TAG_KIND.purple]: {
    color: PRIMITIVE_COLORS.purple300,
    ...expandProperty("border", `1px solid ${PRIMITIVE_COLORS.purple300}`),
  },
  [TAG_KIND.red]: {
    color: PRIMITIVE_COLORS.red300,
    ...expandProperty("border", `1px solid ${PRIMITIVE_COLORS.red300}`),
  },
  [TAG_KIND.white]: {
    color: PRIMITIVE_COLORS.gray50,
    ...expandProperty("border", `1px solid ${PRIMITIVE_COLORS.gray50}`),
  },
};
