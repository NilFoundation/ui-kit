import { StyleObject } from "styletron-standard";
import { expandProperty } from "inline-style-expand-shorthand";
import { SPACE } from "../../shared";

const containerStyles: StyleObject = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  ...expandProperty("padding", SPACE[24]),
};

const legend = {
  marginBottom: SPACE[8],
  flexBasis: "56px",
};

export const styles = {
  containerStyles,
  legend,
};
