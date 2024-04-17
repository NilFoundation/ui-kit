import { styled } from "styletron-react";
import { COLORS } from "../../../shared";

const whiteRectangleStyles = {
  width: "100%",
  height: "30px",
  flexShrink: 0,
  background: COLORS.white,
} as const;

const WhiteRect = styled("div", whiteRectangleStyles);

export default WhiteRect;
