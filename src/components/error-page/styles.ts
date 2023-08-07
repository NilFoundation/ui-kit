import { PRIMITIVE_COLORS } from "../../shared";

const containerStyles = {
  width: "100%",
  height: "100%",
  color: PRIMITIVE_COLORS.white,
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
};

const btnStyles = {
  display: "flex",
  alignItems: "center",
};

const errorCodeStyles = {
  fontSize: "330px",
  lineHeight: "340px",
  letterSpacing: "-0.04em",
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
};

const errorDescriptionStyles = {
  letterSpacing: "-0.01em",
};

export const styles = {
  containerStyles,
  errorCodeStyles,
  iconStyles,
  btnStyles,
  whiteRectangleStyles,
  errorDescriptionStyles,
};
