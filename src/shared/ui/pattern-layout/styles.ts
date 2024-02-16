import { PRIMITIVE_COLORS } from "../..";
import { StyleObject } from "styletron-react";
import { PATTERN_KIND } from "./types";

export const getContainerStyles = (width: string, height: string, kind: PATTERN_KIND): StyleObject => ({
  position: "relative",
  width: width,
  height: height,
  backgroundColor: kind === PATTERN_KIND.pattern800 ? PRIMITIVE_COLORS.gray800 : PRIMITIVE_COLORS.gray700,
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

export const getRowWrapperStyles = (kind: PATTERN_KIND): StyleObject => ({
  width: "100%",
  height: "2px",
  display: "flex",
  boxSizing: "border-box",
  backgroundImage: `linear-gradient(to right, ${
    kind === PATTERN_KIND.pattern800 ? PRIMITIVE_COLORS.gray700 : PRIMITIVE_COLORS.gray900
  } 25%, transparent 25%)`,
  backgroundSize: "8px 4px",
  marginBottom: "2px",
  marginLeft: "6px",

  ":first-child": {
    marginTop: "2px",
  },

  ":nth-child(even)": {
    marginLeft: "2px",
  },
});
