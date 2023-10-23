import { StyleObject } from "styletron-standard";
import { expandProperty } from "inline-style-expand-shorthand";

const containerStyles: StyleObject = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  ...expandProperty("padding", "24px"),
};

export const styles = {
  containerStyles,
};
