import { StyleObject } from "styletron-react";
import { COLORS } from "../../shared";
import { expandProperty } from "inline-style-expand-shorthand";
import { CODE_FIELD_SIZE } from "./types";

const getContainerStyles = (size: CODE_FIELD_SIZE): StyleObject => ({
  position: "relative",
  overflow: "hidden",
  background: COLORS.gray900,
  borderRadius: "4px",
  ...expandProperty("padding", "24px"),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "nowrap",
  gap: "16px",
  ...expandProperty("transition", "background 0.15s"),
  ":hover": {
    background: COLORS.gray800,
  },
  fontSize: size === CODE_FIELD_SIZE.small ? "14px" : "16px",
});

const codemirrorStyles: StyleObject = {
  minWidth: 0,
  ":focus-within .cm-editor": {
    outline: "none",
  },
};

export const styles = {
  getContainerStyles,
  codemirrorStyles,
};
