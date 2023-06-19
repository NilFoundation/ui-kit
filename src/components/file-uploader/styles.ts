import { StyleObject } from "styletron-react";
import { PRIMITIVE_COLORS } from "../../shared";

export const getUploaderContainerStyles = (isDragActive?: boolean): StyleObject => {
  return {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "370px",
    minHeight: "136px",
    border: `2px solid ${isDragActive ? PRIMITIVE_COLORS.white : PRIMITIVE_COLORS.primary700}`,
    borderRadius: "2px",
    backgroundColor: PRIMITIVE_COLORS.primary800,
    padding: "32px 32px 22px 32px",
    boxSizing: "border-box",
  };
};

export const uploaderPatternStyles: StyleObject = {
  position: "absolute",
  width: "100%",
  height: "100%",
  left: 0,
  top: 0,
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
