import { StyleObject } from "styletron-react";
import { COLORS } from "../../shared";
import { expandProperty } from "inline-style-expand-shorthand";
import { withoutBorderStyles } from "../../shared/styles/borderStyles";

export const getUploaderContainerStyles = (isDragActive?: boolean): StyleObject => {
  return {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    minHeight: "136px",
    boxSizing: "border-box",
    backgroundColor: COLORS.gray800,
    ...withoutBorderStyles,
    ...expandProperty("border", `2px solid ${isDragActive ? COLORS.gray50 : COLORS.gray700}`),
    ...expandProperty("padding", `${isDragActive ? 0 : "32px 32px 22px 32px"}`),
  };
};

export const uploaderPatternStyles: StyleObject = {
  position: "absolute",
  width: "100%",
  height: "100%",
  left: "0",
  top: "0",
};

export const contentWrapperStyles: StyleObject = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  zIndex: "1",
};
