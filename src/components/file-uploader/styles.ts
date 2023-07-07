import { StyleObject } from "styletron-react";
import { PRIMITIVE_COLORS } from "../../shared";
import { expandProperty } from "inline-style-expand-shorthand";
import { BorderRadiusStyles } from "../../shared/styles/border";

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
    backgroundColor: PRIMITIVE_COLORS.primary800,
    ...BorderRadiusStyles,
    ...expandProperty("border", `2px solid ${isDragActive ? PRIMITIVE_COLORS.white : PRIMITIVE_COLORS.primary700}`),
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
