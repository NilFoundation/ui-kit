import { expandProperty } from "inline-style-expand-shorthand";
import { TAG_KIND } from "./types";
import { PRIMITIVE_COLORS } from "../../shared";
import { WithoutBorderStyles } from "../../shared/styles/border";

export const tagRootBaseStyles = {
  ...WithoutBorderStyles,
  ...expandProperty("padding", "2px 8px"),
  ...expandProperty("borderRadius", "2px"),
  color: PRIMITIVE_COLORS.gray50,
  fontSize: "12px",
  lineHeight: "16px",
};

export const mediumStyles = {
  ...expandProperty("padding", "4px 12px"),
  fontSize: "16px",
  lineHeight: "22px",
  height: "auto",
};

export const tagRootKindModifiedStyles = {
  [TAG_KIND.gray]: {
    backgroundColor: PRIMITIVE_COLORS.gray600,
  },
  [TAG_KIND.blue]: {
    backgroundColor: PRIMITIVE_COLORS.blue600,
  },
  [TAG_KIND.green]: {
    backgroundColor: PRIMITIVE_COLORS.green600,
  },
  [TAG_KIND.yellow]: {
    backgroundColor: PRIMITIVE_COLORS.yellow600,
  },
  [TAG_KIND.purple]: {
    backgroundColor: PRIMITIVE_COLORS.purple600,
  },
  [TAG_KIND.red]: {
    backgroundColor: PRIMITIVE_COLORS.red600,
  },
  [TAG_KIND.white]: {
    backgroundColor: PRIMITIVE_COLORS.gray50,
    color: PRIMITIVE_COLORS.gray900,
  },
};
