import { expandProperty } from "inline-style-expand-shorthand";
import { TAG_KIND } from "./types";
import { COLORS } from "../../shared";
import { withoutBorderStyles } from "../../shared/styles/borderStyles";
import { withoutMarginStyles } from "../../shared/styles/withoutMarginStyles";

export const tagRootBaseStyles = {
  ...withoutBorderStyles,
  ...withoutMarginStyles,
  fontWeight: 500,
  color: COLORS.gray50,
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
    backgroundColor: COLORS.gray600,
  },
  [TAG_KIND.blue]: {
    backgroundColor: COLORS.blue500,
  },
  [TAG_KIND.green]: {
    backgroundColor: COLORS.green500,
  },
  [TAG_KIND.yellow]: {
    backgroundColor: COLORS.yellow500,
  },
  [TAG_KIND.purple]: {
    backgroundColor: COLORS.purple500,
  },
  [TAG_KIND.red]: {
    backgroundColor: COLORS.red500,
  },
  [TAG_KIND.white]: {
    backgroundColor: COLORS.gray50,
    color: COLORS.gray900,
  },
};

export const tagRootFillBaseStyles = {
  backgroundColor: "transparent",
};

export const tagRootKindModifiedStyles = {
  [TAG_KIND.gray]: {
    color: COLORS.gray300,
    ...expandProperty("border", `1px solid ${COLORS.gray300}`),
  },
  [TAG_KIND.blue]: {
    color: COLORS.blue300,
    ...expandProperty("border", `1px solid ${COLORS.blue300}`),
  },
  [TAG_KIND.green]: {
    color: COLORS.green300,
    ...expandProperty("border", `1px solid ${COLORS.green300}`),
  },
  [TAG_KIND.yellow]: {
    color: COLORS.yellow300,
    ...expandProperty("border", `1px solid ${COLORS.yellow300}`),
  },
  [TAG_KIND.purple]: {
    color: COLORS.purple300,
    ...expandProperty("border", `1px solid ${COLORS.purple300}`),
  },
  [TAG_KIND.red]: {
    color: COLORS.red300,
    ...expandProperty("border", `1px solid ${COLORS.red300}`),
  },
  [TAG_KIND.white]: {
    color: COLORS.gray50,
    ...expandProperty("border", `1px solid ${COLORS.gray50}`),
  },
};
