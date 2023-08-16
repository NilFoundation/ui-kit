import { styled } from "styletron-react";
import { PRIMITIVE_COLORS } from "../../../shared";

const blockStyles = {
  background: PRIMITIVE_COLORS.primary800,
  display: "flex",
  flexDirection: "column",
  flexGrow: "1",
} as const;

const Block = styled("div", blockStyles);

export default Block;
