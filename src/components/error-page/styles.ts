import { PRIMITIVE_COLORS } from "../../shared";
import { svgInlineDotsPattern } from "../../shared/theme/pattern";
import { StyleObject } from "styletron-standard";

const containerStyles = {
  width: "100%",
  height: "100%",
  color: PRIMITIVE_COLORS.white,
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
};

const colStyles = {
  display: "flex",
  flexDirection: "column" as StyleObject["flexDirection"],
};

const btnStyles = {
  display: "flex",
  alignItems: "center",
};

const errorCodeStyles = {
  gridColumnStart: "2",
  gridColumnEnd: "4",
};

const patternStyles = {
  width: "100%",
  height: "100%",
  background: `url(${svgInlineDotsPattern}), repeat`,
};

const iconStyles = {
  width: "18px",
  height: "14px",
  marginRight: "6px",
  transform: "rotate(270deg)",
};

const whiteRectangleStyles = {
  width: "100%",
  height: "30px",
  flexShrink: 0,
  background: PRIMITIVE_COLORS.white,
  marginTop: "auto",
};

const errorDescriptionStyles = {
  gridColumnStart: "4",
  gridColumnEnd: "5",
};

export const styles = {
  containerStyles,
  errorCodeStyles,
  iconStyles,
  btnStyles,
  whiteRectangleStyles,
  errorDescriptionStyles,
  colStyles,
  patternStyles,
};
