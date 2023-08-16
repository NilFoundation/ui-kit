import { styled } from "styletron-react";
import { PRIMITIVE_COLORS } from "../../../shared";

const whiteRectangleStyles = {
  width: "100%",
  height: "30px",
  flexShrink: 0,
  background: PRIMITIVE_COLORS.white,
} as const;

const WhiteRect = styled("div", whiteRectangleStyles);

export default WhiteRect;
