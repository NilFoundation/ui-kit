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

export const rowWrapperStyles: StyleObject = {
  width: "100%",
  height: "2px",
  display: "flex",
  boxSizing: "border-box",
  backgroundImage: "linear-gradient(to right, #141414 25%, transparent 25%)",
  backgroundSize: "8px 4px",
  marginBottom: "2px",
  marginLeft: "6px",

  ":first-child": {
    marginTop: "2px",
  },

  ":nth-child(even)": {
    marginLeft: "2px",
  },
};
