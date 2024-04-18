import { StyleObject } from "styletron-react";
import { COLORS } from "../../shared";
import { expandProperty } from "inline-style-expand-shorthand";

const containerStyles: StyleObject = {
  position: "relative",
  overflow: "hidden",
  background: COLORS.gray900,
  borderRadius: "4px",
  ...expandProperty("padding", "24px"),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  flexWrap: "nowrap",
  gap: "16px",
  ...expandProperty("transition", "background 0.15s"),
  ":hover": {
    background: COLORS.gray800,
  },
};

const codemirrorStyles: StyleObject = {
  minWidth: 0,
  ":focus-within .cm-editor": {
    outline: "none",
  },
};

export const styles = {
  containerStyles,
  codemirrorStyles,
};
