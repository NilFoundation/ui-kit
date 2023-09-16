import { StyleObject } from "styletron-react";
import { PRIMITIVE_COLORS } from "../../shared";
import { expandProperty } from "inline-style-expand-shorthand";

const containerStyles: StyleObject = {
  position: "relative",
  overflow: "hidden",
  background: PRIMITIVE_COLORS.gray900,
  ...expandProperty("borderRaduis", "4px"),
  ...expandProperty("padding", "24px"),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "12px",
};

export const styles = {
  containerStyles,
};
