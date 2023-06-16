import { PRIMITIVE_COLORS } from "../../shared";
import { StyleObject } from "styletron-react";

export const getContainerStyles = (width: string, height: string): StyleObject => ({
  position: "relative",
  width: width,
  height: height,
  backgroundColor: PRIMITIVE_COLORS.primary700,
  boxSizing: "border-box",
});

export const dotsWrapperStyles: StyleObject = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  overflow: "hidden",
};

export const dotStyles: StyleObject = {
  width: "8px",
  height: "4px",

  "::before": {
    content: "''",
    display: "block",
    width: "2px",
    height: "2px",
    backgroundColor: PRIMITIVE_COLORS.primary900,
  },
};

export const rowWrapperStyles: StyleObject = {
  width: "calc(100% + 4px)",
  display: "flex",
  paddingLeft: "6px",
  boxSizing: "border-box",

  ":first-child": {
    paddingTop: "2px",
  },

  ":nth-child(even)": {
    paddingLeft: "2px",
  },
};
